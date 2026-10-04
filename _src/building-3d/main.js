// Interactive 3D map of the building: tap a wing, or type a door number (wing.floor.door)
// and the model shows the wing and lifts the storeys above that floor.
import {
  WebGLRenderer, Scene, PerspectiveCamera, Color, Fog, HemisphereLight, DirectionalLight,
  Group, Mesh, BufferGeometry, Float32BufferAttribute, MeshStandardMaterial, MeshLambertMaterial, CanvasTexture,
  RepeatWrapping, ClampToEdgeWrapping, SRGBColorSpace, PlaneGeometry, Vector3, Vector2, Raycaster,
  InstancedMesh, IcosahedronGeometry, CylinderGeometry, Matrix4, Quaternion, PCFSoftShadowMap,
  NeutralToneMapping, DoubleSide, TOUCH, MOUSE,
} from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { MASSES, FLOORS, ENTRANCES, NORTH, PAVILION_TOP, LINK_TOP, STREETS, toWorld } from './geometry.js';
import { facadeCanvas, groundCanvas, roofCanvas, BAYS, BAY_WIDTH, GROUND } from './textures.js';
import { parseDoor, doorHash } from './door.js';

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
  let current = { wing: null, floor: null, door: null };

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

  function renderCard(sel) {
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
    const text = current.floor != null ? `Wing ${w.n}, ${ordinal(current.floor)}${current.door != null ? `, door ${current.door}` : ''}` : `Wing ${w.n}`;
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
    current = { wing: sel.wing ?? null, floor: sel.wing != null ? sel.floor ?? null : null, door: sel.wing != null ? sel.door ?? null : null, floorNote: sel.floorNote };
    chipsBox.querySelectorAll('.b3d-chip').forEach((c) => c.setAttribute('aria-pressed', String(Number(c.dataset.wing) === current.wing)));
    renderCard(current);
    renderStepper(current);
    if (source !== 'hash') {
      history.replaceState(null, '', current.wing == null ? location.pathname + location.search : `#${doorHash(current)}`);
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
      const m = /^wing-(\d)$/.exec(h);
      const res = m ? { wing: Number(m[1]), floor: null, door: null } : parseDoor(h, data.floors.length - 1);
      if (!res.error && res.wing) select(res, 'hash');
    },
    entranceLabel: (id) => (entrances.get(id) || {}).label || '',
    wing: (n) => wings.get(n),
    floorName: ordinal,
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

  const renderer = new WebGLRenderer({ canvas, antialias: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFSoftShadowMap;
  renderer.shadowMap.autoUpdate = false;
  renderer.toneMapping = NeutralToneMapping;
  const maxAniso = renderer.capabilities.getMaxAnisotropy();

  const scene = new Scene();
  const camera = new PerspectiveCamera(20, 1, 10, 4000); // narrow lens: close to an isometric model view
  const fonts = {
    label: getComputedStyle(root).getPropertyValue('--b3d-font-label').trim() || 'sans-serif',
    display: getComputedStyle(root).getPropertyValue('--b3d-font-display').trim() || 'serif',
  };

  // --- lights
  const hemi = new HemisphereLight(0xffffff, 0xdde2ea, 2.1);
  scene.add(hemi);
  const sun = new DirectionalLight(0xffffff, 1.6);
  sun.position.set(-130, 210, 150);
  sun.castShadow = true;
  sun.shadow.mapSize.set(small ? 1024 : 2048, small ? 1024 : 2048);
  Object.assign(sun.shadow.camera, { left: -160, right: 160, top: 160, bottom: -160, near: 50, far: 600 });
  sun.shadow.bias = -0.0004;
  sun.shadow.normalBias = 0.6;
  if ('intensity' in sun.shadow) sun.shadow.intensity = 0.55; // soft, light shadows
  scene.add(sun);
  scene.add(sun.target);

  // --- shared textures
  const tex = (cnv, repeat = true) => {
    const t = new CanvasTexture(cnv);
    t.colorSpace = SRGBColorSpace;
    t.wrapS = repeat ? RepeatWrapping : ClampToEdgeWrapping;
    t.wrapT = ClampToEdgeWrapping;
    t.anisotropy = maxAniso;
    return t;
  };
  const kinds = ['ground', 'upper', 'cornice', 'top', 'attic'];
  const facade = {};
  ['brick', 'plaster'].forEach((finish) => kinds.forEach((kind, i) => {
    facade[`${finish}:${kind}`] = { map: tex(facadeCanvas(kind, finish, false, i + 1)), glow: tex(facadeCanvas(kind, finish, true, i + 1)) };
  }));
  const roofTex = tex(roofCanvas(false));
  roofTex.wrapT = RepeatWrapping;

  // --- material hook: ghost (uDim) and tint (uTint) mixed in after lighting, no transparency needed
  function hook(material) {
    material.userData.uDim = { value: 0 };
    material.userData.uTintAmt = { value: 0 };
    material.userData.uTint = { value: new Vector3(1, 1, 1) };
    material.userData.uClay = { value: new Vector3(0.82, 0.84, 0.81) };
    material.onBeforeCompile = (shader) => {
      shader.uniforms.uDim = material.userData.uDim;
      shader.uniforms.uTintAmt = material.userData.uTintAmt;
      shader.uniforms.uTint = material.userData.uTint;
      shader.uniforms.uClay = material.userData.uClay;
      shader.fragmentShader = shader.fragmentShader
        .replace('void main() {', 'uniform float uDim; uniform float uTintAmt; uniform vec3 uTint; uniform vec3 uClay;\nvoid main() {')
        .replace('#include <dithering_fragment>', '#include <dithering_fragment>\n gl_FragColor.rgb = mix(gl_FragColor.rgb, uTint * (0.55 + 0.45 * dot(gl_FragColor.rgb, vec3(0.333))), uTintAmt);\n gl_FragColor.rgb = mix(gl_FragColor.rgb, uClay, uDim);');
    };
    material.customProgramCacheKey = () => 'b3d-hook';
    return material;
  }

  const srgb = (hex) => { const c = parseInt(hex.slice(1), 16); return new Vector3(((c >> 16) & 255) / 255, ((c >> 8) & 255) / 255, (c & 255) / 255); };

  // --- geometry helpers
  function pushQuad(arr, a, b, c, d, uvA, uvB, uvC, uvD) {
    arr.pos.push(...a, ...b, ...c, ...a, ...c, ...d);
    arr.uv.push(...uvA, ...uvB, ...uvC, ...uvA, ...uvC, ...uvD);
  }
  function makeGeometry(arr) {
    const g = new BufferGeometry();
    g.setAttribute('position', new Float32BufferAttribute(arr.pos, 3));
    g.setAttribute('uv', new Float32BufferAttribute(arr.uv, 2));
    g.computeVertexNormals();
    return g;
  }
  const strip = BAYS * BAY_WIDTH;
  function walls(x0, x1, z0, z1, y0, y1) {
    const a = { pos: [], uv: [] };
    const U = (t) => t / strip;
    pushQuad(a, [x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1], [U(x0), 0], [U(x1), 0], [U(x1), 1], [U(x0), 1]);
    pushQuad(a, [x1, y0, z0], [x0, y0, z0], [x0, y1, z0], [x1, y1, z0], [U(x1), 0], [U(x0), 0], [U(x0), 1], [U(x1), 1]);
    pushQuad(a, [x0, y0, z0], [x0, y0, z1], [x0, y1, z1], [x0, y1, z0], [U(z0), 0], [U(z1), 0], [U(z1), 1], [U(z0), 1]);
    pushQuad(a, [x1, y0, z1], [x1, y0, z0], [x1, y1, z0], [x1, y1, z1], [U(z1), 0], [U(z0), 0], [U(z0), 1], [U(z1), 1]);
    return makeGeometry(a);
  }
  function caps(x0, x1, z0, z1, y0, y1) {
    const a = { pos: [], uv: [] };
    const s = 1 / 8;
    pushQuad(a, [x0, y1, z1], [x1, y1, z1], [x1, y1, z0], [x0, y1, z0], [x0 * s, z1 * s], [x1 * s, z1 * s], [x1 * s, z0 * s], [x0 * s, z0 * s]);
    pushQuad(a, [x0, y0, z0], [x1, y0, z0], [x1, y0, z1], [x0, y0, z1], [0, 0], [1, 0], [1, 1], [0, 1]);
    return makeGeometry(a);
  }
  function hipRoof(x0, x1, z0, z1, b, h) {
    const a = { pos: [], uv: [] };
    const s = 1 / 8;
    const uv = (p) => [p[0] * s, p[2] * s];
    const quad = (p, q, r2, t) => pushQuad(a, p, q, r2, t, uv(p), uv(q), uv(r2), uv(t));
    const tri = (p, q, r2) => { a.pos.push(...p, ...q, ...r2); a.uv.push(...uv(p), ...uv(q), ...uv(r2)); };
    const lx = x1 - x0, lz = z1 - z0, xc = (x0 + x1) / 2, zc = (z0 + z1) / 2;
    if (lx >= lz) {
      const hh = lz / 2;
      const r1 = [x0 + hh, b + h, zc], r2 = [x1 - hh, b + h, zc];
      quad([x0, b, z1], [x1, b, z1], r2, r1);
      quad([x1, b, z0], [x0, b, z0], r1, r2);
      tri([x0, b, z0], [x0, b, z1], r1);
      tri([x1, b, z1], [x1, b, z0], r2);
    } else {
      const hh = lx / 2;
      const r1 = [xc, b + h, z0 + hh], r2 = [xc, b + h, z1 - hh];
      quad([x1, b, z1], [x1, b, z0], r1, r2);
      quad([x0, b, z0], [x0, b, z1], r2, r1);
      tri([x0, b, z1], [x1, b, z1], r2);
      tri([x1, b, z0], [x0, b, z0], r1);
    }
    return makeGeometry(a);
  }

  // which sides of a mass touch another mass (no attic setback there)
  function sharedSides(m) {
    const [u0, u1, v0, v1] = m.r;
    const touch = { n: 0, s: 0, w: 0, e: 0 };
    const overlap = (a0, a1, b0, b1) => Math.max(0, Math.min(a1, b1) - Math.max(a0, b0));
    MASSES.forEach((o) => {
      if (o === m) return;
      const [p0, p1, q0, q1] = o.r;
      if (Math.abs(q1 - v0) < 0.8) touch.n += overlap(u0, u1, p0, p1);
      if (Math.abs(q0 - v1) < 0.8) touch.s += overlap(u0, u1, p0, p1);
      if (Math.abs(p1 - u0) < 0.8) touch.w += overlap(v0, v1, q0, q1);
      if (Math.abs(p0 - u1) < 0.8) touch.e += overlap(v0, v1, q0, q1);
    });
    return { n: touch.n > (u1 - u0) * 0.5, s: touch.s > (u1 - u0) * 0.5, w: touch.w > (v1 - v0) * 0.5, e: touch.e > (v1 - v0) * 0.5 };
  }

  // --- build the building
  const building = new Group();
  scene.add(building);
  const parts = []; // every mesh, with userData { wing, level }
  const pickables = [];
  const wingBoxes = new Map();
  const floorPlate = 0xe9edf3;

  function addMesh(geometry, material, wing, level, opts = {}) {
    const mesh = new Mesh(geometry, hook(material));
    mesh.castShadow = opts.cast !== false;
    mesh.receiveShadow = true;
    mesh.userData = { wing, level, baseY: 0 };
    building.add(mesh);
    parts.push(mesh);
    if (wing) pickables.push(mesh);
    return mesh;
  }
  const facadeMat = (key) => new MeshStandardMaterial({ map: facade[key].map, emissiveMap: facade[key].glow, emissive: 0xffffff, emissiveIntensity: 0, roughness: 0.92, metalness: 0 });
  const plainMat = (color, extra = {}) => new MeshStandardMaterial({ color, roughness: 0.95, metalness: 0, ...extra });

  MASSES.forEach((m) => {
    const [a, b] = toWorld(m.r[0], m.r[2]);
    const [c, d] = toWorld(m.r[1], m.r[3]);
    const x0 = a, z0 = b, x1 = c, z1 = d;
    const finish = m.finish || 'brick';
    const shared = sharedSides(m);
    const box = wingBoxes.get(m.wing) || { x0: Infinity, x1: -Infinity, z0: Infinity, z1: -Infinity };
    wingBoxes.set(m.wing, { x0: Math.min(box.x0, x0), x1: Math.max(box.x1, x1), z0: Math.min(box.z0, z0), z1: Math.max(box.z1, z1) });

    const storeys = m.type === 'link' ? 4 : 5;
    for (let L = 0; L < storeys; L++) {
      const f = FLOORS[L];
      let y0 = f.y, y1 = f.y + f.h;
      let kind = L === 0 ? 'ground' : L === 3 ? 'cornice' : 'upper';
      let [wx0, wx1, wz0, wz1] = [x0, x1, z0, z1];
      if (L === 4) {
        if (m.type === 'pavilion') { kind = 'top'; y1 = PAVILION_TOP; } else {
          kind = 'attic';
          const inset = 1.0;
          if (!shared.w) wx0 += inset; if (!shared.e) wx1 -= inset;
          if (!shared.n) wz0 += inset; if (!shared.s) wz1 -= inset;
        }
      }
      const fin = kind === 'attic' ? 'brick' : finish;
      addMesh(walls(wx0, wx1, wz0, wz1, y0, y1), facadeMat(`${fin}:${kind}`), m.wing, L);
      addMesh(caps(wx0, wx1, wz0, wz1, y0 + 0.02, y1 - 0.02), plainMat(floorPlate), m.wing, L, { cast: false });
      if (L === 3 && m.type === 'body') {
        const o = 0.35;
        addMesh(caps(x0 - o, x1 + o, z0 - o, z1 + o, y1 - 0.45, y1), plainMat(0xf4f0ec), m.wing, L, { cast: false });
        addMesh(walls(x0 - o, x1 + o, z0 - o, z1 + o, y1 - 0.45, y1), plainMat(0xf4f0ec), m.wing, L);
      }
      if (L === 4 && m.type === 'body') {
        addMesh(hipRoof(wx0 - 0.3, wx1 + 0.3, wz0 - 0.3, wz1 + 0.3, y1, Math.min(2.2, (Math.min(wx1 - wx0, wz1 - wz0)) * 0.12)), plainMat(0xffffff, { map: roofTex }), m.wing, 5);
      }
    }
    if (m.type !== 'body') {
      const top = m.type === 'pavilion' ? PAVILION_TOP : LINK_TOP;
      const parapet = new MeshStandardMaterial({ map: facade[`${finish}:upper`].map, roughness: 0.92, side: DoubleSide });
      addMesh(walls(x0, x1, z0, z1, top, top + 0.9), parapet, m.wing, 5);
      addMesh(caps(x0 + 0.3, x1 - 0.3, z0 + 0.3, z1 - 0.3, top, top + 0.05), plainMat(0xd5dce6), m.wing, 5, { cast: false });
      if (m.type === 'pavilion' && (x1 - x0) > 12 && (z1 - z0) > 12) {
        const cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
        addMesh(walls(cx - 3, cx + 3, cz - 2.2, cz + 2.2, top, top + 2.8), plainMat(0xeef1f5), m.wing, 5);
        addMesh(caps(cx - 3, cx + 3, cz - 2.2, cz + 2.2, top, top + 2.8), plainMat(0xdfe4eb), m.wing, 5, { cast: false });
      }
    }
  });
  parts.forEach((p) => { p.userData.mat = p.material; });
  const facadeMats = parts.filter((p) => p.material.emissiveMap).map((p) => p.material);

  // --- ground, trees
  let groundTex = null;
  // matte (Lambert) ground: a physically based one goes dark at the shallow angles toward the horizon
  const ground = new Mesh(new PlaneGeometry(GROUND.x1 - GROUND.x0, GROUND.z1 - GROUND.z0), new MeshLambertMaterial());
  ground.rotation.x = -Math.PI / 2;
  ground.position.set((GROUND.x0 + GROUND.x1) / 2, 0, (GROUND.z0 + GROUND.z1) / 2);
  ground.receiveShadow = true;
  scene.add(ground);
  // a wide plane in the ground map's edge colour, so the map's border melts into the background
  const baseGround = new Mesh(new PlaneGeometry(6000, 6000), new MeshLambertMaterial());
  baseGround.rotation.x = -Math.PI / 2;
  baseGround.position.y = -0.08;
  baseGround.receiveShadow = true;
  scene.add(baseGround);

  const treeSpots = [];
  for (let v = 300; v <= 780; v += 24) { treeSpots.push([90, v]); if (v < 320 || v > 672) treeSpots.push([119, v]); }
  for (let u = 140; u <= 500; u += 26) treeSpots.push([u, 706]);
  for (let u = 130; u <= 490; u += 30) treeSpots.push([u, 300]);
  [[200, 400], [262, 455], [362, 404], [420, 460], [205, 560], [270, 590], [350, 548], [430, 600], [240, 520]].forEach((p) => treeSpots.push(p));
  for (let v = 120; v <= 900; v += 19) treeSpots.push([548 + ((v * 37) % 40), v]);
  const canopyGeo = new IcosahedronGeometry(3.0, 2);
  const trunkGeo = new CylinderGeometry(0.22, 0.3, 3.2, 6);
  const canopy = new InstancedMesh(canopyGeo, new MeshStandardMaterial({ color: 0x9ccc8f, roughness: 0.9 }), treeSpots.length);
  const trunks = new InstancedMesh(trunkGeo, new MeshStandardMaterial({ color: 0xc8b6a0, roughness: 1 }), treeSpots.length);
  const mtx = new Matrix4(), q = new Quaternion(), sc = new Vector3(), ps = new Vector3();
  treeSpots.forEach(([u, v], i) => {
    const [x, z] = toWorld(u, v);
    const s = 0.75 + ((u * 13 + v * 7) % 10) / 20;
    mtx.compose(ps.set(x, 3.4 + 2.6 * s, z), q.identity(), sc.set(s, s, s));
    canopy.setMatrixAt(i, mtx);
    mtx.compose(ps.set(x, 1.5, z), q.identity(), sc.set(1, 1, 1));
    trunks.setMatrixAt(i, mtx);
  });
  canopy.castShadow = true; trunks.castShadow = true;
  scene.add(canopy, trunks);

  // --- theme
  let dark = null;
  function readTheme() {
    const t = document.documentElement.dataset.theme;
    return t === 'dark' ? true : t === 'light' ? false : matchMedia('(prefers-color-scheme: dark)').matches;
  }
  function applyTheme() {
    const isDark = readTheme();
    if (isDark === dark) return;
    dark = isDark;
    const bg = getComputedStyle(stage).getPropertyValue('--b3d-bg').trim() || (dark ? '#0f131a' : '#eceff5');
    scene.background = new Color(bg);
    scene.fog = new Fog(bg, 700, 1500);
    baseGround.material.color.set(dark ? '#0f131a' : '#eceff5');
    hemi.color.set(dark ? 0x3d4e74 : 0xffffff);
    hemi.groundColor.set(dark ? 0x0d1015 : 0xdde2ea);
    hemi.intensity = dark ? 1.0 : 2.1;
    sun.color.set(dark ? 0xa8bce0 : 0xffffff);
    sun.intensity = dark ? 0.8 : 1.6;
    facadeMats.forEach((m) => { m.emissiveIntensity = dark ? 1.25 : 0; });
    canopy.material.color.set(dark ? 0x2a3b2e : 0x9ccc8f);
    const clay = srgb(dark ? '#1b222d' : '#e2e7ee');
    parts.forEach((p) => p.material.userData.uClay.value.copy(clay));
    if (groundTex) groundTex.dispose();
    groundTex = new CanvasTexture(groundCanvas(dark, fonts));
    groundTex.colorSpace = SRGBColorSpace;
    groundTex.anisotropy = maxAniso;
    ground.material.map = groundTex;
    ground.material.needsUpdate = true;
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
  canvas.style.touchAction = 'pan-y'; // vertical swipes keep scrolling the page; sideways swipes turn the building

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

  const views = {};
  function fitDistance(radius) {
    const vfov = (camera.fov * Math.PI) / 180;
    const hfov = 2 * Math.atan(Math.tan(vfov / 2) * camera.aspect);
    return radius / Math.sin(Math.min(vfov, hfov) / 2);
  }
  function viewFor(sel) {
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
    return { target: new Vector3(cx, yTarget, cz), dist: Math.max(200, fitDistance(radius) * 0.95), polar, azim: dir + 0.42 };
  }
  function placeFor(v) {
    const p = new Vector3(Math.sin(v.polar) * Math.sin(v.azim), Math.cos(v.polar), Math.sin(v.polar) * Math.cos(v.azim));
    return { target: v.target.clone(), position: v.target.clone().add(p.multiplyScalar(v.dist)) };
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
    const fromP = camera.position.clone(), fromT = controls.target.clone();
    if (flight) tweens.delete(flight);
    flight = tween(duration, (e) => {
      camera.position.lerpVectors(fromP, to.position, e);
      controls.target.lerpVectors(fromT, to.target, e);
    }, () => { flight = null; });
  }
  controls.addEventListener('start', () => { if (flight) { tweens.delete(flight); flight = null; } });

  // --- selection state, animated per mesh
  const LIFT = 8;
  let selection = { wing: null, floor: null };
  let anim = null;
  function targetsFor(p) {
    const { wing, level } = p.userData;
    const any = selection.wing != null;
    const mine = any && wing === selection.wing;
    const hasFloor = mine && selection.floor != null;
    return {
      dim: any && !mine ? (wing ? 0.62 : 0.7) : 0,
      lift: hasFloor && level > selection.floor ? LIFT : 0,
      fade: hasFloor && level > selection.floor ? 1 : 0,
      tint: !mine ? 0 : hasFloor ? (level === selection.floor ? 0.62 : level < selection.floor ? 0.35 : 0) : 0.55,
    };
  }
  parts.forEach((p) => { p.userData.cur = { dim: 0, lift: 0, fade: 0, tint: 0 }; });
  function applySelection() {
    const tint = selection.wing != null ? srgb(ui.wing(selection.wing).color) : null;
    const from = parts.map((p) => ({ ...p.userData.cur }));
    const to = parts.map((p) => targetsFor(p));
    // the chosen floor gets the full wing colour, the rest of the wing a pastel of it
    const pastel = tint ? tint.clone().lerp(new Vector3(1, 1, 1), 0.45) : null;
    parts.forEach((p, i) => { if (tint && to[i].tint) p.material.userData.uTint.value.copy(to[i].tint >= 0.5 ? tint : pastel); });
    if (anim) tweens.delete(anim);
    anim = tween(700, (e) => {
      parts.forEach((p, i) => {
        const c = p.userData.cur, a = from[i], b = to[i];
        c.dim = a.dim + (b.dim - a.dim) * e;
        c.lift = a.lift + (b.lift - a.lift) * e;
        c.fade = a.fade + (b.fade - a.fade) * e;
        c.tint = a.tint + (b.tint - a.tint) * e;
        const u = p.material.userData;
        u.uDim.value = c.dim;
        u.uTintAmt.value = c.tint;
        p.position.y = c.lift;
        const transparent = c.fade > 0.001;
        if (p.material.transparent !== transparent) { p.material.transparent = transparent; p.material.depthWrite = !transparent; p.material.needsUpdate = true; }
        p.material.opacity = 1 - 0.86 * c.fade;
        p.castShadow = c.fade < 0.5;
      });
      renderer.shadowMap.needsUpdate = true;
    }, () => { anim = null; });
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
    badges.set(w.n, { el: b, pos: new Vector3((box.x0 + box.x1) / 2, w.n === 5 ? 26 : 25, (box.z0 + box.z1) / 2) });
  });
  const pins = ENTRANCES.map((e) => {
    const el = document.createElement('div');
    el.className = 'b3d-pin';
    el.dataset.id = e.id;
    el.innerHTML = `<svg class="b3d-pin-mark" viewBox="0 0 26 34" aria-hidden="true"><path d="M13 33C13 33 1.5 21.6 1.5 12.6a11.5 11.5 0 0 1 23 0C24.5 21.6 13 33 13 33z" fill="currentColor" stroke="#fff" stroke-width="2"/><path d="M9.2 18.2V7.8h7.6v10.4M7.6 18.2h10.8M14.2 13.2v.4" fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg><span class="b3d-pin-label">${ui.entranceLabel(e.id)}</span>`;
    labelsBox.appendChild(el);
    const [x, z] = toWorld(e.at[0], e.at[1]);
    const out = { n: [0, -1.2], s: [0, 1.2], w: [-1.2, 0], e: [1.2, 0] }[e.face];
    return { el, data: e, pos: new Vector3(x + out[0] * 2, 4.5, z + out[1] * 2) };
  });
  // street names float above the ground and stay upright, turned along their street
  const streetLabels = STREETS.map((st) => {
    const el = document.createElement('div');
    el.className = 'b3d-street';
    el.textContent = st.name;
    labelsBox.appendChild(el);
    const [x, z] = toWorld(st.label[0], st.label[1]);
    const seg = st.path.length > 2 && st.label[1] === st.path[0][1] ? [st.path[0], st.path[1]] : [st.path[0], st.path[st.path.length - 1]];
    const [ax, az] = toWorld(seg[0][0], seg[0][1]);
    const [bx, bz] = toWorld(seg[1][0], seg[1][1]);
    const len = Math.hypot(bx - ax, bz - az);
    return { el, pos: new Vector3(x, 0.6, z), dir: new Vector3((bx - ax) / len, 0, (bz - az) / len) };
  });
  {
    const el = document.createElement('div');
    el.className = 'b3d-street is-river';
    el.textContent = 'Spree';
    labelsBox.appendChild(el);
    const [x, z] = toWorld(690, 470);
    const [ax, az] = toWorld(608, 420), [bx, bz] = toWorld(614, 550);
    const len = Math.hypot(bx - ax, bz - az);
    streetLabels.push({ el, pos: new Vector3(x, 0.6, z), dir: new Vector3((bx - ax) / len, 0, (bz - az) / len) });
  }
  const floorTag = document.createElement('div');
  floorTag.className = 'b3d-floortag';
  labelsBox.appendChild(floorTag);
  const floorTagPos = new Vector3();

  const proj = new Vector3();
  const ray = new Raycaster();
  const size = new Vector2();
  function place(el, pos, hideBehind) {
    proj.copy(pos).project(camera);
    const visible = proj.z > -1 && proj.z < 1;
    renderer.getSize(size);
    const x = (proj.x * 0.5 + 0.5) * size.x, y = (-proj.y * 0.5 + 0.5) * size.y;
    el.style.setProperty('--x', `${x.toFixed(1)}px`);
    el.style.setProperty('--y', `${y.toFixed(1)}px`);
    el.classList.toggle('is-flipped', x > size.x - 240); // keep labels clear of the zoom buttons
    let hidden = !visible;
    if (!hidden && hideBehind) {
      const dir = pos.clone().sub(camera.position);
      const dist = dir.length();
      ray.set(camera.position, dir.normalize());
      ray.far = dist - 1.5;
      hidden = ray.intersectObjects(pickables, false).some((h) => h.object.material.opacity > 0.5);
    }
    el.classList.toggle('is-hidden', hidden);
  }
  function updateLabels() {
    badges.forEach(({ el, pos }, n) => {
      place(el, pos, false);
      el.classList.toggle('is-active', selection.wing === n);
      el.classList.toggle('is-muted', selection.wing != null && selection.wing !== n);
    });
    pins.forEach((p) => {
      place(p.el, p.pos, true);
      p.el.classList.toggle('is-active', selection.wing != null && p.data.wings.includes(selection.wing));
    });
    streetLabels.forEach((st) => {
      place(st.el, st.pos, true);
      // angle of the street on screen, flipped so the text never reads upside down
      proj.copy(st.pos).addScaledVector(st.dir, 20).project(camera);
      const p2 = { x: proj.x, y: proj.y };
      proj.copy(st.pos).addScaledVector(st.dir, -20).project(camera);
      let ang = (Math.atan2(-(p2.y - proj.y) * size.y, (p2.x - proj.x) * size.x) * 180) / Math.PI;
      if (ang > 90) ang -= 180;
      if (ang < -90) ang += 180;
      st.el.style.setProperty('--r', `${ang.toFixed(1)}deg`);
    });
    floorTag.hidden = true; // the floor stepper says which floor it is
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
    const ndc = new Vector2(((e.clientX - rect.left) / rect.width) * 2 - 1, -((e.clientY - rect.top) / rect.height) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    ray.far = Infinity;
    const hit = ray.intersectObjects(pickables, false).find((h) => h.object.material.opacity > 0.5);
    if (hit) ui.select({ wing: hit.object.userData.wing }, 'tap');
    else if (selection.wing != null) ui.select({ wing: null }, 'tap');
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
      const d = camera.position.distanceTo(controls.target); // fog follows the zoom so the horizon always fades out
      if (scene.fog) { scene.fog.near = d * 0.95; scene.fog.far = d * 1.7; }
      renderer.render(scene, camera);
      updateLabels();
    }
    if (animating || moved) raf = requestAnimationFrame(frame);
  }
  controls.addEventListener('change', requestRender);
  new IntersectionObserver(([entry]) => { onScreen = entry.isIntersecting; if (onScreen) requestRender(); }).observe(stage);

  function resize() {
    const w = stage.clientWidth, h = stage.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    requestRender();
  }
  new ResizeObserver(resize).observe(stage);
  resize();

  applyTheme();
  if (document.fonts) document.fonts.ready.then(() => { dark = null; applyTheme(); }); // redraw street names once the web font is in
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
      selection = { wing: sel.wing, floor: sel.wing != null ? sel.floor : null };
      if (selection.floor != null) {
        const b = wingBoxes.get(selection.wing);
        const f = FLOORS[Math.min(selection.floor, 4)];
        // put the tag on the facade that faces the camera, at the height of that floor
        const az = viewFor(selection).azim;
        const dx = Math.sin(az), dz = Math.cos(az);
        const hx = (b.x1 - b.x0) / 2, hz = (b.z1 - b.z0) / 2;
        const t = Math.min(hx / Math.max(Math.abs(dx), 1e-3), hz / Math.max(Math.abs(dz), 1e-3)) + 2;
        floorTagPos.set((b.x0 + b.x1) / 2 + dx * t, f.y + f.h / 2, (b.z0 + b.z1) / 2 + dz * t);
        floorTag.innerHTML = `<b>${selection.floor}</b>${ui.floorName(selection.floor)}`;
        floorTag.style.setProperty('--swatch', ui.wing(selection.wing).color);
        floorTag.style.setProperty('--plate-ink', ui.wing(selection.wing).ink);
      }
      applySelection();
      if (!introDone) { pending = selection.wing != null ? selection : null; return; }
      if (source === 'tap' && selection.wing != null) { requestRender(); return; } // keep the camera where the user put it
      flyTo(viewFor(selection));
    },
    render: requestRender,
    snapshot() { renderer.render(scene, camera); return canvas.toDataURL('image/png'); },
  };
}
