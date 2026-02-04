import { Router } from 'express';
import { z } from 'zod';
import { issueToken, verifyToken } from '../services/tokenService.js';

const router = Router();

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});

router.post('/login', (req, res) => {
  const payload = loginSchema.safeParse(req.body);
  if (!payload.success) {
    return res.status(400).json({ message: 'Invalid credentials payload', errors: payload.error.issues });
  }

  const token = issueToken({
    id: 'user-1',
    name: 'Avery Brown',
    role: 'Super Admin',
    email: payload.data.email
  });

  res.json({ token, user: { name: 'Avery Brown', role: 'Super Admin', email: payload.data.email } });
});

router.post('/forgot-password', (req, res) => {
  res.json({ message: 'Password reset link generated', requestId: 'reset-12345' });
});

router.post('/change-password', verifyToken, (req, res) => {
  res.json({ message: 'Password updated successfully' });
});

router.get('/activity', verifyToken, (_req, res) => {
  res.json({
    activities: [
      { id: 'log-1', action: 'Login', timestamp: '2024-06-01T09:22:00Z' },
      { id: 'log-2', action: 'Payroll approval', timestamp: '2024-06-02T10:05:00Z' }
    ]
  });
});

export default router;
