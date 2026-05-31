# Tapiz Docs Portal

Unified documentation portal for the Tapiz platform.

This repository combines two clearly separated documentation areas:

- **API Docs** for technical teams, integrators and maintainers.
- **User Manual** for students, assistants, faculty managers and super administrators.

The portal is built with VitePress and styled to visually align with the Tapiz React application: dark grid surfaces, electric cyan accents, square cards, technical typography and a two-card landing page.

## Documentation areas

| Area | Audience | Purpose |
|---|---|---|
| API Docs | Developers and integrators | REST API reference, authentication guidance, architecture overview and operations documentation. |
| User Manual | End users and support teams | Role-based workflows and product usage guidance written in plain English. |

## Privacy and disclosure rules

This repository must not expose private implementation details.

Do not publish:

- real `.env` files or copied environment examples
- secret values, secret names, credentials or internal URLs
- source-code snippets that expose private implementation details
- private infrastructure details
- personal data or production data

Configuration should be documented only at a conceptual level. See `reference/configuration.md`.

## Repository structure

```text
.
├── .vitepress/              # VitePress configuration and custom theme
├── api/                     # API documentation
├── architecture/            # Technical architecture documentation
├── guide/                   # Technical onboarding guides
├── manual/                  # Role-based user manual
├── operations/              # Operational guides and runbooks
├── reference/               # Glossary, configuration policy and ADR links
├── public/                  # Static assets, including the Tapiz logo
├── scripts/                 # Documentation maintenance scripts
├── index.md                 # Landing page with API Docs and User Manual cards
├── README.md                # Repository overview
├── CONTRIBUTING.md          # Contribution rules
├── CHANGELOG.md             # Documentation changelog
└── package.json             # Docs tooling
```

## Quick start

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Validate links

```bash
npm run check:links
```

## Documentation workflow

1. Decide whether the change belongs to **API Docs** or **User Manual**.
2. Keep user-facing pages free from technical implementation details.
3. Keep technical pages free from secrets, private source-code snippets and environment values.
4. Update navigation when adding a new page.
5. Run link checks before opening a pull request.
