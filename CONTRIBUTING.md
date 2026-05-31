# Contributing

## Documentation standard

Write all documentation in English.

Use the correct area:

- **API Docs** for technical and integration documentation.
- **User Manual** for end-user workflows and product usage.

## Privacy and security rules

Never commit or document:

- real `.env` files
- copied environment examples
- credentials, tokens, passwords or secret names
- internal service URLs
- private infrastructure details
- source-code snippets that expose private implementation details
- personal data or production data

## Pull request checklist

- [ ] The page is in the correct documentation area.
- [ ] The content is written in English.
- [ ] No environment values or secrets are included.
- [ ] No private source-code details are exposed.
- [ ] Navigation is updated when a page is added.
- [ ] `npm run check:links` passes.
- [ ] `npm run build` passes locally when dependencies are available.
