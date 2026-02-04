-- HRMS database schema (PostgreSQL compatible)

CREATE TABLE roles (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) UNIQUE NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE departments (
  id SERIAL PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE branches (
  id SERIAL PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  location VARCHAR(120),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE employees (
  id SERIAL PRIMARY KEY,
  employee_code VARCHAR(20) UNIQUE NOT NULL,
  first_name VARCHAR(80) NOT NULL,
  last_name VARCHAR(80) NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL,
  phone VARCHAR(30),
  department_id INT REFERENCES departments(id),
  role_id INT REFERENCES roles(id),
  branch_id INT REFERENCES branches(id),
  position VARCHAR(120),
  date_of_joining DATE,
  salary_base NUMERIC(12, 2),
  status VARCHAR(30) DEFAULT 'Active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE attendance (
  id SERIAL PRIMARY KEY,
  employee_id INT REFERENCES employees(id),
  attendance_date DATE NOT NULL,
  check_in TIMESTAMP,
  check_out TIMESTAMP,
  status VARCHAR(30) DEFAULT 'Present'
);

CREATE TABLE leave_requests (
  id SERIAL PRIMARY KEY,
  employee_id INT REFERENCES employees(id),
  leave_type VARCHAR(40) NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  reason TEXT,
  status VARCHAR(30) DEFAULT 'Pending',
  approver_id INT REFERENCES employees(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE payroll_runs (
  id SERIAL PRIMARY KEY,
  period_start DATE NOT NULL,
  period_end DATE NOT NULL,
  total_amount NUMERIC(14, 2) NOT NULL,
  status VARCHAR(30) DEFAULT 'Draft',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE payroll_items (
  id SERIAL PRIMARY KEY,
  payroll_run_id INT REFERENCES payroll_runs(id),
  employee_id INT REFERENCES employees(id),
  gross_pay NUMERIC(12, 2) NOT NULL,
  deductions NUMERIC(12, 2) DEFAULT 0,
  net_pay NUMERIC(12, 2) NOT NULL
);

CREATE TABLE job_posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(120) NOT NULL,
  department_id INT REFERENCES departments(id),
  location VARCHAR(120),
  status VARCHAR(30) DEFAULT 'Open',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE candidates (
  id SERIAL PRIMARY KEY,
  job_post_id INT REFERENCES job_posts(id),
  full_name VARCHAR(120) NOT NULL,
  email VARCHAR(150) NOT NULL,
  stage VARCHAR(40) DEFAULT 'Applied',
  resume_url TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE performance_reviews (
  id SERIAL PRIMARY KEY,
  employee_id INT REFERENCES employees(id),
  period VARCHAR(40) NOT NULL,
  score NUMERIC(3, 2),
  manager_feedback TEXT,
  hr_status VARCHAR(40) DEFAULT 'Pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_employees_department ON employees(department_id);
CREATE INDEX idx_employees_branch ON employees(branch_id);
CREATE INDEX idx_attendance_date ON attendance(attendance_date);
CREATE INDEX idx_leave_status ON leave_requests(status);
