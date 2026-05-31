# Runbook: Database Recovery

## First response

1. Stop destructive jobs and manual scripts.
2. Identify affected tables and time window.
3. Export current state before attempting repair.
4. Restore to a staging database first.
5. Validate entity counts, foreign keys and key user journeys.
6. Promote the recovery plan to production only after review.

## High-risk tables

- Attendance records
- Student and assistant identity tables
- Subject enrollment junctions
- Score sheets, cells and versions
- Audit logs

## Validation queries

Keep a project-specific SQL notebook with count checks, orphan checks and uniqueness checks for each domain.
