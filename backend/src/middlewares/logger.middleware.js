import { logInfo } from "../utils/logger";

export default function logger(req, res, next) {

    logInfo(`${req.method} ${req.originalUrl}`);

    next();
}