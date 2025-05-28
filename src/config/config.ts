// src/config.ts
import dotenv from "dotenv";
dotenv.config();

console.log("JWT_SECRET =", process.env.JWT_SECRET);

export const PORT = process.env.PORT || "3000";
export const JWT_SECRET = process.env.JWT_SECRET as string;
export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "10h";

// SQL Server
export const DB_HOST = process.env.DB_HOST as string;
export const DB_PORT = parseInt(process.env.DB_PORT || "1433");
export const DB_USERNAME = process.env.DB_USERNAME as string;
export const DB_PASSWORD = process.env.DB_PASSWORD as string;
export const DB_NAME = process.env.DB_NAME as string;

// Super Admin
export const SUPER_ADMIN_EMAIL = process.env.SUPER_ADMIN_EMAIL as string;
export const SUPER_ADMIN_PASSWORD = process.env.SUPER_ADMIN_PASSWORD as string;
export const SUPER_ADMIN_USERNAME = process.env.SUPER_ADMIN_USERNAME as string;

