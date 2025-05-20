import { z } from "zod";
import { ROLE } from "../enum/enum";

// Schema cho đăng ký
export const registerSchema = z.object({
  username: z.string().min(3),
  email: z.string().email().endsWith("@gmail.com"),
  password: z.string().min(6),
  role: z.nativeEnum(ROLE).default(ROLE.USER),
  departmentId: z.preprocess((val) => Number(val), z.number()),
});

// Schema cho cập nhật user
export const updateUserSchema = z.object({
  username: z.string().min(3).optional(),
  email: z.string().email().endsWith("@gmail.com").optional(),
  password: z.string().min(6).optional(),
  role: z.nativeEnum(ROLE).optional(),
  departmentId: z.preprocess((val) => Number(val), z.number()).optional(),
});

export type RegisterInput = z.infer<typeof registerSchema>;
export type UpdateUserInput = z.infer<typeof updateUserSchema>;
