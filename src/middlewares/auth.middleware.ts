import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

// Middleware xác thực token
export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).json({ message: "No token provided" });

  const token = authHeader.split(" ")[1];

jwt.verify(token, process.env.JWT_SECRET!, (err, decoded) => {
    if (err || typeof decoded !== "object") {
      return res.status(403).json({ message: "Invalid token" });
    }

    req.user = decoded as {
      id: number;
      email: string;
      role: "admin" | "user";
    };

    next();
  });
};

// Middleware phân quyền: chỉ cho phép admin
export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  const user = req.user;

  if (!user || user.role !== "admin") {
    return res.status(403).json({ message: "Forbidden: Admins only" });
  }

  next();
};
