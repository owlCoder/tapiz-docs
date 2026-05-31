# Materials API

| Method | Path | Auth | Summary | Source |
|---|---|---|---|---|
| `DELETE` | `/api/materials/:id` | `assistant` | Delete materials — id | `material/materialRoutes.ts` |
| `GET` | `/api/materials/:id` | `authenticated` | Get materials — id | `material/materialRoutes.ts` |
| `PATCH` | `/api/materials/:id` | `assistant` | Update materials — id | `material/materialRoutes.ts` |
| `POST` | `/api/materials/:id/attachments` | `assistant` | Create / execute materials — id attachments | `material/materialRoutes.ts` |
| `DELETE` | `/api/materials/:id/attachments/:attachmentId` | `assistant` | Delete materials — id attachments attachmentId | `material/materialRoutes.ts` |
| `DELETE` | `/api/materials/:id/public-token` | `assistant` | Delete materials — id public token | `material/materialRoutes.ts` |
| `GET` | `/api/materials/:id/public-token` | `assistant` | List materials — id public token | `material/materialRoutes.ts` |
| `POST` | `/api/materials/:id/public-token` | `assistant` | Create / execute materials — id public token | `material/materialRoutes.ts` |
| `GET` | `/api/materials/attachments/:attachmentId/download` | `authenticated` | List materials — attachments attachmentId download | `material/materialRoutes.ts` |
| `POST` | `/api/materials/reorder` | `assistant` | Create / execute materials — reorder | `material/materialRoutes.ts` |
| `GET` | `/api/materials/subject/:subjectId` | `authenticated` | Get materials — subject subjectId | `material/materialRoutes.ts` |
| `POST` | `/api/materials/subject/:subjectId` | `assistant` | Create / execute materials — subject subjectId | `material/materialRoutes.ts` |
| `GET` | `/api/materials/subject/:subjectId/grouped` | `authenticated` | List materials — subject subjectId grouped | `material/materialRoutes.ts` |
