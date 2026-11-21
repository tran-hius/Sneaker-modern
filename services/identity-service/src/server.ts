import app from "./app.js";
import { env } from "./config/env.js";

const PORT = env.PORT;

app.listen(PORT, () => {
  console.log(`[IDENTITY-SERVICE] RUNNING ON PORT:${PORT}`);
});
