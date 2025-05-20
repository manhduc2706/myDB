import { ROLE } from "../database/enum/enum";

// Interface cho JWT payload và user trong request
export interface JwtPayload {
  id: number;
  email: string;
  role: ROLE;
}

// Type cho Express Request
declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}