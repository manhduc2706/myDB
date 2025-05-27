// import { User } from "../database/models/user.model";

export interface JwtPayload {
  id: number;
  email: string;
  role: "admin" | "user";
}

declare namespace Express {
  interface Request {
    user?: {
      id: string | number;
      // thêm các thuộc tính khác của user nếu cần
    };
  }
}

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}

export {}