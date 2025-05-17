// src/db.ts
import "reflect-metadata";
import { DataSource } from "typeorm";
import { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME } from "./config";
import { User } from "../database/models/user.model";
import { Department } from "../database/models/department.model";
import { Company } from "../database/models/company.model";

export const AppDataSource = new DataSource({
  type: "mssql",
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  synchronize: true,
  logging: false,
  entities: [User, Department, Company],
  options: {
    encrypt: false, // Bỏ nếu dùng Azure hoặc có SSL
  },
});

const connectDB = async () => {
  try {
    await AppDataSource.initialize();
    console.log("Connected to SQL Server");
  } catch (error) {
    console.error("SQL Server connection failed:", error);
    process.exit(1);
  }
};

export default connectDB;
