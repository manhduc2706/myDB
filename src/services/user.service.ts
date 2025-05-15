import { AppDataSource } from "../config/db";
import { User } from "../models/user.model";
import { Repository } from "typeorm";
import { RegisterInput } from "../schemas/user.schema";

export class UserService {
  // private static userRepository: Repository<User> =
  //   AppDataSource.getRepository(User);

  // Đăng ký người dùng mới
  static async register(data: RegisterInput) {
    const userRepo = AppDataSource.getRepository(User);
    const existing = await userRepo.findOneBy({ email: data.email });
    if (existing) {
      throw new Error("Email đã được sử dụng");
    }

    const newUser = userRepo.create(data);
    return await userRepo.save(newUser);
  }

  // Đăng nhập người dùng
  static async loginUser(email: string, password: string) {
    const userRepo = AppDataSource.getRepository(User);
    const user = await userRepo.findOne({
      where: { email, password },
    });

    if (!user) {
      throw new Error("Invalid credentials");
    }

    return user;
  }

  // Lấy tất cả người dùng
  static async getAllUsers() {
    const userRepo = AppDataSource.getRepository(User);
    return await userRepo.find();
  }

  // Lấy người dùng theo ID
  static async getUserById(id: string) {
    const userRepo = AppDataSource.getRepository(User);
    const user = await userRepo.findOne({
      where: { userId: parseInt(id) },
    });
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  }
}
