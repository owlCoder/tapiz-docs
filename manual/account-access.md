# Account Access and Security

Tapiz supports role-based authentication, two-factor verification, QR login, password recovery and protected routing.

## User roles

| Role | Workspace | Description |
|---|---|---|
| Student | `/dashboard` | Learns through enrolled subjects, attendance, grades, materials, quizzes and calendar views |
| Assistant | `/assistant` | Manages teaching workflows, attendance, score sheets, analytics and learning content |
| Faculty manager | `/faculty-manager` | Manages faculty-level users, departments, chairs and study programs |
| Super admin | `/super-admin` | Manages global institutions, users, public incidents, news and system audit data |

## Signing in

1. Open `/login`.
2. Enter email and password.
3. Complete two-factor authentication if the account requires it.
4. Continue to the assigned workspace.

## Two-factor authentication

Tapiz supports two-factor verification during sign-in. The frontend includes flows for email-based verification and TOTP setup.

When TOTP is enabled:

1. Start TOTP setup from account security settings or the required setup flow.
2. Scan the authenticator QR code with an authenticator app.
3. Enter the generated code to confirm setup.
4. Save recovery codes securely.

## QR login

The login area includes a QR login panel. QR login is designed for fast confirmation from another authorized device.

Typical flow:

1. Start QR login from the login page.
2. Open the confirmation link or scan the code on the confirming device.
3. Confirm the QR login request.
4. The login page polls for confirmation and signs in after successful approval.

## Password reset

1. Open `/forgot-password`.
2. Enter the email address.
3. Follow the reset link delivered by email.
4. Open `/reset-password` with the reset token.
5. Enter the new password.

## Account approval

Student registrations may remain pending until approved by an assistant or faculty manager. Pending users cannot use the full protected workspace until approval is completed.

## Protected pages

Protected pages require both authentication and the correct role. If a signed-in user opens a workspace for another role, the application shows access denied instead of exposing the page.
