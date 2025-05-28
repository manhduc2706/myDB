import express from "express";
import { addCompany, getCompanies, getCompanyById } from "../controllers/company.controller";
import { authenticate, checkAccountState, isAdmin } from "../middlewares/auth.middleware";

const companyRoute = express.Router();

companyRoute.post("/company",authenticate,checkAccountState, isAdmin, addCompany);
companyRoute.get("/companies",authenticate,checkAccountState, isAdmin, getCompanies);
companyRoute.get("/company/:id",authenticate,checkAccountState, isAdmin, getCompanyById);
companyRoute.put("/company/:id",authenticate,checkAccountState, isAdmin, addCompany);
companyRoute.delete("/company/:id",authenticate,checkAccountState, isAdmin, addCompany);

export default companyRoute;