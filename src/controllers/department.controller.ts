import { Request, Response } from "express";
import { DepartmentService } from "../services/department.service";

//Them mới phòng ban
export const addDepartment = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const department = await DepartmentService.addOneDepartment(data);
    res
      .status(201)
      .json({ message: "Department created successfully", department });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    }
  }
};

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
};

//Lấy phòng ban theo ID
export const getDepartmentById = async (req: Request, res: Response) => {
  try {
    const departmentId = req.params.id;
    const department = await DepartmentService.getDepartmentId(departmentId);
    res.status(200).json(department);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    }
  }
};

//Cập nhật phòng ban
export const updateDepartment = async (req: Request, res: Response) => {
  try {
    const departmentId = req.params.id;
    const data = req.body;
    const department = await DepartmentService.updateDepartmentById(
      departmentId,
      data
    );
    res
      .status(200)
      .json({ message: "Department updated successfully", department });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    }
  }
};

//Xóa phòng ban
export const deleteDepartment = async (req: Request, res: Response) => {
  try {
    const departmentId = req.params.id;
    await DepartmentService.deleteDepartmentById(departmentId);
    res.status(200).json({ message: "Department deleted successfully" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    }
  }
};
