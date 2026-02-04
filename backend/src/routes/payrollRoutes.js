import { Router } from 'express';
import { verifyToken } from '../services/tokenService.js';

const router = Router();

router.get('/summary', verifyToken, (_req, res) => {
  res.json({
    nextRun: '2024-06-30',
    approvalsComplete: 0.94,
    pendingItems: 24,
    bonusPool: 410000
  });
});

router.post('/run', verifyToken, (_req, res) => {
  res.json({ message: 'Payroll processing initiated', runId: 'PAY-2024-06' });
});

router.get('/history', verifyToken, (_req, res) => {
  res.json({
    data: [
      { period: '2024-05', status: 'Completed', total: 12100000 },
      { period: '2024-04', status: 'Completed', total: 12000000 }
    ]
  });
});

export default router;
