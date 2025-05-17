import { ROLE } from "../../database/enum/enum";

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}
