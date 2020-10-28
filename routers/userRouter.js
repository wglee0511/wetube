import express from "express";
import routes from "../routes";

export const userRouter = express.Router();

userRouter.get(routes.users, (req, res) => res.send("users"));
userRouter.get(routes.userDetail, (req, res) => res.send("user detail"));
userRouter.get(routes.editProfile, (req, res) => res.send("edit profile"));
userRouter.get(routes.changePassward, (req, res) => res.send("change passward"));

export default userRouter;
