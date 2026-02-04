import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'replace-me-with-env-secret';

export const issueToken = (payload) => {
  return jwt.sign(payload, secret, { expiresIn: '8h' });
};

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: 'Missing authorization header' });
  }

  const token = authHeader.replace('Bearer ', '');
  try {
    req.user = jwt.verify(token, secret);
    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};
