import { User } from "../models/user.model";

export class UserService {
  static async registerUser(username: string, email: string, password: string) {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error("Email đã được sử dụng");
    }
    const user = new User({ username, email, password });
    await user.save();
    return user;
  }

  static async loginUser(email: string, password: string) {
    const user = await User.findOne({ email, password });
    if (!user) throw new Error("Invalid credentials");
    return user;
  }

  static async getAllUsers(user: any) {
    return await User.find();
  }

  static async getUserById(id: string) {
    return await User.findById(id);
  }
}
