# EVAR Intelligence Ltd. — STRIDE Threat Model & Security Matrix

This document defines the formal threat model for the EVAR Intelligence Web Platform and Admin Dashboard according to STRIDE methodology.

---

## Threat Matrix by Feature

### 1. Authentication & Session Management
- **Threat (S - Spoofing / E - Elevation):** Attacker steals session token or brute forces administrator credentials.
- **Impact:** Critical (Full administrative compromise).
- **Likelihood:** Medium.
- **Mitigations:**
  - Password hashing with Bcrypt (salt rounds 12).
  - Sessions issued as HttpOnly, Secure, SameSite=Strict cookies.
  - Sliding-window rate limiting on `/api/auth/login` (5 attempts per 15 minutes).
  - Automatic failed-login logging to Security Center.
- **Validation / Test:** `test_auth_rate_limiting`, `test_unauthenticated_api_rejection`.

---

### 2. Role-Based Access Control (RBAC) & IDOR Prevention
- **Threat (E - Elevation of Privilege / T - Tampering):** An `EDITOR` attempts to delete an administrator account or modify security audit logs.
- **Impact:** High (Privilege escalation, unauthorized state modification).
- **Likelihood:** Low-Medium.
- **Mitigations:**
  - Server-side RBAC checks in all API endpoints and server actions using `requireRole(['SUPER_ADMIN'])`.
  - UI role checks are purely cosmetic; server routes unconditionally deny unauthorized operations.
  - Resource access checks verify resource ownership or role authorization to prevent IDOR.
- **Validation / Test:** `test_editor_cannot_delete_users`, `test_idor_prevention`.

---

### 3. Contact Form & Inbound Public Leads
- **Threat (D - Denial of Service / T - Tampering / I - Information Disclosure):** Bot spam, email injection, or payload flooding.
- **Impact:** Medium (Server degradation, notification flooding).
- **Likelihood:** High.
- **Mitigations:**
  - Hidden honeypot field (`website_confirm_field`); forms submitted with this field populated are dropped.
  - Rate limiting (3 submissions per IP per 10 minutes).
  - Strict Zod schema validation (max lengths, regex for email, strip HTML).
  - Prevention of CRLF injection in email subjects.
- **Validation / Test:** `test_contact_honeypot_rejection`, `test_payload_validation`.

---

### 4. CMS & Dynamic Content Rendering (XSS Protection)
- **Threat (T - Tampering / I - Information Disclosure):** Malicious stored XSS via product descriptions or research abstract fields.
- **Impact:** High (Session hijacking, defacement).
- **Likelihood:** Low.
- **Mitigations:**
  - React automatic JSX string escaping for standard content.
  - Explicit sanitization for rich text; script tags, inline event handlers, and data URLs stripped.
  - Content Security Policy (CSP) blocking inline untrusted scripts.
- **Validation / Test:** `test_xss_sanitization`.

---

### 5. Media Library & File Uploads
- **Threat (T - Tampering / E - Elevation):** Uploading executable PHP/Node script, SVG with embedded JavaScript, or path traversal payload.
- **Impact:** Critical (Remote code execution).
- **Likelihood:** Medium.
- **Mitigations:**
  - Strict MIME type allowlist (`image/jpeg`, `image/png`, `image/webp`, `application/pdf`).
  - Filename canonicalization and sanitization (random UUID generation).
  - SVG sanitization or exclusion.
  - Size limitation capped at 5MB.
- **Validation / Test:** `test_file_upload_type_restriction`, `test_path_traversal_prevention`.

---

### 6. Database Queries & Injection
- **Threat (T - Tampering / I - Information Disclosure):** SQL Injection targeting product catalog or user tables.
- **Impact:** Critical (Data breach, data loss).
- **Likelihood:** Very Low.
- **Mitigations:**
  - 100% Parameterized queries via Prisma ORM.
  - Zero raw SQL query string interpolation.
  - Strict input schemas.
- **Validation / Test:** `test_sql_injection_resilience`.
