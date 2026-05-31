# Student Manual

The student workspace is available under `/dashboard`. It focuses on subject enrollment, attendance, grades, materials, announcements, quizzes, practical activities and the session calendar.

## Student navigation

| Navigation item | Route | Purpose |
|---|---|---|
| Overview | `/dashboard` | Main student dashboard |
| Calendar | `/dashboard/calendar` | Monthly attendance/session calendar |
| My Points | `/dashboard/grades` | Score sheet and grade overview |
| Scan QR | `/dashboard/scan` | QR attendance scanning |
| Quiz attempt | `/dashboard/quiz/:quizId` | Protected quiz-taking page |

## Dashboard overview

Route: `/dashboard`

The student dashboard provides:

- enrollment and subject selection
- attendance summary by session type
- announcements/posts from enrolled subjects
- teaching materials
- available quizzes
- practical activities
- app information and status context

### Select a subject

Many student dashboard panels depend on the selected subject. Choose a subject to load related attendance, materials, posts, quizzes and practical activities.

### Subject enrollment

The dashboard includes course enrollment information and can show available subjects for self-enrollment when the subject allows it.

Typical actions:

1. Review enrolled subjects.
2. Browse available subjects when self-enrollment is enabled.
3. Enroll or unenroll where permitted.
4. Return to the dashboard to view subject-specific content.

## Attendance by session type

The student dashboard groups attendance by session type. Students can review:

- attendance rate
- total sessions
- present sessions
- absent sessions
- current streak
- remaining absences or threshold status

The threshold badge indicates whether the attendance requirement is met, still within limits or exceeded.

## Scan QR attendance

Route: `/dashboard/scan`

Students use QR scanning to record attendance for an active session.

Typical flow:

1. Open **Scan QR**.
2. Allow camera access in the browser.
3. Point the camera at the QR code displayed by the assistant.
4. Wait for confirmation.
5. Return to the dashboard or calendar to verify attendance.

If the camera is unavailable, the page shows a retry or no-access state.

## My Points

Route: `/dashboard/grades`

The My Points page displays score sheets for subjects in which the student is enrolled. Each subject can contain one or more sheets, and each sheet displays columns created by the assistant.

Use this page to:

- review points by subject
- compare score sheet columns
- see whether assistants have published grading information

## Attendance calendar

Route: `/dashboard/calendar`

The attendance calendar displays sessions and the student's attendance status by month. Students can select a subject and review attendance across dates.

## Materials

Materials appear on the dashboard for the selected subject. Students can open folders, view material descriptions and download attachments.

## Announcements and posts

Posts appear on the dashboard for enrolled subjects. Posts may include text content and attachments.

## Quizzes

Quizzes appear when available for the selected subject. A quiz can include timing, attempt limits, shuffled questions/options and result visibility rules.

Typical quiz flow:

1. Open the available quiz.
2. Start an attempt.
3. Answer questions.
4. Navigate between questions.
5. Submit the attempt.
6. Review the result when results are visible.

## Practical activities

Practical activities can include instructions, visibility windows, upload windows, allowed file types, maximum file size and grading. Students can upload files while submissions are open and view feedback when graded.
