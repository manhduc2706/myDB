import 'multer';

export interface JwtPayload {
  userId: string;
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