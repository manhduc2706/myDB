import "reflect-metadata";
import { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME } from "./config";
import { User } from "../database/models/user.model";
import { Department } from "../database/models/department.model";
import { Company } from "../database/models/company.model";
import { UploadFile } from "../database/models/upload.model";
import { Sequelize } from "sequelize-typescript";
import { seedAll } from "../seeds/seedAll";

export const sequelize = new Sequelize({
  dialect: "mssql",
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  models: [User, Department, Company, UploadFile], // nạp model vào đây
  logging: console.log, // set true nếu muốn in câu SQL
  dialectOptions: {
    options: {
      encrypt: false, // hoặc true nếu server yêu cầu SSL
      trustServerCertificate: true, // nếu dùng self-signed cert
    },
  },
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to SQL Server");
    await sequelize.sync(); // Chạy server sẽ reset lại database
    await seedAll();
  } catch (error) {
    console.error("SQL Server connection failed:", error);
    process.exit(1);
  }
};

export default connectDB;
