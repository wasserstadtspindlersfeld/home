// Canvas-drawn textures: one facade strip per storey type (8 window bays wide),
// packed into a single texture array, and a tiling roof texture with skylights.

export const BAYS = 8;
export const BAY_WIDTH = 4.2; // metres per window bay
const W = 1024, H = 128; // drawing units of one facade strip; the canvas may be drawn larger

// Every facade strip, in texture-array order. Walls refer to a strip by its index.
export const FACADE_LAYERS = ['ground', 'upper', 'cornice', 'top', 'attic']
  .flatMap((kind) => ['brick', 'plaster'].map((finish) => `${finish}:${kind}`));
export const facadeLayer = (finish, kind) => FACADE_LAYERS.indexOf(`${finish}:${kind}`);

function rng(seed) {
  let s = seed >>> 0;
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
}

// A soft architectural model of the real building: red brick, white frames,
// stone sills and cornices, slate-grey glass. Wing 5 has a cream rendered facade.
const PALETTE = {
  brick: ['#c97f67', '#c3775f', '#ce8870', '#bd715a'],
  mortar: 'rgba(255, 236, 222, 0.09)',
  stone: '#f1e8dc',
  plinth: '#a8624d',
  frame: '#f8f3ec',
  glassTop: '#9aabb3',
  glassBottom: '#788c96',
  attic: '#f3efe9',
  atticLine: '#d9d0c4',
  plaster: '#ead8b4',
  plasterLine: 'rgba(150, 115, 60, 0.12)',
  surround: '#f6eddb',
  lit: ['#ffc56f', '#ffd596', '#ffb85c', '#ffe1ae'],
};

function windowPath(ctx, x, y, w, h, arch) {
  ctx.beginPath();
  ctx.moveTo(x, y + h);
  ctx.lineTo(x, y + arch);
  if (arch > 0) ctx.quadraticCurveTo(x + w / 2, y - arch * 0.9, x + w, y + arch);
  else ctx.lineTo(x + w, y);
  ctx.lineTo(x + w, y + h);
  ctx.closePath();
}

// kind: ground | upper | cornice | top | attic     finish: brick | plaster     night: emissive map
// scale draws the same strip on a bigger canvas, for sharper windows on big screens.
function facadeCanvas(kind, finish, night, seed = 1, scale = 1) {
  const c = document.createElement('canvas');
  c.width = Math.round(W * scale); c.height = Math.round(H * scale);
  const ctx = c.getContext('2d');
  ctx.scale(scale, scale);
  const r = rng(seed * 7919 + kind.length * 31 + (finish === 'plaster' ? 17 : 0));
  const bw = W / BAYS;
  ctx.fillStyle = night ? '#000' : (kind === 'attic' ? PALETTE.attic : finish === 'plaster' ? PALETTE.plaster : PALETTE.brick[0]);
  ctx.fillRect(0, 0, W, H);

  if (!night && kind !== 'attic') {
    if (finish === 'brick') {
      for (let i = 0; i < 260; i++) {
        ctx.fillStyle = PALETTE.brick[1 + Math.floor(r() * 3)];
        ctx.globalAlpha = 0.5;
        ctx.fillRect(r() * W, Math.floor(r() * H / 3) * 3, 6 + r() * 14, 3);
      }
      ctx.globalAlpha = 1;
      ctx.fillStyle = PALETTE.mortar;
      for (let y = 0; y < H; y += 3) ctx.fillRect(0, y, W, 1);
    } else {
      ctx.fillStyle = PALETTE.plasterLine;
      if (kind === 'ground') for (let y = 10; y < H; y += 14) ctx.fillRect(0, y, W, 2);
    }
  }

  for (let b = 0; b < BAYS; b++) {
    const x0 = b * bw;
    const lit = r() < 0.42;
    const litColor = PALETTE.lit[Math.floor(r() * PALETTE.lit.length)];
    if (kind === 'attic') {
      const wy = H * 0.24, wh = H * 0.5;
      if (night) {
        if (lit) { ctx.fillStyle = litColor; ctx.fillRect(x0 + 4, wy, bw - 8, wh); }
        continue;
      }
      const g = ctx.createLinearGradient(0, wy, 0, wy + wh);
      g.addColorStop(0, PALETTE.glassTop); g.addColorStop(1, PALETTE.glassBottom);
      ctx.fillStyle = g;
      ctx.fillRect(x0 + 4, wy, bw - 8, wh);
      ctx.fillStyle = PALETTE.atticLine;
      ctx.fillRect(x0 + bw / 2 - 1, wy, 2, wh);
      ctx.fillRect(x0, H - 5, bw, 5);
      continue;
    }
    const tall = kind === 'ground';
    const ww = bw * (tall ? 0.42 : kind === 'top' ? 0.32 : 0.36);
    const wh = H * (tall ? 0.66 : kind === 'top' ? 0.46 : 0.56);
    const wx = x0 + (bw - ww) / 2;
    const wy = kind === 'cornice' ? H * 0.3 : tall ? H * 0.16 : H * 0.2;
    const arch = finish === 'brick' ? ww * 0.16 : 0;
    if (night) {
      if (lit) { ctx.fillStyle = litColor; windowPath(ctx, wx, wy, ww, wh, arch); ctx.fill(); }
      continue;
    }
    if (finish === 'plaster') {
      ctx.fillStyle = PALETTE.surround;
      ctx.fillRect(wx - 5, wy - 6, ww + 10, wh + 12);
    } else {
      ctx.fillStyle = 'rgba(95, 40, 28, 0.22)';
      windowPath(ctx, wx - 4, wy - 3, ww + 8, wh + 6, arch);
      ctx.fill();
    }
    const g = ctx.createLinearGradient(0, wy, 0, wy + wh);
    g.addColorStop(0, PALETTE.glassTop); g.addColorStop(1, PALETTE.glassBottom);
    ctx.fillStyle = g;
    windowPath(ctx, wx, wy, ww, wh, arch);
    ctx.fill();
    ctx.strokeStyle = PALETTE.frame;
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.fillStyle = PALETTE.frame;
    ctx.fillRect(wx + ww / 2 - 1, wy + arch, 2, wh - arch);
    ctx.fillStyle = PALETTE.stone;
    ctx.fillRect(wx - 5, wy + wh, ww + 10, 4);
  }

  if (!night) {
    if (kind === 'ground') {
      if (finish === 'brick') { ctx.fillStyle = PALETTE.plinth; ctx.fillRect(0, H - 10, W, 10); }
      // soft contact shadow where the walls meet the ground
      const ao = ctx.createLinearGradient(0, H, 0, H * 0.55);
      ao.addColorStop(0, 'rgba(60, 35, 25, 0.18)');
      ao.addColorStop(1, 'rgba(60, 35, 25, 0)');
      ctx.fillStyle = ao;
      ctx.fillRect(0, H * 0.55, W, H * 0.45);
    }
    if (kind === 'cornice') {
      ctx.fillStyle = PALETTE.stone;
      ctx.fillRect(0, 0, W, 14);
      ctx.fillStyle = finish === 'plaster' ? 'rgba(150, 120, 70, 0.25)' : 'rgba(120, 60, 45, 0.35)';
      for (let x = 2; x < W; x += 10) ctx.fillRect(x, 16, 5, 6); // dentil frieze, as on the real cornice
    }
  }
  return c;
}

// All facade strips as one RGBA texture-array image (layer order = FACADE_LAYERS).
// Rows run top to bottom, so a wall's v coordinate is flipped when it is built.
export function facadeLayers(night, scale) {
  const w = Math.round(W * scale), h = Math.round(H * scale);
  const data = new Uint8Array(w * h * 4 * FACADE_LAYERS.length);
  FACADE_LAYERS.forEach((key, i) => {
    const [finish, kind] = key.split(':');
    const seed = ['ground', 'upper', 'cornice', 'top', 'attic'].indexOf(kind) + 1;
    const c = facadeCanvas(kind, finish, night, seed, scale);
    data.set(c.getContext('2d').getImageData(0, 0, w, h).data, i * w * h * 4);
  });
  return { data, width: w, height: h, depth: FACADE_LAYERS.length };
}

// Slate roofs with rows of white skylights, like the real ones.
export function roofCanvas(night) {
  const c = document.createElement('canvas');
  c.width = c.height = 512;
  const ctx = c.getContext('2d');
  ctx.scale(2, 2);
  ctx.fillStyle = night ? '#2a2f30' : '#7c8684';
  ctx.fillRect(0, 0, 256, 256);
  const r = rng(99);
  for (let i = 0; i < 900; i++) {
    ctx.fillStyle = night ? 'rgba(255,255,255,0.03)' : `rgba(${r() < 0.5 ? '30,36,38' : '255,255,255'},0.05)`;
    ctx.fillRect(r() * 256, r() * 256, 2, 2);
  }
  ctx.fillStyle = night ? '#363c3d' : '#c3cac9';
  for (let y = 20; y < 256; y += 64) for (let x = 10; x < 256; x += 32) ctx.fillRect(x, y, 13, 18);
  return c;
}
