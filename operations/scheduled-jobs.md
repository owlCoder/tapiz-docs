# Scheduled Jobs

Scheduled jobs automate recurring maintenance tasks such as attendance synchronization, cleanup routines and operational checks.

## Attendance synchronization

| Item | Description |
|---|---|
| Purpose | Persist buffered attendance events into the primary data store. |
| Typical cadence | Frequent interval, configured per environment. |
| Authentication | Protected scheduler credential managed outside the documentation repository. |
| Ownership | Platform operations team. |

## Security requirements

- Scheduler credentials must not be stored in this repository.
- Job URLs and private deployment targets must not be published in public documentation.
- Production and preview environments must use separate scheduler credentials.
- Manual job execution should be limited to authorized operators.

## Operations checklist

- Confirm the target environment before running a job manually.
- Confirm that dependent services are healthy.
- Monitor job results after execution.
- Escalate repeated failures through the incident response process.
