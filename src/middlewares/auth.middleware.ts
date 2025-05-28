import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JwtPayload } from "../types";
import { User } from "../database/models/user.model";
import { State } from "../database/enum/enum";

// Middleware xác thực token
export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      res.status(401).json({ message: "Token không được cung cấp" });
      return;
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;

    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({ message: "Token không hợp lệ" });
    return;
  }
};

export const checkAccountState = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.user?.userId;

  if (!userId) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  const user = await User.findByPk(userId);

  if (!user || user.state === State.LOCKED) {
    res.status(403).json({ message: "Tài khoản đã bị khóa" });
    return;
  }

  next();
};

// Middleware phân quyền: chỉ cho phép admin
export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  const user = req.user;

  if (!user || user.role !== "admin") {
    res
      .status(403)
      .json({ message: "Bạn không có quyền thực hiện hành động này" });
    return;
  }

  next();
};
