# Assistant Manual

The assistant workspace is available under `/assistant`. Assistants manage daily teaching operations: students, subjects, sessions, score sheets, attendance, analytics, posts, materials, quizzes, forms, notifications and personal tasks.

## Assistant navigation

| Group | Page | Route | Purpose |
|---|---|---|---|
| Main | Home | `/assistant` | Assistant dashboard, KPIs, shortcuts and license status |
| Main | To-Do | `/assistant/todos` | Personal task list |
| Students | Students | `/assistant/students` | Student search, editing, creation, approval and password reset |
| Students | Activity | `/assistant/students/trend` | Student attendance and progress trend view |
| Teaching | Subjects | `/assistant/subjects` | Subject management and enrollment |
| Teaching | Sessions | `/assistant/sessions` | Session creation and management |
| Teaching | Score Sheets | `/assistant/score-sheets` | Gradebook-style score sheets |
| Teaching | Posts | `/assistant/posts` | Subject announcements |
| Teaching | Materials | `/assistant/materials` | Teaching files and folders |
| Teaching | Knowledge Check | `/assistant/knowledge` | Question banks, quizzes and practical activities |
| Attendance | Attendances | `/assistant/attendances` | Attendance records and manual corrections |
| Attendance | Absences | `/assistant/absences` | Absence reporting |
| Attendance | Calendar | `/assistant/calendar` | Session calendar |
| Attendance | Compare | `/assistant/sessions/compare` | Session-to-session attendance comparison |
| Attendance | QR Code | `/assistant/qr` | Active QR attendance sessions |
| Analytics | Analytics | `/assistant/analytics` | Attendance analytics dashboards |
| Analytics | Reports | `/assistant/reports` | Subject reports and exports |
| Analytics | Comparison | `/assistant/analytics/compare` | Subject-level analytics comparison |
| Forms | Forms | `/assistant/forms` | Public forms and response analytics |

Some navigation groups are plan-gated. Posts, materials, quizzes, analytics and forms can require the corresponding plan feature.

## Assistant dashboard

Route: `/assistant`

The dashboard gives a high-level operational view:

- license status
- quick shortcuts
- registered students
- subjects and activity indicators
- attendance KPIs
- at-risk students
- institution assignment details
- app and service information
- notifications shortcut

Use the dashboard as the starting point for common daily actions.

## Students

Route: `/assistant/students`

The student management page supports:

- searching students
- filtering by academic data
- creating student accounts manually
- editing student profile data
- approving pending student accounts
- resetting student passwords and copying temporary passwords

Recommended workflow for a new student:

1. Open **Students**.
2. Check the **Pending** tab for self-registered accounts.
3. Approve legitimate accounts.
4. Use search to verify the student exists.
5. Edit academic details if needed.

## Student activity

Route: `/assistant/students/trend`

The student activity page provides detailed attendance and progress by student. Assistants can filter students by major, enrollment year, subject and search text.

Use this page to investigate:

- attendance history
- weekly activity
- progress by subject
- score and attendance signals for an individual student

## Subjects

Route: `/assistant/subjects`

Subject management includes active/inactive subject handling, drag-and-drop ordering, enrollment management and assistant collaboration.

Typical subject actions:

- create a subject with name, code, academic year, major and absence threshold
- edit subject metadata
- archive or reactivate a subject
- enable or disable self-enrollment
- enroll or unenroll students
- bulk-enroll students
- add or remove assistant collaborators

## Sessions

Route: `/assistant/sessions`

Sessions represent attendance events for a subject. Assistants can create sessions, choose session numbers and types, view existing sessions and delete sessions when appropriate.

## QR attendance

Route: `/assistant/qr`

The QR page is used to generate an active attendance code for a subject session.

Typical flow:

1. Select the subject.
2. Select or create the session number and type.
3. Generate the QR code.
4. Display the QR code on a projector or monitor.
5. Rotate the QR code when needed.
6. Invalidate the session when attendance collection is complete.

Students scan the QR code from `/dashboard/scan`.

## Attendances

Route: `/assistant/attendances`

The attendances page provides attendance records, matrices and manual correction tools.

Typical actions:

- filter attendance by subject
- view attendance records
- add a student manually to a session
- add multiple students manually
- remove an incorrect attendance record
- review attendance statistics and matrices

## Absences

Route: `/assistant/absences`

The absence report identifies students who missed QR attendance or are below the configured attendance threshold. Use it for follow-up, intervention and reporting.

## Session calendar

Route: `/assistant/calendar`

The session calendar displays all sessions arranged by date and subject. Use it to audit teaching activity over time.

## Session comparison

Route: `/assistant/sessions/compare`

Session comparison groups students by attendance across two selected sessions:

- attended both sessions
- attended only session A
- attended only session B
- attended neither session

This is useful for detecting attendance trends, drop-off and session-specific anomalies.

## Score sheets

Route: `/assistant/score-sheets`

Score sheets provide a gradebook-style interface with rows, columns, formulas, imports, exports, locking and version history.

Typical actions:

- create a score sheet for a subject
- add columns and score values
- add or import student rows
- configure formulas with supported operators
- export columns
- transfer data between sheets
- lock or unlock a sheet
- review automatic version history
- restore a previous snapshot when needed

## Posts

Route: `/assistant/posts`

Posts are subject announcements visible to enrolled students. They can include title, content, publication state and attachments.

Typical actions:

- create a post
- save as draft or publish
- upload attachments
- edit content
- delete attachments
- delete the post

## Materials

Route: `/assistant/materials`

Materials are teaching resources organized by subject and optional folders.

Typical actions:

- create a material entry
- add title, description and folder
- upload one or more attachments
- generate a public material link with optional expiry
- edit or delete materials
- delete attachments

## Knowledge Check

Route: `/assistant/knowledge`

Knowledge Check covers question banks, quizzes and practical activities.

### Question banks

Assistants can create banks per subject, add questions, bulk-add questions, tag questions and draw random or distribution-based question sets.

Supported question types include:

- single choice
- multiple choice
- true/false

### Quizzes

Assistants can create quizzes from question banks and configure:

- open and close dates
- duration
- maximum attempts
- shuffled questions
- shuffled options
- result visibility after submission or after closing
- score sheet column integration
- penalty percentage

Assistants can review quiz results, question statistics and individual attempt results.

### Practical activities

Practical activities support file submission workflows. Assistants can configure visibility windows, upload windows, allowed file types, file size limits and linked score columns. Submitted files can be reviewed, downloaded and graded.

## Analytics

Route: `/assistant/analytics`

Analytics includes overview, ranking and detailed table tabs. Assistants can generate PDF exports and print analytics views.

Use analytics to review:

- attendance trends
- distribution charts
- cumulative attendance
- at-risk lists
- top and low performers
- detailed student statistics

## Reports

Route: `/assistant/reports`

Reports provide subject-level reporting and export workflows for operational and academic reporting.

## Subject comparison

Route: `/assistant/analytics/compare`

Subject comparison compares attendance and trends across selected subjects. It helps identify differences between cohorts, courses or teaching periods.

## Forms

Route: `/assistant/forms`

Forms allow assistants to build public forms, collect responses and review statistics.

Typical actions:

- create a form with title, description, public token and availability window
- add questions
- edit or deactivate a form
- copy or share the public form link
- open response tables
- review response statistics
- make results public when appropriate
- delete or edit responses

## Notifications

The notification modal allows assistants to send messages to selected recipients, subjects or groups of students, depending on the configured recipient mode.

## To-dos

Route: `/assistant/todos`

The to-do page is a personal task list for the assistant. Assistants can add, complete, edit and delete tasks.
