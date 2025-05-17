// src/utils/jwt.ts
import jwt from "jsonwebtoken";
import { ROLE } from "../database/enum/enum";

export interface AccountSign {
  id: number;
  role: ROLE;
}

export const signToken = (payload: AccountSign) => {
  return jwt.sign(payload, process.env.JWT_SECRET!, {
    expiresIn: "1h",
  });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, process.env.JWT_SECRET!) as AccountSign & {
    iat: number;
    exp: number;
  };
};
