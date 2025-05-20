import { z } from "zod";
import { ROLE } from "../enum/enum";

export const registerSchema = z.object({
  username: z.string().min(3),
  email: z.string().email().endsWith("@gmail.com"),
  password: z.string().min(6),
   role: z.nativeEnum(ROLE).default(ROLE.USER),
  departmentId: z.preprocess((val) => Number(val), z.number()),
});

export type RegisterInput = z.infer<typeof registerSchema>;
