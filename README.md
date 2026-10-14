# Ara5h — Roblox Gameplay Developer Portfolio

Professional portfolio for Arash Takhayori / Ara5h. A buildless static website using HTML, CSS, and JavaScript, hosted at **https://ara5hhh.github.io/** through GitHub Pages.

## Content and provenance

- Profile, background, skills, education, availability, and contact email were provided by Arash.
- The [rune spellcasting repository](https://github.com/Ara5hhh/Roblox-Portofolio/tree/main/Rune-Spellcasting-System) verifies the five rune types, 15 abilities, 36 original modules, architecture, and spell mapping.
- [Haunt & Shriek](https://www.roblox.com/games/111250598486293) and [+1 Speed Keyboard Race](https://www.roblox.com/games/99422277032381) were identified by Arash as his independently developed published games. Their titles, descriptions, creator groups, public pages, and promotional images were verified through Roblox.
- Roblox user ID `140695633` resolves to `ItsAra5h`, display name `Ara5h`.
- The game images in `assets/` are actual official Roblox promotional thumbnails, not gameplay screenshots. No popularity figures, clients, testimonials, or employment claims are included.
- The interactive browser preview illustrates the documented rune mapping. It does not execute or replace the original Roblox system.

The reference portfolio informed the project-first content hierarchy. All page layout, typography choices, styling, copy, and site interactions are original.

## Run locally

Serve this directory with a static HTTP server, for example `python3 -m http.server 8765`, then open `http://localhost:8765`. No package installation or build step is needed.

## GitHub Pages

Configure **Settings → Pages → Deploy from a branch → main → /(root)**. The `.nojekyll` file keeps the static assets served as written.

## Update content

- Edit `index.html` for project text, links, and contact information.
- Edit `styles.css` for visual styling and responsive layouts.
- Edit `script.js` for the small rune preview, navigation disclosure, and copy-email feedback. Keep its spell mapping consistent with the actual Luau source.
- Replace showcase MP4s and matching poster JPEGs in `assets/showcases/` to update recordings. Keep video dimensions, durations, accessible labels, and descriptions in sync in `index.html`. Add caption tracks if future clips include narration.
- Optional additions: a professional Discord contact or a preferred business email. Do not present promotional thumbnails as captured gameplay.

Email currently used: `stefantakhayori@gmail.com`. Phone is intentionally omitted from the public site.

## Accessibility and performance

Semantic landmarks, visible keyboard focus, descriptive links and images, native buttons, a skip link, live status feedback, reduced-motion support, and progressive enhancement. Game images have fixed dimensions and lazy loading. No frameworks, external fonts, analytics, trackers, or third-party runtime scripts are required.

## Gameplay recordings

Three recordings supplied by Arash are integrated inline with native playback controls. Posters are actual frames from the original footage. Original Desktop MOV files remain unchanged. The rune recording complements the existing interactive preview and source link; +1 Speed is the first game card; Simulator Gameplay is a smaller secondary showcase, without an unverified release status, source link, or play link. Descriptions reflect visible mechanics and interfaces.

| Asset | Duration | Web resolution | Format | Size |
| --- | --- | --- | --- | --- |
| `rune-spellcasting.mp4` | 1:30 | 1280 × 832 | H.264 / AAC, 30 fps | 21.94 MiB |
| `plus1-speed.mp4` | 2:00 | 1280 × 832 | H.264 / AAC, 30 fps | 22.63 MiB |
| `simulator-gameplay.mp4` | 1:24 | 1280 × 818 | H.264 / AAC, 30 fps | 19.45 MiB |

MP4s use progressive-download fast start, preserve the original audio, start muted, and never autoplay. `preload="none"` defers video loading until interaction. Native controls provide play/pause, seeking, volume, and fullscreen where supported. Aspect ratios are preserved without cropping. The complete static media set stays within the [GitHub Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits); individual files also fit the [25 MiB browser upload limit](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository).
