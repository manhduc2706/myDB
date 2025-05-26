import { Department } from "../database/models/department.model";
import { Company } from "../database/models/company.model";

export class DepartmentService {
  // Tạo mới phòng ban
  static async addOneDepartment(departmentName: string, companyId: number) {
    const existingDepartment = await Department.findOne({
      where: { departmentName },
    });

    if (existingDepartment) {
      throw new Error('Department already exists');
    }

    const department = await Department.create({ departmentName, companyId });
    return department;
  }

  // Lấy tất cả phòng ban (kèm công ty)
  static async getAllDepartments() {
    return await Department.findAll({
      include: [Company],
    });
  }

  // Lấy phòng ban theo ID
  static async getDepartmentId(id: string) {
    const department = await Department.findByPk(parseInt(id), {
      include: [Company],
    });

    if (!department) {
      throw new Error('Department not found');
    }

    return department;
  }

  // Cập nhật phòng ban
  static async updateDepartmentById(id: string, departmentName: string, companyId: string) {
    const department = await Department.findByPk(parseInt(id));

    if (!department) {
      throw new Error('Department not found');
    }

    department.departmentName = departmentName;
    department.companyId = companyId;

    await department.save();
    return department;
  }

  // Xóa phòng ban
  static async deleteDepartmentById(id: string) {
    const department = await Department.findByPk(parseInt(id));

    if (!department) {
      throw new Error('Department not found');
    }

    await department.destroy();
  }
}
