import { apiFetch } from "../../config/api";

export async function login(email, password) {
    const result = await apiFetch('/auth/login', {
        method: 'POST',
        body: JSON.stringify({
            email,
            password
        })
    });

    localStorage.setItem(
        'token',
        result.token
    );

    return result;

}

export function register(user) {
    return apiFetch('/auth/register', {
        method: 'POST',
        body: JSON.stringify(user)
    });
}