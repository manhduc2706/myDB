// import { User } from "../database/models/user.model";

export interface JwtPayload {
  id: number;
  email: string;
  role: "admin" | "user";
}

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}

export {}