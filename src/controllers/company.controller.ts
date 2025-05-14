import { Request, Response } from "express";
import { CompanyService } from "../services/company.service";

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

export const getCompanyById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const company = await CompanyService.getCompanyById(id);
        res.status(200).json(company);
    } catch (error) {
        if (error instanceof Error) {
        res.status(400).json({ message: error.message });
        }
    }
}

