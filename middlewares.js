import multer from "multer";
import routes from "./routes";

const multerVideo = multer({dest : "uploads/videos/"});

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;
    res.locals.user = req.user || null;

    next(); // couse this middleware is been between connection and routers
};

export const uploadVideo = multerVideo.single("videoFile");