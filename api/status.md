# Status API

| Method | Path | Auth | Summary | Source |
|---|---|---|---|---|
| `GET` | `/api/status` | `public` | List status | `system/statusRoutes.ts` |
| `GET` | `/api/status/admin/incidents` | `super_admin` | List status — admin incidents | `admin/adminIncidentRoutes.ts` |
| `POST` | `/api/status/admin/incidents` | `super_admin` | Create / execute status — admin incidents | `admin/adminIncidentRoutes.ts` |
| `DELETE` | `/api/status/admin/incidents/:id` | `super_admin` | Delete status — admin incidents id | `admin/adminIncidentRoutes.ts` |
| `PATCH` | `/api/status/admin/incidents/:id` | `super_admin` | Update status — admin incidents id | `admin/adminIncidentRoutes.ts` |
| `POST` | `/api/status/admin/incidents/:id/updates` | `super_admin` | Create / execute status — admin incidents id updates | `admin/adminIncidentRoutes.ts` |
| `DELETE` | `/api/status/admin/updates/:id` | `super_admin` | Delete status — admin updates id | `admin/adminIncidentRoutes.ts` |
| `PATCH` | `/api/status/admin/updates/:id` | `super_admin` | Update status — admin updates id | `admin/adminIncidentRoutes.ts` |
| `GET` | `/api/status/uptime` | `public` | List status — uptime | `system/statusRoutes.ts` |
