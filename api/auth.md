# Auth API

| Method | Path | Auth | Summary | Source |
|---|---|---|---|---|
| `GET` | `/api/auth/2fa-status` | `authenticated` | List auth — 2fa status | `auth/authRoutes.ts` |
| `POST` | `/api/auth/2fa/totp/confirm` | `authenticated` | Create / execute auth — 2fa totp confirm | `auth/authTotpRoutes.ts` |
| `POST` | `/api/auth/2fa/totp/init` | `authenticated` | Create / execute auth — 2fa totp init | `auth/authTotpRoutes.ts` |
| `GET` | `/api/auth/admin-profile` | `super_admin` | List auth — admin profile | `auth/authRoutes.ts` |
| `POST` | `/api/auth/admin/totp/confirm` | `public` | Create / execute auth — admin totp confirm | `auth/authTotpRoutes.ts` |
| `POST` | `/api/auth/admin/totp/init` | `public` | Create / execute auth — admin totp init | `auth/authTotpRoutes.ts` |
| `PATCH` | `/api/auth/approve-student/:id` | `authenticated` | Update auth — approve student id | `auth/authRoutes.ts` |
| `GET` | `/api/auth/assistant-profile` | `assistant` | List auth — assistant profile | `auth/authRoutes.ts` |
| `PATCH` | `/api/auth/assistant-profile` | `assistant` | Update auth — assistant profile | `auth/authRoutes.ts` |
| `POST` | `/api/auth/change-password` | `student` | Create / execute auth — change password | `auth/authRoutes.ts` |
| `POST` | `/api/auth/change-password-assistant` | `assistant` | Create / execute auth — change password assistant | `auth/authRoutes.ts` |
| `POST` | `/api/auth/confirm-password-reset` | `public` | Create / execute auth — confirm password reset | `auth/authRoutes.ts` |
| `POST` | `/api/auth/deactivate-account` | `assistant` | Create / execute auth — deactivate account | `auth/authRoutes.ts` |
| `POST` | `/api/auth/deactivate-student-account` | `student` | Create / execute auth — deactivate student account | `auth/authRoutes.ts` |
| `POST` | `/api/auth/login` | `public` | Create / execute auth — login | `auth/authRoutes.ts` |
| `POST` | `/api/auth/qr/confirm` | `authenticated` | Create / execute auth — qr confirm | `auth/authTotpRoutes.ts` |
| `POST` | `/api/auth/qr/generate` | `public` | Create / execute auth — qr generate | `auth/authTotpRoutes.ts` |
| `GET` | `/api/auth/qr/poll/:token` | `public` | Get auth — qr poll token | `auth/authTotpRoutes.ts` |
| `POST` | `/api/auth/refresh` | `authenticated` | Create / execute auth — refresh | `auth/authRoutes.ts` |
| `POST` | `/api/auth/register` | `public` | Create / execute auth — register | `auth/authRoutes.ts` |
| `POST` | `/api/auth/request-password-reset` | `public` | Create / execute auth — request password reset | `auth/authRoutes.ts` |
| `POST` | `/api/auth/reset-student-password` | `assistant` | Create / execute auth — reset student password | `auth/authRoutes.ts` |
| `GET` | `/api/auth/student-profile` | `student` | List auth — student profile | `auth/authRoutes.ts` |
| `PATCH` | `/api/auth/student-profile` | `student` | Update auth — student profile | `auth/authRoutes.ts` |
| `POST` | `/api/auth/toggle-2fa` | `authenticated` | Create / execute auth — toggle 2fa | `auth/authRoutes.ts` |
| `POST` | `/api/auth/verify-2fa` | `public` | Create / execute auth — verify 2fa | `auth/authRoutes.ts` |
