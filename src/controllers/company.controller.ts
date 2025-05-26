import { Request, Response } from "express";
import { CompanyService } from "../services/company.service";

//Thêm mới công ty
export const addCompany = async (req: Request, res: Response) => {
  try {
    const { companyName } = req.body;
    const company = await CompanyService.addOneCompany(companyName);
    res.status(201).json({ message: "Company created successfully", company });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    }
  }
};

//Lấy tất cả công ty
export const getCompanies = async (req: Request, res: Response) => {
    try {
        const companies = await CompanyService.getAllCompanies();
        res.status(200).json(companies);
    } catch (error) {
        if (error instanceof Error) {
        res.status(400).json({ message: error.message });
        }
    }
}

//Lấy công ty theo ID
export const getCompanyById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const company = await CompanyService.getCompanyId(id);
        res.status(200).json(company);
    } catch (error) {
        if (error instanceof Error) {
        res.status(400).json({ message: error.message });
        }
    }
}

//Cập nhật công ty
export const updateCompany = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { companyName } = req.body;
        const company = await CompanyService.updateCompanyById(id, companyName);
        res.status(200).json({ message: "Company updated successfully", company });
    } catch (error) {
        if (error instanceof Error) {
        res.status(400).json({ message: error.message });
        }
    }
}

//Xóa công ty
export const deleteCompany = async (req: Request, res: Response) => {
  try{
    const { id } = req.params;
    await CompanyService.deleteCompanyById(id);
    res.status(200).json({ message: "Company deleted successfully" });
  } catch (error){
    if(error instanceof Error){
      res.status(400).json({ message: error.message });
    }
  }
}
