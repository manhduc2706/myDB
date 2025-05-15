import { z } from "zod";

export const registerSchema = z.object({
  username: z.string().min(3),
  email: z.string().email().endsWith("@gmail.com"),
  password: z.string().min(6),
  departmentId: z.preprocess((val) => Number(val), z.number()),
});

export type RegisterInput = z.infer<typeof registerSchema>;
