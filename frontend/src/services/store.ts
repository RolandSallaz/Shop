import {applyMiddleware, createStore} from "redux";

import rootReducer from './reducers';
import {TypedUseSelectorHook, useDispatch as dispatchHook, useSelector as selectorHook} from "react-redux";
import {thunk, ThunkAction, ThunkDispatch} from "redux-thunk";
import {TAuthActions} from "./actions/auth";

export type RootState = ReturnType<typeof rootReducer>;
const store = createStore(
    rootReducer, applyMiddleware(thunk)
)
export type TApplicationActions = TAuthActions

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    TApplicationActions
    >;

export type AppDispatch = ThunkDispatch<RootState, never, TApplicationActions>;

export const useDispatch = () => dispatchHook<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store;