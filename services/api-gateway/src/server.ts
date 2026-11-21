import app from "./app.js";
import { env } from "./config/env.js";
import { logger } from "./app.js";

const PORT = env.PORT;

app.listen(PORT, () => {
  logger.info(`GATEWAY RUNNING ON PORT ${PORT}`);
});
