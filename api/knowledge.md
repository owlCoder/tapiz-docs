# Knowledge API

| Method | Path | Auth | Summary | Source |
|---|---|---|---|---|
| `PATCH` | `/api/knowledge/attempts/:attemptId/draft` | `student` | Update knowledge — attempts attemptId draft | `knowledge/knowledgeRoutes.ts` |
| `GET` | `/api/knowledge/attempts/:attemptId/result` | `student` | List knowledge — attempts attemptId result | `knowledge/knowledgeRoutes.ts` |
| `GET` | `/api/knowledge/attempts/:attemptId/result-assistant` | `assistant` | List knowledge — attempts attemptId result assistant | `knowledge/knowledgeRoutes.ts` |
| `POST` | `/api/knowledge/attempts/:attemptId/submit` | `student` | Create / execute knowledge — attempts attemptId submit | `knowledge/knowledgeRoutes.ts` |
| `DELETE` | `/api/knowledge/banks/:bankId` | `assistant` | Delete knowledge — banks bankId | `knowledge/bankRoutes.ts` |
| `GET` | `/api/knowledge/banks/:bankId` | `assistant` | Get knowledge — banks bankId | `knowledge/bankRoutes.ts` |
| `PATCH` | `/api/knowledge/banks/:bankId` | `assistant` | Update knowledge — banks bankId | `knowledge/bankRoutes.ts` |
| `POST` | `/api/knowledge/banks/:bankId/draw-by-distribution` | `assistant` | Create / execute knowledge — banks bankId draw by distribution | `knowledge/bankRoutes.ts` |
| `GET` | `/api/knowledge/banks/:bankId/questions` | `assistant` | List knowledge — banks bankId questions | `knowledge/bankRoutes.ts` |
| `POST` | `/api/knowledge/banks/:bankId/questions` | `assistant` | Create / execute knowledge — banks bankId questions | `knowledge/bankRoutes.ts` |
| `DELETE` | `/api/knowledge/banks/:bankId/questions/:questionId` | `assistant` | Delete knowledge — banks bankId questions questionId | `knowledge/bankRoutes.ts` |
| `PATCH` | `/api/knowledge/banks/:bankId/questions/:questionId` | `assistant` | Update knowledge — banks bankId questions questionId | `knowledge/bankRoutes.ts` |
| `POST` | `/api/knowledge/banks/:bankId/questions/bulk` | `assistant` | Create / execute knowledge — banks bankId questions bulk | `knowledge/bankRoutes.ts` |
| `GET` | `/api/knowledge/banks/:bankId/random` | `assistant` | List knowledge — banks bankId random | `knowledge/bankRoutes.ts` |
| `GET` | `/api/knowledge/banks/:bankId/tags` | `assistant` | List knowledge — banks bankId tags | `knowledge/bankRoutes.ts` |
| `POST` | `/api/knowledge/banks/:bankId/tags` | `assistant` | Create / execute knowledge — banks bankId tags | `knowledge/bankRoutes.ts` |
| `GET` | `/api/knowledge/banks/subject/:subjectId` | `assistant` | Get knowledge — banks subject subjectId | `knowledge/bankRoutes.ts` |
| `POST` | `/api/knowledge/banks/subject/:subjectId` | `assistant` | Create / execute knowledge — banks subject subjectId | `knowledge/bankRoutes.ts` |
| `DELETE` | `/api/knowledge/practical/:activityId` | `assistant` | Delete knowledge — practical activityId | `knowledge/practicalRoutes.ts` |
| `GET` | `/api/knowledge/practical/:activityId` | `authenticated` | Get knowledge — practical activityId | `knowledge/practicalRoutes.ts` |
| `PATCH` | `/api/knowledge/practical/:activityId` | `assistant` | Update knowledge — practical activityId | `knowledge/practicalRoutes.ts` |
| `POST` | `/api/knowledge/practical/:activityId/attachments` | `assistant` | Create / execute knowledge — practical activityId attachments | `knowledge/practicalRoutes.ts` |
| `DELETE` | `/api/knowledge/practical/:activityId/attachments/:attachmentId` | `assistant` | Delete knowledge — practical activityId attachments attachmentId | `knowledge/practicalRoutes.ts` |
| `GET` | `/api/knowledge/practical/:activityId/my-submission` | `student` | List knowledge — practical activityId my submission | `knowledge/practicalSubmissionRoutes.ts` |
| `GET` | `/api/knowledge/practical/:activityId/submissions` | `assistant` | List knowledge — practical activityId submissions | `knowledge/practicalSubmissionRoutes.ts` |
| `POST` | `/api/knowledge/practical/:activityId/submit` | `student` | Create / execute knowledge — practical activityId submit | `knowledge/practicalSubmissionRoutes.ts` |
| `DELETE` | `/api/knowledge/practical/:activityId/submit/:fileId` | `student` | Delete knowledge — practical activityId submit fileId | `knowledge/practicalSubmissionRoutes.ts` |
| `GET` | `/api/knowledge/practical/attachments/:attachmentId/download` | `authenticated` | List knowledge — practical attachments attachmentId download | `knowledge/practicalRoutes.ts` |
| `GET` | `/api/knowledge/practical/subject/:subjectId` | `authenticated` | Get knowledge — practical subject subjectId | `knowledge/practicalRoutes.ts` |
| `POST` | `/api/knowledge/practical/subject/:subjectId` | `assistant` | Create / execute knowledge — practical subject subjectId | `knowledge/practicalRoutes.ts` |
| `GET` | `/api/knowledge/practical/submission-files/:fileId/download` | `authenticated` | List knowledge — practical submission files fileId download | `knowledge/practicalSubmissionRoutes.ts` |
| `PATCH` | `/api/knowledge/practical/submissions/:submissionId/grade` | `assistant` | Update knowledge — practical submissions submissionId grade | `knowledge/practicalSubmissionRoutes.ts` |
| `PUT` | `/api/knowledge/questions/:questionId/tags` | `assistant` | Update knowledge — questions questionId tags | `knowledge/knowledgeRoutes.ts` |
| `DELETE` | `/api/knowledge/quizzes/:quizId` | `assistant` | Delete knowledge — quizzes quizId | `knowledge/quizRoutes.ts` |
| `GET` | `/api/knowledge/quizzes/:quizId` | `authenticated` | Get knowledge — quizzes quizId | `knowledge/quizRoutes.ts` |
| `PATCH` | `/api/knowledge/quizzes/:quizId` | `assistant` | Update knowledge — quizzes quizId | `knowledge/quizRoutes.ts` |
| `GET` | `/api/knowledge/quizzes/:quizId/my-attempts` | `student` | List knowledge — quizzes quizId my attempts | `knowledge/quizRoutes.ts` |
| `GET` | `/api/knowledge/quizzes/:quizId/question-stats` | `assistant` | List knowledge — quizzes quizId question stats | `knowledge/quizRoutes.ts` |
| `GET` | `/api/knowledge/quizzes/:quizId/results` | `assistant` | List knowledge — quizzes quizId results | `knowledge/quizRoutes.ts` |
| `POST` | `/api/knowledge/quizzes/:quizId/start` | `student` | Create / execute knowledge — quizzes quizId start | `knowledge/quizRoutes.ts` |
| `GET` | `/api/knowledge/quizzes/subject/:subjectId` | `authenticated` | Get knowledge — quizzes subject subjectId | `knowledge/quizRoutes.ts` |
| `POST` | `/api/knowledge/quizzes/subject/:subjectId` | `assistant` | Create / execute knowledge — quizzes subject subjectId | `knowledge/quizRoutes.ts` |
| `DELETE` | `/api/knowledge/tags/:tagId` | `assistant` | Delete knowledge — tags tagId | `knowledge/knowledgeRoutes.ts` |
