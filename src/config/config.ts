// src/config.ts
import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || "3000";
export const SECRET_KEY = process.env.SECRET_KEY || "your-secret";

// SQL Server
export const DB_HOST = process.env.DB_HOST as string;
export const DB_PORT = parseInt(process.env.DB_PORT || "1434");
export const DB_USERNAME = process.env.DB_USERNAME as string;
export const DB_PASSWORD = process.env.DB_PASSWORD as string;
export const DB_NAME = process.env.DB_NAME as string;
