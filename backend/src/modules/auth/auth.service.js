import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import * as model from'./auth.model.js';


export async function register(data) {
    console.log('Service:', data)
    const hash = await bcrypt.hash(data.password, 10);

    return model.createUser(data.name, data.email, hash);
}

export async function login(email, password) {
    const user = await model.findUserByEmail(email);

    if(!user) {
        throw new Error('Usuario nao encontrado');
    }

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
        throw new Error('Senha Invalida');
    }

    const token = jwt.sign(
        {
            id: user.id,
            email: user.email
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '7d'
        }
    );

    return token;
}