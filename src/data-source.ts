import "reflect-metadata"; // Thư viện cần thiết cho TypeORM
import { DataSource } from "typeorm";
import { User } from "./models/user.model"; // Import mô hình User

// Khai báo kết nối đến SQL Server
export const AppDataSource = new DataSource({
  type: "mssql", // Sử dụng SQL Server (mssql)
  host: "localhost", // Tên máy chủ (thường là localhost trong môi trường phát triển)
  port: 1434, // Cổng mặc định cho SQL Server
  username: "sa", // Tên người dùng SQL Server
  password: "123456", // Mật khẩu cho tài khoản SQL Server
  database: "MyDB", // Tên cơ sở dữ liệu bạn muốn kết nối
  synchronize: true, // Tự động đồng bộ hóa các thay đổi bảng (dùng khi phát triển)
  logging: true, // Ghi lại các truy vấn SQL
  entities: [User], // Các entity bạn muốn sử dụng với TypeORM
  migrations: [], // Có thể thêm migrations nếu cần
  subscribers: [],
});
