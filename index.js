import dotenv from "dotenv"

import logger from "./logger/index.js"

dotenv.config();



logger.info("log information")
logger.error("there is a problem")
logger.warn("there is a problem")