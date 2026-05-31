# Getting Started

This guide is for technical contributors who need to preview and maintain the documentation portal.

## Requirements

- Node.js compatible with the project tooling
- npm
- Access to the documentation repository

## Local preview

```bash
npm install
npm run dev
```

Open the local URL printed by VitePress.

## Build

```bash
npm run build
```

## Link validation

```bash
npm run check:links
```

## Documentation areas

| Area | Audience | Purpose |
|---|---|---|
| API Docs | Developers and integrators | Technical and integration documentation. |
| User Manual | End users and support teams | Product workflows and role-based guidance. |
| Architecture | Technical maintainers | High-level system concepts without private source disclosure. |
| Operations | Operators | Safe operational procedures without secrets or private environment values. |
