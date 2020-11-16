import express from "express";
import passport from "passport";
import { getJoin, getLogin, logout, postJoin, postLogin, postGithubLogin, githubLogin} from "../controllers/userController";
import { home, search } from "../controllers/videoController";
import { onlyPrivate, onlyPublic } from "../middlewares";
import routes from "../routes";

export const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.github, githubLogin);
globalRouter.get(routes.githubCallback, passport.authenticate('github', { failureRedirect: '/login' }), postGithubLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, onlyPrivate,logout);



export default globalRouter;
