import express from "express";
import { changePassword, getEditProfile, userDetail } from "../controllers/userController";
import { onlyPrivate } from "../middlewares";
import routes from "../routes";

export const userRouter = express.Router();

userRouter.get(routes.changePassword, onlyPrivate, changePassword);
userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
userRouter.get(routes.userDetail(), userDetail);


export default userRouter;
