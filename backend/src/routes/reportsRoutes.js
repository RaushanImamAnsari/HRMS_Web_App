import { Router } from 'express';
import { verifyToken } from '../services/tokenService.js';

const router = Router();

router.get('/dashboard', verifyToken, (_req, res) => {
  res.json({
    totals: {
      employees: 4892,
      departments: 26,
      openRoles: 38
    },
    attendanceTrend: [96.4, 96.8, 97.1, 96.2],
    payrollSummary: { currentMonth: 12400000, lastMonth: 12100000 }
  });
});

router.get('/export', verifyToken, (_req, res) => {
  res.json({ message: 'Report export queued', jobId: 'EXP-8891' });
});

export default router;
