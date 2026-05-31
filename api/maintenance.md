# Maintenance API

| Method | Path | Auth | Summary | Source |
|---|---|---|---|---|
| `POST` | `/api/maintenance/start` | `super_admin` | Create / execute maintenance — start | `system/maintenanceRoutes.ts` |
| `GET` | `/api/maintenance/status` | `public` | List maintenance — status | `system/maintenanceRoutes.ts` |
| `POST` | `/api/maintenance/stop` | `super_admin` | Create / execute maintenance — stop | `system/maintenanceRoutes.ts` |
