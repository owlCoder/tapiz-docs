# Feature Gates and Plans

Tapiz includes plan-aware navigation and feature gates. Some assistant features are only visible or usable when the institution or account plan includes the relevant feature.

## Gated feature groups

| Feature | Navigation area | Typical pages |
|---|---|---|
| Posts | Teaching | `/assistant/posts` |
| Materials | Teaching | `/assistant/materials` |
| Quizzes / Knowledge Check | Teaching | `/assistant/knowledge` |
| Analytics | Analytics | `/assistant/analytics`, `/assistant/reports`, `/assistant/analytics/compare` |
| Forms | Forms | `/assistant/forms` |

## User experience when a feature is unavailable

When a feature is not included in the current plan, the UI can show an upgrade prompt or prevent access to the feature area.

## License status

Assistant, faculty manager and admin dashboard areas include license-related cards. These surfaces help users understand the current plan, included features and expiration status.

## Operational guidance

- Keep plan definitions aligned between backend, frontend and documentation.
- Document newly gated features in this page.
- Update onboarding and sales enablement material when plans change.
