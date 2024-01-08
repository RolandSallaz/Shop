import './AuthPopup.scss'
import {ChangeEvent, SyntheticEvent, useState} from "react";
import {IAuth, IAuthData} from "../utils/types";
import {checkEmail} from "../utils/Api";
import {authApi} from "../services/actions/auth";
import {useDispatch} from "../services/store";
import {TailSpin} from "react-loader-spinner";

type Props = {
    isOpened: boolean,
    onCloseClick: () => void,
    type: IAuth
};

type TEmailCheck = {
    status: boolean,
    message: string
}

export function AuthPopup({onCloseClick, isOpened, type}: Props) {
    const [inputData, setInputData] = useState<IAuthData>({email: '', password: ''})
    const [emailCheck, setEmailCheck] = useState<TEmailCheck>({status: false, message: ''})
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const dispatch = useDispatch();

    function onBackgroundClick(e: SyntheticEvent) {
        if (e.target == e.currentTarget) {
            onCloseClick();
        }
    }

    function handleSubmit(e: SyntheticEvent) {
        e.preventDefault()
        dispatch(authApi(type, inputData)).then(() => {
            onCloseClick();
        });
    }

    function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        if (name == 'email' && type == 'register' && target.validity.valid == true) {
            setIsLoading(true);
            checkEmail({email: value}).then(() => {
                setEmailCheck({status: true, message: 'Емейл доступен'})
            }).catch((err) => {
                console.log(err)
                setEmailCheck({status: false, message: 'Емейл недоступен'})
            }).finally(() => setIsLoading(false))
        }
        setInputData({...inputData, [name]: value});
    }

    return isOpened && (
        <div className={'auth-popup'} onClick={onBackgroundClick}>
            <form className={'auth-form'} onSubmit={handleSubmit}>
                <h2 className={'auth-form__heading'}>{type == 'register' ? 'Регистрация' : 'Вход'}</h2>
                <label
                    className={`auth-form__email-check ${emailCheck.status ? 'auth-form__email-check_status_true' : 'auth-form__email-check_status_false'}`}>{
                    isLoading ? (
                            <TailSpin
                                visible={true}
                                height="30"
                                width="30"
                                color="#fff"
                                ariaLabel="tail-spin-loading"
                                radius="1"
                                wrapperStyle={{}}
                                wrapperClass=""
                            />
                        ) :
                        (type == 'register' && emailCheck.message)}
                </label>
                <input className={'auth-form__input input'} placeholder={'Емейл'} name={'email'}
                       onChange={handleInputChange} type={'email'}/>
                <input className={'auth-form__input input'} placeholder={'Пароль'} name={'password'}
                       onChange={handleInputChange} type={'password'}/>
                <button className={'auth-form__submit-button button'} disabled={!emailCheck.status && type == 'register'}
                        type={'submit'}>{type == 'register' ? 'Зарегистрироваться' : 'Войти'}</button>
            </form>
        </div>
    );
};