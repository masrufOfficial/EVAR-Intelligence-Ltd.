# EVAR Intelligence Ltd. — Security Incident Response Plan (IRP)

## 1. Overview
This incident response plan outlines the structured lifecycle for identifying, containing, eradicating, and recovering from cybersecurity incidents affecting EVAR Intelligence systems.

## 2. Severity Matrix
- **P1 - Critical:** Active administrative compromise, database exfiltration, or denial of core services. (Response target: < 15 minutes)
- **P2 - High:** Elevated unauthorized access attempt, privilege escalation bug, or brute-force pattern detected in Security Center. (Response target: < 1 hour)
- **P3 - Medium:** Low-impact validation failure, isolated credential stuffing without breach. (Response target: < 4 hours)
- **P4 - Low:** Non-exploitable informational anomaly or dependency warning. (Response target: < 24 hours)

## 3. Incident Lifecycle Phases
1. **Detection & Triage:** Security Center anomalies, rate-limit trigger alerts, audit log divergence.
2. **Containment:**
   - Immediate session revocation for affected users.
   - Dynamic IP block via middleware rate-limiting.
   - Read-only maintenance mode engagement if required.
3. **Eradication:** Root-cause remediation, patching vulnerability in codebase, secret rotation.
4. **Recovery:** Verifying system integrity against audit logs, restoring verified states.
5. **Post-Incident Review (PIR):** Root cause analysis within 72 hours and updating `THREAT_MODEL.md`.
