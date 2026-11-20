import pino, { Logger, LoggerOptions } from "pino";

export interface CreateLoggerOptions {
  level: string;
  nodeEnv: string;
}

export function createLogger(options: CreateLoggerOptions): Logger {
  const isTest = options.nodeEnv === "test";
  const isDev = options.nodeEnv === "dev";

  const pinoOptions: LoggerOptions = {
    level: isTest ? "silent" : options.level,
    base: { service: "api-gateway" },
    redact: {
      paths: [
        "req.headers.authorization",
        "req.headers.cookie",
        'req.headers["x-gateway-secret"]',
        'req.headers["x-api-key"]',
      ],
      censor: "[REDACTED]",
    },
  };

  if (isDev) {
    pinoOptions.transport = {
      target: "pino-pretty",
      options: {
        colorize: true,
        translateTime: "SYS:standard",
        ignore: "pid,hostname",
      },
    };
  }

  return pino(pinoOptions);
}
