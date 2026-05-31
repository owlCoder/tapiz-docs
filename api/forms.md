# Forms API

| Method | Path | Auth | Summary | Source |
|---|---|---|---|---|
| `GET` | `/api/forms` | `assistant` | List forms | `form/formRoutes.ts` |
| `POST` | `/api/forms` | `assistant` | Create / execute forms | `form/formRoutes.ts` |
| `DELETE` | `/api/forms/:id` | `assistant` | Delete forms — id | `form/formRoutes.ts` |
| `GET` | `/api/forms/:id` | `assistant` | Get forms — id | `form/formRoutes.ts` |
| `PUT` | `/api/forms/:id` | `assistant` | Update forms — id | `form/formRoutes.ts` |
| `GET` | `/api/forms/:id/response-stats` | `assistant` | List forms — id response stats | `form/formRoutes.ts` |
| `GET` | `/api/forms/:id/responses` | `assistant` | List forms — id responses | `form/formRoutes.ts` |
| `DELETE` | `/api/forms/:id/responses/:responseId` | `assistant` | Delete forms — id responses responseId | `form/formRoutes.ts` |
| `PUT` | `/api/forms/:id/responses/:responseId` | `assistant` | Update forms — id responses responseId | `form/formRoutes.ts` |
| `GET` | `/api/forms/public/:token` | `public` | Get forms — public token | `form/formRoutes.ts` |
| `GET` | `/api/forms/public/:token/results` | `public` | List forms — public token results | `form/formRoutes.ts` |
| `POST` | `/api/forms/public/:token/submit` | `public` | Create / execute forms — public token submit | `form/formRoutes.ts` |
