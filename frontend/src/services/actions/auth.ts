import {IAuth, IAuthData, IUser} from "../../utils/types";
import {auth, logout} from "../../utils/Api";
import {Dispatch} from "redux";
import {AppThunk} from "../store";

export enum authActions {
    GET_AUTH_REQUEST,
    LOGIN,
    LOGOUT
}

export type TAuth = {
    readonly type: authActions[authActions.LOGIN] | authActions[authActions.LOGOUT];
    readonly payload: IUser
}

export type TAuthActions = TAuth
// export const checkAuth = () => (dispatch) => {
//     dispatch({
//         type: GET_AUTH_REQUEST
//     });
//     return authApi()
//         .then(() => {
//             dispatch({
//                 type: LOGIN,
//                 payload: true
//             })
//         }).catch(() => {
//             dispatch({
//                 type: LOGOUT,
//                 payload: false
//             })
//         })
// }

export const authLogout = (): AppThunk<Promise<unknown>> => (dispatch: Dispatch) => {
    return logout().then(() => dispatch({
        type: authActions[authActions.LOGOUT]
    })).catch(console.log)
}

export const authApi = (authType: IAuth, {
    email,
    password
}: IAuthData): AppThunk<Promise<unknown>> => (dispatch: Dispatch) => {
    dispatch({
        type: authActions[authActions.GET_AUTH_REQUEST]
    });
    return auth(authType, {email, password})
        .then((userData) => {
            return dispatch({
                type: authActions[authActions.LOGIN],
                payload: userData
            })
        }).catch(() => {
            return dispatch({
                type: authActions[authActions.LOGOUT],
                payload: {}
            })
        })
}