// Geometry of the Ringbau, traced from maps/resources/entrances_and_wings_colored.pdf.
//
// Coordinates are "map units" in the building's own grid:
//   u runs west → east along Carl-Spindler-Straße
//   v runs north → south along Adolf-Heyden-Straße
// One unit is about 0.45 m (calibrated from parked cars in maps/resources/entrances.png).
// The building is turned about 25° away from true north; NORTH is true north in (u, v).

export const UNIT = 0.45;
export const CENTER = [316, 497];
export const NORTH = [0.418, -0.908];

// Every mass is an axis-aligned rectangle r = [u0, u1, v0, v1].
//   body      4 brick storeys + a set-back attic storey under a low roof
//   pavilion  corner and centre blocks, brick all the way up, flat roof with a parapet
//   link      the two connector blocks between wings 1/9 and 4/6 (no wing number)
// finish: 'brick' (default) or 'plaster' (wing 5 has a cream rendered facade)
export const MASSES = [
  { wing: 1, type: 'pavilion', r: [126, 176, 329, 379] },
  { wing: 1, type: 'body', r: [135, 174, 379, 483] },
  { wing: 2, type: 'body', r: [176, 259, 340, 379] },
  { wing: 3, type: 'body', r: [259, 284, 340, 380] },
  { wing: 3, type: 'pavilion', r: [284, 343, 331.5, 380] },
  { wing: 3, type: 'body', r: [343, 451, 340, 380] },
  { wing: 4, type: 'pavilion', r: [451, 502, 329, 385] },
  { wing: 4, type: 'body', r: [451, 497, 385, 487] },
  { wing: 5, type: 'body', r: [293, 332, 380, 487], finish: 'plaster' },
  { wing: 5, type: 'pavilion', r: [287, 338, 487, 509], finish: 'plaster' },
  { wing: 6, type: 'body', r: [451, 497, 509, 615] },
  { wing: 6, type: 'pavilion', r: [451, 500, 615, 663] },
  { wing: 7, type: 'pavilion', r: [312, 342, 614.5, 658] },
  { wing: 7, type: 'body', r: [342, 451, 617, 655] },
  { wing: 8, type: 'body', r: [174, 283, 617, 655] },
  { wing: 8, type: 'pavilion', r: [283, 312, 614.5, 658] },
  { wing: 9, type: 'body', r: [135, 174, 509, 613] },
  { wing: 9, type: 'pavilion', r: [125, 174, 613, 663] },
  { wing: 0, type: 'link', r: [135, 174, 483, 509] },
  { wing: 0, type: 'link', r: [451, 497, 487, 509] },
];

// Storeys, bottom to top. Door numbers use these as the middle digit (wing.floor.door).
export const FLOORS = [
  { y: 0, h: 4.4 },
  { y: 4.4, h: 3.9 },
  { y: 8.3, h: 3.9 },
  { y: 12.2, h: 3.9 },
  { y: 16.1, h: 3.4 },
];
export const PAVILION_TOP = 19.9; // pavilions keep brick up to here, then a parapet
export const LINK_TOP = 16.1;

// Street entrances as marked on the printable map, snapped onto the facade they sit on.
// ids match _data/building.yml, which holds the addresses and which flats go in by each one.
export const ENTRANCES = [
  { id: 'cs13', at: [477, 329], face: 'n' },
  { id: 'cs15', at: [316, 331.5], face: 'n' },
  { id: 'ah1', at: [126, 354], face: 'w' },
  { id: 'ah3', at: [135, 496], face: 'w' },
  { id: 'ah5', at: [125, 639], face: 'w' },
  { id: 'hl14', at: [313, 658], face: 's' },
];

// Surroundings, in map units.
export const STREETS = [
  { name: 'ADOLF-HEYDEN-STRASSE', width: 17, path: [[104, 80], [104, 880]], label: [104, 560] },
  { name: 'CARL-SPINDLER-STRASSE', width: 15, path: [[104, 316], [500, 316], [517, 333], [517, 690]], label: [300, 316] },
  { name: 'HENRIETTE-LUSTIG-STRASSE', width: 15, path: [[20, 690], [517, 690]], label: [300, 690] },
];
export const RIVER_BANK = [[592, 60], [598, 200], [603, 300], [608, 420], [614, 550], [622, 680], [632, 820], [640, 960]];

export const toWorld = (u, v) => [(u - CENTER[0]) * UNIT, (v - CENTER[1]) * UNIT];
