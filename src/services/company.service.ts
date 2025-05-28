import { Company, CompanyAttributes } from "../database/models/company.model";

export class CompanyService {
  // Tạo mới công ty
  static async addOneCompany(data: CompanyAttributes) {
    const existingCompany = await Company.findOne({
      where: { companyName: data.companyName },
    });

    if (existingCompany) {
      throw new Error("Company already exists");
    }

    const company = await Company.create(data);
    return company;
  }

  // Lấy tất cả công ty
  static async getAllCompanies() {
    return await Company.findAll();
  }

  // Lấy công ty theo ID
  static async getCompanyId(companyId: string) {
    const company = await Company.findByPk(companyId);

    if (!company) {
      throw new Error("Company not found");
    }

    return company;
  }

  // Cập nhật công ty
  static async updateCompanyById(companyId: string, data: CompanyAttributes) {
    const company = await Company.findByPk(companyId);

    if (!company) {
      throw new Error("Company not found");
    }

    company.companyName = data.companyName;
    await company.save();

    return company;
  }

  // Xóa công ty
  static async deleteCompanyById(companyId: string) {
    const company = await Company.findByPk(companyId);

    if (!company) {
      throw new Error("Company not found");
    }

    await company.destroy();
  }
}
