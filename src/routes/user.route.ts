import { Router } from "express";
import {
  register,
  login,
  getUsers,
  getById,
} from "../controllers/user.controller";
import { validateBody } from "../middlewares/validate.middleware";
import { registerSchema } from "../schemas/user.schema";

const userRoute = Router();

userRoute.post("/register", validateBody(registerSchema), register);
userRoute.post("/login", login);
userRoute.get("/users", getUsers);
userRoute.get("/user/:id", getById);

export default userRoute;
