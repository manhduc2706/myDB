import express from 'express';
import { addDepartment, getDepartments, getDepartmentById } from '../controllers/department.controller';
import { authenticate, isAdmin } from '../middlewares/auth.middleware';

const departmentRoute = express.Router();

departmentRoute.post('/department',authenticate, isAdmin, addDepartment);
departmentRoute.get('/departments',authenticate, isAdmin, getDepartments);
departmentRoute.get('/department/:id',authenticate, isAdmin, getDepartmentById);
departmentRoute.put('/department/:id',authenticate, isAdmin, addDepartment);
departmentRoute.delete('/department/:id',authenticate, isAdmin, addDepartment);

export default departmentRoute;