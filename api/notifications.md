# Notifications API

| Method | Path | Auth | Summary | Source |
|---|---|---|---|---|
| `GET` | `/api/notifications` | `student` | List notifications | `notification/notificationRoutes.ts` |
| `PATCH` | `/api/notifications/:id/read` | `student` | Update notifications — id read | `notification/notificationRoutes.ts` |
| `POST` | `/api/notifications/read-all` | `student` | Create / execute notifications — read all | `notification/notificationRoutes.ts` |
| `POST` | `/api/notifications/send` | `assistant` | Create / execute notifications — send | `notification/notificationRoutes.ts` |
| `GET` | `/api/notifications/unread-count` | `student` | List notifications — unread count | `notification/notificationRoutes.ts` |
