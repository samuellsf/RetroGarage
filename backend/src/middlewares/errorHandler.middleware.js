import { logError } from "../utils/logger";


export function errorHandler(err, req, res, next) {
    
    logError(err);
    console.error(err);

    return res.status(
        err.status || 500
    ).json({
        success: false,
        message: err.message || 'Erro Interno do Servidor'
    });
}