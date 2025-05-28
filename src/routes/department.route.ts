import express from 'express';
import { addDepartment, getDepartments, getDepartmentById } from '../controllers/department.controller';
import { authenticate, checkAccountState, isAdmin } from '../middlewares/auth.middleware';

const departmentRoute = express.Router();

departmentRoute.post('/department',authenticate,checkAccountState, isAdmin, addDepartment);
departmentRoute.get('/departments',authenticate,checkAccountState, isAdmin, getDepartments);
departmentRoute.get('/department/:id',authenticate,checkAccountState, isAdmin, getDepartmentById);
departmentRoute.put('/department/:id',authenticate,checkAccountState, isAdmin, addDepartment);
departmentRoute.delete('/department/:id',authenticate,checkAccountState, isAdmin, addDepartment);

export default departmentRoute;