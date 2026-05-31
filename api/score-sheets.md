# Score Sheets API

| Method | Path | Auth | Summary | Source |
|---|---|---|---|---|
| `GET` | `/api/score-sheets` | `assistant` | List score sheets | `scoresheet/scoreSheetRoutes.ts` |
| `POST` | `/api/score-sheets` | `assistant` | Create / execute score sheets | `scoresheet/scoreSheetRoutes.ts` |
| `DELETE` | `/api/score-sheets/:id` | `assistant` | Delete score sheets — id | `scoresheet/scoreSheetRoutes.ts` |
| `GET` | `/api/score-sheets/:id` | `assistant` | Get score sheets — id | `scoresheet/scoreSheetRoutes.ts` |
| `POST` | `/api/score-sheets/:id/columns` | `assistant` | Create / execute score sheets — id columns | `scoresheet/scoreSheetRoutes.ts` |
| `POST` | `/api/score-sheets/:id/columns/reorder` | `assistant` | Create / execute score sheets — id columns reorder | `scoresheet/scoreSheetRoutes.ts` |
| `POST` | `/api/score-sheets/:id/import-students` | `assistant` | Create / execute score sheets — id import students | `scoresheet/scoreSheetRoutes.ts` |
| `PATCH` | `/api/score-sheets/:id/lock` | `assistant` | Update score sheets — id lock | `scoresheet/scoreSheetRoutes.ts` |
| `PATCH` | `/api/score-sheets/:id/rename` | `assistant` | Update score sheets — id rename | `scoresheet/scoreSheetRoutes.ts` |
| `POST` | `/api/score-sheets/:id/restore-snapshot` | `assistant` | Create / execute score sheets — id restore snapshot | `scoresheet/scoreSheetRoutes.ts` |
| `POST` | `/api/score-sheets/:id/rows` | `assistant` | Create / execute score sheets — id rows | `scoresheet/scoreSheetRoutes.ts` |
| `PATCH` | `/api/score-sheets/:id/unlock` | `assistant` | Update score sheets — id unlock | `scoresheet/scoreSheetRoutes.ts` |
| `PUT` | `/api/score-sheets/cells` | `assistant` | Update score sheets — cells | `scoresheet/scoreSheetRoutes.ts` |
| `DELETE` | `/api/score-sheets/columns/:colId` | `assistant` | Delete score sheets — columns colId | `scoresheet/scoreSheetRoutes.ts` |
| `PATCH` | `/api/score-sheets/columns/:colId` | `assistant` | Update score sheets — columns colId | `scoresheet/scoreSheetRoutes.ts` |
| `DELETE` | `/api/score-sheets/rows/:rowId` | `assistant` | Delete score sheets — rows rowId | `scoresheet/scoreSheetRoutes.ts` |
| `GET` | `/api/score-sheets/student/sheet/:sheetId` | `student` | Get score sheets — student sheet sheetId | `scoresheet/scoreSheetRoutes.ts` |
| `GET` | `/api/score-sheets/student/subjects` | `student` | List score sheets — student subjects | `scoresheet/scoreSheetRoutes.ts` |
| `POST` | `/api/score-sheets/transfer` | `assistant` | Create / execute score sheets — transfer | `scoresheet/scoreSheetRoutes.ts` |
