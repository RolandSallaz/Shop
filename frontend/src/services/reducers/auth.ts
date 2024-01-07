import {IUser} from "../../utils/types";
import {authActions, TAuthActions} from "../actions/auth";

export interface IAuthState {
    isLoggedIn: boolean,
    userData: IUser,
    isLoading: boolean
}

const initialState: IAuthState = {
    isLoggedIn: false,
    userData: {id: 0, email: ''},
    isLoading: false
}

export function authReducer(state = initialState, action: TAuthActions): IAuthState {
    switch (action.type) {
        case authActions[authActions.LOGIN]: {
            return {
                ...state,
                isLoggedIn: true,
                userData: action.payload,
                isLoading: false
            }
        }
        case authActions[authActions.LOGOUT]: {
            return {
                ...state,
                isLoggedIn: false,
                userData: initialState.userData,
                isLoading: false
            }
        }
        case authActions[authActions.GET_AUTH_REQUEST]: {
            return {
                ...state,
                isLoading: true
            }
        }
        default: {
            return state
        }
    }
}