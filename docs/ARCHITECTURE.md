# HRMS Architecture Overview

## Frontend

- React + TypeScript with Tailwind CSS.
- Dashboard layout with sidebar navigation and module pages.
- Modular components (`StatCard`, `SectionCard`) ready for API integration.

## Backend

- Express REST API with JWT authentication.
- Modular routes for core HR domains (employees, attendance, payroll, recruitment, performance, reports).
- Token service provides JWT issuance and verification.

## Database

- PostgreSQL schema in `db/schema.sql`.
- Normalized tables for employees, departments, branches, attendance, payroll, recruitment, and performance.
- Indexes on high-volume query fields.

## Scalability Notes

- Service boundaries map cleanly to future microservices.
- Pagination and filtering should be implemented per route for large datasets.
- Background workers recommended for payroll runs, report exports, and notifications.
