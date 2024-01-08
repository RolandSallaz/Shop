import {IAuth, IAuthData, IUser} from "./types";

const config = {
    url: 'http://localhost:3000',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}

function _getResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}

export function auth(authType: IAuth, {
    email,
    password
}: IAuthData): Promise<IUser> {
    return fetch(`${config.url}/${authType}`, {
        method: "POST",
        headers: config.headers,
        credentials: 'include',
        body: JSON.stringify({email, password}),
    }).then(_getResponse)
}

export function logout(): Promise<unknown> {
    return fetch(`${config.url}/logout`, {
        method: "POST", credentials: 'include', headers: config.headers
    }).then(_getResponse)
}