# PRD — Zeel Chaudhari Cybersecurity Portfolio

## Original problem statement
"Build a landing page: Based on this resume create portfolio website" — source: Zeel Chaudhari's Cybersecurity Analyst resume PDF (SOC operations, threat detection, incident response; Oncor Electric Delivery TX, Nerpcrop Systems Hyderabad).

## Architecture
- Frontend: Vite + React 19 + TS strict, Tailwind v4, framer-motion (kinetic reveals), Lenis (momentum scroll), sonner toasts, shadcn/ui inputs. Single-page at `/` (`src/pages/Home.tsx`).
- Backend: FastAPI, `api_router` prefix `/api`; `routers/contact.py` → POST `/api/contact` (Pydantic + EmailStr validation) persists to MongoDB `inquiries` collection (uuid4 string ids, aware-UTC timestamps).
- Design: dark "SOC terminal" archetype — obsidian #090B0E, emerald #10B981, radar cyan #0EA5E9; Space Grotesk (headings) / IBM Plex Sans (body) / JetBrains Mono (labels). Spec in `/app/design_guidelines.json`.

## User personas
- Recruiter/hiring manager evaluating a SOC analyst (scans hero, experience, downloads résumé, sends inquiry).
- Peer engineer (plays the Threat Lab, reads tooling tags).
- Zeel (owner) — receives inquiries in MongoDB.

## Core requirements (static)
- Kinetic masked-line hero, radar + terminal visual, stats strip, editorial marquee, about, skills bento, experience timeline, interactive threat simulator, working contact form, original SVG logo + favicon, dark theme, reduced-motion fallbacks, data-testids on all interactive elements.

## Implemented (2026-10-02)
- Full single-page portfolio with all sections above; real resume data throughout.
- Contact section: direct channels only (email, phone, LinkedIn) — form removed per user request, along with the backend /api/contact endpoint.
- Résumé download links to the updated artifact PDF (Zeel-Chaudhari-CyberSecurity-Analyst.pdf).
- Verified: `yarn typecheck` clean; browser pass (hero, skills, lab flow) via screenshots.

## Backlog
- P1: Analytics/visit counter.
- P2: Blog/write-ups section (incident retrospectives).
- P2: Certifications section when Zeel adds them.
- P2: More Threat Lab scenarios (phishing, DDoS drill).

## Next tasks
1. Expand Threat Lab with 2 more scenarios.
2. Add a certifications shelf when Zeel earns certs (Security+, CEH).
3. Add a projects/write-ups section.
