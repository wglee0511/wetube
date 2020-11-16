import express from "express";
import { changePassward, editProfile, userDetail } from "../controllers/userController";
import { onlyPrivate } from "../middlewares";
import routes from "../routes";

export const userRouter = express.Router();

userRouter.get(routes.changePassward, onlyPrivate, changePassward);
userRouter.get(routes.editProfile, onlyPrivate, editProfile);
userRouter.get(routes.userDetail(), userDetail);


export default userRouter;
