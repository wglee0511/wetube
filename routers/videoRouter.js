import express from "express";
import { deleteVideo, editVideo, videoDetail, getUpload, postUpload } from "../controllers/videoController";
import routes from "../routes";

export const videoRouter = express.Router();


videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, postUpload);

videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
