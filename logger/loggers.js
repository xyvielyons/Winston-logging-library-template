import winston from "winston"
const { combine, timestamp, label, printf,colorize,json,prettyPrint,errors } = winston.format;

winston.loggers.add('OrderLogger',{
            level: 'info',
            format: combine(
                errors({stack:true}),
                timestamp(),
                json(),
                prettyPrint()
            ),
            defaultMeta: { service: 'order logger service' },
            transports: [new winston.transports.Console()],
})
winston.loggers.add('PaymentLogger',{
            format:json(),
            transports: [new winston.transports.Console()],
            defaultMeta: { service: 'payment logger service' },

})