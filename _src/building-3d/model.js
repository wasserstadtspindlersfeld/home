// The building as one merged mesh. Every wall, floor plate and roof remembers its
// part (wing × storey), and a uniform array lifts, fades, tints or ghosts each part.
// Drawing it takes one draw call instead of one per piece (there are about 260),
// which is what keeps the zoomed-out view smooth on phones.
import { BufferGeometry, Float32BufferAttribute, Color, Vector3, MeshLambertMaterial, MeshDepthMaterial } from 'three';
import { MASSES, FLOORS, PAVILION_TOP, LINK_TOP, toWorld } from './geometry.js';
import { BAYS, BAY_WIDTH, facadeLayer } from './textures.js';

export const LEVELS = 6; // storeys 0-4, and 5 for roofs and parapets
export const PARTS = 10 * LEVELS; // wings 1-9, and 0 for the two unnumbered link blocks
const partOf = (wing, level) => wing * LEVELS + level;

// what a surface shows: a facade strip (texture-array layer >= 0), the roof texture, or plain colour
const ROOF = -1, PLAIN = -2;
// surface roles, coloured per theme by recolor()
const ROLE = { FACADE: 0, ROOF: 1, PLATE: 2, CORNICE: 3, CAP: 4, ROOFBOX: 5, ROOFBOX_TOP: 6 };

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

// Builds the geometry, plus one box per part of each mass for tap-picking and for
// hiding labels behind the building (cheap maths instead of raycasting triangles).
export function buildModel() {
  const pos = [], nor = [], uv = [], part = [], kind = [], roles = [];
  const boxes = [];
  const wingBoxes = new Map();
  let curPart = 0, curKind = PLAIN, curRole = ROLE.PLATE;

  const vtx = (p, n, t) => {
    pos.push(p[0], p[1], p[2]); nor.push(n[0], n[1], n[2]); uv.push(t[0], t[1]);
    part.push(curPart); kind.push(curKind); roles.push(curRole);
  };
  const normal = (a, b, c) => {
    const ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2];
    const vx = c[0] - a[0], vy = c[1] - a[1], vz = c[2] - a[2];
    const nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
    const l = Math.hypot(nx, ny, nz) || 1;
    return [nx / l, ny / l, nz / l];
  };
  const quad = (a, b, c, d, ta, tb, tc, td) => {
    const n = normal(a, b, c);
    vtx(a, n, ta); vtx(b, n, tb); vtx(c, n, tc); vtx(a, n, ta); vtx(c, n, tc); vtx(d, n, td);
  };
  const tri = (a, b, c, ta, tb, tc) => { const n = normal(a, b, c); vtx(a, n, ta); vtx(b, n, tb); vtx(c, n, tc); };
  const O = [0, 0];

  // Four walls. vb/vt are the strip heights used at the bottom and top (0 = bottom of the
  // storey strip, 1 = top); texture-array rows run top-down, hence 1 - v.
  const U = (t) => t / (BAYS * BAY_WIDTH);
  function walls(x0, x1, z0, z1, y0, y1, vb = 0, vt = 1, inside = false) {
    const B = 1 - vb, T = 1 - vt;
    [
      [[x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1], U(x0), U(x1)],
      [[x1, y0, z0], [x0, y0, z0], [x0, y1, z0], [x1, y1, z0], U(x1), U(x0)],
      [[x0, y0, z0], [x0, y0, z1], [x0, y1, z1], [x0, y1, z0], U(z0), U(z1)],
      [[x1, y0, z1], [x1, y0, z0], [x1, y1, z0], [x1, y1, z1], U(z1), U(z0)],
    ].forEach(([a, b, c, d, ua, ub]) => {
      if (inside) quad(b, a, d, c, [ub, B], [ua, B], [ua, T], [ub, T]);
      else quad(a, b, c, d, [ua, B], [ub, B], [ub, T], [ua, T]);
    });
  }
  function caps(x0, x1, z0, z1, y0, y1) {
    quad([x0, y1, z1], [x1, y1, z1], [x1, y1, z0], [x0, y1, z0], O, O, O, O);
    quad([x0, y0, z0], [x1, y0, z0], [x1, y0, z1], [x0, y0, z1], O, O, O, O);
  }
  function hipRoof(x0, x1, z0, z1, b, h) {
    const s = 1 / 22; // one roof-texture tile per 22 m: skylights a few metres apart
    const t = (p) => [p[0] * s, p[2] * s];
    const q = (p1, p2, p3, p4) => quad(p1, p2, p3, p4, t(p1), t(p2), t(p3), t(p4));
    const tr = (p1, p2, p3) => tri(p1, p2, p3, t(p1), t(p2), t(p3));
    const lx = x1 - x0, lz = z1 - z0, xc = (x0 + x1) / 2, zc = (z0 + z1) / 2;
    if (lx >= lz) {
      const hh = lz / 2;
      const r1 = [x0 + hh, b + h, zc], r2 = [x1 - hh, b + h, zc];
      q([x0, b, z1], [x1, b, z1], r2, r1);
      q([x1, b, z0], [x0, b, z0], r1, r2);
      tr([x0, b, z0], [x0, b, z1], r1);
      tr([x1, b, z1], [x1, b, z0], r2);
    } else {
      const hh = lx / 2;
      const r1 = [xc, b + h, z0 + hh], r2 = [xc, b + h, z1 - hh];
      q([x1, b, z1], [x1, b, z0], r1, r2);
      q([x0, b, z0], [x0, b, z1], r2, r1);
      tr([x0, b, z1], [x1, b, z1], r2);
      tr([x1, b, z0], [x0, b, z0], r1);
    }
  }
  const addBox = (wing, level, x0, y0, z0, x1, y1, z1) => boxes.push({ wing, part: partOf(wing, level), min: [x0, y0, z0], max: [x1, y1, z1] });

  MASSES.forEach((m) => {
    const [x0, z0] = toWorld(m.r[0], m.r[2]);
    const [x1, z1] = toWorld(m.r[1], m.r[3]);
    const finish = m.finish || 'brick';
    const shared = sharedSides(m);
    const wb = wingBoxes.get(m.wing) || { x0: Infinity, x1: -Infinity, z0: Infinity, z1: -Infinity };
    wingBoxes.set(m.wing, { x0: Math.min(wb.x0, x0), x1: Math.max(wb.x1, x1), z0: Math.min(wb.z0, z0), z1: Math.max(wb.z1, z1) });

    const storeys = m.type === 'link' ? 4 : 5;
    for (let L = 0; L < storeys; L++) {
      const f = FLOORS[L];
      let y0 = f.y, y1 = f.y + f.h;
      let k = L === 0 ? 'ground' : L === 3 ? 'cornice' : 'upper';
      let [wx0, wx1, wz0, wz1] = [x0, x1, z0, z1];
      if (L === 4) {
        if (m.type === 'pavilion') { k = 'top'; y1 = PAVILION_TOP; } else {
          k = 'attic';
          const inset = 1.0;
          if (!shared.w) wx0 += inset; if (!shared.e) wx1 -= inset;
          if (!shared.n) wz0 += inset; if (!shared.s) wz1 -= inset;
        }
      }
      curPart = partOf(m.wing, L);
      curKind = facadeLayer(k === 'attic' ? 'brick' : finish, k); curRole = ROLE.FACADE;
      walls(wx0, wx1, wz0, wz1, y0, y1);
      curKind = PLAIN; curRole = ROLE.PLATE;
      caps(wx0, wx1, wz0, wz1, y0 + 0.02, y1 - 0.02);
      addBox(m.wing, L, wx0, y0, wz0, wx1, y1, wz1);
      if (L === 3 && m.type === 'body') {
        const o = 0.35;
        curRole = ROLE.CORNICE;
        caps(x0 - o, x1 + o, z0 - o, z1 + o, y1 - 0.45, y1);
        walls(x0 - o, x1 + o, z0 - o, z1 + o, y1 - 0.45, y1);
      }
      if (L === 4 && m.type === 'body') {
        const h = Math.min(2.2, Math.min(wx1 - wx0, wz1 - wz0) * 0.12);
        curPart = partOf(m.wing, 5); curKind = ROOF; curRole = ROLE.ROOF;
        hipRoof(wx0 - 0.3, wx1 + 0.3, wz0 - 0.3, wz1 + 0.3, y1, h);
        addBox(m.wing, 5, wx0 - 0.3, y1, wz0 - 0.3, wx1 + 0.3, y1 + h, wz1 + 0.3);
      }
    }
    if (m.type !== 'body') {
      const top = m.type === 'pavilion' ? PAVILION_TOP : LINK_TOP;
      curPart = partOf(m.wing, 5);
      curKind = facadeLayer(finish, 'upper'); curRole = ROLE.FACADE;
      walls(x0, x1, z0, z1, top, top + 0.9, 0.02, 0.16); // parapet, from the plain brick under the windows
      walls(x0, x1, z0, z1, top, top + 0.9, 0.02, 0.16, true);
      curKind = PLAIN; curRole = ROLE.CAP;
      caps(x0 + 0.3, x1 - 0.3, z0 + 0.3, z1 - 0.3, top, top + 0.05);
      addBox(m.wing, 5, x0, top, z0, x1, top + 0.9, z1);
      if (m.type === 'pavilion' && (x1 - x0) > 12 && (z1 - z0) > 12) {
        const cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
        curRole = ROLE.ROOFBOX;
        walls(cx - 3, cx + 3, cz - 2.2, cz + 2.2, top, top + 2.8);
        curRole = ROLE.ROOFBOX_TOP;
        caps(cx - 3, cx + 3, cz - 2.2, cz + 2.2, top, top + 2.8);
        addBox(m.wing, 5, cx - 3, top, cz - 2.2, cx + 3, top + 2.8, cz + 2.2);
      }
    }
  });

  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new Float32BufferAttribute(pos, 3));
  geometry.setAttribute('normal', new Float32BufferAttribute(nor, 3));
  geometry.setAttribute('uv', new Float32BufferAttribute(uv, 2));
  geometry.setAttribute('color', new Float32BufferAttribute(new Float32Array(roles.length * 3), 3));
  geometry.setAttribute('aPart', new Float32BufferAttribute(part, 1));
  geometry.setAttribute('aKind', new Float32BufferAttribute(kind, 1));
  geometry.computeBoundingSphere();
  return { geometry, roles: Uint8Array.from(roles), boxes, wingBoxes };
}

// Colours the plain surfaces for the current theme (facades and roofs stay white,
// their textures carry the colour).
export function recolor(geometry, roles, palette) {
  const byRole = [];
  byRole[ROLE.FACADE] = byRole[ROLE.ROOF] = new Color(1, 1, 1);
  byRole[ROLE.PLATE] = new Color(palette.plate);
  byRole[ROLE.CORNICE] = new Color(palette.cornice);
  byRole[ROLE.CAP] = new Color(palette.cap);
  byRole[ROLE.ROOFBOX] = new Color(palette.roofbox);
  byRole[ROLE.ROOFBOX_TOP] = new Color(palette.roofboxTop);
  const col = geometry.attributes.color;
  roles.forEach((r, i) => col.setXYZ(i, byRole[r].r, byRole[r].g, byRole[r].b));
  col.needsUpdate = true;
}

// The materials for the merged mesh. The same uniforms drive all three:
//   uPart[i] = (lift, fade, tint, dim) for part i; a negative tint means the pastel of the
//   wing's colour, so a wing fading out keeps its colour while the next one fades in
//   solid: everything not fading;  ghost: the fading storeys, see-through;  depth: shadows
export function createMaterials(textures) {
  const uniforms = {
    uPart: { value: new Float32Array(PARTS * 4) },
    uWingColor: { value: Array.from({ length: PARTS / LEVELS }, () => new Vector3(1, 1, 1)) },
    uClay: { value: new Vector3(0.9, 0.88, 0.85) },
    uGlow: { value: 0 },
    uFacade: { value: textures.facade },
    uGlowMap: { value: textures.glow },
    uRoof: { value: textures.roof },
  };
  const vertexHead = `#define B3D_PARTS ${PARTS}
attribute float aPart; attribute float aKind;
uniform vec4 uPart[B3D_PARTS]; uniform vec3 uWingColor[${PARTS / LEVELS}];
varying float vFade; varying float vTint; varying float vDim; varying float vKind; varying vec2 vTexUv; varying vec3 vTintColor;
`;
  const vertexBody = `#include <begin_vertex>
vec4 partState = uPart[int(aPart + 0.5)];
transformed.y += partState.x;
vFade = partState.y; vTint = partState.z; vDim = partState.w; vKind = aKind; vTexUv = uv;
vec3 wingColor = uWingColor[int(aPart + 0.5) / ${LEVELS}];
vTintColor = partState.z < 0.0 ? mix(wingColor, vec3(1.0), 0.45) : wingColor;`;
  const fragmentHead = `uniform sampler2DArray uFacade; uniform sampler2DArray uGlowMap; uniform sampler2D uRoof;
uniform float uGlow; uniform vec3 uClay;
varying float vFade; varying float vTint; varying float vDim; varying float vKind; varying vec2 vTexUv; varying vec3 vTintColor;
`;
  const hook = (material, ghost) => {
    material.onBeforeCompile = (shader) => {
      Object.assign(shader.uniforms, uniforms);
      shader.vertexShader = vertexHead + shader.vertexShader.replace('#include <begin_vertex>', vertexBody);
      shader.fragmentShader = fragmentHead + shader.fragmentShader
        .replace('void main() {', `void main() {\n  if (${ghost ? 'vFade < 0.001' : 'vFade > 0.001'}) discard;`)
        // one texture read per pixel: the facade strip, the roof, or none for plain surfaces
        // (gradients taken up front, so the reads may sit inside branches)
        .replace('#include <map_fragment>', `
  vec2 uvDx = dFdx(vTexUv), uvDy = dFdy(vTexUv);
  if (vKind > -0.5) diffuseColor.rgb *= textureGrad(uFacade, vec3(vTexUv, vKind), uvDx, uvDy).rgb;
  else if (vKind > -1.5) diffuseColor.rgb *= textureGrad(uRoof, vTexUv, uvDx, uvDy).rgb;`)
        .replace('#include <emissivemap_fragment>', `
  totalEmissiveRadiance = (uGlow > 0.0 && vKind > -0.5) ? textureGrad(uGlowMap, vec3(vTexUv, vKind), uvDx, uvDy).rgb * uGlow : vec3(0.0);`)
        .replace('#include <dithering_fragment>', `#include <dithering_fragment>
  gl_FragColor.rgb = mix(gl_FragColor.rgb, vTintColor * (0.5 + 0.5 * dot(gl_FragColor.rgb, vec3(0.333))), abs(vTint));
  gl_FragColor.rgb = mix(gl_FragColor.rgb, uClay, vDim);${ghost ? '\n  gl_FragColor.a *= 1.0 - 0.86 * vFade;' : ''}`);
    };
    material.customProgramCacheKey = () => (ghost ? 'b3d-ghost' : 'b3d-solid');
    return material;
  };
  const solid = hook(new MeshLambertMaterial({ vertexColors: true, emissive: 0xffffff }), false);
  const ghost = hook(new MeshLambertMaterial({ vertexColors: true, emissive: 0xffffff, transparent: true, depthWrite: false }), true);
  // shadows: lifted storeys cast from where they float, half-faded ones stop casting
  const depth = new MeshDepthMaterial();
  depth.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, uniforms);
    shader.vertexShader = vertexHead + shader.vertexShader.replace('#include <begin_vertex>', vertexBody);
    shader.fragmentShader = 'varying float vFade;\n' + shader.fragmentShader.replace('void main() {', 'void main() {\n  if (vFade > 0.5) discard;');
  };
  depth.customProgramCacheKey = () => 'b3d-depth';
  return { solid, ghost, depth, uniforms };
}

// Ray against an axis-aligned box, lifted by `lift`; returns the entry distance or Infinity.
export function rayBox(o, d, b, lift) {
  let t0 = 0, t1 = Infinity;
  for (let i = 0; i < 3; i++) {
    const lo = b.min[i] + (i === 1 ? lift : 0), hi = b.max[i] + (i === 1 ? lift : 0);
    if (Math.abs(d[i]) < 1e-9) { if (o[i] < lo || o[i] > hi) return Infinity; continue; }
    let a = (lo - o[i]) / d[i], c = (hi - o[i]) / d[i];
    if (a > c) [a, c] = [c, a];
    if (a > t0) t0 = a;
    if (c < t1) t1 = c;
    if (t0 > t1) return Infinity;
  }
  return t0;
}
