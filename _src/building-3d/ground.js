// The ground as flat shapes rather than one big image, so streets, lane markings
// and lawns stay sharp at any zoom. Everything is merged into one mesh with vertex
// colours; the material fades the edges into the page background.
import { BufferGeometry, Float32BufferAttribute, Color, ShapeUtils, MeshLambertMaterial, Vector2, Vector3 } from 'three';
import { STREETS, RIVER_BANK, MASSES, toWorld, UNIT } from './geometry.js';

const GROUND_COLORS = {
  day: { base: '#e9e2d6', walk: '#f4efe7', road: '#dad2c5', lane: '#fbf8f3', plaza: '#efe9df', lawn: '#cddbb6', lawnEdge: '#bccd9f', sand: '#ecd9b6', river: '#a9cad6', river2: '#8fb7c7', bank: '#d6e0c4', footprint: '#d8cfc1' },
  night: { base: '#1c1916', walk: '#23201c', road: '#151310', lane: '#3a352e', plaza: '#211e1a', lawn: '#1d281c', lawnEdge: '#233022', sand: '#2b261e', river: '#10212b', river2: '#0c1a22', bank: '#1a2219', footprint: '#181513' },
};

export function buildGround(theme) {
  const C = Object.fromEntries(Object.entries(GROUND_COLORS[theme]).map(([k, v]) => [k, new Color(v)]));
  const pos = [], col = [];
  const P = (u, v) => toWorld(u, v);
  const push = (x, z, y, c) => { pos.push(x, y, z); col.push(c.r, c.g, c.b); };
  // a filled polygon (points as [x, z] in world space, one colour or one per point)
  function poly(pts, y, color) {
    const tris = ShapeUtils.triangulateShape(pts.map(([x, z]) => new Vector2(x, z)), []);
    tris.forEach((t) => {
      // keep every triangle facing up
      const [a, b, c] = t.map((i) => pts[i]);
      const up = (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]) < 0;
      (up ? t : [t[0], t[2], t[1]]).forEach((i) => push(pts[i][0], pts[i][1], y, Array.isArray(color) ? color[i] : color));
    });
  }
  const rect = (x0, z0, x1, z1, y, c) => poly([[x0, z0], [x1, z0], [x1, z1], [x0, z1]], y, c);
  function roundRect(x0, z0, x1, z1, r, y, c) {
    const pts = [];
    const corner = (cx, cz, a0) => { for (let i = 0; i <= 6; i++) { const a = a0 + (i / 6) * (Math.PI / 2); pts.push([cx + Math.cos(a) * r, cz + Math.sin(a) * r]); } };
    corner(x1 - r, z1 - r, 0); corner(x0 + r, z1 - r, Math.PI / 2); corner(x0 + r, z0 + r, Math.PI); corner(x1 - r, z0 + r, Math.PI * 1.5);
    poly(pts, y, c);
  }
  // a band along a polyline, with round joints
  function band(path, width, y, c) {
    const w = width / 2;
    for (let i = 0; i < path.length - 1; i++) {
      const [ax, az] = path[i], [bx, bz] = path[i + 1];
      const len = Math.hypot(bx - ax, bz - az), nx = -(bz - az) / len * w, nz = (bx - ax) / len * w;
      poly([[ax + nx, az + nz], [bx + nx, bz + nz], [bx - nx, bz - nz], [ax - nx, az - nz]], y, c);
      if (i > 0) { const pts = []; for (let k = 0; k < 16; k++) { const a = (k / 16) * Math.PI * 2; pts.push([ax + Math.cos(a) * w, az + Math.sin(a) * w]); } poly(pts, y, c); }
    }
  }
  function dashes(path, width, dash, gap, y, c) {
    const w = width / 2;
    for (let i = 0; i < path.length - 1; i++) {
      const [ax, az] = path[i], [bx, bz] = path[i + 1];
      const len = Math.hypot(bx - ax, bz - az), dx = (bx - ax) / len, dz = (bz - az) / len;
      for (let s = 0; s + dash <= len; s += dash + gap) {
        const x0 = ax + dx * s, z0 = az + dz * s, x1 = x0 + dx * dash, z1 = z0 + dz * dash;
        poly([[x0 - dz * w, z0 + dx * w], [x1 - dz * w, z1 + dx * w], [x1 + dz * w, z1 - dx * w], [x0 + dz * w, z0 - dx * w]], y, c);
      }
    }
  }
  const m = (units) => units * UNIT; // map units → metres

  rect(-280, -280, 280, 280, 0, C.base);

  // the Spree, darker toward the far bank, with a green strip along this side
  const bank = RIVER_BANK.map(([u, v]) => P(u, v));
  const farX = 420;
  const river = [...bank, [farX, bank[bank.length - 1][1]], [farX, bank[0][1]]];
  poly(river, 0.02, river.map(([x]) => C.river.clone().lerp(C.river2, Math.min(1, Math.max(0, (x - bank[3][0]) / (farX - bank[3][0]))))));
  poly([...bank, ...bank.slice().reverse().map(([x, z]) => [x - m(62), z])], 0.02, C.bank);

  // streets: pavement band, carriageway, dashed centre line
  STREETS.forEach((s) => band(s.path.map(([u, v]) => P(u, v)), m(s.width + 16), 0.04, C.walk));
  STREETS.forEach((s) => band(s.path.map(([u, v]) => P(u, v)), m(s.width), 0.06, C.road));
  STREETS.forEach((s) => dashes(s.path.map(([u, v]) => P(u, v)), m(0.7), m(5), m(6), 0.08, C.lane));

  // courtyard: paved plaza, four lawns, the playground
  const R = (u0, u1, v0, v1) => { const [x0, z0] = P(u0, v0), [x1, z1] = P(u1, v1); return [x0, z0, x1, z1]; };
  rect(...R(174, 451, 380, 617), 0.02, C.plaza);
  [[182, 286, 388, 476], [339, 443, 388, 476], [182, 302, 524, 607], [322, 443, 524, 607]].forEach(([a, b, c, d]) => {
    roundRect(...R(a, b, c, d), m(7), 0.04, C.lawnEdge);
    roundRect(...R(a + 1.5, b - 1.5, c + 1.5, d - 1.5), m(6), 0.06, C.lawn);
  });
  roundRect(...R(386, 432, 540, 590), m(10), 0.08, C.sand);

  // a slightly darker apron where the building meets the ground
  MASSES.forEach(({ r: [u0, u1, v0, v1] }) => rect(...R(u0 - 1.5, u1 + 1.5, v0 - 1.5, v1 + 1.5), 0.03, C.footprint));

  const g = new BufferGeometry();
  g.setAttribute('position', new Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new Float32BufferAttribute(new Float32Array(pos.length).map((_, i) => (i % 3 === 1 ? 1 : 0)), 3));
  g.setAttribute('color', new Float32BufferAttribute(col, 3));
  return g;
}

// Matte ground that fades into the page background toward the edges.
export function groundMaterial() {
  const uBg = { value: new Vector3(0.93, 0.91, 0.87) };
  const material = new MeshLambertMaterial({ vertexColors: true });
  material.onBeforeCompile = (shader) => {
    shader.uniforms.uBg = uBg;
    shader.vertexShader = 'varying vec2 vGroundXZ;\n' + shader.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\nvGroundXZ = (modelMatrix * vec4(transformed, 1.0)).xz;');
    shader.fragmentShader = 'uniform vec3 uBg; varying vec2 vGroundXZ;\n' + shader.fragmentShader.replace('#include <dithering_fragment>',
      '#include <dithering_fragment>\n  gl_FragColor.rgb = mix(gl_FragColor.rgb, uBg, smoothstep(165.0, 275.0, length(vGroundXZ)));');
  };
  material.customProgramCacheKey = () => 'b3d-ground';
  return { material, uBg };
}
