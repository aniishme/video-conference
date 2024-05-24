import { NextFunction, Request, Response } from "express";

import { EventService } from "../services/event.service";

export class EventController {
  private eventService: EventService;

  constructor() {
    this.eventService = new EventService();
  }

  async create(req: Request, res: Response, next: NextFunction) {
    const event = req.body;
    try {
      const result = await this.eventService.create(event);
      return res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      const result = await this.eventService.getById(id);
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const event = req.body;
    try {
      const result = await this.eventService.update(id, event);
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      const result = await this.eventService.delete(id);
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  async getByUserId(req: Request, res: Response, next: NextFunction) {
    const { userId } = req.params;
    try {
      const result = await this.eventService.getByUserId(userId);
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}
