import routes from "./routes";
import multer from "multer";

const multerVideo = multer({dest : "uploads/videos/"});

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;
    res.locals.user = {isAuthenticated : true, id:1};

    next(); // couse this middleware is been between connection and routers
};

export const uploadVideo = multerVideo.single("videoFile");