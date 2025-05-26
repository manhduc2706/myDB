import express from "express";
import { addCompany, getCompanies, getCompanyById } from "../controllers/company.controller";
import { authenticate, isAdmin } from "../middlewares/auth.middleware";

const companyRoute = express.Router();

companyRoute.post("/company",authenticate, isAdmin, addCompany);
companyRoute.get("/companies",authenticate, isAdmin, getCompanies);
companyRoute.get("/company/:id",authenticate, isAdmin, getCompanyById);
companyRoute.put("/company/:id",authenticate, isAdmin, addCompany);
companyRoute.delete("/company/:id",authenticate, isAdmin, addCompany);

export default companyRoute;