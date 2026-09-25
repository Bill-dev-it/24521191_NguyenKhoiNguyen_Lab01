
# Lab 01 — Task Decomposition & AI Interaction Log

## Project: Aviation B2B E-Commerce Platform

The Lab exercises are implemented as incremental parts of our existing Aviation B2B E-Commerce Platform rather than as separate, unrelated websites.

Our project is a B2B marketplace connecting aviation parts suppliers with organizations that need aircraft engine components. It also includes a Remaining Useful Life (RUL) prediction service to support maintenance planning and parts recommendations.

The project follows an existing Work Breakdown Structure managed through GitHub Projects. This document reuses that planning structure and records the incremental work completed during the Website Development labs.

## 1. Project Work Breakdown Structure

### 1.1 Project-level WBS

The following is a consolidated view of our existing project plan. The GitHub Project remains the source of truth for the complete issue hierarchy, assignments and current task status.

```text
Aviation B2B E-Commerce Platform
|
|-- 1. Topic & Initial Planning
|
|-- 2. Requirements & Architecture
|
|-- 3. System Design & Development
|   |
|   |-- 3.1 Detailed System Architecture
|   |   |-- RUL Integration Design
|   |   |-- Cloud Deployment Design
|   |   |-- DevOps & CI/CD Design
|   |   `-- Data Ingestion Design
|   |
|   |-- 3.2 Database ERD
|   |-- 3.3 Database Schema & Mapping
|   |-- 3.4 REST API Structure
|   |-- 3.5 UI/UX Wireframes
|   |-- 3.6 React Frontend Initialization
|   `-- 3.7 Node.js/Express Backend Initialization
|
|-- 4. Marketplace Core Features
|   |-- Product Catalog & Search
|   |-- Authentication
|   `-- Shopping Cart
|
|-- 5. Checkout & Supplier Features
|
|-- 6. Cloud Deployment
|   |-- AWS Infrastructure
|   |-- Domain & Cloudflare
|   `-- HTTPS
|
|-- 7. RUL Integration & Recommendations
|
`-- 8. Testing & Final Release
```

### 1.2 Lab 01 — Exercise 1 Work Breakdown

Lab 01 Exercise 1 contributes to the frontend and UI structure of the existing project.

The objective is to establish a semantic HTML foundation for the Aviation B2B E-Commerce Platform before introducing visual styling, application logic or backend integration.

T-01: Semantic DOM Architecture & A11y Contract

| Task | Description | Deliverable |
|---|---|---|
| T-01.1 | Analyze the exercise requirements and identify the relevant project features | WBS and implementation plan |
| T-01.2 | Build the semantic HTML structure for the aviation marketplace | index.html |
| T-01.3 | Implement and verify the accessibility requirements | Accessible HTML structure |
| T-01.4 | Verify the landmark tree and create an atomic Git commit | Verification evidence and commit |

### 1.3 Acceptance Criteria

The HTML document must use semantic landmarks, including header, navigation and main content.

The main content must contain relevant sections for the Aviation B2B E-Commerce Platform.

The page must provide a functional Skip to Content link, and its landmark structure must be inspected using Chrome DevTools.

No div elements are permitted in this exercise. HTML and CSS must not be combined in the same atomic implementation commit.

## 2. AI Interaction Log

The following sections record the prompts actually used during each implementation stage, together with the resulting code changes, review feedback and verification results.

Only implementation-related interactions are included. Administrative discussions about reorganizing this document are excluded.
