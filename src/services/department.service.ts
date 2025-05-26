import { Repository } from "typeorm";
import { Department } from "../database/models/department.model";
import { AppDataSource } from "../config/db";
import { Company } from "../database/models/company.model";

export class DepartmentService {
 
  //Tạo mới phòng ban
  static async addOneDepartment(departmentName: string, companyId: number) {
    const departmentRepo = AppDataSource.getRepository(Department);
    const existingDepartment = await departmentRepo.findOne({
      where: { departmentName },
    });

    if (existingDepartment) {
      throw new Error("Department already exists");
    }

    const department = new Department();
    department.departmentName = departmentName;
    department.companyId = companyId;

    await departmentRepo.save(department);
    return department;
  }

  //Lấy tất cả phòng ban
  static async getAllDepartments() {
    const departmentRepo = AppDataSource.getRepository(Department);
    return await departmentRepo.find({
      relations: ["company"],
    });
  }

  //Lấy phòng ban theo ID
  static async getDepartmentId(id: string) {
    const departmentRepo = AppDataSource.getRepository(Department);
    const department = await departmentRepo.findOne({
      where: { departmentId: parseInt(id) },
      relations: ["company"],
    });
    if (!department) {
      throw new Error("Department not found");
    }
    return department;
  }

  //Cập nhật phòng ban
  static async updateDepartmentById(
    id: string,
    departmentName: string,
    companyId: number
  ) {
    const departmentRepo = AppDataSource.getRepository(Department);
    const department = await departmentRepo.findOne({
      where: { departmentId: parseInt(id) },
    });
    if (!department) {
      throw new Error("Department not found");
    }
    department.departmentName = departmentName;
    department.companyId = companyId;

    await departmentRepo.save(department);
    return department;
  }

  //Xóa phòng ban
  static async deleteDepartmentById(id: string) {
    const departmentRepo = AppDataSource.getRepository(Department);
    const department = await departmentRepo.findOne({
      where: { departmentId: parseInt(id) },
    });
    if (!department) {
      throw new Error("Department not found");
    }
    await departmentRepo.remove(department);
  }
}
