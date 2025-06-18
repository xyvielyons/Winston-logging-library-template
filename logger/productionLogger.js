import winston from "winston"
const { combine, timestamp, label, printf,colorize } = winston.format;
import dotenv from "dotenv";
dotenv.config(); // ✅ load env first

const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
});


const productionLogger = ()=>{
        return winston.createLogger({
            level: 'info',
            format: combine(
                timestamp(),
                myFormat
            ),
            defaultMeta: { service: 'user-service' },
            transports: [new winston.transports.Console()],
        });
}

export default productionLogger