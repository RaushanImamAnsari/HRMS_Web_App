import { Router } from 'express';
import { verifyToken } from '../services/tokenService.js';

const router = Router();

router.get('/reviews', verifyToken, (_req, res) => {
  res.json({
    data: [
      { employee: 'Zoe Adams', status: 'Manager Review', score: 4.6 },
      { employee: 'Kofi Mensah', status: 'Self Assessment', score: null },
      { employee: 'Isabella Rossi', status: 'HR Approval', score: 4.9 }
    ]
  });
});

router.post('/reviews', verifyToken, (req, res) => {
  res.status(201).json({ id: 'REV-2201', ...req.body });
});

export default router;
