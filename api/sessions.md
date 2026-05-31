# Sessions API

| Method | Path | Auth | Summary | Source |
|---|---|---|---|---|
| `GET` | `/api/sessions` | `assistant` | List sessions | `session/sessionRoutes.ts` |
| `DELETE` | `/api/sessions/:id` | `assistant` | Delete sessions — id | `session/sessionRoutes.ts` |
| `GET` | `/api/sessions/active` | `assistant` | List sessions — active | `session/sessionRoutes.ts` |
| `POST` | `/api/sessions/generate` | `assistant` | Create / execute sessions — generate | `session/sessionRoutes.ts` |
| `POST` | `/api/sessions/invalidate` | `assistant` | Create / execute sessions — invalidate | `session/sessionRoutes.ts` |
| `POST` | `/api/sessions/rotate/:id` | `assistant` | Create / execute sessions — rotate id | `session/sessionRoutes.ts` |
| `GET` | `/api/sessions/student` | `student` | List sessions — student | `session/sessionRoutes.ts` |
