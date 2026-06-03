# New Features QA Checklist

This checklist focuses on the new flows in `posts`, `materials`, and `office hours`.

Use at least 2 accounts:
- `assistant`
- `student`

Prefer testing in a local environment after the services are running and migrations have been applied.

## 1. Posts

- As `assistant`, open a subject you are assigned to.
- Create a regular post without scheduling.
- Verify that the post is saved successfully and appears in the list immediately.
- As a `student` enrolled in the same subject, verify that the post is visible.

- As `assistant`, create a post with a future `publishAt`.
- Verify that the assistant list shows a badge indicating the post is scheduled.
- Refresh the page and verify that the scheduled date remains exactly as entered.
- As `student`, verify that the post is not visible in the list.
- Open the direct URL or the post detail view if a UI path exists.
- Verify that the student cannot access it before `publishAt`.

- As `assistant`, edit the scheduled post.
- Click `Remove schedule`.
- Save the changes.
- Refresh the page.
- Verify that the schedule badge disappears and that the `student` can now see the post if it is published.

- Try to save a post where `expiresAt` is earlier than `publishAt`.
- Verify that the form shows an error and the post is not saved.

## 2. Materials

- As `assistant`, create a material without scheduling.
- Verify that it appears in the correct folder list.
- As `student`, verify that the material is visible.

- As `assistant`, create a material with a future `publishAt`.
- Verify that the assistant list shows a schedule badge.
- Refresh the page and verify that the time remains exactly as entered.
- As `student`, verify that the material is not visible in the list.
- If a direct detail or public path exists for internal viewing, verify that the student cannot access it before publication.

- As `assistant`, edit the scheduled material.
- Click `Remove schedule`.
- Save the changes and refresh the page.
- Verify that the schedule is actually removed, not only hidden in the UI.

- Try to save a material where `expiresAt` is earlier than `publishAt`.
- Verify that the form shows an error and that nothing is saved.

## 3. Datetime / Timezone

- In `posts` and `materials`, enter an easy-to-recognize time such as `14:30`.
- Save and immediately reopen the edit form.
- Verify that the input still shows `14:30`, without timezone shifting.
- Refresh the entire page and verify the same behavior again.

## 4. Office Hours

- As `assistant`, create a slot for a subject assigned to you.
- Verify that the slot is visible in the assistant list.
- As a `student` enrolled in that subject, verify that the slot is visible.
- Book the slot as `student`.
- Verify that the occupied booking count increases.
- Cancel the booking.
- Verify that the count goes back down.

- As a `student` who is not enrolled in the subject, try to access office hours for that subject.
- Verify that the slot is not visible or that access is denied.
- If you can open devtools/network, verify that the API returns `403` rather than data.

- As a `student` who is not enrolled in the subject, try booking through the UI or a direct request.
- Verify that the booking is rejected.

- As `assistant`, try to create a slot for a subject that is not assigned to you.
- Verify that the UI or API rejects the action.

## 5. Responsive / Visual Consistency

- Open `PostSchedulePanel`, `MaterialSchedulePanel`, and `CreateSlotForm` on a narrower screen width.
- Verify that the date fields stack vertically and that nothing overflows its container.
- Verify that the underline actions and helper text are visually consistent with the rest of the form.
- Verify that text does not wrap awkwardly across checkbox rows.

## 6. Regression Quick Pass

- Create a post without an attachment.
- Create a material with an attachment.
- Edit an existing post.
- Edit an existing material.
- Delete a post.
- Delete a material.
- Download a post attachment.
- Download a material attachment.

## 7. Expected Results Summary

- The student cannot see future content.
- The student cannot see expired content.
- `Remove schedule` actually deletes the schedule from the database.
- Time does not shift after save or reload.
- `expiresAt` cannot be earlier than `publishAt`.
- Office hours are available only to relevant students.
- The assistant cannot attach an office hour slot to another assistant's subject.
