# HOI4 Tool

Second-monitor companion for Hearts of Iron IV: a tickable game plan, focus and research orders, and build references taken from video guides.

Open `index.html` in a browser. No install or build step.

## Layout

- `index.html`: the page markup and icon sprite.
- `css/`: styles, one file per tab plus the shared look (`base.css`).
- `js/`: the app, one plain script per tab, loaded in order by `index.html` (`main.js` last).
- `guides/`: guide content (`germany-blitzkrieg.js`), the guide list and the glossary.
- `guides/trees/`: game data (focus tree, research, designers, units, equipment, buildings, MIOs, special projects), extracted from the game files for one patch.
- `img/`: cropped screenshots from the guide video.
- `tools/focus-tree/`: the Python extractors that produce `guides/trees/` from a local game install (development only).
- `tools/bump_build.py`: run after changing `css/`, `js/` or `guides/` so browsers fetch the new files.

Current guide: Germany Blitzkrieg, from [MachiavellianStrategist's Ultimate Germany Guide](https://www.youtube.com/watch?v=s0zNamkHkG0).
