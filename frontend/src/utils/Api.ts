import {IAuth, IAuthData, IUser} from "./types";

const config = {
    url: 'http://localhost:3000',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
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
        body: JSON.stringify({email,password}),
    }).then(_getResponse)
}