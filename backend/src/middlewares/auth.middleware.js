import jwt from 'jsonwebtoken';

export function auth(req, res, next) {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            sucess: false,
            message: 'Token nao informado'
        });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(
            token,
            porocess.env.JWT_SECRET
        );

        req.user = decoded;

        next();

    } catch (error ) {
        return res.status(401 ).json({
            success: false,
            message: 'Token Invalido'
        });
    }
    
}