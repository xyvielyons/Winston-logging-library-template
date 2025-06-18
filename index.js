import dotenv from "dotenv"
import "./logger/loggers.js"
import logger from "./logger/index.js"
import winston from "winston";

dotenv.config();



// logger.info("log information")
// logger.error("there is a problem")
// logger.warn("there is a problem")


// const requestLog = {method:"Get",isAuthenticated:false}

// logger.error("there is a problem",requestLog)
// logger.info("log information",requestLog)



// logger.error("an error log",new Error('504 gateway'))

const PaymentLogger = winston.loggers.get('PaymentLogger')
const OrderLogger = winston.loggers.get('OrderLogger')

PaymentLogger.info('payment received')
OrderLogger.error("order failed")
