import youtubeLogger from "./youtubeLogger.js";
import productionLogger from "./productionLogger.js"

let logger = null;

if (process.env.NODE_ENV === 'youtube') {
    logger = youtubeLogger()
}

if (process.env.NODE_ENV === 'production') {
    logger = productionLogger()
}

export default logger