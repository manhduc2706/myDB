import { AppDataSource } from "../config/db";
import { User } from "../models/user.model";
import { Repository } from "typeorm";

export class UserService {
  private static userRepository: Repository<User> =
    AppDataSource.getRepository(User);

  // Đăng ký người dùng mới
  static async registerUser(username: string, email: string, password: string, departmentId: number) {
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
    user.departmentId = departmentId;
    await this.userRepository.save(user);
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
  static async getAllUsers() {
    return await this.userRepository.find();
  }

  // Lấy người dùng theo ID
  static async getUserById(id: string) {
    const user = await this.userRepository.findOne({
      where: { userId: parseInt(id) },
    });
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  }
}
