import pino from "pino";

export const logger = pino({
  level: "info",
  base: { service: "identity-service" },
});
