# Super Admin Manual

The super admin workspace is available under `/super-admin`. It manages global institutions, users, incidents, public content and audit visibility.

## Super admin navigation

| Page | Route | Purpose |
|---|---|---|
| Home | `/super-admin` | System dashboard and global modules |
| Universities | `/super-admin/universities` | University catalog and licensing |
| Faculties | `/super-admin/faculties` | Faculty catalog under universities |
| Departments | `/super-admin/departments` | Departments and chairs across institutions |
| Incidents | `/super-admin/status` | Public status incidents |
| News | `/super-admin/news` | Public news management |
| Activity Log | `/super-admin/audit` | Global audit records |
| Assistants | `/super-admin/assistants` | Assistant account administration |
| Students | `/super-admin/students` | Student account administration |
| Managers | `/super-admin/managers` | Faculty manager account administration |

## Dashboard

Route: `/super-admin`

The dashboard shows global system context, KPIs and module shortcuts such as universities, faculties, departments, assistants, students and managers.

## Universities

Route: `/super-admin/universities`

Super admins manage university records and university-level licensing information.

Typical actions:

- create a university
- edit name, short name and city
- set plan and license state
- set license expiration date
- delete a university when appropriate

## Faculties

Route: `/super-admin/faculties`

Faculties are managed under a selected university.

Typical actions:

- select a university
- create a faculty
- edit name and short name
- manage faculty plan and license
- upload or delete faculty logo
- delete a faculty when appropriate

## Departments and chairs

Route: `/super-admin/departments`

Super admins can manage departments and chairs across universities and faculties.

Typical actions:

- select university and faculty context
- create, edit, activate or archive departments
- create, edit, activate or archive chairs

## Assistant accounts

Route: `/super-admin/assistants`

Super admins can search and manage assistant accounts globally.

Typical actions:

- search by name or email
- filter by institution
- change assistant plan
- update assistant institution assignment
- activate or deactivate assistant accounts

## Student accounts

Route: `/super-admin/students`

Super admins can search and manage student accounts globally.

Typical actions:

- search students
- filter by university, faculty or major
- update student faculty assignment
- activate or deactivate student accounts

## Faculty manager accounts

Route: `/super-admin/managers`

Super admins can manage faculty manager accounts.

Typical actions:

- create faculty manager accounts
- edit manager information
- activate or deactivate accounts
- reset manager passwords and retrieve temporary passwords
- delete accounts when appropriate

## Incidents and status

Route: `/super-admin/status`

Incidents created here are visible on the public status page.

Typical actions:

- create an incident
- set severity and status
- add incident updates
- update translated titles and messages
- resolve incidents
- delete incident updates or incidents when required

## News management

Route: `/super-admin/news`

Super admins can create and publish public news posts for `/news`.

Typical actions:

- create a news post
- enter title, summary and Markdown content
- choose type such as info, news or maintenance
- publish or update posts
- search and manage existing posts

## Global activity log

Route: `/super-admin/audit`

The global audit log displays system action history. It can be filtered by university, faculty and action type where supported.
