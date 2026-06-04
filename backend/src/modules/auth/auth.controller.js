import * as service from './auth.service.js';

export async function register(req, res, next) {
    try {

        await service.register(req.body);

        res.status(201).json({
            message: 'Usuario criado'
        });
    
    } catch (error) {

        next(error);

    }
};

export async function login(req, res, next) {
    try {

        const token = await service.login(
            req.body.email,
            req.body.password
        );
        
        res.json({ token })
    
} catch (error) {

    next (error);

}
};