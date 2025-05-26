import { Repository } from "typeorm";
import { AppDataSource } from "../config/db";
import { Company } from "../database/models/company.model";

export class CompanyService {
  //Tạo mới công ty
  static async addOneCompany(companyName: string) {
    const companyRepo = AppDataSource.getRepository(Company);
    const existingCompany = await companyRepo.findOne({
      where: { companyName },
    });

    if (existingCompany) {
      throw new Error("Company already exists");
    }

    const company = new Company();
    company.companyName = companyName;

    await companyRepo.save(company);
    return company;
  }

  //Lấy tất cả công ty
  static async getAllCompanies() {
    const companyRepo = AppDataSource.getRepository(Company);
    return await companyRepo.find();
  }

  //Lấy công ty theo ID
  static async getCompanyId(id: string) {
    const companyRepo = AppDataSource.getRepository(Company);
    const company = await companyRepo.findOne({
      where: { companyId: parseInt(id) },
    });
    if (!company) {
      throw new Error("Company not found");
    }
    return company;
  }

  
// Cập nhật công ty
  static async updateCompanyById(id: string, companyName: string) { 
    const companyRepo = AppDataSource.getRepository(Company);
    const company = await companyRepo.findOne({
      where: { companyId: parseInt(id) },
    });
    if (!company) {
      throw new Error("Company not found");
    }
    company.companyName = companyName;
    await companyRepo.save(company);
    return company;
  }

  //Xóa công ty
  static async deleteCompanyById(id: string) {
    const companyRepo = AppDataSource.getRepository(Company);
    const company = await companyRepo.findOne({
      where: { companyId: parseInt(id) },
    });
    if (!company) {
      throw new Error("Company not found");
    }
    await companyRepo.remove(company);
  }
}

