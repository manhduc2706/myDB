import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { signToken } from "../utils/jwt";

//Đang ký người dùng mới
export const register = async (req: Request, res: Response) => {
  try {
    const user = await UserService.register(req.body);
    res.status(201).json({ message: "Đăng ký thành công", user });
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

//Đăng nhập người dùng
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await UserService.loginUser(email, password);
    res.status(200).json({ message: "Login successful", user });

    const token = signToken({ id: user.userId, role: user.role });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    }
  }
};

//Lấy tất cả người dùng
export const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getAllUsers();
    res.status(200).json(result);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    }
  }
};

//Lấy người dùng theo ID
export const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await UserService.getUserById(id);
    res.status(200).json(user);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    }
  }
};

//Cập nhật thông tin người dùng
export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await UserService.updateUser(id, req.body);
    res.status(200).json({ message: "Cập nhật thành công", user });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    }
  }
};

//Xóa người dùng
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await UserService.deleteUser(id);
    res.status(200).json({ message: "Xóa người dùng thành công" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    }
  }
};
