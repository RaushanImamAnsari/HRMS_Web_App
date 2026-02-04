import { Router } from 'express';
import { verifyToken } from '../services/tokenService.js';

const router = Router();

router.get('/summary', verifyToken, (_req, res) => {
  res.json({
    today: {
      presentRate: 0.94,
      remoteCount: 24,
      onLeaveCount: 12
    },
    monthly: {
      topBranch: 'Toronto',
      overtimeAlerts: 6,
      leaveBalanceRisk: 12
    }
  });
});

router.post('/check-in', verifyToken, (_req, res) => {
  res.json({ message: 'Check-in recorded', timestamp: new Date().toISOString() });
});

router.post('/leave-request', verifyToken, (req, res) => {
  res.status(201).json({
    id: `LV-${Math.floor(Math.random() * 9000) + 1000}`,
    status: 'Pending',
    ...req.body
  });
});

export default router;
