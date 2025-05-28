import { z } from "zod";
import { Role, State } from "../enum/enum";

// Schema cho đăng ký
export const registerSchema = z.object({
  userId: z.string().uuid().optional(),
  username: z.string().min(3),
  email: z.string().email().endsWith("@gmail.com"),
  password: z.string().min(6),
  role: z.nativeEnum(Role).default(Role.USER),
  state: z.nativeEnum(State).default(State.ACTIVE),
  departmentId: z.string().min(6),
});

// Schema cho cập nhật user
export const updateUserSchema = z.object({
  userId: z.string().uuid().optional(),
  username: z.string().min(3).optional(),
  email: z.string().email().endsWith("@gmail.com").optional(),
  password: z.string().min(6).optional(),
  role: z.nativeEnum(Role).optional(),
  state: z.nativeEnum(State).optional(),
  departmentId: z.string().min(6),
});

export type RegisterInput = z.infer<typeof registerSchema>;
export type UpdateUserInput = z.infer<typeof updateUserSchema>;
