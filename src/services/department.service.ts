import { Repository } from "typeorm";
import { Department } from "../database/models/department.model";
import { AppDataSource } from "../config/db";
import { Company } from "../database/models/company.model";

export class DepartmentService {
  private static departmentRepository: Repository<Department> =
    AppDataSource.getRepository(Department);

  //Tạo mới phòng ban
  static async addOneDepartment(departmentName: string, companyId: number) {
    const existingDepartment = await this.departmentRepository.findOne({
      where: { departmentName },
    });

    if (existingDepartment) {
      throw new Error("Department already exists");
    }

    const department = new Department();
    department.departmentName = departmentName;
    department.companyId = companyId;

    await this.departmentRepository.save(department);
    return department;
  }

  //Lấy tất cả phòng ban
  static async getAllDepartments() {
    return await this.departmentRepository.find({
      relations: ["company"],
    });
  }

  //Lấy phòng ban theo ID
  static async getDepartmentById(id: string) {
    const department = await this.departmentRepository.findOne({
      where: { departmentId: parseInt(id) },
      relations: ["company"],
    });
    if (!department) {
      throw new Error("Department not found");
    }
    return department;
  }
}
