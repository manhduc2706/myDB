import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt";
import jwt from "jsonwebtoken";
import { AccountSign, AccountDecode } from "../types";

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) return res.sendStatus(401);

  const token = authHeader.split(" ")[1];

  try {
    const decoded = verifyToken(token);
    req.user = {
      id: String(decoded.id),
      role: decoded.role,
    };
    next();
  } catch {
    return res.status(403).json({ message: "Invalid token" });
  }
};

//Kiểm tra quyền admin
export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  const user = req.user;

  if (!user || user.role !== "admin") {
    res.status(403).json({ message: "Bạn không có quyền truy cập" });
    return;
  }

  next();
};
