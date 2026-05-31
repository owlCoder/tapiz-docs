# Institutions API

| Method | Path | Auth | Summary | Source |
|---|---|---|---|---|
| `POST` | `/api/institutions/admin/chairs` | `super_admin` | Create / execute institutions — admin chairs | `admin/adminInstitutionRoutes.ts` |
| `DELETE` | `/api/institutions/admin/chairs/:id` | `super_admin` | Delete institutions — admin chairs id | `admin/adminInstitutionRoutes.ts` |
| `PATCH` | `/api/institutions/admin/chairs/:id` | `super_admin` | Update institutions — admin chairs id | `admin/adminInstitutionRoutes.ts` |
| `POST` | `/api/institutions/admin/departments` | `super_admin` | Create / execute institutions — admin departments | `admin/adminInstitutionRoutes.ts` |
| `GET` | `/api/institutions/admin/departments/:deptId/chairs` | `super_admin` | List institutions — admin departments deptId chairs | `admin/adminInstitutionRoutes.ts` |
| `DELETE` | `/api/institutions/admin/departments/:id` | `super_admin` | Delete institutions — admin departments id | `admin/adminInstitutionRoutes.ts` |
| `PATCH` | `/api/institutions/admin/departments/:id` | `super_admin` | Update institutions — admin departments id | `admin/adminInstitutionRoutes.ts` |
| `POST` | `/api/institutions/admin/faculties` | `super_admin` | Create / execute institutions — admin faculties | `admin/adminInstitutionRoutes.ts` |
| `GET` | `/api/institutions/admin/faculties/:facId/departments` | `super_admin` | List institutions — admin faculties facId departments | `admin/adminInstitutionRoutes.ts` |
| `DELETE` | `/api/institutions/admin/faculties/:id` | `super_admin` | Delete institutions — admin faculties id | `admin/adminInstitutionRoutes.ts` |
| `PATCH` | `/api/institutions/admin/faculties/:id` | `super_admin` | Update institutions — admin faculties id | `admin/adminInstitutionRoutes.ts` |
| `PATCH` | `/api/institutions/admin/faculties/:id/license` | `super_admin` | Update institutions — admin faculties id license | `admin/adminInstitutionRoutes.ts` |
| `POST` | `/api/institutions/admin/universities` | `super_admin` | Create / execute institutions — admin universities | `admin/adminInstitutionRoutes.ts` |
| `DELETE` | `/api/institutions/admin/universities/:id` | `super_admin` | Delete institutions — admin universities id | `admin/adminInstitutionRoutes.ts` |
| `PATCH` | `/api/institutions/admin/universities/:id` | `super_admin` | Update institutions — admin universities id | `admin/adminInstitutionRoutes.ts` |
| `PATCH` | `/api/institutions/admin/universities/:id/license` | `super_admin` | Update institutions — admin universities id license | `admin/adminInstitutionRoutes.ts` |
| `GET` | `/api/institutions/departments/:deptId/chairs` | `authenticated` | List institutions — departments deptId chairs | `institution/institutionRoutes.ts` |
| `GET` | `/api/institutions/faculties/:facId/departments` | `authenticated` | List institutions — faculties facId departments | `institution/institutionRoutes.ts` |
| `GET` | `/api/institutions/faculties/:facId/study-programs` | `public` | List institutions — faculties facId study programs | `institution/institutionRoutes.ts` |
| `GET` | `/api/institutions/universities` | `public` | List institutions — universities | `institution/institutionRoutes.ts` |
| `GET` | `/api/institutions/universities/:univId/faculties` | `public` | List institutions — universities univId faculties | `institution/institutionRoutes.ts` |
