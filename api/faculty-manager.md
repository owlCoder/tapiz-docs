# Faculty Manager API

| Method | Path | Auth | Summary | Source |
|---|---|---|---|---|
| `GET` | `/api/faculty-manager/assistants` | `faculty_manager` | List faculty manager — assistants | `faculty-manager/fmAssistantRoutes.ts` |
| `POST` | `/api/faculty-manager/assistants` | `faculty_manager` | Create / execute faculty manager — assistants | `faculty-manager/fmAssistantRoutes.ts` |
| `GET` | `/api/faculty-manager/assistants/:id` | `faculty_manager` | Get faculty manager — assistants id | `faculty-manager/fmAssistantRoutes.ts` |
| `PATCH` | `/api/faculty-manager/assistants/:id` | `faculty_manager` | Update faculty manager — assistants id | `faculty-manager/fmAssistantRoutes.ts` |
| `PATCH` | `/api/faculty-manager/assistants/:id/activate` | `faculty_manager` | Update faculty manager — assistants id activate | `faculty-manager/fmAssistantRoutes.ts` |
| `POST` | `/api/faculty-manager/chairs` | `faculty_manager` | Create / execute faculty manager — chairs | `faculty-manager/fmDepartmentRoutes.ts` |
| `DELETE` | `/api/faculty-manager/chairs/:id` | `faculty_manager` | Delete faculty manager — chairs id | `faculty-manager/fmDepartmentRoutes.ts` |
| `PATCH` | `/api/faculty-manager/chairs/:id` | `faculty_manager` | Update faculty manager — chairs id | `faculty-manager/fmDepartmentRoutes.ts` |
| `POST` | `/api/faculty-manager/chairs/:id/assign-assistant` | `faculty_manager` | Create / execute faculty manager — chairs id assign assistant | `faculty-manager/fmDepartmentRoutes.ts` |
| `POST` | `/api/faculty-manager/chairs/:id/unassign-assistant` | `faculty_manager` | Create / execute faculty manager — chairs id unassign assistant | `faculty-manager/fmDepartmentRoutes.ts` |
| `GET` | `/api/faculty-manager/departments` | `faculty_manager` | List faculty manager — departments | `faculty-manager/fmDepartmentRoutes.ts` |
| `POST` | `/api/faculty-manager/departments` | `faculty_manager` | Create / execute faculty manager — departments | `faculty-manager/fmDepartmentRoutes.ts` |
| `GET` | `/api/faculty-manager/departments/:deptId/chairs` | `faculty_manager` | List faculty manager — departments deptId chairs | `faculty-manager/fmDepartmentRoutes.ts` |
| `DELETE` | `/api/faculty-manager/departments/:id` | `faculty_manager` | Delete faculty manager — departments id | `faculty-manager/fmDepartmentRoutes.ts` |
| `PATCH` | `/api/faculty-manager/departments/:id` | `faculty_manager` | Update faculty manager — departments id | `faculty-manager/fmDepartmentRoutes.ts` |
| `GET` | `/api/faculty-manager/me` | `faculty_manager` | List faculty manager — me | `faculty-manager/facultyManagerRoutes.ts` |
| `GET` | `/api/faculty-manager/students` | `faculty_manager` | List faculty manager — students | `faculty-manager/fmStudentRoutes.ts` |
| `GET` | `/api/faculty-manager/students/:id` | `faculty_manager` | Get faculty manager — students id | `faculty-manager/fmStudentRoutes.ts` |
| `PATCH` | `/api/faculty-manager/students/:id/activate` | `faculty_manager` | Update faculty manager — students id activate | `faculty-manager/fmStudentRoutes.ts` |
| `PATCH` | `/api/faculty-manager/students/:id/approve` | `faculty_manager` | Update faculty manager — students id approve | `faculty-manager/fmStudentRoutes.ts` |
| `GET` | `/api/faculty-manager/students/pending` | `faculty_manager` | List faculty manager — students pending | `faculty-manager/fmStudentRoutes.ts` |
| `GET` | `/api/faculty-manager/study-programs` | `faculty_manager` | List faculty manager — study programs | `faculty-manager/fmStudyProgramRoutes.ts` |
| `POST` | `/api/faculty-manager/study-programs` | `faculty_manager` | Create / execute faculty manager — study programs | `faculty-manager/fmStudyProgramRoutes.ts` |
| `PATCH` | `/api/faculty-manager/study-programs/:id/activate` | `faculty_manager` | Update faculty manager — study programs id activate | `faculty-manager/fmStudyProgramRoutes.ts` |
