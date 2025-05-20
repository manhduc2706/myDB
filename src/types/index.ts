import { ROLE } from "../database/enum/enum";

export interface AccountDecode {
  id: number;
  email: string;
  role: ROLE;
}

// interface AccountDecode {
//   id: string;
//   role: ROLE;
//   iat: number;
//   exp: number;
// }

// export { AccountSign, AccountDecode };