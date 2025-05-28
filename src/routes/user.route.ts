import { Router } from "express";
import {
  register,
  login,
  getUsers,
  getById,
  updateUser,
  deleteUser,
} from "../controllers/user.controller";
import { validateBody } from "../middlewares/validate.middleware";
import { registerSchema } from "../database/schemas/user.schema";
import { authenticate, checkAccountState, isAdmin } from "../middlewares/auth.middleware";

const userRoute = Router();

userRoute.post("/register", validateBody(registerSchema), register);
userRoute.post("/login", login);
userRoute.get("/users",authenticate,checkAccountState, isAdmin, getUsers);
userRoute.get("/user/:id", authenticate,checkAccountState, isAdmin, getById);
userRoute.put("/user/:id", authenticate,checkAccountState, isAdmin, validateBody(registerSchema), updateUser);
userRoute.delete("/user/:id", authenticate,checkAccountState, isAdmin, deleteUser);

export default userRoute;
