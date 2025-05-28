import { Company } from "../database/models/company.model";
import { User } from "../database/models/user.model";
import { Department } from "../database/models/department.model";
import { Role, State } from "../database/enum/enum";
import {
  SUPER_ADMIN_EMAIL,
  SUPER_ADMIN_PASSWORD,
  SUPER_ADMIN_USERNAME,
} from "../config/config";

export class Seeder {
  //company
  static async seedCompany() {
    const existingCompany = await Company.findOne({
      where: { companyName: "Default Company" },
    });
    if (existingCompany) {
      console.log("Company already exists");
      return;
    }
    await Company.create({
      companyId: "1",
      companyName: "Default Company",
    });
  }

  //department
  static async seedDepartment() {
    const existingDepartment = await Department.findOne({
      where: { departmentName: "Default Department" },
    });
    if (existingDepartment) {
      console.log("Department already exists");
      return;
    }
    await Department.create({
      departmentId: "1",
      departmentName: "Default Department",
      companyId: "1",
    });
  }

  //admin
  static async seedAdmin() {
    const existingAdmin = await User.findOne({
      where: { email: SUPER_ADMIN_EMAIL },
    });
    if (existingAdmin) {
      console.log("SuperAdmin already exists");
      return;
    }

    await User.create({
      userId: "1",
      username: SUPER_ADMIN_USERNAME,
      email: SUPER_ADMIN_EMAIL,
      password: SUPER_ADMIN_PASSWORD,
      role: Role.ADMIN,
      departmentId: "1",
      state: State.ACTIVE,
    });

    console.log("Super admin: test@gmail.com/12345678");
  }
}
