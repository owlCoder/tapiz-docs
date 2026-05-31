# Admin API

| Method | Path | Auth | Summary | Source |
|---|---|---|---|---|
| `GET` | `/api/admin/assistants` | `super_admin` | List admin — assistants | `admin/adminRoutes.ts` |
| `GET` | `/api/admin/assistants/:id` | `super_admin` | Get admin — assistants id | `admin/adminRoutes.ts` |
| `PATCH` | `/api/admin/assistants/:id/activate` | `super_admin` | Update admin — assistants id activate | `admin/adminRoutes.ts` |
| `PATCH` | `/api/admin/assistants/:id/institution` | `super_admin` | Update admin — assistants id institution | `admin/adminRoutes.ts` |
| `GET` | `/api/admin/faculties` | `super_admin` | List admin — faculties | `admin/adminUniversityRoutes.ts` |
| `GET` | `/api/admin/faculties/:facId/managers` | `super_admin` | List admin — faculties facId managers | `admin/adminRoutes.ts` |
| `DELETE` | `/api/admin/faculties/:id/logo` | `super_admin` | Delete admin — faculties id logo | `admin/adminRoutes.ts` |
| `POST` | `/api/admin/faculties/:id/logo` | `super_admin` | Create / execute admin — faculties id logo | `admin/adminRoutes.ts` |
| `GET` | `/api/admin/faculty-managers` | `super_admin` | List admin — faculty managers | `admin/adminRoutes.ts` |
| `POST` | `/api/admin/faculty-managers` | `super_admin` | Create / execute admin — faculty managers | `admin/adminRoutes.ts` |
| `DELETE` | `/api/admin/faculty-managers/:id` | `super_admin` | Delete admin — faculty managers id | `admin/adminRoutes.ts` |
| `PATCH` | `/api/admin/faculty-managers/:id` | `super_admin` | Update admin — faculty managers id | `admin/adminRoutes.ts` |
| `PATCH` | `/api/admin/faculty-managers/:id/activate` | `super_admin` | Update admin — faculty managers id activate | `admin/adminRoutes.ts` |
| `POST` | `/api/admin/faculty-managers/:id/reset-password` | `super_admin` | Create / execute admin — faculty managers id reset password | `admin/adminRoutes.ts` |
| `GET` | `/api/admin/students` | `super_admin` | List admin — students | `admin/adminRoutes.ts` |
| `PATCH` | `/api/admin/students/:id/activate` | `super_admin` | Update admin — students id activate | `admin/adminRoutes.ts` |
| `PATCH` | `/api/admin/students/:id/faculty` | `super_admin` | Update admin — students id faculty | `admin/adminRoutes.ts` |
| `GET` | `/api/admin/universities` | `super_admin` | List admin — universities | `admin/adminUniversityRoutes.ts` |
| `POST` | `/api/admin/universities` | `super_admin` | Create / execute admin — universities | `admin/adminUniversityRoutes.ts` |
| `DELETE` | `/api/admin/universities/:id` | `super_admin` | Delete admin — universities id | `admin/adminUniversityRoutes.ts` |
| `GET` | `/api/admin/universities/:id` | `super_admin` | Get admin — universities id | `admin/adminUniversityRoutes.ts` |
| `PATCH` | `/api/admin/universities/:id` | `super_admin` | Update admin — universities id | `admin/adminUniversityRoutes.ts` |
