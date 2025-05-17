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
import { isAdmin } from "../middlewares/auth.middleware";

const userRoute = Router();

userRoute.post("/register", isAdmin, validateBody(registerSchema), register);
userRoute.post("/login", login);
userRoute.get("/users", getUsers);
userRoute.get("/user/:id", getById);
userRoute.put("/user/:id", validateBody(registerSchema), updateUser);
userRoute.delete("/user/:id", deleteUser);


export default userRoute;
