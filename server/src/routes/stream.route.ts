import { EventController } from "../controllers/events.controller";

import { Router } from "express";
import isAuth from "../middleware/authorization.middleware";
import { tokenProvider } from "../controllers/stream.controller";

const streamRouter = Router();

streamRouter.get("/token-provider", isAuth, tokenProvider);


export default streamRouter;
