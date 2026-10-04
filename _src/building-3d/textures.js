// Canvas-drawn textures: one facade strip per storey type (8 window bays wide)
// and one big ground map with streets, courtyard and the Spree.
import { STREETS, RIVER_BANK, MASSES, toWorld } from './geometry.js';

export const BAYS = 8;
export const BAY_WIDTH = 4.2; // metres per window bay
const W = 1024, H = 128;

function rng(seed) {
  let s = seed >>> 0;
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
}

const PALETTE = {
  brick: ['#a5432c', '#ad4830', '#9d3f2a', '#b04d34'],
  mortar: 'rgba(40, 14, 8, 0.10)',
  stone: '#dacbab',
  plinth: '#6f2e20',
  frame: '#f1eee6',
  glassTop: '#5a6a72',
  glassBottom: '#26313a',
  attic: '#e5e8e3',
  atticLine: '#9ba4a0',
  plaster: '#e3d1a6',
  plasterLine: 'rgba(120, 90, 40, 0.18)',
  surround: '#f4ecd8',
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
export function facadeCanvas(kind, finish, night, seed = 1) {
  const c = document.createElement('canvas');
  c.width = W; c.height = H;
  const ctx = c.getContext('2d');
  const r = rng(seed * 7919 + kind.length * 31 + (finish === 'plaster' ? 17 : 0));
  const bw = W / BAYS;
  ctx.fillStyle = night ? '#000' : (kind === 'attic' ? PALETTE.attic : finish === 'plaster' ? PALETTE.plaster : PALETTE.brick[0]);
  ctx.fillRect(0, 0, W, H);

  if (!night && kind !== 'attic') {
    if (finish === 'brick') {
      for (let i = 0; i < 260; i++) {
        ctx.fillStyle = PALETTE.brick[1 + Math.floor(r() * 3)];
        ctx.globalAlpha = 0.35;
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
      ctx.fillStyle = 'rgba(60, 18, 10, 0.25)';
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
    ctx.fillRect(wx + ww / 2 - 1, wy + arch, 2, wh - arch);
    ctx.fillStyle = PALETTE.stone;
    ctx.fillRect(wx - 5, wy + wh, ww + 10, 4);
  }

  if (!night) {
    if (kind === 'ground' && finish === 'brick') {
      ctx.fillStyle = PALETTE.plinth;
      ctx.fillRect(0, H - 12, W, 12);
    }
    if (kind === 'cornice') {
      ctx.fillStyle = PALETTE.stone;
      ctx.fillRect(0, 0, W, 14);
      ctx.fillStyle = finish === 'plaster' ? 'rgba(120, 90, 40, 0.35)' : PALETTE.plinth;
      for (let x = 2; x < W; x += 10) ctx.fillRect(x, 16, 5, 6); // dentil frieze, as on the real cornice
    }
  }
  return c;
}

// Ground map --------------------------------------------------------------
export const GROUND = { x0: -280, x1: 280, z0: -280, z1: 280, size: 2048 };

const GROUND_COLORS = {
  day: { base: '#e3e6df', walk: '#eef0ea', road: '#cfd4cc', lawn: '#c7d7b3', lawnEdge: '#b6c9a0', plaza: '#ece7dc', sand: '#e7d8b4', river: '#a8c6d2', river2: '#8fb4c4', bankGreen: '#cddcbd', label: '#68716c', riverLabel: '#4f7a8d', fade: '#eef0eb', footprint: '#d7dad3' },
  night: { base: '#1b2120', walk: '#232a28', road: '#141918', lawn: '#1f2b21', lawnEdge: '#26342a', plaza: '#272c29', sand: '#2d2a22', river: '#0f2029', river2: '#0c1a22', bankGreen: '#1d2a20', label: '#8d9894', riverLabel: '#6f9cb0', fade: '#121716', footprint: '#20262a' },
};

export function groundCanvas(night, fonts) {
  const C = night ? GROUND_COLORS.night : GROUND_COLORS.day;
  const S = GROUND.size;
  const c = document.createElement('canvas');
  c.width = c.height = S;
  const ctx = c.getContext('2d');
  const k = S / (GROUND.x1 - GROUND.x0);
  const P = (u, v) => { const [x, z] = toWorld(u, v); return [(x - GROUND.x0) * k, (z - GROUND.z0) * k]; };
  const len = (units) => units * 0.45 * k;

  ctx.fillStyle = C.base;
  ctx.fillRect(0, 0, S, S);

  // River Spree
  ctx.beginPath();
  const bank = RIVER_BANK.map(([u, v]) => P(u, v));
  ctx.moveTo(bank[0][0], bank[0][1]);
  bank.forEach(([x, y]) => ctx.lineTo(x, y));
  ctx.lineTo(S + 50, bank[bank.length - 1][1]);
  ctx.lineTo(S + 50, -50);
  ctx.lineTo(bank[0][0], -50);
  ctx.closePath();
  const rg = ctx.createLinearGradient(bank[3][0], 0, S, 0);
  rg.addColorStop(0, C.river); rg.addColorStop(1, C.river2);
  ctx.fillStyle = rg;
  ctx.fill();
  // riverside green strip
  ctx.beginPath();
  bank.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
  for (let i = bank.length - 1; i >= 0; i--) ctx.lineTo(bank[i][0] - len(62), bank[i][1]);
  ctx.closePath();
  ctx.fillStyle = C.bankGreen;
  ctx.fill();

  // Streets: sidewalk band, then carriageway
  const strokePath = (path, width, color) => {
    ctx.beginPath();
    path.forEach(([u, v], i) => { const [x, y] = P(u, v); i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); });
    ctx.strokeStyle = color; ctx.lineWidth = len(width); ctx.lineJoin = 'round'; ctx.lineCap = 'butt';
    ctx.stroke();
  };
  STREETS.forEach((s) => strokePath(s.path, s.width + 16, C.walk));
  STREETS.forEach((s) => strokePath(s.path, s.width, C.road));

  // Courtyard: lawns split by a north-south and an east-west path
  const rect = (u0, u1, v0, v1, color, radius = 6) => {
    const [x0, y0] = P(u0, v0), [x1, y1] = P(u1, v1);
    ctx.fillStyle = color;
    ctx.beginPath();
    const args = [Math.min(x0, x1), Math.min(y0, y1), Math.abs(x1 - x0), Math.abs(y1 - y0)];
    if (ctx.roundRect) ctx.roundRect(...args, len(radius)); else ctx.rect(...args);
    ctx.fill();
  };
  rect(174, 451, 380, 617, C.plaza, 0);
  [[182, 286, 388, 476], [339, 443, 388, 476], [182, 302, 524, 607], [322, 443, 524, 607]].forEach(([a, b, c2, d]) => {
    rect(a, b, c2, d, C.lawnEdge, 7);
    rect(a + 1.5, b - 1.5, c2 + 1.5, d - 1.5, C.lawn, 6);
  });
  rect(386, 432, 540, 590, C.sand, 10); // playground

  // soft shadow where the building meets the ground
  ctx.fillStyle = C.footprint;
  MASSES.forEach(({ r: [u0, u1, v0, v1] }) => {
    const [x0, y0] = P(u0 - 1.5, v0 - 1.5), [x1, y1] = P(u1 + 1.5, v1 + 1.5);
    ctx.fillRect(x0, y0, x1 - x0, y1 - y0);
  });

  // fade the edges into the page background
  const fade = ctx.createRadialGradient(S / 2, S / 2, S * 0.3, S / 2, S / 2, S * 0.5);
  fade.addColorStop(0, 'rgba(0,0,0,0)');
  fade.addColorStop(1, C.fade);
  ctx.fillStyle = fade;
  ctx.fillRect(0, 0, S, S);
  return c;
}

export function roofCanvas(night) {
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const ctx = c.getContext('2d');
  ctx.fillStyle = night ? '#2a3130' : '#6d7975';
  ctx.fillRect(0, 0, 256, 256);
  const r = rng(99);
  for (let i = 0; i < 900; i++) {
    ctx.fillStyle = night ? 'rgba(255,255,255,0.03)' : `rgba(${r() < 0.5 ? '0,0,0' : '255,255,255'},0.05)`;
    ctx.fillRect(r() * 256, r() * 256, 2, 2);
  }
  // skylights in rows, like the real roofs
  ctx.fillStyle = night ? '#3b4442' : '#c9d0cd';
  for (let y = 24; y < 256; y += 64) for (let x = 14; x < 256; x += 42) ctx.fillRect(x, y, 16, 22);
  return c;
}
