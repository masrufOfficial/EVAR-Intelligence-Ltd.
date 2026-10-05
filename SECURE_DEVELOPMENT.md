# EVAR Intelligence Ltd. — Secure Development Lifecycle (SDLC) Policy

## Shift-Left Principles
All engineering contributions must satisfy the following 15-step Shift-Left workflow:
1. **Define Requirement:** Specify functional and security bounds.
2. **Identify Assets:** Classify confidentiality, integrity, and availability impact.
3. **Threat Model:** Document STRIDE vectors in `THREAT_MODEL.md`.
4. **Define Trust Boundaries:** Isolate public vs. authenticated admin scopes.
5. **Enforce RBAC:** Design authorization rules on server endpoints.
6. **Input Validation:** Define strict Zod schemas for all inbound payloads.
7. **Abuse Cases:** Implement rate-limiting, honeypots, and size restrictions.
8. **UI/UX Design:** Build accessible, responsive interfaces without compromising safety.
9. **Backend Security:** Enforce parameterized queries and HttpOnly sessions.
10. **Frontend Implementation:** Ensure automatic sanitization and no arbitrary HTML injections.
11. **Automated Testing:** Run unit, integration, and security test suites.
12. **Static Code Analysis:** Linting and TypeScript strict checking.
13. **Dependency Review:** Audit CVE databases.
14. **Audit Logging:** Log all administrative state changes.
15. **Production Gate Approval:** Verify zero unresolved high/critical alerts before deployment.
