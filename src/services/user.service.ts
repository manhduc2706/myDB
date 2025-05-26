// services/user.service.ts
import { User } from "../database/models/user.model";
import { RegisterInput } from '../database/schemas/user.schema';

export class UserService {
  // Đăng ký người dùng mới
  static async register(data: RegisterInput) {
    const existing = await User.findOne({
      where: { email: data.email },
    });

    if (existing) {
      throw new Error('Email đã được sử dụng');
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
      throw new Error('Invalid credentials');
    }

    return user;
  }

  // Lấy tất cả người dùng
  static async getAllUsers() {
    return await User.findAll();
  }

  // Lấy người dùng theo ID
  static async getUserById(id: string) {
    const user = await User.findByPk(parseInt(id));
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }

  // Cập nhật thông tin người dùng
  static async updateUser(id: string, data: Partial<User>) {
    const user = await User.findByPk(parseInt(id));
    if (!user) {
      throw new Error('User not found');
    }

    await user.update(data);
    return user;
  }

  // Xóa người dùng
  static async deleteUser(id: string) {
    const user = await User.findByPk(parseInt(id));
    if (!user) {
      throw new Error('User not found');
    }

    await user.destroy();
    return;
  }
}
