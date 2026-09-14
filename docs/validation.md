# Validation report

Validated 14 September 2026.

## Build and deployment

- `npm ci`: passed; lockfile unchanged; audit reported zero vulnerabilities.
- `npm run dev -- --hostname 127.0.0.1`: started successfully. Inspected original and updated pages.
- `npm run lint`: passed, no errors or warnings.
- `npm run build`: passed on the local Node 26 runtime.
- Final production build repeated using **Node 24.21.0**, matching the workflow's Node 24 major, after the final responsive adjustment: passed.
- `tsc --noEmit`: passed, including under Node 24.
- `git diff --check`: passed.
- Final output is static: `/`, `/404.html`, `/icon.svg`, `/robots.txt`, `/sitemap.xml`, assets, and the resume. No server-only runtime features were introduced.
- `next.config.ts`, package manifests, lockfile, and `.github/workflows` are unchanged. The existing workflow still uploads `out/` and deploys pushes to `master`.
- The export was served from `out/` with a local Node HTTP server on `127.0.0.1:4174` and tested in the in-app browser. No live deployment was performed.

## Responsive and interaction checks

The production document's scroll width equaled its client width at each requested viewport (the desktop browser reserves 15px for its scrollbar):

| Requested width | Document client / scroll width | Navigation |
| --- | --- | --- |
| 320px | 305 / 305px | Mobile menu |
| 375px | 360 / 360px | Mobile menu |
| 430px | 415 / 415px | Mobile menu |
| 768px | 753 / 753px | Mobile menu |
| 1024px | 1009 / 1009px | Desktop links |
| 1440px | 1425 / 1425px | Desktop links |

Visual checks covered desktop/mobile hero, project comparison, research, skills, experience, and closing CTA. The original ERD asset is loaded, scales with its column, and links to the full-size image. At 320px the contact buttons have consistent 46px height and unwrapped labels.

- Every desktop section link was activated and reached its matching hash; content clears the sticky header. The short final contact section reaches the document's natural scroll limit while remaining visible.
- All six mobile section links were activated. Each closed the menu, set the expected hash, and focused the section.
- Enter and Space opened the native menu; Tab reached the first link.
- Escape closed the menu and returned focus to its summary.
- Shift+Tab left the menu and closed it; no focus trap.
- A pointer click outside the menu closed it.
- Resizing from mobile to desktop closed the menu.
- The skip link received keyboard focus, displayed its 3px focus outline at the top of the viewport, and moved focus to main content when activated.
- Captured production browser logs contained no application errors or warnings during the checks.

## Accessibility and content

- One H1; semantic sections, headings, lists, definition lists, figures, navigation, main, and footer.
- Essential project, experience, skill, and education content is present in static HTML without selector interaction.
- Native details/summary exposes menu state and provides a working disclosure even before hydration. JavaScript adds dismissal/focus behavior.
- Internal section targets all exist; no duplicate IDs.
- All new-tab links include `noopener noreferrer`; internal section links remain in the same tab.
- Descriptive ERD alt text and full-size access; numeric values and labels accompany the native chart.
- A DOM-based check of rendered text against computed background colors found no failures against 4.5:1 normal / 3:1 large-text thresholds. The full-model bar was darkened for clearer graphical distinction.
- Focus styling and reduced-motion CSS inspected. The site explicitly uses a complete light palette; incomplete dark overrides were removed.
- This is a browser/source accessibility pass, not a screen-reader certification or full automated WCAG audit.
- Project facts were independently cross-checked against actual notebook and SQL files. Details and unresolved upstream issues are in [content-sources.md](content-sources.md).

## Links, metadata, and assets

- GitHub profile, both project repositories, the direct NHANES notebook, SQL source, and limitations URL: HTTP 200.
- LinkedIn: HTTP 999 anti-bot response. Exact existing URL retained; the profile's signed-in view was not verified.
- Email URI matches the resume. No message sent; mailbox deliverability not tested.
- No credential verification link was supplied by the original site/resume, so none was invented.
- All 14 local asset/link paths extracted from the production HTML returned HTTP 200.
- Resume: HTTP 200 with `application/pdf`; rendered/extracted for source review. Exported bytes equal the source bytes. SHA-256 remains `d572827c370f5400b25cfc5425ee708ad061f27430c2f03344afb465bbfa988a`.
- ERD: exported/local bytes match the source repository image.
- Open Graph image: HTTP 200, PNG, 1200×630, visually reviewed.
- Robots and sitemap: HTTP 200 with correct site URL and content types.
- Metadata: verified title, description, canonical, absolute Open Graph and Twitter image URLs, image dimensions, icon links, and parseable ProfilePage/Person JSON-LD. Actual third-party social crawler caches were not exercised.
