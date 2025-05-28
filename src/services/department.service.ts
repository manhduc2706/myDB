import {
  Department,
  DepartmentAttributes,
} from "../database/models/department.model";
import { Company } from "../database/models/company.model";

export class DepartmentService {
  // Tạo mới phòng ban
  static async addOneDepartment(data: DepartmentAttributes) {
    const existingDepartment = await Department.findOne({
      where: { departmentName: data.departmentName },
    });

    if (existingDepartment) {
      throw new Error("Department already exists");
    }

    const department = await Department.create(data);
    return department;
  }

  // Lấy tất cả phòng ban (kèm công ty)
  static async getAllDepartments() {
    return await Department.findAll();
  }

  // Lấy phòng ban theo ID
  static async getDepartmentId(departmentId: string) {
    const department = await Department.findByPk(departmentId);

    if (!department) {
      throw new Error("Department not found");
    }

    return department;
  }

  // Cập nhật phòng ban
  static async updateDepartmentById(
    departmentId: string,
    data: DepartmentAttributes
  ) {
    const department = await Department.findByPk(departmentId);

    if (!department) {
      throw new Error("Department not found");
    }

    department.departmentName = data.departmentName;
    department.companyId = data.companyId;

    await department.save();
    return department;
  }

  // Xóa phòng ban
  static async deleteDepartmentById(departmentId: string) {
    const department = await Department.findByPk(departmentId);

    if (!department) {
      throw new Error("Department not found");
    }

    await department.destroy();
  }
}
