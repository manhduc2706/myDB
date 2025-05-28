import { Company } from "../database/models/company.model";
import { User } from "../database/models/user.model";
import { Department } from "../database/models/department.model";
import dotenv from "dotenv";
dotenv.config();

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
      companyId: 1,
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
      departmentId: 1,
      departmentName: "Default Department",
      companyId: 1,
    });
  }

  //admin
  static async seedAdmin() {
    const existingAdmin = await User.findOne({
      where: { email: process.env.SUPER_ADMIN_EMAIL },
    });
    if (existingAdmin) {
      console.log("SuperAdmin already exists");
      return;
    }

    await User.create({
      userId: 1,
      username: process.env.SUPER_ADMIN_USERNAME,
      email: process.env.SUPER_ADMIN_EMAIL,
      password: process.env.SUPER_ADMIN_PASSWORD,
      role: "admin",
      departmentId: 1,
    });

    console.log("Super admin: test@gmail.com/12345678");
  }
}
