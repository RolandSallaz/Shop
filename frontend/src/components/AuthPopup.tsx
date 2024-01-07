import './AuthPopup.scss'
import {ChangeEvent, SyntheticEvent, useState} from "react";
import {IAuth, IAuthData} from "../utils/types";
import {auth} from "../utils/Api";
import {authApi} from "../services/actions/auth";
import {useDispatch} from "../services/store";

type Props = {
    isOpened: boolean,
    onCloseClick: () => void,
    type: IAuth
};

export function AuthPopup({onCloseClick, isOpened, type}: Props) {
    const [inputData, setInputData] = useState<IAuthData>({email:'',password:''})
    const dispatch = useDispatch();
    function onBackgroundClick(e: SyntheticEvent) {
        if (e.target == e.currentTarget) {
            onCloseClick();
        }
    }

    function handleSubmit(e: SyntheticEvent) {
        e.preventDefault()
        dispatch(authApi(type,inputData)).then(()=>{
            onCloseClick();
        });
    }
    function handleInputChange(e:ChangeEvent<HTMLInputElement>) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        setInputData({...inputData, [name]:value});
    }
    return isOpened && (
        <div className={'auth-popup'} onClick={onBackgroundClick}>
            <form className={'auth-form'} onSubmit={handleSubmit}>
                <h2 className={'auth-form__heading'}>{type == 'register' ? 'Регистрация' : 'Вход'}</h2>
                <input className={'auth-form__input input'} placeholder={'Емейл'} name={'email'} onChange={handleInputChange} type={'email'}/>
                <input className={'auth-form__input input'} placeholder={'Пароль'} name={'password'} onChange={handleInputChange} type={'password'}/>
                <button className={'auth-form__submit-button button'}
                        type={'submit'}>{type == 'register' ? 'Зарегистрироваться' : 'Войти'}</button>
            </form>
        </div>
    );
};