import express from "express";
import { changePassward, editProfile, userDetail, users } from "../controllers/userController";
import routes from "../routes";

export const userRouter = express.Router();

userRouter.get(routes.changePassward, changePassward);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.users, users);
userRouter.get(routes.userDetail, userDetail);


export default userRouter;
