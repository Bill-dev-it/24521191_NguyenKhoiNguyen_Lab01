
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