# EVAR Intelligence Ltd. — Enterprise Security Policy (Shift-Left & Secure-by-Design)

## 1. Security Objectives
EVAR Intelligence Ltd. operates as an innovation hub for human protection in the age of AI. As such, the platform itself exemplifies state-of-the-art security practices through:
- **Shift-Left Security:** Integrating security from requirements to deployment rather than as a reactive QA stage.
- **Defense in Depth:** Multi-layered security across DNS, Network, HTTP Headers, Application Middleware, API Validation, Authorization Gates, ORM Parameterization, and Immutable Auditing.
- **Principle of Least Privilege (PoLP):** Role-Based Access Control (RBAC) strictly enforced on server execution paths; zero reliance on UI hiding alone.
- **Resilience & Availability:** Graceful degradation (e.g., WebGL fallback for 3D hero), intelligent rate-limiting, and sanitized inputs.

---

## 2. Core Assets & Data Classification
| Asset | Classification | Storage / Protection |
|---|---|---|
| Admin & User Credentials | Highly Confidential | Salted Bcrypt (cost factor 12), strictly isolated; never logged or serialized |
| JWT Session Tokens | Confidential | Cryptographically signed via Ed25519 / HS256, HttpOnly, Secure, SameSite=Strict cookies |
| Customer Inquiries & Contact Leads | Confidential | Encrypted at rest, sanitized before persistence, rate-limited ingestion |
| Security Audit Logs | Restricted / Tamper-evident | Append-only audit table with actor ID, IP hash, action signature, timestamp |
| Published Research & AI Products | Public | Publicly accessible via validated read-only API DTOs |
| System Configuration & Environment Keys | Highly Confidential | Server-side environment variables only; zero client leakage |

---

## 3. Trust Boundaries
1. **Unauthenticated Public Clients:** Untrusted. Bound by strict rate limits, honeypots on forms, strict CORS, and Content Security Policy (CSP).
2. **Authenticated Admin Users:** Partially trusted within their assigned role (`SUPER_ADMIN`, `ADMIN`, `EDITOR`, `CONTENT_MANAGER`). Every operation validated server-side.
3. **Application Server & Middleware:** Trusted execution environment handling session verification, RBAC gates, and input validation schemas via Zod.
4. **Prisma ORM & Database Layer:** Parameterized queries strictly isolated from untrusted string concatenation to eliminate SQL injection.

---

## 4. Threat Model Summary (STRIDE)
- **Spoofing:** Prevented via cryptographically signed JWT sessions stored in HttpOnly cookies, session expiration, and failed-login monitors.
- **Tampering:** Prevented via Prisma ORM parameterized queries, immutable audit logs, and server-side Zod schema validation.
- **Repudiation:** Addressed via an audit log recording actor, action, target resource, timestamp, and client IP hash.
- **Information Disclosure:** Addressed via stripped error messages, DTO mapping, strict CSP, and prevention of IDOR.
- **Denial of Service (DoS):** Prevented via sliding-window rate limiting on login, search, and contact endpoints; payload size caps.
- **Elevation of Privilege:** Prevented by server-side RBAC validation before any mutation or sensitive query.

---

## 5. Security Controls & HTTP Headers
The application enforces strict HTTP security headers in production and development:
- `Content-Security-Policy`: Disallows untrusted scripts; allows only explicit self sources and trusted font/style CDNs.
- `Strict-Transport-Security`: `max-age=63072000; includeSubDomains; preload`
- `X-Frame-Options`: `DENY` (prevents clickjacking)
- `X-Content-Type-Options`: `nosniff`
- `Referrer-Policy`: `strict-origin-when-cross-origin`
- `Permissions-Policy`: `camera=(), microphone=(), geolocation=()`

---

## 6. Incident Response & Reporting
Vulnerabilities should be responsibly disclosed to `security@evarintelligence.com`. Reports are prioritized and addressed within 24 hours under our Shift-Left Security Framework.
