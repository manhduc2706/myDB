import { Company } from "../database/models/company.model";

export class CompanyService {
  // Tạo mới công ty
  static async addOneCompany(companyName: string) {
    const existingCompany = await Company.findOne({
      where: { companyName },
    });

    if (existingCompany) {
      throw new Error('Company already exists');
    }

    const company = await Company.create({ companyName });
    return company;
  }

  // Lấy tất cả công ty
  static async getAllCompanies() {
    return await Company.findAll();
  }

  // Lấy công ty theo ID
  static async getCompanyId(id: string) {
    const company = await Company.findByPk(parseInt(id));

    if (!company) {
      throw new Error('Company not found');
    }

    return company;
  }

  // Cập nhật công ty
  static async updateCompanyById(id: string, companyName: string) {
    const company = await Company.findByPk(parseInt(id));

    if (!company) {
      throw new Error('Company not found');
    }

    company.companyName = companyName;
    await company.save();

    return company;
  }

  // Xóa công ty
  static async deleteCompanyById(id: string) {
    const company = await Company.findByPk(parseInt(id));

    if (!company) {
      throw new Error('Company not found');
    }

    await company.destroy();
  }
}
