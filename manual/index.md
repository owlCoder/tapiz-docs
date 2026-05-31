# User Manual

This user manual documents the Tapiz web application from the perspective of real users. It is aligned with the Tapiz web application and organized by role-based workflows, navigation areas and public pages.

## Audience

| Audience | Main area | Typical responsibilities |
|---|---|---|
| Public visitors | Public website, news, status and shared links | Read public content, open shared forms or materials, start account access flows |
| Students | Student dashboard | Enroll in subjects, scan attendance QR codes, view grades, open materials, complete quizzes and follow session calendars |
| Assistants | Assistant workspace | Manage subjects, students, sessions, score sheets, attendance, posts, materials, forms, analytics and knowledge checks |
| Faculty managers | Faculty manager workspace | Manage faculty assistants, students, departments, chairs, study programs and faculty-level audit visibility |
| Super admins | Super admin workspace | Manage universities, faculties, departments, users, incidents, public news and global audit logs |

## Application areas

The application is organized around protected role workspaces and public pages:

| Area | Route prefix | Access |
|---|---|---|
| Public website | `/`, `/news`, `/status`, `/changelog` | Public |
| Shared public forms | `/forms/:token` | Public link |
| Shared public materials | `/public/materials/:token` | Public link |
| Student workspace | `/dashboard` | Student |
| Assistant workspace | `/assistant` | Assistant |
| Faculty manager workspace | `/faculty-manager` | Faculty manager |
| Super admin workspace | `/super-admin` | Super admin |

## Navigation model

Tapiz uses role-based navigation. After sign-in, users are redirected to the workspace that matches their account role. Pages outside the user's role are protected and return an access-denied state.

The manual is split by role:

- [Public Pages and Access](./public.md)
- [Account Access and Security](./account-access.md)
- [Student Manual](./student.md)
- [Assistant Manual](./assistant.md)
- [Faculty Manager Manual](./faculty-manager.md)
- [Super Admin Manual](./super-admin.md)
- [Settings, Profile and Preferences](./settings.md)
- [Feature Gates and Plans](./feature-gates.md)
- [Troubleshooting and FAQ](./troubleshooting.md)

## Source snapshot notes

The application includes multilingual support, QR login and QR attendance, protected workspaces, local search, notifications, dark/light UI controls, public status pages and changelog access.
