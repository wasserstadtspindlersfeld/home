# Source for the site's JavaScript

GitHub Pages serves the files in `assets/js/` as they are, so the site needs no build step.
Only edit this folder if you want to change how the 3D map or the menu behaves, then rebuild:

```bash
npm install
npm run build
```

- `building-3d/geometry.js`: the shape of the building (traced from `maps/resources/entrances_and_wings_colored.pdf`), the storeys and the street entrances
- `building-3d/textures.js`: the facades, roofs and ground map, drawn in code
- `building-3d/main.js`: the 3D view, the "Find a door" box and the wing buttons
- `building-3d/door.js`: reads door numbers like `1.2.3` (wing.floor.door)
- `site/site.js`: the menu button, tables and the "Find a door" box on the home page

Text shown by the map (wing descriptions, floor names, entrance addresses) lives in `_data/building.yml`,
so it can be changed without touching any code.
