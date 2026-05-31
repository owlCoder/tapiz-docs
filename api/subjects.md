# Subjects API

| Method | Path | Auth | Summary | Source |
|---|---|---|---|---|
| `GET` | `/api/subjects` | `authenticated` | List subjects | `subject/subjectRoutes.ts` |
| `POST` | `/api/subjects` | `assistant` | Create / execute subjects | `subject/subjectRoutes.ts` |
| `DELETE` | `/api/subjects/:id` | `assistant` | Delete subjects — id | `subject/subjectRoutes.ts` |
| `PATCH` | `/api/subjects/:id` | `assistant` | Update subjects — id | `subject/subjectRoutes.ts` |
| `PATCH` | `/api/subjects/:id/activate` | `assistant` | Update subjects — id activate | `subject/subjectRoutes.ts` |
| `GET` | `/api/subjects/:id/assistants` | `assistant` | List subjects — id assistants | `subject/subjectRoutes.ts` |
| `POST` | `/api/subjects/:id/assistants` | `assistant` | Create / execute subjects — id assistants | `subject/subjectRoutes.ts` |
| `DELETE` | `/api/subjects/:id/assistants/:assistantId` | `assistant` | Delete subjects — id assistants assistantId | `subject/subjectRoutes.ts` |
| `POST` | `/api/subjects/:id/enroll` | `assistant` | Create / execute subjects — id enroll | `subject/subjectRoutes.ts` |
| `POST` | `/api/subjects/:id/enroll-bulk` | `assistant` | Create / execute subjects — id enroll bulk | `subject/subjectRoutes.ts` |
| `DELETE` | `/api/subjects/:id/enroll/:studentId` | `assistant` | Delete subjects — id enroll studentId | `subject/subjectRoutes.ts` |
| `DELETE` | `/api/subjects/:id/self-enroll` | `student` | Delete subjects — id self enroll | `subject/subjectRoutes.ts` |
| `POST` | `/api/subjects/:id/self-enroll` | `student` | Create / execute subjects — id self enroll | `subject/subjectRoutes.ts` |
| `GET` | `/api/subjects/:id/students` | `assistant` | List subjects — id students | `subject/subjectRoutes.ts` |
| `GET` | `/api/subjects/:subjectId/available-students` | `assistant` | List subjects — subjectId available students | `subject/subjectRoutes.ts` |
| `GET` | `/api/subjects/browsable` | `student` | List subjects — browsable | `subject/subjectRoutes.ts` |
| `GET` | `/api/subjects/enrolled` | `authenticated` | List subjects — enrolled | `subject/subjectRoutes.ts` |
| `GET` | `/api/subjects/my` | `assistant` | List subjects — my | `subject/subjectRoutes.ts` |
| `GET` | `/api/subjects/my/inactive` | `assistant` | List subjects — my inactive | `subject/subjectRoutes.ts` |
| `PATCH` | `/api/subjects/reorder` | `assistant` | Update subjects — reorder | `subject/subjectRoutes.ts` |
