// Interactive 3D map of the building: tap a wing, or type a door number (wing.floor.door)
// and the model shows the wing and lifts the storeys above that floor.
import {
  WebGLRenderer, Scene, PerspectiveCamera, Color, Fog, HemisphereLight, DirectionalLight,
  Mesh, BufferGeometry, MeshLambertMaterial, MeshBasicMaterial, CanvasTexture, DataArrayTexture,
  RepeatWrapping, ClampToEdgeWrapping, LinearFilter, LinearMipmapLinearFilter, SRGBColorSpace, PlaneGeometry,
  Vector3, Vector2, Raycaster, InstancedMesh, IcosahedronGeometry, CylinderGeometry, Matrix4, Quaternion,
  PCFShadowMap, NeutralToneMapping, TOUCH, MOUSE,
} from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { FLOORS, ENTRANCES, NORTH, STREETS, RIVER_BANK, toWorld } from './geometry.js';
import { facadeLayers, roofCanvas, FACADE_LAYERS } from './textures.js';
import { buildModel, recolor, createMaterials, rayBox, PARTS, LEVELS } from './model.js';
import { buildGround, groundMaterial } from './ground.js';
import { parseDoor, doorHash } from './door.js';

// a washing machine, for the laundry rooms (declared before start(): a link straight to a
// laundry room draws its card while the page is still starting up)
const WASHER = '<rect x="4.5" y="3" width="15" height="18" rx="2.5"/><path d="M4.5 7.5h15"/><circle cx="12" cy="14" r="4.25"/><path d="M7.5 5.25h.01M10.5 5.25h.01"/>';
const washerIcon = () => `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${WASHER}</svg>`;

const root = document.getElementById('building-3d');
if (root) start(root);

function start(root) {
  const data = JSON.parse(root.querySelector('#b3d-data').textContent);
  const ui = createUI(root, data);
  let viewer = null;
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  try {
    viewer = createViewer(root, data, ui, reduceMotion);
    root.dataset.state = 'ready';
  } catch (err) {
    console.warn('3D map unavailable:', err);
    root.dataset.state = 'fallback';
  }
  ui.attach(viewer);
  ui.readHash(true);
  window.addEventListener('hashchange', () => ui.readHash(false));
}

// ---------------------------------------------------------------- UI
function createUI(root, data) {
  const wings = new Map(data.wings.map((w) => [w.n, w]));
  const entrances = new Map(data.entrances.map((e) => [e.id, e]));
  const laundry = new Map((data.laundry || []).map((l) => [l.entrance, l])); // by entrance id
  const form = root.querySelector('.b3d-finder');
  const input = form.querySelector('input');
  const help = form.querySelector('.b3d-help');
  const defaultHelp = help.innerHTML;
  const chipsBox = root.querySelector('.b3d-wings');
  const card = root.querySelector('.b3d-card');
  const emptyCard = card.innerHTML;
  const stepper = root.querySelector('.b3d-floors');
  const stepsBox = stepper.querySelector('.b3d-floors-steps');
  data.floors.forEach((f) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'b3d-step';
    b.dataset.floor = f.n;
    b.textContent = f.n;
    b.setAttribute('aria-label', `${f.en} (${f.de})`);
    b.setAttribute('aria-pressed', 'false');
    b.addEventListener('click', () => {
      if (current.wing == null) return;
      select({ wing: current.wing, floor: current.floor === f.n ? null : f.n, door: null }, 'stepper');
    });
    stepsBox.appendChild(b);
  });
  function renderStepper(sel) {
    stepper.hidden = sel.wing == null;
    if (sel.wing == null) return;
    const w = wings.get(sel.wing);
    stepper.style.setProperty('--swatch', w.color);
    stepper.style.setProperty('--plate-ink', w.ink);
    stepsBox.querySelectorAll('.b3d-step').forEach((b) => {
      const n = Number(b.dataset.floor);
      b.classList.toggle('is-current', sel.floor === n);
      b.classList.toggle('is-below', sel.floor != null && n < sel.floor);
      b.classList.toggle('is-above', sel.floor != null && n > sel.floor);
      b.setAttribute('aria-pressed', String(sel.floor === n));
    });
  }
  let viewer = null;
  let current = { wing: null, floor: null, door: null, laundry: null };

  data.wings.forEach((w) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'b3d-chip';
    b.dataset.wing = w.n;
    b.style.setProperty('--swatch', w.color);
    b.style.setProperty('--plate-ink', w.ink);
    b.setAttribute('aria-pressed', 'false');
    b.innerHTML = `<span class="b3d-chip-n">${w.n}</span><span class="sr-only">Wing ${w.n}</span>`;
    b.addEventListener('click', () => select({ wing: current.wing === w.n && current.floor == null ? null : w.n, floor: null, door: null }, 'chip'));
    chipsBox.appendChild(b);
  });

  // the laundry room buttons under the wing row (drawn by the page, so they read without JavaScript)
  const places = [...root.querySelectorAll('.b3d-place')];
  places.forEach((b) => b.addEventListener('click', () => select(current.laundry === b.dataset.laundry ? { wing: null } : { laundry: b.dataset.laundry }, 'chip')));

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const res = parseDoor(input.value, data.floors.length - 1);
    if (res.error) {
      help.textContent = res.error;
      form.classList.add('has-error');
      return;
    }
    form.classList.remove('has-error');
    help.innerHTML = defaultHelp;
    input.blur();
    select(res, 'finder');
  });
  input.addEventListener('input', () => {
    if (form.classList.contains('has-error')) { form.classList.remove('has-error'); help.innerHTML = defaultHelp; }
  });

  function ordinal(n) { return data.floors[n] ? data.floors[n].en : `Floor ${n}`; }

  function renderLaundry(l) {
    const where = entrances.get(l.entrance).label;
    card.dataset.state = 'laundry';
    const facts = [
      ['Washing machines', l.washers],
      ['Dryers', l.dryers],
      ['Vending machines', l.vending && l.vending.length ? l.vending.join(' · ') : 'None'],
    ];
    card.innerHTML = `
      <div class="sign" aria-hidden="true"><span class="sign-seg is-laundry"><b>${washerIcon()}</b><em>Laundry</em></span></div>
      <h3 class="b3d-card-title">Laundry room</h3>
      <p class="b3d-card-where">At ${where}</p>
      <ul class="facts panel">${facts.map(([k, v]) => `<li><div class="fact"><span class="fact-k">${k}</span><span class="fact-v">${v}</span></div></li>`).join('')}</ul>
      <div class="b3d-card-actions">
        <button type="button" class="btn b3d-share">${navigator.share ? 'Share this location' : 'Copy link'}</button>
        <button type="button" class="btn btn-quiet b3d-clear">Clear</button>
      </div>`;
    card.querySelector('.b3d-clear').addEventListener('click', () => select({ wing: null }, 'clear'));
    card.querySelector('.b3d-share').addEventListener('click', share);
  }

  function renderCard(sel) {
    if (sel.laundry) { renderLaundry(laundry.get(sel.laundry)); return; }
    if (sel.wing == null) { card.innerHTML = emptyCard; card.dataset.state = 'empty'; return; }
    const w = wings.get(sel.wing);
    const ents = data.entrances.filter((e) => (e.wings || []).includes(sel.wing));
    const floor = sel.floor != null ? data.floors[sel.floor] : null;
    card.dataset.state = 'wing';
    card.style.setProperty('--swatch', w.color);
    const wingSeg = `<span class="sign-seg is-wing" style="--swatch:${w.color};--plate-ink:${w.ink}"><b>${w.n}</b><em>Wing</em></span>`;
    const sign = sel.floor != null
      ? `${wingSeg}<span class="sign-seg"><b>${sel.floor}</b><em>Floor</em></span><span class="sign-seg"><b>${sel.door != null ? sel.door : '–'}</b><em>Door</em></span>`
      : wingSeg;
    const reading = [`Wing ${w.n}`, floor ? floor.en : null, sel.door != null ? `door ${sel.door}` : null].filter(Boolean).join(', ');
    const facts = [
      floor ? ['Floor', `${floor.en} · ${floor.de}`] : null,
      ...ents.map((e) => ['Street entrance', e.label]),
    ].filter(Boolean);
    card.innerHTML = `
      <div class="sign" aria-hidden="true">${sign}</div>
      <h3 class="b3d-card-title">${reading}</h3>
      <p class="b3d-card-where">${w.where}</p>
      ${facts.length ? `<ul class="facts panel">${facts.map(([k, v]) => `<li><div class="fact"><span class="fact-k">${k}</span><span class="fact-v">${v}</span></div></li>`).join('')}</ul>` : ''}
      ${sel.floorNote ? `<p class="b3d-card-note">${sel.floorNote}</p>` : ''}
      ${sel.floor == null ? `<p class="b3d-card-note">Pick a floor below the model to see where it is.</p>` : ''}
      <div class="b3d-card-actions">
        <button type="button" class="btn b3d-share">${navigator.share ? 'Share this location' : 'Copy link'}</button>
        <button type="button" class="btn btn-quiet b3d-clear">Clear</button>
      </div>
      <p class="b3d-swatch-note"><span class="b3d-swatch" aria-hidden="true"></span>Wing colour: ${w.dye}</p>`;
    card.querySelector('.b3d-clear').addEventListener('click', () => select({ wing: null }, 'clear'));
    card.querySelector('.b3d-share').addEventListener('click', share);
  }

  async function share(e) {
    const btn = e.currentTarget;
    const url = location.href;
    const w = wings.get(current.wing);
    const text = current.laundry ? `Laundry room at ${entrances.get(current.laundry).label}`
      : current.floor != null ? `Wing ${w.n}, ${ordinal(current.floor)}${current.door != null ? `, door ${current.door}` : ''}` : `Wing ${w.n}`;
    if (navigator.share) {
      try { await navigator.share({ title: 'Wasserstadt Spindlersfeld', text, url }); return; } catch (err) { if (err && err.name === 'AbortError') return; }
    }
    try {
      await navigator.clipboard.writeText(url);
      btn.textContent = 'Link copied';
    } catch {
      const field = document.createElement('input');
      field.value = url; field.readOnly = true; field.className = 'b3d-copyfield';
      btn.replaceWith(field);
      field.select();
    }
  }

  function select(sel, source) {
    current = sel.laundry && laundry.has(sel.laundry)
      ? { wing: null, floor: null, door: null, laundry: sel.laundry }
      : { wing: sel.wing ?? null, floor: sel.wing != null ? sel.floor ?? null : null, door: sel.wing != null ? sel.door ?? null : null, floorNote: sel.floorNote, laundry: null };
    chipsBox.querySelectorAll('.b3d-chip').forEach((c) => c.setAttribute('aria-pressed', String(Number(c.dataset.wing) === current.wing)));
    places.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.laundry === current.laundry)));
    renderCard(current);
    renderStepper(current);
    if (source !== 'hash') {
      const hash = current.laundry ? `#laundry-${current.laundry}` : current.wing != null ? `#${doorHash(current)}` : '';
      history.replaceState(null, '', hash || location.pathname + location.search);
    }
    if (source === 'finder') input.value = current.wing == null ? '' : hashLabel(current);
    if (source === 'hash') input.value = current.floor != null ? hashLabel(current) : '';
    if (viewer) {
      viewer.select(current, source);
      if (source === 'finder' || source === 'chip') {
        const stage = root.querySelector('.b3d-stage');
        const r = stage.getBoundingClientRect();
        if (r.top < 0 || r.bottom > window.innerHeight) stage.scrollIntoView({ block: 'start', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
      }
    }
    else if (source === 'finder' || source === 'chip') card.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }

  function hashLabel(c) { return c.floor != null ? `${c.wing}.${c.floor}${c.door != null ? `.${c.door}` : ''}` : String(c.wing); }

  return {
    attach(v) { viewer = v; },
    select,
    readHash() {
      const h = decodeURIComponent(location.hash.slice(1));
      if (!h) return;
      const room = /^laundry-([a-z0-9]+)$/i.exec(h);
      if (room) { if (laundry.has(room[1])) select({ laundry: room[1] }, 'hash'); return; }
      const m = /^wing-(\d)$/.exec(h);
      const res = m ? { wing: Number(m[1]), floor: null, door: null } : parseDoor(h, data.floors.length - 1);
      if (!res.error && res.wing) select(res, 'hash');
    },
    entranceLabel: (id) => (entrances.get(id) || {}).label || '',
    wing: (n) => wings.get(n),
  };
}

// ---------------------------------------------------------------- Viewer
function webgl2() {
  try { return !!document.createElement('canvas').getContext('webgl2'); } catch { return false; }
}

function createViewer(root, data, ui, reduceMotion) {
  if (!webgl2()) throw new Error('WebGL2 not available');
  const stage = root.querySelector('.b3d-stage');
  const canvas = stage.querySelector('canvas');
  const labelsBox = stage.querySelector('.b3d-labels');
  const compass = stage.querySelector('.b3d-compass-needle');
  const small = Math.min(window.innerWidth, window.innerHeight) < 700;
  // a CSS colour as 0-1 sRGB components, for the shader colour uniforms
  const srgb = (css) => { const o = {}; new Color(css).getRGB(o, SRGBColorSpace); return new Vector3(o.r, o.g, o.b); };

  const renderer = new WebGLRenderer({ canvas, antialias: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFShadowMap;
  renderer.shadowMap.autoUpdate = false;
  renderer.toneMapping = NeutralToneMapping;
  const maxAniso = Math.min(8, renderer.capabilities.getMaxAnisotropy());

  const scene = new Scene();
  const camera = new PerspectiveCamera(20, 1, 10, 4000); // narrow lens: close to an isometric model view

  // --- lights: warm daylight from the south-west
  const hemi = new HemisphereLight(0xffffff, 0xe9dfd2, 2.0);
  scene.add(hemi);
  const sun = new DirectionalLight(0xfff3e4, 1.7);
  sun.position.set(-130, 210, 150);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  Object.assign(sun.shadow.camera, { left: -160, right: 160, top: 160, bottom: -160, near: 50, far: 600 });
  sun.shadow.bias = -0.0004;
  sun.shadow.normalBias = 0.6;
  sun.shadow.radius = 3; // soften the shadow edges
  if ('intensity' in sun.shadow) sun.shadow.intensity = 0.5; // soft, light shadows
  scene.add(sun);
  scene.add(sun.target);

  // --- textures: every facade strip in one texture array, drawn larger on big screens
  const arrayTexture = ({ data: pixels, width, height, depth }) => {
    const t = new DataArrayTexture(pixels, width, height, depth);
    t.colorSpace = SRGBColorSpace;
    t.wrapS = RepeatWrapping;
    t.wrapT = ClampToEdgeWrapping;
    t.minFilter = LinearMipmapLinearFilter;
    t.magFilter = LinearFilter;
    t.generateMipmaps = true;
    t.anisotropy = maxAniso;
    t.needsUpdate = true;
    return t;
  };
  const facadeScale = small ? 1 : 2;
  const facadeTex = arrayTexture(facadeLayers(false, facadeScale));
  let glowTex = null; // the lit windows are drawn the first time the page goes dark
  const noGlow = arrayTexture({ data: new Uint8Array(4 * FACADE_LAYERS.length), width: 1, height: 1, depth: FACADE_LAYERS.length });
  const roofTex = new CanvasTexture(roofCanvas(false));
  roofTex.colorSpace = SRGBColorSpace;
  roofTex.wrapS = roofTex.wrapT = RepeatWrapping;
  roofTex.anisotropy = maxAniso;

  // --- the building: one merged mesh (see model.js), plus a see-through copy for lifted storeys
  const model = buildModel();
  const { boxes, wingBoxes } = model;
  const mats = createMaterials({ facade: facadeTex, glow: noGlow, roof: roofTex });
  data.wings.forEach((w) => mats.uniforms.uWingColor.value[w.n].copy(srgb(w.color)));
  const building = new Mesh(model.geometry, mats.solid);
  building.castShadow = true;
  building.receiveShadow = true;
  building.customDepthMaterial = mats.depth;
  const ghost = new Mesh(model.geometry, mats.ghost);
  ghost.receiveShadow = true;
  ghost.visible = false;
  building.frustumCulled = ghost.frustumCulled = false; // lifted storeys float outside the bounding sphere
  scene.add(building, ghost);

  // --- ground, trees
  const groundMat = groundMaterial();
  const ground = new Mesh(new BufferGeometry(), groundMat.material);
  ground.receiveShadow = true;
  scene.add(ground);
  // a wide plane in the page colour, so the ground's faded edge melts into the background
  const baseGround = new Mesh(new PlaneGeometry(6000, 6000), new MeshBasicMaterial());
  baseGround.rotation.x = -Math.PI / 2;
  baseGround.position.y = -0.08;
  scene.add(baseGround);

  const treeSpots = [];
  for (let v = 300; v <= 780; v += 24) { treeSpots.push([90, v]); if (v < 320 || v > 672) treeSpots.push([119, v]); }
  for (let u = 140; u <= 500; u += 26) treeSpots.push([u, 706]);
  for (let u = 130; u <= 490; u += 30) treeSpots.push([u, 300]);
  [[200, 400], [262, 455], [362, 404], [420, 460], [205, 560], [270, 590], [350, 548], [430, 600], [240, 520]].forEach((p) => treeSpots.push(p));
  for (let v = 120; v <= 900; v += 19) treeSpots.push([548 + ((v * 37) % 40), v]);
  const canopy = new InstancedMesh(new IcosahedronGeometry(3.0, 2), new MeshLambertMaterial(), treeSpots.length);
  const trunks = new InstancedMesh(new CylinderGeometry(0.22, 0.3, 3.2, 6), new MeshLambertMaterial(), treeSpots.length);
  const mtx = new Matrix4(), q = new Quaternion(), sc = new Vector3(), ps = new Vector3();
  const leaf = new Color();
  treeSpots.forEach(([u, v], i) => {
    const [x, z] = toWorld(u, v);
    const s = 0.75 + ((u * 13 + v * 7) % 10) / 20;
    mtx.compose(ps.set(x, 3.4 + 2.6 * s, z), q.identity(), sc.set(s, s, s));
    canopy.setMatrixAt(i, mtx);
    mtx.compose(ps.set(x, 1.5, z), q.identity(), sc.set(1, 1, 1));
    trunks.setMatrixAt(i, mtx);
    canopy.setColorAt(i, leaf.setHSL(0.26 + ((u + v) % 7) * 0.008, 0.28, 0.62 - ((u * 3 + v) % 5) * 0.025));
  });
  canopy.castShadow = true; trunks.castShadow = true;
  scene.add(canopy, trunks);

  // --- theme
  const MODEL_COLORS = {
    day: { plate: '#efe7dc', cornice: '#f1e8dc', cap: '#8d9694', roofbox: '#ece6dd', roofboxTop: '#c9c3b9', clay: '#ebe4d9', trunk: '#9c8670' },
    night: { plate: '#2a2521', cornice: '#3a332d', cap: '#2b2f2f', roofbox: '#302b27', roofboxTop: '#24211e', clay: '#221e1b', trunk: '#3b332b' },
  };
  let dark = null;
  const sceneBtn = stage.querySelector('.b3d-scene');
  function siteIsDark() {
    const t = document.documentElement.dataset.theme;
    return t === 'dark' ? true : t === 'light' ? false : matchMedia('(prefers-color-scheme: dark)').matches;
  }
  // the map follows the site unless its own day/night button says otherwise (data-scene)
  function readTheme() {
    const s = stage.dataset.scene;
    return s === 'night' ? true : s === 'day' ? false : siteIsDark();
  }
  function applyTheme() {
    const isDark = readTheme();
    if (sceneBtn) sceneBtn.setAttribute('aria-pressed', String(isDark));
    if (isDark === dark) return;
    dark = isDark;
    const C = MODEL_COLORS[dark ? 'night' : 'day'];
    const bg = getComputedStyle(stage).getPropertyValue('--b3d-bg').trim() || (dark ? '#141110' : '#ece5da');
    scene.background = new Color(bg);
    scene.fog = new Fog(bg, 700, 1500);
    baseGround.material.color.set(bg);
    groundMat.uBg.value.copy(srgb(bg));
    ground.geometry.dispose();
    ground.geometry = buildGround(dark ? 'night' : 'day');
    // night is moonlight: a soft cool sky and a weak moon, so the street plan still reads
    hemi.color.set(dark ? 0x7a7c8c : 0xffffff);
    hemi.groundColor.set(dark ? 0x241f1b : 0xe9dfd2);
    hemi.intensity = dark ? 2.4 : 2.0;
    sun.color.set(dark ? 0xc8d0e0 : 0xfff3e4);
    sun.intensity = dark ? 1.0 : 1.7;
    if (dark && !glowTex) glowTex = arrayTexture(facadeLayers(true, facadeScale / 2));
    mats.uniforms.uGlowMap.value = dark ? glowTex : noGlow;
    mats.uniforms.uGlow.value = dark ? 1.25 : 0;
    mats.uniforms.uClay.value.copy(srgb(C.clay));
    recolor(model.geometry, model.roles, C);
    canopy.material.color.set(dark ? 0x4a5a46 : 0xffffff);
    trunks.material.color.set(C.trunk);
    roofTex.image = roofCanvas(dark);
    roofTex.needsUpdate = true;
    renderer.shadowMap.needsUpdate = true;
    requestRender();
  }

  // --- camera + controls
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.dampingFactor = 0.09;
  controls.enablePan = !small;
  controls.screenSpacePanning = false;
  controls.minDistance = 70;
  controls.maxDistance = 900;
  controls.minPolarAngle = 0.05;
  controls.maxPolarAngle = 1.32;
  controls.rotateSpeed = 0.7;
  controls.touches = { ONE: TOUCH.ROTATE, TWO: TOUCH.DOLLY_ROTATE };
  controls.mouseButtons = { LEFT: MOUSE.ROTATE, MIDDLE: MOUSE.DOLLY, RIGHT: MOUSE.PAN };
  // a finger on the model turns the model and never scrolls the page; the page scrolls
  // from anywhere outside it
  canvas.style.touchAction = 'none';

  // scroll-wheel zoom only with ctrl/⌘ (or a trackpad pinch), so the page still scrolls over the map
  const hint = stage.querySelector('.b3d-hint');
  let hintTimer = 0;
  stage.addEventListener('wheel', (e) => {
    if (e.ctrlKey || e.metaKey) return;
    e.stopImmediatePropagation();
    hint.dataset.show = 'wheel';
    clearTimeout(hintTimer);
    hintTimer = setTimeout(() => { hint.dataset.show = ''; }, 1400);
  }, { capture: true, passive: true });

  function fitDistance(radius) {
    const vfov = (camera.fov * Math.PI) / 180;
    const hfov = 2 * Math.atan(Math.tan(vfov / 2) * camera.aspect);
    return radius / Math.sin(Math.min(vfov, hfov) / 2);
  }
  const FACING = { n: Math.PI, s: 0, w: -Math.PI / 2, e: Math.PI / 2 }; // camera direction in front of a facade
  function viewFor(sel) {
    const door = sel.laundry && ENTRANCES.find((e) => e.id === sel.laundry);
    if (door) { // a laundry room: its entrance, seen from the street at an angle
      const [x, z] = toWorld(door.at[0], door.at[1]);
      return { target: new Vector3(x, 4, z), dist: 175, polar: 0.95, azim: FACING[door.face] + 0.5, shift: cardShift() };
    }
    if (sel.wing == null) {
      return { target: new Vector3(0, 3, 4), dist: fitDistance(112) * 0.93, polar: 0.98, azim: -1.1 };
    }
    const b = wingBoxes.get(sel.wing);
    const cx = (b.x0 + b.x1) / 2, cz = (b.z0 + b.z1) / 2;
    const radius = Math.hypot(b.x1 - b.x0, b.z1 - b.z0) / 2 + 14;
    let dir = Math.atan2(cx, cz); // look at the wing from outside the ring
    let polar = 1.0;
    if (sel.wing === 5) { dir = Math.atan2(-0.35, 1); polar = 0.86; }
    const yTarget = sel.floor != null ? FLOORS[Math.min(sel.floor, 4)].y + 2 : 6;
    return { target: new Vector3(cx, yTarget, cz), dist: Math.max(200, fitDistance(radius) * 0.95), polar, azim: dir + 0.42, shift: cardShift() };
  }
  // on wide screens the result card floats over the right of the model: frame the wing in the space beside it
  const card = root.querySelector('.b3d-card');
  function cardShift() {
    if (card.dataset.state === 'empty') return 0;
    const c = card.getBoundingClientRect(), s = stage.getBoundingClientRect();
    if (!c.width || c.left < s.left + s.width / 2 || c.top > s.bottom || c.bottom < s.top) return 0;
    return (s.right - c.left) / 2; // pixels to move the subject left
  }
  function placeFor(v) {
    const p = new Vector3(Math.sin(v.polar) * Math.sin(v.azim), Math.cos(v.polar), Math.sin(v.polar) * Math.cos(v.azim));
    const target = v.target.clone();
    const shift = v.shift || 0;
    if (shift) {
      const h = stage.clientHeight || 1;
      const metres = (shift * 2 * v.dist * Math.tan((camera.fov * Math.PI) / 360)) / h;
      const right = new Vector3().crossVectors(p.clone().negate(), new Vector3(0, 1, 0)).normalize();
      target.addScaledVector(right, metres);
    }
    return { target, position: target.clone().add(p.multiplyScalar(v.dist)) };
  }

  // --- tweens
  const tweens = new Set();
  const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  function tween(duration, onUpdate, onDone) {
    const tw = { t0: performance.now(), duration: reduceMotion ? 0 : duration, onUpdate, onDone };
    tweens.add(tw);
    requestRender();
    return tw;
  }
  function stepTweens(now) {
    tweens.forEach((tw) => {
      const k = tw.duration ? Math.min(1, (now - tw.t0) / tw.duration) : 1;
      tw.onUpdate(ease(k), k);
      if (k >= 1) { tweens.delete(tw); tw.onDone && tw.onDone(); }
    });
    return tweens.size > 0;
  }
  let flight = null;
  function flyTo(view, duration = 1200) {
    const to = placeFor(view);
    streetLabels.forEach((st) => { st.cur = null; }); // a new view starts from the usual spots
    const fromP = camera.position.clone(), fromT = controls.target.clone();
    if (flight) tweens.delete(flight);
    flight = tween(duration, (e) => {
      camera.position.lerpVectors(fromP, to.position, e);
      controls.target.lerpVectors(fromT, to.target, e);
    }, () => { flight = null; });
  }
  controls.addEventListener('start', () => { if (flight) { tweens.delete(flight); flight = null; } });

  // --- selection state, animated per part (wing × storey) through the uPart uniform array
  const LIFT = 8;
  let selection = { wing: null, floor: null, laundry: null };
  let anim = null;
  const state = Array.from({ length: PARTS }, () => ({ lift: 0, fade: 0, tint: 0, dim: 0, pastel: false }));
  function targetFor(i) {
    const wing = Math.floor(i / LEVELS), level = i % LEVELS;
    const any = selection.wing != null;
    const mine = any && wing === selection.wing;
    const hasFloor = mine && selection.floor != null;
    const tint = !mine ? 0 : hasFloor ? (level === selection.floor ? 0.62 : level < selection.floor ? 0.35 : 0) : 0.55;
    return {
      dim: any && !mine ? (wing ? 0.62 : 0.7) : 0,
      lift: hasFloor && level > selection.floor ? LIFT : 0,
      fade: hasFloor && level > selection.floor ? 1 : 0,
      tint,
    };
  }
  function writeParts() {
    const u = mats.uniforms.uPart.value;
    let fading = false;
    state.forEach((s, i) => {
      u[i * 4] = s.lift; u[i * 4 + 1] = s.fade; u[i * 4 + 2] = s.pastel ? -s.tint : s.tint; u[i * 4 + 3] = s.dim;
      if (s.fade > 0.001) fading = true;
    });
    ghost.visible = fading;
  }
  function applySelection() {
    const from = state.map((s) => ({ ...s }));
    const to = state.map((_, i) => targetFor(i));
    // the chosen floor gets the full wing colour, the rest of the wing a pastel of it
    state.forEach((s, i) => { if (to[i].tint) s.pastel = to[i].tint < 0.5; });
    if (anim) tweens.delete(anim);
    anim = tween(700, (e) => {
      state.forEach((s, i) => {
        const a = from[i], b = to[i];
        s.dim = a.dim + (b.dim - a.dim) * e;
        s.lift = a.lift + (b.lift - a.lift) * e;
        s.fade = a.fade + (b.fade - a.fade) * e;
        s.tint = a.tint + (b.tint - a.tint) * e;
      });
      writeParts();
      renderer.shadowMap.needsUpdate = true;
    }, () => { anim = null; });
  }

  // is a point hidden behind the building? (rays against the part boxes, skipping see-through storeys)
  const rayO = [0, 0, 0], rayD = [0, 0, 0];
  function setRay(from, to) {
    const dx = to.x - from.x, dy = to.y - from.y, dz = to.z - from.z;
    const dist = Math.hypot(dx, dy, dz);
    rayO[0] = from.x; rayO[1] = from.y; rayO[2] = from.z;
    rayD[0] = dx / dist; rayD[1] = dy / dist; rayD[2] = dz / dist;
    return dist;
  }
  function behind(pos) {
    const dist = setRay(camera.position, pos) - 1.5;
    for (let i = 0; i < boxes.length; i++) {
      const s = state[boxes[i].part];
      if (s.fade < 0.5 && rayBox(rayO, rayD, boxes[i], s.lift) < dist) return true;
    }
    return false;
  }

  // --- labels
  const badges = new Map();
  data.wings.forEach((w) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'b3d-badge';
    b.style.setProperty('--swatch', w.color);
    b.style.setProperty('--plate-ink', w.ink);
    b.textContent = w.n;
    b.setAttribute('aria-label', `Wing ${w.n}`);
    b.addEventListener('click', () => ui.select({ wing: selection.wing === w.n && selection.floor == null ? null : w.n }, 'badge'));
    labelsBox.appendChild(b);
    const box = wingBoxes.get(w.n);
    badges.set(w.n, { el: b, pos: new Vector3((box.x0 + box.x1) / 2, w.n === 5 ? 26 : 25, (box.z0 + box.z1) / 2), at: { hidden: true } });
  });
  const pinMark = (glyph) => `<svg class="b3d-pin-mark" viewBox="0 0 26 34" aria-hidden="true"><path d="M13 33C13 33 1.5 21.6 1.5 12.6a11.5 11.5 0 0 1 23 0C24.5 21.6 13 33 13 33z" fill="currentColor" stroke="#fff" stroke-width="2"/><g fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${glyph}</g></svg>`;
  const pins = ENTRANCES.map((e) => {
    const el = document.createElement('div');
    el.className = 'b3d-pin';
    el.dataset.id = e.id;
    el.innerHTML = `${pinMark('<path d="M9.2 18.2V7.8h7.6v10.4M7.6 18.2h10.8M14.2 13.2v.4"/>')}<span class="b3d-pin-label">${ui.entranceLabel(e.id)}</span>`;
    labelsBox.appendChild(el);
    const [x, z] = toWorld(e.at[0], e.at[1]);
    const out = { n: [0, -1.2], s: [0, 1.2], w: [-1.2, 0], e: [1.2, 0] }[e.face];
    return { el, label: el.querySelector('.b3d-pin-label'), data: e, pos: new Vector3(x + out[0] * 2, 4.5, z + out[1] * 2) };
  });
  // laundry rooms: a blue pin drawn just right of the entrance you go in by; a tap shows the room.
  // It shares the entrance's spot in 3D and sits PAIR px over on screen, so the two never overlap.
  const PAIR = 24;
  (data.laundry || []).forEach((l) => {
    const door = pins.find((p) => p.data.id === l.entrance);
    if (!door) return;
    const el = document.createElement('button');
    el.type = 'button';
    el.className = 'b3d-pin is-laundry';
    el.setAttribute('aria-label', `Laundry room at ${ui.entranceLabel(l.entrance)}`);
    el.setAttribute('aria-pressed', 'false');
    el.innerHTML = `<span class="b3d-pin-hit">${pinMark('<rect x="8.3" y="6.4" width="9.4" height="11.2" rx="1.6"/><path d="M8.3 9.2h9.4"/><circle cx="13" cy="13.5" r="2.5"/>')}</span><span class="b3d-pin-label">Laundry room</span>`;
    el.addEventListener('click', () => ui.select(selection.laundry === l.entrance ? { wing: null } : { laundry: l.entrance }, 'tap'));
    labelsBox.appendChild(el);
    pins.push({ el, label: el.querySelector('.b3d-pin-label'), data: door.data, laundry: l.entrance, pos: door.pos, dx: PAIR, on: false });
  });
  // street names float above the ground and stay upright, turned along their street.
  // Each name has a few spots along its street, nearest to its usual place first.
  function lineSpots(path, prefer, step, margin) {
    const spots = [];
    path.slice(1).forEach((b, i) => {
      const a = path[i];
      const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
      const [ax, az] = toWorld(a[0], a[1]), [bx, bz] = toWorld(b[0], b[1]);
      const dir = new Vector3(bx - ax, 0, bz - az).normalize();
      const at = (t) => {
        const u = a[0] + (b[0] - a[0]) * t, v = a[1] + (b[1] - a[1]) * t;
        const [x, z] = toWorld(u, v);
        spots.push({ pos: new Vector3(x, 0.6, z), dir, d: Math.hypot(u - prefer[0], v - prefer[1]) });
      };
      // the usual place, on whichever stretch of the street it sits
      const t0 = ((prefer[0] - a[0]) * (b[0] - a[0]) + (prefer[1] - a[1]) * (b[1] - a[1])) / (len * len);
      if (t0 >= 0 && t0 <= 1 && Math.hypot(a[0] + (b[0] - a[0]) * t0 - prefer[0], a[1] + (b[1] - a[1]) * t0 - prefer[1]) < 1) at(t0);
      if (len < margin * 2 + 20) return; // too short to hold a name, like the corner bend
      const n = Math.max(1, Math.round((len - margin * 2) / step));
      for (let k = 0; k <= n; k++) at((margin + ((len - margin * 2) * k) / n) / len);
    });
    return spots.sort((p, q2) => p.d - q2.d);
  }
  const streetLabels = STREETS.map((st) => ({ name: st.name, spots: lineSpots(st.path, st.label, 50, 40) }));
  streetLabels.push({ name: 'Spree', river: true, spots: lineSpots(RIVER_BANK.map(([u, v]) => [u + 82, v]), [690, 470], 60, 10) });
  streetLabels.forEach((st) => {
    st.el = document.createElement('div');
    st.el.className = st.river ? 'b3d-street is-river' : 'b3d-street';
    st.el.textContent = st.name;
    st.cur = null;
    labelsBox.appendChild(st.el);
  });
  // the buttons and panels that sit on top of the model; measured only when the layout changes
  const overlays = [stage.querySelector('.b3d-compass'), sceneBtn, stage.querySelector('.b3d-tools'), root.querySelector('.b3d-floors'), root.querySelector('.b3d-finder'), root.querySelector('.b3d-card')].filter(Boolean);
  let overlayBoxes = null;

  const proj = new Vector3();
  const ray = new Raycaster();
  const size = new Vector2();
  function place(el, pos, hideBehind) {
    proj.copy(pos).project(camera);
    const x = (proj.x * 0.5 + 0.5) * size.x, y = (-proj.y * 0.5 + 0.5) * size.y;
    const off = x < -30 || y < -40 || x > size.x + 30 || y > size.y + 40; // well outside the stage
    const hidden = !(proj.z > -1 && proj.z < 1) || off || (hideBehind && behind(pos));
    el.style.setProperty('--x', `${x.toFixed(1)}px`);
    el.style.setProperty('--y', `${y.toFixed(1)}px`);
    el.classList.toggle('is-hidden', hidden);
    return { x, y, hidden };
  }

  // Labels keep out of each other's way. Entrance addresses avoid the wing badges and
  // the buttons; street names avoid all of that plus the pins and the other names.
  // A box is a centre, a half width and height, and a turn, in pixels on the stage.
  const screenBox = (x, y, hw, hh, ang = 0) => ({ x, y, hw, hh, ang, cos: Math.cos(ang), sin: Math.sin(ang) });
  function overlap(a, b) { // separating axis test for two turned boxes
    const dx = b.x - a.x, dy = b.y - a.y;
    return [[a.cos, a.sin], [-a.sin, a.cos], [b.cos, b.sin], [-b.sin, b.cos]].every(([ux, uy]) => {
      const ra = a.hw * Math.abs(ux * a.cos + uy * a.sin) + a.hh * Math.abs(uy * a.cos - ux * a.sin);
      const rb = b.hw * Math.abs(ux * b.cos + uy * b.sin) + b.hh * Math.abs(uy * b.cos - ux * b.sin);
      return Math.abs(dx * ux + dy * uy) <= ra + rb;
    });
  }
  function onStage(b) {
    const ex = b.hw * Math.abs(b.cos) + b.hh * Math.abs(b.sin), ey = b.hw * Math.abs(b.sin) + b.hh * Math.abs(b.cos);
    return b.x - ex >= 0 && b.y - ey >= 0 && b.x + ex <= size.x && b.y + ey <= size.y;
  }
  function blockers() { // the wing badges, and the buttons and panels over the model
    if (!overlayBoxes) {
      const o = labelsBox.getBoundingClientRect();
      overlayBoxes = [];
      overlays.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.width) overlayBoxes.push(screenBox(r.left - o.left + r.width / 2, r.top - o.top + r.height / 2, r.width / 2 + 2, r.height / 2 + 2));
      });
    }
    const list = overlayBoxes.slice();
    badges.forEach(({ at }, n) => {
      if (at.hidden) return;
      const half = (selection.wing === n ? 15 * 1.25 : 15) + 4; // badges are 30px, the chosen one is scaled up
      list.push(screenBox(at.x, at.y, half, half));
    });
    return list;
  }
  // an entrance's address goes right of its pin, else left, else below: wherever it is clear.
  // Below, it slides sideways to stay on screen when the pin is near an edge.
  const SIDES = ['', 'is-flipped', 'is-below'];
  function placeAddress(p, at, mark, taken) {
    if (!p.lw) { p.lw = p.label.offsetWidth; p.lh = p.label.offsetHeight; }
    const hw = p.lw / 2 + 3, hh = p.lh / 2 + 3, y = at.y - 31 + p.lh / 2;
    const below = Math.min(Math.max(at.x, hw + 2), size.x - hw - 2);
    p.el.style.setProperty('--dx', `${(below - at.x).toFixed(1)}px`);
    const spot = {
      '': screenBox(at.x + 18 + p.lw / 2, y, hw, hh),
      'is-flipped': screenBox(at.x - 18 - p.lw / 2, y, hw, hh),
      'is-below': screenBox(below, at.y + 8 + p.lh / 2, hw, hh),
    };
    const clear = (side) => onStage(spot[side]) && !taken.some((t) => t !== mark && overlap(spot[side], t));
    // keep the current side while it works, so the address doesn't hop around mid-drag
    const side = [p.side, ...SIDES].find((sd) => sd != null && clear(sd)) ?? SIDES.find((sd) => onStage(spot[sd])) ?? '';
    p.side = side;
    SIDES.forEach((sd) => { if (sd) p.el.classList.toggle(sd, sd === side); });
    taken.push(spot[side]);
  }
  function fitStreet(st, spot, taken) {
    proj.copy(spot.pos).project(camera);
    if (!(proj.z > -1 && proj.z < 1)) return null;
    const x = (proj.x * 0.5 + 0.5) * size.x, y = (-proj.y * 0.5 + 0.5) * size.y;
    // angle of the street on screen, flipped so the text never reads upside down
    proj.copy(spot.pos).addScaledVector(spot.dir, 20).project(camera);
    const p2x = proj.x, p2y = proj.y;
    proj.copy(spot.pos).addScaledVector(spot.dir, -20).project(camera);
    let ang = Math.atan2(-(p2y - proj.y) * size.y, (p2x - proj.x) * size.x);
    if (ang > Math.PI / 2) ang -= Math.PI;
    if (ang < -Math.PI / 2) ang += Math.PI;
    const b = screenBox(x, y, st.w / 2 + 6, st.h / 2 + 3, ang);
    if (!onStage(b) || taken.some((t) => overlap(b, t)) || behind(spot.pos)) return null; // only whole, clear names
    return b;
  }
  function placeStreets(taken) {
    streetLabels.forEach((st) => {
      if (!st.w) { st.w = st.el.offsetWidth; st.h = st.el.offsetHeight; }
      // stay put while the current spot still works, so names don't hop around mid-drag
      let i = st.cur, b = i != null ? fitStreet(st, st.spots[i], taken) : null;
      for (let k = 0; !b && k < st.spots.length; k++) if (k !== st.cur) { i = k; b = fitStreet(st, st.spots[k], taken); }
      st.el.classList.toggle('is-hidden', !b);
      if (!b) return;
      st.cur = i;
      taken.push(b);
      st.el.style.setProperty('--x', `${b.x.toFixed(1)}px`);
      st.el.style.setProperty('--y', `${b.y.toFixed(1)}px`);
      st.el.style.setProperty('--r', `${((b.ang * 180) / Math.PI).toFixed(1)}deg`);
    });
  }
  function updateLabels() {
    renderer.getSize(size);
    badges.forEach((b, n) => {
      b.at = place(b.el, b.pos, false);
      b.el.classList.toggle('is-active', selection.wing === n);
      b.el.classList.toggle('is-muted', selection.wing != null && selection.wing !== n);
    });
    const at = pins.map((p) => {
      // an entrance shows its address when its wing is picked, or its laundry room
      const on = p.laundry ? selection.laundry === p.laundry
        : (selection.wing != null && p.data.wings.includes(selection.wing)) || selection.laundry === p.data.id;
      p.el.classList.toggle('is-active', on);
      if (p.laundry && p.on !== on) { p.on = on; p.el.setAttribute('aria-pressed', String(on)); }
      const a = place(p.el, p.pos, true);
      if (p.dx) a.x += p.dx;
      return a;
    });
    const taken = blockers();
    const marks = at.map((a) => (a.hidden ? null : screenBox(a.x, a.y - 17, 15, 19)));
    marks.forEach((m) => { if (m) taken.push(m); });
    pins.forEach((p, i) => { if (marks[i] && p.el.classList.contains('is-active')) placeAddress(p, at[i], marks[i], taken); });
    placeStreets(taken);
    // compass: angle between "up the screen" on the ground and true north
    const az = controls.getAzimuthalAngle();
    const fwd = [-Math.sin(az), -Math.cos(az)];
    const ang = Math.atan2(fwd[0] * NORTH[1] - fwd[1] * NORTH[0], fwd[0] * NORTH[0] + fwd[1] * NORTH[1]);
    compass.style.transform = `rotate(${(-ang * 180) / Math.PI}deg)`;
  }

  // --- tap to pick a wing
  let down = null;
  canvas.addEventListener('pointerdown', (e) => { down = { x: e.clientX, y: e.clientY, t: performance.now() }; stage.dataset.touched = 'true'; });
  canvas.addEventListener('pointerup', (e) => {
    if (!down || Math.hypot(e.clientX - down.x, e.clientY - down.y) > 7 || performance.now() - down.t > 450) { down = null; return; }
    down = null;
    const rect = canvas.getBoundingClientRect();
    ray.setFromCamera(new Vector2(((e.clientX - rect.left) / rect.width) * 2 - 1, -((e.clientY - rect.top) / rect.height) * 2 + 1), camera);
    const o = ray.ray.origin, d = ray.ray.direction;
    rayO[0] = o.x; rayO[1] = o.y; rayO[2] = o.z; rayD[0] = d.x; rayD[1] = d.y; rayD[2] = d.z;
    let best = Infinity, wing = 0;
    boxes.forEach((b) => {
      const s = state[b.part];
      if (s.fade > 0.5) return;
      const t = rayBox(rayO, rayD, b, s.lift);
      if (t < best) { best = t; wing = b.wing; }
    });
    if (wing) ui.select({ wing }, 'tap');
    else if (selection.wing != null) ui.select({ wing: null }, 'tap');
  });

  // --- day/night button: remembered on this device only while it differs from the rest of the site
  if (sceneBtn) sceneBtn.addEventListener('click', () => {
    const night = !readTheme();
    if (night === siteIsDark()) delete stage.dataset.scene;
    else stage.dataset.scene = night ? 'night' : 'day';
    try {
      if (stage.dataset.scene) localStorage.setItem('map-scene', stage.dataset.scene);
      else localStorage.removeItem('map-scene');
    } catch { /* private mode: still switches for this visit */ }
    applyTheme();
  });

  // --- reset + zoom buttons
  stage.querySelector('.b3d-reset').addEventListener('click', () => ui.select({ wing: null }, 'reset'));
  stage.querySelectorAll('.b3d-zoom').forEach((btn) => btn.addEventListener('click', () => {
    const k = btn.dataset.dir === 'in' ? 0.72 : 1.38;
    const to = controls.target.clone().add(camera.position.clone().sub(controls.target).multiplyScalar(k));
    const len = to.distanceTo(controls.target);
    if (len < controls.minDistance || len > controls.maxDistance) return;
    const from = camera.position.clone();
    if (flight) tweens.delete(flight);
    flight = tween(380, (e) => camera.position.lerpVectors(from, to, e), () => { flight = null; });
  }));

  // --- render loop (renders only when something changes)
  let raf = 0, dirty = true, onScreen = true;
  function requestRender() { dirty = true; if (!raf && onScreen) raf = requestAnimationFrame(frame); }
  function frame(now) {
    raf = 0;
    const animating = stepTweens(now);
    const moved = controls.update();
    if (animating || moved || dirty) {
      dirty = false;
      const d = camera.position.distanceTo(controls.target); // fog only reaches the far horizon
      if (scene.fog) { scene.fog.near = d * 1.3; scene.fog.far = d * 2.6; }
      renderer.render(scene, camera);
      updateLabels();
    }
    if (animating || moved) raf = requestAnimationFrame(frame);
  }
  controls.addEventListener('change', requestRender);
  new IntersectionObserver(([entry]) => { onScreen = entry.isIntersecting; if (onScreen) requestRender(); }).observe(stage);

  function resize() {
    const w = stage.clientWidth, h = stage.clientHeight;
    overlayBoxes = null;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    requestRender();
  }
  new ResizeObserver(resize).observe(stage);
  resize();

  applyTheme();
  if (document.fonts) document.fonts.ready.then(() => { // re-measure labels once the web font is in
    streetLabels.forEach((st) => { st.w = 0; });
    pins.forEach((p) => { p.lw = 0; });
    overlayBoxes = null;
    requestRender();
  });
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyTheme);
  new MutationObserver(applyTheme).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

  // --- intro: start straight above, like the printed map, then tilt into 3D
  const home = placeFor(viewFor({ wing: null }));
  camera.position.copy(home.target).add(new Vector3(0.01, fitDistance(118) * 1.02, 0.4));
  controls.target.copy(home.target);
  controls.update();
  let introDone = false;
  let pending = null;
  setTimeout(() => { stage.dataset.quiet = 'true'; }, 9000); // the gesture hint fades after a while
  setTimeout(() => {
    flyTo(viewFor(pending || { wing: null }), 1900);
    setTimeout(() => { introDone = true; }, reduceMotion ? 0 : 1900);
  }, reduceMotion ? 0 : 350);

  return {
    select(sel, source) {
      selection = { wing: sel.wing, floor: sel.wing != null ? sel.floor : null, laundry: sel.laundry || null };
      overlayBoxes = null; // the floor stepper and the card may have changed size
      applySelection();
      const picked = selection.wing != null || selection.laundry != null;
      if (!introDone) { pending = picked ? selection : null; return; }
      if (source === 'tap' && picked) { requestRender(); return; } // keep the camera where the user put it
      flyTo(viewFor(selection));
    },
    render: requestRender,
  };
}
