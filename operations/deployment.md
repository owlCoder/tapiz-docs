# Deployment

## Vercel serverless API

The API entrypoint is `api/index.ts`, which bridges Node `IncomingMessage` / `ServerResponse` to the Hono Fetch API app.

## Deployment steps

1. Provision PostgreSQL and Valkey.
2. Apply SQL migrations.
3. Configure runtime settings through the approved secret/configuration manager.
4. Deploy the API.
5. Hit `/api/health`.
6. Hit `/api/status` and verify external services.
7. Seed the first super admin or configured admin user.
8. Configure scheduled jobs.

## Rollback strategy

- Roll back application deployment first.
- Roll back migrations only when a backward-incompatible schema change was introduced and a tested down migration exists.
- Preserve audit logs and attendance records before any data correction.
