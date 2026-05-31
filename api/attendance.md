# Attendance API

| Method | Path | Auth | Summary | Source |
|---|---|---|---|---|
| `DELETE` | `/api/attendance/:id` | `assistant` | Delete attendance — id | `attendance/attendanceRoutes.ts` |
| `GET` | `/api/attendance/all` | `assistant` | List attendance — all | `attendance/attendanceRoutes.ts` |
| `POST` | `/api/attendance/flush` | `public` | Create / execute attendance — flush | `attendance/attendanceRoutes.ts` |
| `POST` | `/api/attendance/manual` | `assistant` | Create / execute attendance — manual | `attendance/attendanceRoutes.ts` |
| `POST` | `/api/attendance/manual-bulk` | `assistant` | Create / execute attendance — manual bulk | `attendance/attendanceRoutes.ts` |
| `GET` | `/api/attendance/matrix` | `assistant` | List attendance — matrix | `attendance/attendanceRoutes.ts` |
| `GET` | `/api/attendance/my` | `student` | List attendance — my | `attendance/attendanceRoutes.ts` |
| `POST` | `/api/attendance/scan` | `student` | Create / execute attendance — scan | `attendance/attendanceRoutes.ts` |
| `GET` | `/api/attendance/stats` | `assistant` | List attendance — stats | `attendance/attendanceRoutes.ts` |
| `GET` | `/api/attendance/student-stats` | `assistant` | List attendance — student stats | `attendance/attendanceRoutes.ts` |
