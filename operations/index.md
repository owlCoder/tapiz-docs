# Operations

This section is for deployment, monitoring, scheduled jobs and incident response.

## Production readiness checklist

| Area | Requirement |
|---|---|
| Build | `npm run typecheck` and `npm run build` pass |
| Database | Migrations applied in order and indexes verified |
| Cache | Valkey reachable and key prefix configured |
| Secrets | All required environment variables configured |
| CORS | `CLIENT_URL` set in production |
| Health | `/api/health` and `/api/status` returning expected state |
| Cron | Protected scheduled endpoints configured with `protected scheduler credential` |
| Logs | Pino logs collected by the hosting platform |
