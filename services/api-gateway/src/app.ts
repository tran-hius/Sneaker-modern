import express from "express";
import cors from "cors";
import { pinoHttp } from "pino-http";
import { createLogger } from "./utils/logger.js";
import { env } from "./config/env.js";

export const logger = createLogger({ level: "info", nodeEnv: env.NODE_ENV });

const app = express();

app.use(pinoHttp({ logger }));
app.use(cors());

app.get("/health", (_req, res) => {
  res.json({ status: "ok", service: "api-gateway" });
});

export default app;
