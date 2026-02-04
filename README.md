# Human Resource Management System (HRMS)

Enterprise-ready HRMS platform for large organizations. This repository contains a React + Tailwind frontend, a Node.js (Express) backend, and a PostgreSQL schema.

## Structure

- `frontend/` – React (TypeScript) UI with a dashboard-driven layout.
- `backend/` – Express REST API with JWT authentication and module routes.
- `db/` – Database schema and indexing strategy.
- `docker-compose.yml` – Local orchestration for all services.

## Getting Started

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
npm run dev
```

### Database

Apply the schema in `db/schema.sql` to your PostgreSQL instance. You can use the Docker database service defined in `docker-compose.yml`.

## Modules Included

- Authentication & Role-Based Access
- Employee Management
- Department & Branch Structure
- Attendance & Leave Management
- Payroll & Salary Management
- Recruitment & Hiring (ATS)
- Performance & Appraisal System
- Reports & Analytics

## API Overview

Base URL: `http://localhost:4000`

- `POST /api/auth/login`
- `POST /api/auth/forgot-password`
- `POST /api/auth/change-password`
- `GET /api/employees`
- `POST /api/employees`
- `GET /api/attendance/summary`
- `GET /api/payroll/summary`
- `GET /api/recruitment/pipeline`
- `GET /api/performance/reviews`
- `GET /api/reports/dashboard`

## Deployment

```bash
docker compose up --build
```

Update environment variables for production usage, especially `JWT_SECRET`.
