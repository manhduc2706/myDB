import { AppDataSource } from "../data-source"; // Import data source từ TypeORM
import { User } from "../models/user.model";  // Import mô hình User
import { Repository } from "typeorm"; // Import Repository từ TypeORM

export class UserService {
  private userRepository: Repository<User>;
  static userRepository: any;

  constructor() {
    // Khởi tạo repository từ data source của TypeORM
    this.userRepository = AppDataSource.getRepository(User);
  }

  // Đăng ký người dùng mới
  static async registerUser(username: string, email: string, password: string) {
    const existingUser = await this.userRepository.findOne({
      where: { email },
    });

    if (existingUser) {
      throw new Error("Email đã được sử dụng");
    }

    const user = new User();
    user.username = username;
    user.email = email;
    user.password = password;

    await this.userRepository.save(user);  // Lưu người dùng mới vào SQL Server
    return user;
  }

  // Đăng nhập người dùng
  static async loginUser(email: string, password: string) {
    const user = await this.userRepository.findOne({
      where: { email, password },
    });

    if (!user) {
      throw new Error("Invalid credentials");
    }

    return user;
  }

  // Lấy tất cả người dùng
  static async getAllUsers(users: any) {
    return await this.userRepository.find();
  }

  // Lấy người dùng theo ID
  static async getUserById(id: string) {
    const user = await this.userRepository.findOne({
      where: { id: parseInt(id) }, // Chuyển id sang kiểu số nếu cần
    });
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  }
}
