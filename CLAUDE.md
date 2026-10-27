# HOI4 Tool

A second-monitor companion for Hearts of Iron IV. You follow a guide step by step while playing, tick off what's done, and check focus/research orders, division templates and production numbers without leaving the game.

It started as a single-page checklist built from MachiavellianStrategist's "Ultimate Germany Guide" (https://www.youtube.com/watch?v=s0zNamkHkG0): Allies down by May 1940, then USA, then Barbarossa by Aug 1941.

## Current state

`index.html` is the player (CSS, markup and script). Guide content lives in `guides/`, and cropped game screenshots are in `img/`. No build step and no dependencies. Open the file in a browser and it works. The fonts come from Google Fonts.

Three tabs:
- **Game plan**: about 90 steps grouped into phases. Each phase links to its video timestamp. The next unticked step is highlighted, and some steps have a "▸ Show screen" reveal with a screenshot.
- **Focus & research**: national focus order and research order, side by side.
- **Builds & numbers**: reference cards (division template with numbered pins, tank/plane designs, Alkett MIO trait order, doctrines, build queues, production numbers, advisor order). Screenshots open in a lightbox.

Where things are:
- `guides/index.js` lists the guides for the picker (`GUIDES`). Each guide is a `.js` file that calls `registerGuide({...})` with JSON-shaped data. It's loaded with a `<script>` tag, not `fetch`, so `file://` keeps working. The format is documented at the top of `guides/germany-blitzkrieg.js`.
- A guide has `meta`, `images`, `plan`/`focus`/`research` (groups of steps with stable `id`s, plus optional `n`, `tag`, `img` and `date`), `chapters`, `builds` (sections of `fig`/`card` items, text allows `**bold**`) and `legacy`.
- Step IDs are permanent. Rewording a step keeps its ID, and a new step gets a new ID. Never reuse one.
- In `index.html`: `build()` renders a list, `refresh()` updates counts, progress bar and the "next" highlight, and `buildBuilds()` renders the Builds tab from data. Pick a guide with `?guide=<id>`.
- Date tracker: plan groups carry `by` (done-by date) and `approx`. `applyDates()` marks steps `behind` (unticked and past `by`) and `later` (phase not started), and tags each phase as past/now/later. Focus and research have no dates yet.
- Glossary: `guides/glossary.js` (`GLOSSARY`) holds shared game terms, and `guide.glossary` adds guide-specific ones (same `id` overrides). `glossify()` wraps matching phrases in rendered text in `.gl` spans, and one shared `#tip` element shows the definition on hover, focus or tap. Clicking a term doesn't tick its step. In definitions, `**x**` is gold, `{+x}` green, `{-x}` red, and `patch: true` adds a "may differ between patches" line.
- Focus tree: `guides/trees/germany-1.19.1.js` (`registerTree`) holds the full German tree as facts only (names, x/y grid positions, days, prerequisites, mutually exclusive, bypass), extracted from the user's 1.19.1 game files with all DLC and default rules. The guide points at it with `meta.focusTree`, and each focus step links to a game id with `"focus"`. `projectFocuses()` chains the guide's focuses back to back from 1 Jan 1936 for projected dates (also used by the date tracker on the focus list). `buildTree()`/`updateTree()` draw the "Focus tree" tab, where clicking a numbered guide focus ticks it. No game textures or icons: each focus has an `ic` theme (tank, plane, ship, flag, rings, swords, eagle... 22 in all) picked by `ICON_RULES` in the extractor from the *name* of its in-game icon, drawn with our own SVG symbols (`#ic-*` sprite at the top of `index.html`). `computeExcluded()` marks what the guide's choices rule out (`EX`): focuses mutually exclusive with a guide focus, then anything only reachable through those. They show struck through in red, and the "Complete tree" toggle (`prefs.treeHideEx`) hides them.
- Focus effects: each focus has `fx`, short lines summarising its `completion_reward` in our own words (political power, XP, factories, research bonuses, spirits with their modifiers, annexations, war goals). `tools/focus-tree/effects.py` makes them, evaluating conditions as for Germany at peace with all DLC and taking the first matching branch. Scripted effects and events are skipped (43 focuses show "no direct effect listed"). In-game flavour descriptions are deliberately not copied. Shown in the tree tooltip and when hovering a focus's "days · done ≈" line in the focus list.
- Regenerating the tree for a new patch: `tools/focus-tree/` (Python, dev only, not a build step). Run `extract_tree.py <game dir> <germany.txt> <out.json>`, then `emit.py <out.json> guides/trees/germany-<patch>.js guides/germany-blitzkrieg.js <patch>`, then `validate.py` to check the guide order against prerequisites. Point `meta.focusTree` at the new file.
- State: `hoi4-tool:<guideId>` holds `{ticks, open, date}` per guide, and `hoi4-tool-prefs` holds `{guide, tab, hide}`. On first load, `guide.legacy` maps the old positional keys (`hoi4-ger-checklist-v1`, `g12`/`f3`/`r40`) to stable IDs. The old keys are left in place.
- `.claude/launch.json` serves the folder on port 8765 (`python -m http.server`) for previewing.

Known weak spots:
- Progress is per browser and doesn't follow the user between PCs.
- The game patch for the Germany guide isn't recorded (`meta.patch: null`), and the UI says so.
- Most Germany phase dates are estimates (`approx: true`, shown with ≈). Only a few are anchored by the guide (see `meta.datesNote`).
- The focus tree is from patch 1.19.1, likely newer than the video. Five guide focuses have prerequisites the guide never takes (Sea Lion, Tannenbaum, Reintegrate Luxemburg, Loyalty to the Führer, Autarky Achieved); the tree assumes they were bypassed and says so in the tooltip.

## Roadmap (in this order)

1. **Split content from the tool.** Move each guide into its own data file (e.g. `guides/germany-blitzkrieg.json`): metadata (title, author, video URL, game patch), phases, steps with stable IDs, optional in-game dates, tags, screenshot refs and timestamps, plus the focus/research lists and the Builds content. The page becomes a player that loads a guide. Add a guide picker. Migrate existing saved ticks from the positional keys so current progress isn't lost.
2. **HoI4-style reskin.** Dark steel/olive panels, thin brass-gold borders with a slight bevel, a top bar styled like the in-game resource bar, steps styled like focus nodes (grey pending, gold next, green done), dark tooltips with coloured keywords, side-menu style tabs. Recreate the feel in CSS. Don't copy Paradox's textures, icons or logo. The user's own gameplay screenshots are fine.
3. **Date tracker.** The user enters the current in-game date. Show what should be done by then, flag what's behind, highlight what's next. Needs dates on steps (from step 1).
4. **Glossary tooltips.** Short definitions on hover for terms like SPG, F1/C1, "UP" techs (= next tech in that line), Political Loyalty, MIO, support companies.
5. **Later:** focus tree drawn as a tree with 70-day timing, save slots per playthrough plus notes, political power and factory planners (these need game numbers that change with patches, so keep them in data files with a patch tag).

Host on GitHub Pages once the split is done. Keep it static.

## Conventions

- Conventional Commits (`feat:`, `fix:`, `refactor:`, `chore:`, `docs:`, `style:`). When asking the user to commit and push, always give them the commit message.
- Never add Claude as author or co-author: no `Co-Authored-By` trailers, no "Generated with Claude" lines in commits or PRs.
- Prefer targeted, scoped edits over rewrites. Don't over-deliver beyond the step being worked on.
- Keep it working without a build step unless there's a clear reason to add one, and discuss that first.
- Cache busting: GitHub Pages lets browsers cache files for 10 minutes, so a new page can run with old data. Whenever anything in `guides/` changes, bump `BUILD` in `index.html` and the matching `?v=` on its two `<script src>` tags (all three must match).
- The user plays on Windows and uses the tool on a second monitor, so test at roughly 1280–1920 px wide as well as narrow widths.
- Game facts drift with patches. When a number or mechanic is uncertain or from an older source, say so in the UI rather than presenting it as fact.
