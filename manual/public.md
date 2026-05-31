# Public Pages and Access

Public pages are available without signing in. They support discovery, communication and shared workflows.

## Landing page

Route: `/`

The landing page introduces Tapiz and provides entry points to authentication, product information, pricing content, feature highlights, FAQ content and public calls to action.

Typical actions:

1. Review platform capabilities.
2. Open the login or registration page.
3. Navigate to public news, changelog or status information when linked from the site.

## Login

Route: `/login`

The login page supports password-based sign-in and QR login flows. If two-factor authentication is enabled for an account, users must complete the second step before entering the protected workspace.

Typical actions:

1. Enter email and password.
2. Complete two-factor verification if prompted.
3. Use QR login where available.
4. Continue to the role-specific workspace.

## Registration

Route: `/register`

Registration collects the user's identity and academic institution information. Student registrations may require approval before the account becomes active.

Typical registration information includes:

- first and last name
- email address
- password
- university and faculty
- study program or academic details where applicable

After registration, users may see a pending approval state until faculty staff approve the account.

## Password recovery

Routes: `/forgot-password`, `/reset-password`

Users can request a password reset email and complete the password change through the reset link.

## Public forms

Routes: `/forms/:token`, `/forms/:token/results`

Public form links allow external or unauthenticated users to submit responses. When enabled by the form owner, public results can also be viewed.

Typical form states:

- unavailable or invalid token
- not yet open
- closed
- ready for submission
- submitted successfully

## Public materials

Route: `/public/materials/:token`

Shared material links allow access to a material package outside the protected workspace. Links may expire depending on how the assistant configured the public share.

## Public news

Routes: `/news`, `/news/:id`

The public news area displays published platform announcements. Users can search posts and open a detailed news item.

## Public status

Route: `/status`

The public status page shows service health, uptime indicators, active incidents and incident history.

## Changelog

Route: `/changelog`

The changelog page displays application releases, improvements and fixes in chronological order.

## Access denied and not found pages

Routes: `/403`, fallback `*`

Users see an access-denied page when they try to open a protected page without the required role. Unknown routes display a not-found page.
