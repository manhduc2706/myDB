import express from "express";
import {
  register,
  login,
  getUsers,
  getById,
} from "../controllers/user.controller";

const userRoute = express.Router();

userRoute.post("/register", register);
userRoute.post("/login", login);
userRoute.get("/users", getUsers);
userRoute.get("/user/:id", getById);

export default userRoute;
