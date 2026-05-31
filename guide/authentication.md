# Authentication

Tapiz uses JWT bearer authentication for protected API routes.

```http
Authorization: Bearer <jwt>
```

## Roles

| Role | Scope |
|---|---|
| `student` | Self-service access: attendance scans, own sessions, own score sheets, notifications and enrollment actions |
| `assistant` | Teaching workflows: subjects, sessions, attendance management, score sheets, posts, materials, reports, quizzes and todos |
| `faculty_manager` | Faculty-level administration: departments, chairs, study programs, assistants and students |
| `super_admin` | Platform administration: universities, faculties, managers, audit log, news and maintenance |

## Login flow

1. `POST /api/auth/login` verifies credentials.
2. If 2FA is disabled, the API returns a JWT.
3. If 2FA is enabled, the API returns a challenge.
4. The client completes email/TOTP/QR confirmation depending on the configured flow.
5. All protected calls include the JWT bearer token.

## Production controls

- JWT secret must be high entropy and environment-specific.
- Password reset and bootstrap flows must be monitored through audit logs.
- Admin and faculty-manager routes must never be exposed without authentication middleware.
