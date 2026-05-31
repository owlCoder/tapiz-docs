# Runbook: Incident Response

## Severity matrix

| Severity | Definition | Response |
|---|---|---|
| Critical | Authentication, data integrity or full API outage | Immediate mitigation, status update, postmortem |
| Major | Major feature unavailable or degraded for many users | Triage, workaround, status update |
| Minor | Limited feature impact | Track, fix, communicate if user-visible |

## Procedure

1. Confirm the symptom using `/api/health`, `/api/status`, logs and DB metrics.
2. Assign an incident owner.
3. Freeze risky deployments if the issue is production-wide.
4. Publish status if users are affected.
5. Mitigate: rollback, disable feature, rotate secret, scale dependency or patch data.
6. Capture timeline and evidence.
7. Close with a postmortem and preventive actions.
