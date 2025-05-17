import { Repository } from "typeorm";
import { AppDataSource } from "../config/db";
import { Company } from "../database/models/company.model";

export class CompanyService {
  private static companyRepository: Repository<Company> =
    AppDataSource.getRepository(Company);

  //Tạo mới công ty
  static async addOneCompany(companyName: string) {
    const existingCompany = await this.companyRepository.findOne({
      where: { companyName },
    });

    if (existingCompany) {
      throw new Error("Company already exists");
    }

    const company = new Company();
    company.companyName = companyName;

    await this.companyRepository.save(company);
    return company;
  }

  //Lấy tất cả công ty
  static async getAllCompanies() {
    return await this.companyRepository.find();
  }

  //Lấy công ty theo ID
  static async getCompanyById(id: string) {
    const company = await this.companyRepository.findOne({
      where: { companyId: parseInt(id) },
    });
    if (!company) {
      throw new Error("Company not found");
    }
    return company;
  }
}
