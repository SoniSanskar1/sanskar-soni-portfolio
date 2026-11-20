# Sanskar Soni — Engineering Portfolio

A responsive, animated portfolio for backend, full stack and applied AI roles. Built with semantic HTML, CSS and vanilla JavaScript; no framework runtime or build step is required.

## Local preview

From this directory:

```powershell
python -m http.server 4178 --bind 127.0.0.1 --directory dist
```

Open http://127.0.0.1:4178. Source files and deployment output live in `dist/`.

## Content hierarchy

The six primary case studies are company Survey SaaS, Gloria POS Offline (`pos_release`), CloudBoard, AI Resume Builder, RepoPilot, and College Portal ERP. Supporting projects are behind Explore more: Hyperlocal Commerce, Gloria Digital Menu, TaskFlow, and Patient Zero: The Last Cure. Tom Riddle Diary is a compact Extras entry. Office Monitor, Agent Prompt History, Redis Chat API, and Containment Breach are excluded.

Case studies aim for the requested 20/40/40 emphasis on what was built, implementation decisions, and evidenced outcomes. Results without measurements are described as functional outcomes. The figures in the career strip are self-reported in the supplied October 2026 resumes.

## Editing

- `dist/index.html`: page sections, contact links, downloads, CloudBoard screen viewer, and Extras.
- `dist/app.js`: ordered project records, case study content, filters, dialog behavior, and motion controls.
- `dist/styles.css`: responsive layout and animation.
- `dist/assets/`: resume PDFs, actual development screenshots, and source-rendered CloudBoard UI captures.

Do not rerun `research/update-content.cjs` as a general build step: it is a one-time research migration, not part of the website runtime.

## Evidence and assets

See `../research/PROJECT_RESEARCH.md` for provenance and limitations. CloudBoard screens render the actual web and Windows components with sample data and an inert desktop bridge. They are not authenticated production captures. Game and diary captures come from the original local development outputs. No private customer data, credentials, or employer source is included in the deployed website.

Animation honors reduced-motion preferences and can be paused manually. The native dialog supports Escape and returns focus to the triggering button. Resume downloads, email, LinkedIn and GitHub links are direct links.

## GitHub and Vercel

Source repository: https://github.com/SoniSanskar1/sanskar-soni-portfolio (private).

Vercel serves the static `dist` directory with no framework or build step, using `vercel.json`. The production branch is `main`. Local Vercel identity is stored in ignored `.vercel/` state.

```powershell
npx vercel --prod
```

The original owner-private Sites preview is also retained. Its manifest is `.openai/hosting.json`.
