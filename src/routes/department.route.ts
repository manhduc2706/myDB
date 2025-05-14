import express from 'express';
import { addDepartment, getDepartments, getDepartmentById } from '../controllers/department.controller';

const departmentRoute = express.Router();

departmentRoute.post('/department', addDepartment);
departmentRoute.get('/departments', getDepartments);
departmentRoute.get('/department/:id', getDepartmentById);

export default departmentRoute;