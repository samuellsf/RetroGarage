import * as service from './auth.service.js';

export async function register(req, res) {

    await service.register(req.body);

    res.status(201).json({
        message: 'Usuario criado'
    });
}

export async function login(req, res) {
    const token = await service.login(
        req.body.email,
        req.body.password
    );
    
    res.json({ token })
}