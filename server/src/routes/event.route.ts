import { EventController } from "../controllers/events.controller";

import { Router } from "express";

const eventRouter = Router();

const eventController = new EventController();

eventRouter.post("/", eventController.create.bind(eventController));
eventRouter.get("/:id", eventController.getById.bind(eventController));
eventRouter.put("/:id", eventController.update.bind(eventController));
eventRouter.delete("/:id", eventController.delete.bind(eventController));
eventRouter.get(
  "/user/:userId",
  eventController.getByUserId.bind(eventController)
);

export default eventRouter;
