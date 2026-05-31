# Security Model

## Controls

| Control | Implementation |
|---|---|
| Authentication | bearer authentication tokens |
| Authorization | Route-level role guards |
| Validation | Zod schemas and parsing middleware |
| Transport hardening | Hono secure headers and CORS policy |
| Auditability | Audit log endpoints and service-level logging |
| Secrets | Environment variables only, never committed |
| Cache isolation | Prefix-based Valkey keys |

## Sensitive workflows

- Password reset and account activation
- Student approval
- Faculty/manager administration
- Attendance flush cron
- Maintenance mode
- Public material token generation

## Required production posture

- Rotate authentication and service secrets on every environment breach suspicion.
- Keep `CLIENT_URL` strict in production.
- Restrict cron endpoints using `protected scheduler credential`.
- Prefer read-only DB credentials for reporting replicas where possible.
