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
import { authenticate, isAdmin } from "../middlewares/auth.middleware";

const userRoute = Router();

userRoute.post("/register", validateBody(registerSchema), register);
userRoute.post("/login", login);
userRoute.get("/users",authenticate, isAdmin, getUsers);
userRoute.get("/user/:id", authenticate, isAdmin, getById);
userRoute.put("/user/:id", authenticate, isAdmin, validateBody(registerSchema), updateUser);
userRoute.delete("/user/:id", authenticate, isAdmin, deleteUser);


export default userRoute;
