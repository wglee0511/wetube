import passport from "passport";

import dotenv from"dotenv";

import GithubStrategy from "passport-github";
import { githubLoginCallback } from "./controllers/userController";

import User from "./models/User";
import routes from "./routes";

dotenv.config();
//http://localhost:4000/auth/github/callback

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

passport.use(new GithubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: `http://localhost:4000${routes.githubCallback}`
},githubLoginCallback)

);