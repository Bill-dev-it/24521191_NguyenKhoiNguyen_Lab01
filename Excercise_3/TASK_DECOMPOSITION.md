
# Exercise 3 — Work Breakdown Structure

## Project: Aviation B2B E-Commerce Platform

### T-03: Resilient Component Architecture

Build a resilient aircraft parts listing component that
supports loading, live data, empty and error states.

### WBS

```text
T-03: Resilient Component Architecture
|
|-- T-03A: Loading Skeleton
|   |-- Define skeleton component structure
|   |-- Implement CSS shimmer animation
|   |-- Verify loading appearance
|   `-- Create atomic Git commit
|
|-- T-03B: Live Data State
|   |-- Implement product listing structure
|   |-- Apply responsive CSS Grid
|   |-- Add Flexbox metadata badges
|   `-- Create atomic Git commit
|
|-- T-03C: Empty & Error States
|   |-- Implement empty state
|   |-- Implement error state
|   |-- Add accessible retry button
|   `-- Commit states independently
|
`-- T-03D: Integration & Verification
    |-- Define component state transitions
    |-- Integrate independently developed states
    `-- Verify functionality and accessibility
```

### Acceptance Criteria

| Task | Deliverable | Acceptance Criteria |
|---|---|---|
| T-03A | Loading skeleton | Visible CSS shimmer animation |
| T-03B | Product listing | Responsive Grid and Flexbox metadata |
| T-03C | Empty and error views | Clear messages and accessible retry |
| T-03D | Integrated component | All four states work correctly |

## Four-State Machine

```text
loading --data received--> live
loading --empty response--> empty
loading --request failure--> error
error --retry--> loading
```

Only one state is visible at a time. The retry control is keyboard accessible
and returns the component from `error` to `loading`.

## AI Prompt Reproduction Log

Implement and commit each state separately. Do not ask an agent to implement
all four states in one prompt. Homework is out of scope.

### T-03A Prompt

```text
Read TASK_DECOMPOSITION.md first. Implement only T-03A for the loading state:
create a pure CSS shimmer skeleton for the aircraft parts list. Use an
accessible loading status and aria-busy. Do not implement live, empty, error,
JavaScript, or homework work. Validate the animation, then commit:
feat(css): skeleton.
```

### T-03B Prompt

```text
Read TASK_DECOMPOSITION.md first. Implement only T-03B for the live state:
add aircraft part cards with Flexbox metadata badges and a responsive CSS Grid
list. Preserve the four-state contract, do not implement empty/error behavior
or homework, and validate the layout before committing the live state.
```

### T-03C Prompt

```text
Read TASK_DECOMPOSITION.md first. Implement only T-03C: add clear empty and
error states with an accessible native retry button. Preserve the state machine,
avoid unescaped innerHTML, do not implement homework, and validate keyboard
activation and retry behavior.
```

### Execution Record

| Task | Status | Validation | Commit |
|---|---|---|---|
| T-03A | Completed | Shimmer, loading status, and state machine checks passed | `0821a54` |
| T-03B | Completed | Responsive Grid and Flexbox metadata checks passed | `1f75ebe` |
| T-03C | Completed | Empty/error, retry, and JavaScript syntax checks passed | Pending |