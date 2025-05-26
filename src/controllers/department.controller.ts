import { Request, Response } from "express";
import { DepartmentService } from "../services/department.service";


//Them mới phòng ban
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

//Lấy tất cả phòng ban
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

//Lấy phòng ban theo ID
export const getDepartmentById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const department = await DepartmentService.getDepartmentId(id);
        res.status(200).json(department);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
    }
}

//Cập nhật phòng ban
export const updateDepartment = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { departmentName, companyId } = req.body;
        const department = await DepartmentService.updateDepartmentById(id, departmentName, companyId);
        res.status(200).json({ message: "Department updated successfully", department });
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
    }
}

//Xóa phòng ban
export const deleteDepartment = async (req: Request, res: Response) => { 
    try {
        const { id } = req.params;
        await DepartmentService.deleteDepartmentById(id);
        res.status(200).json({ message: "Department deleted successfully" });
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
    }
}