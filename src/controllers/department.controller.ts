import { Request, Response } from "express";
import { DepartmentService } from "../services/department.service";

export const addDepartment = async (req: Request, res: Response) => {
    try{
        const { departmentName, companyId } = req.body;
        const department = await DepartmentService.addOneDepartment(departmentName, companyId);
        res.status(201).json({ message: "Department created successfully", department });
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
    }
}

export const getDepartments = async (req: Request, res: Response) => {
    try {
        const departments = await DepartmentService.getAllDepartments();
        res.status(200).json(departments);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
    }
}

export const getDepartmentById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const department = await DepartmentService.getDepartmentById(id);
        res.status(200).json(department);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
    }
}