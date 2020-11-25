import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import passport from "passport";

import mongoose from "mongoose";
import session from "express-session";
import MongoStore from "connect-mongo";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import apiRouter from "./routers/apiRouter";
import routes from "./routes";
import { localsMiddleware } from "./middlewares";

import "./passport";

const app = express();

const CookieStore = MongoStore(session);

app.use(helmet({ contentSecurityPolicy: false }));
app.set("view engine", "pug"); // set(name, value) setting view engine -> pug
app.use("/uploads", express.static("uploads"));//DB
app.use("/static", express.static("static"));//CSS
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan("dev"));

app.use(
    session({
    secret : process.env.COOKIE_SECRET,
    resave : true,
    saveUninitialized : false,
    store : new CookieStore({ mongooseConnection : mongoose.connection })
})
);
app.use(passport.initialize());
app.use(passport.session());

app.use(localsMiddleware);

app.use(routes.home, globalRouter); //join login  search home etc...
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);
app.use(routes.api, apiRouter);

export default app;