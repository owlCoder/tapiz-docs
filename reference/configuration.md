# Configuration Policy

This portal intentionally does not publish environment variable names, secret names, secret values, internal service URLs, credentials or deployment-specific configuration.

## Public documentation rule

Only document configuration behavior at a conceptual level:

- which capability depends on configuration
- who owns the configuration
- where configuration should be managed internally
- which operational checklist should be followed before release

Do not publish:

- real `.env` files
- copied `.env.example` files
- secret names or secret values
- internal hostnames, database names, usernames or passwords
- private service URLs
- source-code paths used only by maintainers

## Operational guidance

Production configuration should be managed in the approved secret manager or hosting provider settings. Access should follow least-privilege rules and be reviewed regularly.

## Documentation guidance

When a feature needs configuration, describe the requirement without exposing implementation details. For example:

| Feature | Safe public wording |
|---|---|
| Authentication | Requires platform authentication configuration managed by administrators. |
| Email delivery | Requires an approved email provider configuration. |
| File storage | Requires an approved storage provider configuration. |
| Scheduled tasks | Requires protected scheduler configuration. |
