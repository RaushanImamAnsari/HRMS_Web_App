import { Router } from 'express';
import { verifyToken } from '../services/tokenService.js';

const router = Router();

const employees = [
  {
    id: 'EMP-1001',
    name: 'Jordan Lee',
    department: 'Product',
    position: 'Senior Product Manager',
    branch: 'New York',
    status: 'Active'
  },
  {
    id: 'EMP-1002',
    name: 'Priya Nair',
    department: 'HR',
    position: 'People Operations Lead',
    branch: 'London',
    status: 'Active'
  }
];

router.get('/', verifyToken, (_req, res) => {
  res.json({ data: employees });
});

router.post('/', verifyToken, (req, res) => {
  const employee = {
    id: `EMP-${Math.floor(Math.random() * 9000) + 1000}`,
    ...req.body
  };
  employees.push(employee);
  res.status(201).json({ data: employee });
});

router.put('/:id', verifyToken, (req, res) => {
  const index = employees.findIndex((employee) => employee.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: 'Employee not found' });
  }
  employees[index] = { ...employees[index], ...req.body };
  return res.json({ data: employees[index] });
});

router.delete('/:id', verifyToken, (req, res) => {
  const index = employees.findIndex((employee) => employee.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: 'Employee not found' });
  }
  const [removed] = employees.splice(index, 1);
  return res.json({ data: removed });
});

export default router;
