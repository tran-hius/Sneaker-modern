import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/app-error.js";
import { sendError } from "../utils/response.js";
import { logger } from "../utils/logger.js";

export function errorHandler(err: unknown, _req: Request, res: Response, _next: NextFunction) {
  if (err instanceof AppError) {
    return sendError(res, err.message, err.statusCode);
  }

  logger.error(err, "Unhandled error");
  return sendError(res, "Internal Server Error", 500);
}
