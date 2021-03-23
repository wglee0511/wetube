import express from "express";
import { getDeleteComment, postAddComment, postRegisterView } from "../controllers/videoController";
import { onlyPrivate } from "../middlewares";
import routes from "../routes";

export const apiRouter = express.Router();

apiRouter.post(routes.registerView, postRegisterView);
apiRouter.post(routes.addComment, postAddComment);
apiRouter.get(routes.deleteComment(), onlyPrivate, getDeleteComment);

export default apiRouter;
