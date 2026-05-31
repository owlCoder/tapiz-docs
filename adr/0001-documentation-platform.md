# ADR 0001: Use VitePress for Tapiz documentation

## Status

Accepted

## Context

Tapiz needs a documentation repository that supports Markdown, generated API inventory, navigation, search and static hosting.

## Decision

Use VitePress as the documentation platform and keep source documentation in versioned Markdown.

## Consequences

- Docs can be previewed locally with Node tooling.
- Documentation can be hosted as static files.
- API inventory can be generated and committed.
- Advanced API explorer features can be added later without restructuring the repository.
