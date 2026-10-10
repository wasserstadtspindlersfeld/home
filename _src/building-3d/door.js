// Door numbers are wing.floor.door, e.g. 1.2.3 = wing 1, 2nd floor, door 3.
// Phones with a German keyboard type commas, so any separator is accepted,
// and "9214" is read as 9.2.14 because wing and floor are always one digit.

// What the messages say, in the page's language
const MESSAGES = {
  en: {
    empty: 'Type a door number like 1.2.3, or just a wing number.',
    digits: 'Door numbers only use digits, like 1.2.3 (wing, floor, door).',
    shape: 'Door numbers look like 1.2.3: wing, floor, door.',
    wing: 'Wing numbers go from 1 to 9.',
    top: (max, floor) => `The model shows floors 0 to ${max}, so floor ${floor} is drawn as the top floor.`,
  },
  de: {
    empty: 'Gib eine Türnummer wie 1.2.3 ein oder nur die Nummer eines Flügels.',
    digits: 'Türnummern bestehen nur aus Ziffern, zum Beispiel 1.2.3 (Flügel, Etage, Tür).',
    shape: 'Eine Türnummer sieht so aus: 1.2.3, also Flügel, Etage, Tür.',
    wing: 'Die Flügel sind von 1 bis 9 nummeriert.',
    top: (max, floor) => `Das Modell zeigt die Etagen 0 bis ${max}, deshalb wird Etage ${floor} als oberste Etage gezeigt.`,
  },
};
const say = () => MESSAGES[typeof document !== 'undefined' && document.documentElement.lang === 'de' ? 'de' : 'en'];

export function parseDoor(raw, maxFloor = 4) {
  const s = String(raw || '').trim().toLowerCase().replace(/^(wing|flügel|fluegel|wg\.?|door|tür|tuer)\s*/, '');
  if (!s) return { error: say().empty };
  if (/[^0-9.,;:\s/\-–—_]/.test(s)) return { error: say().digits };
  let parts = s.split(/[^0-9]+/).filter(Boolean);
  if (parts.length === 1 && parts[0].length >= 2) {
    const d = parts[0];
    parts = d.length === 2 ? [d[0], d[1]] : [d[0], d[1], d.slice(2)];
  }
  if (!parts.length || parts.length > 3) return { error: say().shape };
  const wing = Number(parts[0]);
  if (!(wing >= 1 && wing <= 9)) return { error: say().wing };
  if (parts.length === 1) return { wing, floor: null, door: null };
  const floor = Number(parts[1]);
  const door = parts.length === 3 ? Number(parts[2]) : null;
  if (floor > maxFloor) return { wing, floor: maxFloor, door, floorNote: say().top(maxFloor, floor) };
  return { wing, floor, door };
}

export function doorHash(r) {
  return r.floor != null ? `${r.wing}.${r.floor}${r.door != null ? `.${r.door}` : ''}` : `wing-${r.wing}`;
}
