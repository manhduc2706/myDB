import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JwtPayload } from "../types";

// Middleware xác thực token
export const authenticate = (req: Request, res: Response, next: NextFunction) => {
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

// Middleware phân quyền: chỉ cho phép admin
export const isAdmin = (req: Request, res: Response, next: NextFunction)=> {
  const user = req.user;

  if (!user || user.role !== "admin") {
    res.status(403).json({ message: "Bạn không có quyền thực hiện hành động này" });
    return;
  }

  next();
};
