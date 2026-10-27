# HOI4 Tool

A second-monitor companion for Hearts of Iron IV. You follow a guide step by step while playing, tick off what's done, and check focus/research orders, division templates and production numbers without leaving the game.

It started as a single-page checklist built from MachiavellianStrategist's "Ultimate Germany Guide" (https://www.youtube.com/watch?v=s0zNamkHkG0): Allies down by May 1940, then USA, then Barbarossa by Aug 1941.

## Current state

Everything lives in `index.html` (about 720 lines: CSS, markup, data and script in one file), plus cropped game screenshots in `img/`. No build step and no dependencies. Open the file in a browser and it works. The fonts come from Google Fonts.

Three tabs:
- **Game plan**: about 90 steps grouped into phases. Each phase links to its video timestamp. The next unticked step is highlighted, and some steps have a "▸ Show screen" reveal with a screenshot.
- **Focus & research**: national focus order and research order, side by side.
- **Builds & numbers**: reference cards (division template with numbered pins, tank/plane designs, Alkett MIO trait order, doctrines, build queues, production numbers, advisor order). Screenshots open in a lightbox.

Where things are in `index.html`:
- `PLAN`, `FOCUS`, `RESEARCH`, `CHAPTERS` arrays hold the guide content. Items are strings or `{t, n}` objects, and phases are `{phase, ts}`.
- `IMGS` maps screenshot keys to captions. `STEP_IMG` attaches a screenshot to a step by matching the start of its text.
- `build()` renders a list. `refresh()` updates counts, progress bar and the "next" highlight.
- The Builds tab is hand-written HTML, not data.
- State goes to `localStorage` under `hoi4-ger-checklist-v1` (ticks), plus `-open`, `-tab` and `-hide` suffixes.

Known weak spots:
- Tick IDs are positional (`prefix + n`). Inserting or reordering a step shifts everyone's saved ticks. Steps need stable IDs.
- Screenshot-to-step matching by text prefix breaks if a step is reworded.
- Guide content is mixed into the code, so a second guide means copying the whole page.
- Progress is per browser and doesn't follow the user between PCs.

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
- The user plays on Windows and uses the tool on a second monitor, so test at roughly 1280–1920 px wide as well as narrow widths.
- Game facts drift with patches. When a number or mechanic is uncertain or from an older source, say so in the UI rather than presenting it as fact.
