# Architecture Overview

Tapiz follows a layered architecture that separates delivery, business workflows, domain rules and infrastructure integrations.

## Layers

| Layer | Responsibility |
|---|---|
| Delivery | HTTP routes, request validation, middleware and response formatting. |
| Application | Business workflows and orchestration between domain services. |
| Domain | Core models, policies, validation concepts and business rules. |
| Infrastructure | Database access, cache, logging, email, storage and external adapters. |

## Principles

- Business rules should stay independent from transport and infrastructure details.
- Integrations should be isolated behind clear boundaries.
- API documentation should describe public behavior, not private implementation.
- Operational documentation should avoid publishing secrets, private paths or internal values.
