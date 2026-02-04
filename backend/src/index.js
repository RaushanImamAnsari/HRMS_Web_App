import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import employeeRoutes from './routes/employeeRoutes.js';
import attendanceRoutes from './routes/attendanceRoutes.js';
import payrollRoutes from './routes/payrollRoutes.js';
import recruitmentRoutes from './routes/recruitmentRoutes.js';
import performanceRoutes from './routes/performanceRoutes.js';
import reportsRoutes from './routes/reportsRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'hrms-api' });
});

app.use('/api/auth', authRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api/attendance', attendanceRoutes);
app.use('/api/payroll', payrollRoutes);
app.use('/api/recruitment', recruitmentRoutes);
app.use('/api/performance', performanceRoutes);
app.use('/api/reports', reportsRoutes);

app.listen(port, () => {
  console.log(`HRMS API listening on port ${port}`);
});
