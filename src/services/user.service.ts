// services/user.service.ts
import { User } from "../database/models/user.model";
import {
  RegisterInput,
  UpdateUserInput,
} from "../database/schemas/user.schema";

export class UserService {
  // Đăng ký người dùng mới
  static async register(data: RegisterInput) {
    const existing = await User.findOne({
      where: { email: data.email },
    });

    if (existing) {
      throw new Error("Email đã được sử dụng");
    }

    const newUser = await User.create(data as any);
    return newUser;
  }

  // Đăng nhập người dùng
  static async loginUser(email: string, password: string) {
    const user = await User.findOne({
      where: { email, password },
    });

    if (!user) {
      throw new Error("Invalid credentials");
    }

    if (user.state === "locked") {
      throw new Error("Tài khoản đã bị khóa");
    }

    return user;
  }

  // Lấy tất cả người dùng
  static async getAllUsers() {
    return await User.findAll();
  }

  // Lấy người dùng theo ID
  static async getUserById(userId: string) {
    const user = await User.findByPk(userId);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  }

  // Cập nhật thông tin người dùng
  static async updateUser(userId: string, data: UpdateUserInput) {
    const user = await User.findByPk(userId);
    if (!user) {
      throw new Error("User not found");
    }

    await user.update(data);
    return user;
  }

  // Xóa người dùng
  static async deleteUser(userId: string) {
    const user = await User.findByPk(userId);
    if (!user) {
      throw new Error("User not found");
    }

    await user.destroy();
    return;
  }
}
