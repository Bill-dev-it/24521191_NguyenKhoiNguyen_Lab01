
## T-02: Exercise 2 — Responsive Design & Theme Engine

### Work Breakdown Structure

```text
T-02: Responsive Design & Theme Engine
|
|-- T-02A: Design Tokens & CSS Reset
|   |-- T-02A.1: Define light theme tokens
|   |-- T-02A.2: Define typography and spacing tokens
|   |-- T-02A.3: Implement global CSS reset
|   `-- T-02A.4: Verify and commit CSS foundation
|
|-- T-02B: Responsive Grid Layout
|   |-- T-02B.1: Design responsive page layout
|   |-- T-02B.2: Implement CSS Grid components
|   |-- T-02B.3: Verify 375px mobile viewport
|   `-- T-02B.4: Commit responsive layout
|
`-- T-02C: Dark Mode Engine
    |-- T-02C.1: Define dark theme tokens
    |-- T-02C.2: Implement accessible theme switcher
    |-- T-02C.3: Persist theme using localStorage
    |-- T-02C.4: Verify and commit theme engine
```

### Work Packages

| Task | Deliverable | Dependency |
|---|---|---|
| T-02A | CSS tokens and global reset | T-01 |
| T-02B | Responsive Grid layout | T-02A |
| T-02C | Accessible dark mode engine | T-02B |

## AI Prompt Reproduction Log

Each sub-task is implemented and committed separately. Homework tasks are out of scope.

### T-02A

```text
Read this task decomposition first. Implement only T-02A: define reusable CSS
color, typography, spacing, border, and layout tokens under :root, then add a
global box-sizing reset and base document styles. Use Vanilla CSS only. Do not
implement responsive layout, JavaScript, or homework. Validate the CSS tokens
and reset, then commit: feat(css): tokens & reset.
```

Acceptance check: `style.css` contains `:root`, custom properties, and
`box-sizing: border-box`.

### T-02B

```text
Read this task decomposition first. Implement only T-02B: add the responsive
Flexbox and CSS Grid layout for the existing portfolio page. Reuse the T-02A
tokens, support a 375px viewport without horizontal scrolling, and do not add
JavaScript or homework work. Validate the layout, then commit:
feat(css): responsive grid.
```

### T-02C

```text
Read this task decomposition first. Implement only T-02C: add an accessible
theme switcher with aria-pressed, CSS light/dark tokens, and localStorage key
theme. Use const by default, avoid inline handlers, and do not implement
homework. Validate theme persistence, keyboard activation, and zero console
errors, then commit: feat(js): dark mode engine.
```

### Execution Record

| Task | Status | Validation | Commit |
|---|---|---|---|
| T-02A | Completed | Tokens and reset present | `a9bf208` |
| T-02B | Completed | Flexbox/Grid and mobile layout checks passed | `4c90acc` |
| T-02C | Completed | Theme contract and JavaScript syntax checks passed | Pending |