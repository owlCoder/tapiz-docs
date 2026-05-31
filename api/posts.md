# Posts API

| Method | Path | Auth | Summary | Source |
|---|---|---|---|---|
| `DELETE` | `/api/posts/:id` | `assistant` | Delete posts — id | `post/postRoutes.ts` |
| `GET` | `/api/posts/:id` | `authenticated` | Get posts — id | `post/postRoutes.ts` |
| `PATCH` | `/api/posts/:id` | `assistant` | Update posts — id | `post/postRoutes.ts` |
| `POST` | `/api/posts/:id/attachments` | `assistant` | Create / execute posts — id attachments | `post/postRoutes.ts` |
| `DELETE` | `/api/posts/:id/attachments/:attachmentId` | `assistant` | Delete posts — id attachments attachmentId | `post/postRoutes.ts` |
| `GET` | `/api/posts/attachments/:attachmentId/download` | `authenticated` | List posts — attachments attachmentId download | `post/postRoutes.ts` |
| `GET` | `/api/posts/subject/:subjectId` | `authenticated` | Get posts — subject subjectId | `post/postRoutes.ts` |
| `POST` | `/api/posts/subject/:subjectId` | `assistant` | Create / execute posts — subject subjectId | `post/postRoutes.ts` |
