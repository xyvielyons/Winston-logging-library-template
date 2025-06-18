import dotenv from "dotenv"

import logger from "./logger/index.js"

dotenv.config();



logger.info("log information")
logger.error("there is a problem")
logger.warn("there is a problem")


const requestLog = {method:"Get",isAuthenticated:false}

logger.error("there is a problem",requestLog)
logger.info("log information",requestLog)



logger.error("an error log",new Error('504 gateway'))