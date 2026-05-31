# API Reference

This reference documents the public REST API surface available to integrators. It contains endpoint groups organized by product domain.

## Authentication model

- `public`: no bearer token required.
- `authenticated`: valid JWT required.
- role names such as `student`, `assistant`, `faculty_manager`, `super_admin`: JWT plus matching role required.

## Domains

- [admin](./admin.md) — 22 endpoints
- [assistants](./assistants.md) — 2 endpoints
- [attendance](./attendance.md) — 10 endpoints
- [audit](./audit.md) — 2 endpoints
- [auth](./auth.md) — 26 endpoints
- [faculty-manager](./faculty-manager.md) — 24 endpoints
- [forms](./forms.md) — 12 endpoints
- [health](./health.md) — 3 endpoints
- [institutions](./institutions.md) — 21 endpoints
- [knowledge](./knowledge.md) — 43 endpoints
- [maintenance](./maintenance.md) — 3 endpoints
- [materials](./materials.md) — 13 endpoints
- [news](./news.md) — 5 endpoints
- [notifications](./notifications.md) — 5 endpoints
- [posts](./posts.md) — 8 endpoints
- [public](./public.md) — 1 endpoints
- [reports](./reports.md) — 2 endpoints
- [score-sheets](./score-sheets.md) — 19 endpoints
- [sessions](./sessions.md) — 7 endpoints
- [status](./status.md) — 9 endpoints
- [students](./students.md) — 4 endpoints
- [subjects](./subjects.md) — 20 endpoints
- [todos](./todos.md) — 4 endpoints
- [versions](./versions.md) — 3 endpoints
