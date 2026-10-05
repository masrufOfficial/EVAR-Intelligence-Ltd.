# EVAR Intelligence Ltd. — Dependency Management & Security Policy

## 1. Pinned Versions & Lockfiles
- All direct dependencies are pinned in `package.json`.
- `package-lock.json` must be committed and verified with checksum integrity.

## 2. Vulnerability Auditing
- Continuous automated vulnerability scanning via `npm audit`.
- High and Critical severity vulnerabilities must block deployment pipelines.
- Zero reliance on abandoned, unmaintained, or bloated third-party libraries.

## 3. Minimal Dependency Surface
- Preference for native web APIs, standard React libraries, and lightweight custom implementations over large redundant packages.
- Zero untrusted dynamic script evaluations (`eval()`, untrusted CDN imports).
