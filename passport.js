import passport from "passport";

import dotenv from"dotenv";

import GithubStrategy from "passport-github";
import { facebookLoginCallback, githubLoginCallback } from "./controllers/userController";

import FacebookStrategy from "passport-facebook";

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

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: `http://localhost:4000${routes.facebookCallback}`
  },facebookLoginCallback)
);