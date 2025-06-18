import winston from "winston"
const { combine, timestamp, label, printf,colorize,json,prettyPrint,errors } = winston.format;
import dotenv from "dotenv";
dotenv.config(); // ✅ load env first

const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
});


const productionLogger = ()=>{
        return winston.createLogger({
            level: 'info',
            format: combine(
                errors({stack:true}),
                timestamp(),
                json(),
                prettyPrint()
            ),
            defaultMeta: { service: 'user-service' },
            transports: [new winston.transports.Console()],
        });
}

export default productionLogger