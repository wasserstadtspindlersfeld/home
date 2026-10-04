// Small enhancements for every page. The site works without this file.
import { parseDoor, doorHash } from '../building-3d/door.js';

document.documentElement.classList.add('js');

// Menu button (phones)
const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('site-nav');
if (toggle && nav) {
  const setOpen = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    nav.dataset.open = String(open);
  };
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
}

// Markdown tables: two empty header cells means a label/value list
document.querySelectorAll('.prose table').forEach((table) => {
  const heads = [...table.querySelectorAll('thead th')];
  const headerless = heads.length > 0 && heads.every((th) => !th.textContent.trim());
  if (headerless) {
    table.classList.add(heads.length === 2 ? 'kv' : 'rows');
  } else {
    table.classList.add('data');
    const labels = heads.map((th) => th.textContent.trim());
    table.querySelectorAll('tbody tr').forEach((tr) => {
      [...tr.children].forEach((td, i) => { if (labels[i]) td.dataset.label = labels[i]; });
    });
  }
  const wrap = document.createElement('div');
  wrap.className = 'table-wrap';
  table.replaceWith(wrap);
  wrap.appendChild(table);
});

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
