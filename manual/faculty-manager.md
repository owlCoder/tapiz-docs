# Faculty Manager Manual

The faculty manager workspace is available under `/faculty-manager`. It manages faculty-level users and organizational structure.

## Faculty manager navigation

| Page | Route | Purpose |
|---|---|---|
| Home | `/faculty-manager` | Faculty overview, modules and license status |
| Assistants | `/faculty-manager/assistants` | Assistant account management |
| Students | `/faculty-manager/students` | Student account management and approvals |
| Departments | `/faculty-manager/departments` | Departments, chairs and assistant assignments |
| Study Programs | `/faculty-manager/study-programs` | Faculty study program catalog |
| Activity Log | `/faculty-manager/audit` | Faculty-level audit records |

## Dashboard

Route: `/faculty-manager`

The dashboard provides:

- faculty license status
- faculty overview
- module shortcuts
- app information

Use this page as the starting point for faculty administration.

## Assistants

Route: `/faculty-manager/assistants`

Faculty managers can manage assistants within their faculty.

Typical actions:

- view assistant accounts
- create an assistant
- edit assistant details
- activate or deactivate assistant accounts
- open assistant details when available

## Students

Route: `/faculty-manager/students`

The students page includes active and pending student account handling.

Typical actions:

- search faculty students
- review active accounts
- activate or deactivate students
- open the pending accounts view
- approve newly registered students

Approval workflow:

1. Open **Students**.
2. Switch to the pending accounts view.
3. Review student identity and academic data.
4. Approve legitimate accounts.
5. The student can sign in after approval.

## Departments and chairs

Route: `/faculty-manager/departments`

Faculty managers maintain organizational units for the faculty.

Typical department actions:

- create a department
- edit a department
- delete a department
- view chairs under a department

Typical chair actions:

- create a chair
- edit a chair
- delete a chair
- assign assistants to a chair
- unassign assistants from a chair

## Study programs

Route: `/faculty-manager/study-programs`

Study programs are used during registration and academic organization.

Typical actions:

- create a study program
- enter short name, full name and English name
- activate or deactivate a program
- keep inactive programs hidden from new registrations while preserving existing student data

## Activity log

Route: `/faculty-manager/audit`

The faculty manager activity log displays faculty-level system action history. Use it for operational review, compliance checks and troubleshooting.
