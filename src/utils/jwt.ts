import jwt from "jsonwebtoken";
import { JwtPayload } from "../types";

export const generateToken = (payload: JwtPayload): string => {
  console.log(payload);
  return jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: "1h" });
};
