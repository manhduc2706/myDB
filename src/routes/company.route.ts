import express from "express";
import { addCompany, getCompanies, getCompanyById } from "../controllers/company.controller";

const companyRoute = express.Router();

companyRoute.post("/company", addCompany);
companyRoute.get("/companies", getCompanies);
companyRoute.get("/company/:id", getCompanyById);

export default companyRoute;