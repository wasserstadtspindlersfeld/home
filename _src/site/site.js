// Small enhancements for every page. The site works without this file:
// it only reshapes the Markdown content into cards, rows and tap-to-open questions.
import { parseDoor, doorHash } from '../building-3d/door.js';

document.documentElement.classList.add('js');

const ICONS = {
  phone: '<path d="M6.5 3.5h3l1.5 4-2 1.3a10 10 0 0 0 6.2 6.2l1.3-2 4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2z"/>',
  mail: '<rect x="3.5" y="5.5" width="17" height="13" rx="2"/><path d="m4 7 8 6 8-6"/>',
  external: '<path d="M14 4.5h5.5V10"/><path d="M19.5 4.5 11 13"/><path d="M18 14v4.5a1 1 0 0 1-1 1H5.5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1H10"/>',
  pin: '<path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/>',
  calendar: '<rect x="3.5" y="5" width="17" height="15" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
  doc: '<path d="M13.5 3.5H7a1.5 1.5 0 0 0-1.5 1.5v14A1.5 1.5 0 0 0 7 20.5h10a1.5 1.5 0 0 0 1.5-1.5V8.5z"/><path d="M13.5 3.5v5h5M9 13h6M9 16.5h6"/>',
  chevron: '<path d="m6 9.5 6 6 6-6"/>',
  calculator: '<rect x="5" y="3.5" width="14" height="17" rx="2"/><path d="M8.5 7.5h7M8.5 12h.01M12 12h.01M15.5 12h.01M8.5 15.5h.01M12 15.5h.01M15.5 15.5h.01"/>',
};
const icon = (name) => `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]}</svg>`;
const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };

// Menu button (phones): a full-screen sheet; the page behind it doesn't scroll
const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('site-nav');
if (toggle && nav) {
  const setOpen = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    nav.dataset.open = String(open);
    document.documentElement.toggleAttribute('data-menu-open', open);
  };
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { setOpen(false); toggle.focus(); } });
  matchMedia('(min-width: 1024px)').addEventListener('change', (e) => { if (e.matches) setOpen(false); });
}

// Light or dark: "system" follows the phone or computer; a light or dark choice is remembered
// on this device. The head of every page applies the saved choice before the first paint.
const root = document.documentElement;
const THEMES = ['system', 'light', 'dark'];
const BAR_COLORS = { light: '#f5f0e8', dark: '#14110e' };
const savedTheme = () => { try { return localStorage.getItem('theme'); } catch { return null; } };
let themeSet = root.hasAttribute('data-theme') && THEMES.includes(savedTheme());
function setTheme(pref) {
  if (pref === 'light' || pref === 'dark') { root.dataset.theme = pref; themeSet = true; }
  else if (themeSet) { delete root.dataset.theme; themeSet = false; } // leave a theme we didn't set alone
  root.dataset.themePref = pref;
  document.querySelectorAll('meta[name="theme-color"]').forEach((m) => {
    const forDark = (m.getAttribute('media') || '').includes('dark');
    m.setAttribute('content', BAR_COLORS[pref === 'system' ? (forDark ? 'dark' : 'light') : pref]);
  });
  document.querySelectorAll('[data-appearance] input').forEach((i) => { i.checked = i.value === pref; });
}
setTheme(THEMES.includes(savedTheme()) ? savedTheme() : 'system');
document.querySelectorAll('[data-appearance]').forEach((group) => group.addEventListener('change', (e) => {
  const pref = e.target.value;
  try { if (pref === 'system') localStorage.removeItem('theme'); else localStorage.setItem('theme', pref); } catch { /* private mode: still switch this page */ }
  setTheme(pref);
}));
window.addEventListener('storage', (e) => { if (e.key === 'theme') setTheme(THEMES.includes(e.newValue) ? e.newValue : 'system'); });
window.addEventListener('pageshow', (e) => { if (e.persisted) setTheme(THEMES.includes(savedTheme()) ? savedTheme() : 'system'); });

// The appearance pop-up in the header closes after a tap on a choice, a tap outside, or Escape
const themeMenu = document.querySelector('.theme-menu');
if (themeMenu) {
  let byPointer = false;
  themeMenu.addEventListener('pointerdown', () => { byPointer = true; });
  themeMenu.addEventListener('keydown', (e) => {
    byPointer = false;
    if (e.key === 'Escape' && themeMenu.open) { themeMenu.open = false; themeMenu.querySelector('summary').focus(); }
  });
  themeMenu.addEventListener('change', () => { if (byPointer) themeMenu.open = false; }); // arrow keys keep it open
  document.addEventListener('click', (e) => { if (themeMenu.open && !themeMenu.contains(e.target)) themeMenu.open = false; });
  window.addEventListener('pagehide', () => { themeMenu.open = false; });
}

// What a link in a fact row does, and how its value reads best
function actionFor(a) {
  const href = a.getAttribute('href') || '';
  if (href.startsWith('tel:')) return { label: 'Call', icon: 'phone' };
  if (href.startsWith('mailto:')) return { label: 'Email', icon: 'mail' };
  if (/\.ics($|\?)/i.test(href)) return { label: 'Calendar', icon: 'calendar' };
  if (/\.pdf($|\?)/i.test(href)) return { label: 'PDF', icon: 'doc' };
  if (/maps\.app\.goo\.gl|google\.[a-z.]+\/maps|maps\.apple/.test(href)) return { label: 'Map', icon: 'pin' };
  return { label: 'Open', icon: 'external' };
}
function tidyValue(a) {
  const text = a.textContent.trim();
  if (/^https?:\/\//.test(text)) {
    try { return new URL(text).hostname.replace(/^www\./, ''); } catch { return text; }
  }
  return text;
}

// Markdown tables with empty headings are label/value lists: turn them into fact rows
document.querySelectorAll('.prose table').forEach((table) => {
  const heads = [...table.querySelectorAll('thead th')];
  const headerless = heads.length > 0 && heads.every((th) => !th.textContent.trim());
  const rows = [...table.querySelectorAll('tbody tr')];
  if (headerless && rows.every((tr) => tr.children.length >= 2)) {
    const list = el('ul', 'facts panel');
    rows.forEach((tr) => {
      const cells = [...tr.children];
      const label = cells.slice(0, -1).map((c) => c.textContent.trim()).filter(Boolean).join(' · ');
      const valueCell = cells[cells.length - 1];
      const link = valueCell.querySelector('a');
      const li = document.createElement('li');
      if (link && valueCell.textContent.trim() === link.textContent.trim()) {
        const act = actionFor(link);
        const a = el('a', 'fact');
        a.href = link.href;
        if (/^https?:/.test(link.getAttribute('href'))) { a.target = '_blank'; a.rel = 'noopener'; }
        a.innerHTML = `<span class="fact-k"></span><span class="fact-v"></span><span class="fact-act">${icon(act.icon)}${act.label}</span>`;
        // a link that only says "Download" or shows a file name reads better as its label
        const text = link.textContent.trim();
        const fileLike = /\.(pdf|ics|mp4|zip)$/i.test(text) || /^(download|link|open|here)$/i.test(text);
        a.querySelector('.fact-k').textContent = fileLike ? '' : label;
        a.querySelector('.fact-v').textContent = fileLike ? label : tidyValue(link);
        li.appendChild(a);
      } else {
        const div = el('div', 'fact', '<span class="fact-k"></span><span class="fact-v"></span>');
        div.querySelector('.fact-k').textContent = label;
        div.querySelector('.fact-v').innerHTML = valueCell.innerHTML;
        li.appendChild(div);
      }
      list.appendChild(li);
    });
    table.replaceWith(list);
    return;
  }
  table.classList.add(headerless ? 'headerless' : 'data');
  if (!headerless) {
    const labels = heads.map((th) => th.textContent.trim());
    rows.forEach((tr) => [...tr.children].forEach((td, i) => { if (labels[i]) td.dataset.label = labels[i]; }));
  }
  const wrap = el('div', 'table-wrap');
  table.replaceWith(wrap);
  wrap.appendChild(table);
});

// Lists of PDF links become download rows
document.querySelectorAll('.prose ul:not(.facts)').forEach((ul) => {
  const items = [...ul.children];
  const isDocs = items.length > 0 && items.every((li) => {
    const a = li.querySelector('a');
    return a && li.children.length === 1 && li.textContent.trim() === a.textContent.trim() && /\.pdf($|\?)/i.test(a.getAttribute('href'));
  });
  if (!isDocs) return;
  ul.classList.add('docs', 'panel');
  items.forEach((li) => {
    const a = li.querySelector('a');
    a.insertAdjacentHTML('afterbegin', icon('doc'));
    a.insertAdjacentHTML('beforeend', '<span class="doc-tag">PDF</span>');
  });
});

// A list of links to sections on the same page becomes a row of chips
document.querySelectorAll('.prose ul').forEach((ul) => {
  const items = [...ul.children];
  if (items.length > 1 && items.every((li) => li.children.length === 1 && li.firstElementChild.matches('a[href^="#"]'))) ul.classList.add('jumps');
});

// The calculator link becomes a button
document.querySelectorAll('.prose a[href$="heating-costs.html"]').forEach((a) => {
  if (!/calculator/i.test(a.textContent)) return;
  a.classList.add('cta');
  const li = a.closest('li');
  if (li) li.classList.add('cta-item');
  a.textContent = 'Open the calculator';
  a.insertAdjacentHTML('afterbegin', icon('calculator'));
});

// Nearby: a heading followed by a photo becomes a place card
const prose = document.querySelector('.prose');
if (prose && prose.hasAttribute('data-places')) {
  [...prose.querySelectorAll('h3, h4')].forEach((h) => {
    const next = h.nextElementSibling;
    const photo = next && next.matches('p') && next.children.length === 1 && next.querySelector(':scope > img') ? next : null;
    if (!photo) return;
    const level = Number(h.tagName[1]);
    const card = el('article', 'place panel');
    h.before(card);
    photo.classList.add('place-img');
    card.append(photo, h);
    let n = card.nextElementSibling;
    while (n && !(/^H[1-6]$/.test(n.tagName) && Number(n.tagName[1]) <= level) && !n.classList.contains('place')) {
      const following = n.nextElementSibling;
      card.appendChild(n);
      n = following;
    }
  });
}

// FAQ: every question opens on tap; links to a question open it
if (document.querySelector('[data-accordion]')) {
  [...prose.querySelectorAll(':scope > h2')].forEach((h2) => {
    const details = el('details', 'qa panel');
    const summary = document.createElement('summary');
    const body = el('div', 'qa-body');
    h2.before(details);
    let n = h2.nextElementSibling;
    while (n && n.tagName !== 'H2') { const following = n.nextElementSibling; body.appendChild(n); n = following; }
    summary.appendChild(h2);
    summary.insertAdjacentHTML('beforeend', icon('chevron'));
    details.append(summary, body);
  });
  const openFromHash = () => {
    const target = location.hash && document.getElementById(decodeURIComponent(location.hash.slice(1)));
    const details = target && target.closest('details');
    if (details) { details.open = true; target.scrollIntoView({ block: 'start' }); }
  };
  openFromHash();
  window.addEventListener('hashchange', openFromHash);
}

// "On this page" links for longer pages
const toc = document.querySelector('[data-toc]');
if (toc) {
  const heads = [...document.querySelectorAll('.prose h2[id]')];
  if (heads.length >= 3) {
    const list = document.createElement('ul');
    heads.forEach((h) => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = `#${h.id}`;
      a.textContent = h.textContent;
      li.appendChild(a);
      list.appendChild(li);
    });
    toc.appendChild(list);
    toc.hidden = false;
  }
}

// "Find a door" on the home page sends you to the 3D map
const finder = document.querySelector('.door-finder');
if (finder) {
  const input = finder.querySelector('input');
  const help = finder.querySelector('.finder-help');
  const original = help.innerHTML;
  finder.addEventListener('submit', (e) => {
    e.preventDefault();
    const r = parseDoor(input.value);
    if (r.error) {
      help.textContent = r.error;
      finder.classList.add('has-error');
      input.focus();
      return;
    }
    location.href = `${finder.getAttribute('action')}#${doorHash(r)}`;
  });
  input.addEventListener('input', () => {
    if (!finder.classList.contains('has-error')) return;
    finder.classList.remove('has-error');
    help.innerHTML = original;
  });
}
