# EVAR Intelligence Ltd. — Shift-Left Security Testing Guide

This document details the test scenarios, automated test suites, and validation criteria implemented across the platform.

## Test Categories & Test Cases

### 1. Authentication & Session Validation
- **Test Case SEC-AUTH-01:** Reject login attempts with invalid password.
- **Test Case SEC-AUTH-02:** Rate-limit repeated invalid logins (5 attempts lock out for 15 mins).
- **Test Case SEC-AUTH-03:** Verify passwords are not logged in plaintext or serialized in responses.
- **Test Case SEC-AUTH-04:** Check HttpOnly, SameSite=Strict flags on session cookies.

### 2. Authorization & RBAC Checks
- **Test Case SEC-RBAC-01:** `SUPER_ADMIN` can access user management, audit logs, and security center.
- **Test Case SEC-RBAC-02:** `EDITOR` receives HTTP 403 Forbidden when attempting to modify user roles or delete database audit entries.
- **Test Case SEC-RBAC-03:** `CONTENT_MANAGER` is restricted from modifying system security settings.
- **Test Case SEC-RBAC-04:** Unauthenticated requests to `/api/admin/*` receive HTTP 401 Unauthorized.

### 3. IDOR (Insecure Direct Object Reference)
- **Test Case SEC-IDOR-01:** Modifying an arbitrary item ID without appropriate privileges must return 403 or 404, never disclosing unauthorized data.

### 4. Input Sanitization & Injection Prevention
- **Test Case SEC-INJ-01:** SQL Injection payloads in search parameters (`' OR 1=1 --`) safely parameterized.
- **Test Case SEC-XSS-01:** Malicious script tags in contact form messages (`<script>alert(1)</script>`) sanitized before rendering.
- **Test Case SEC-HONEYPOT-01:** Automated bot spam detected via hidden honeypot field and discarded silently.

### 5. Running the Automated Security Test Suite
```bash
npm run test:security
```
This suite executes comprehensive unit and integration security checks before any code deployment.
