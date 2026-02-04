import { Router } from 'express';
import { verifyToken } from '../services/tokenService.js';

const router = Router();

router.get('/pipeline', verifyToken, (_req, res) => {
  res.json({
    stages: [
      { stage: 'Applied', count: 182 },
      { stage: 'Screening', count: 74 },
      { stage: 'Interview', count: 39 },
      { stage: 'Offer', count: 12 },
      { stage: 'Hired', count: 9 }
    ]
  });
});

router.post('/jobs', verifyToken, (req, res) => {
  res.status(201).json({ id: 'JOB-3042', status: 'Open', ...req.body });
});

export default router;
