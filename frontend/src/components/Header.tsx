import './Header.scss';
import {Search} from "./Search";
import {useSelector} from "../services/store";
import {IAuthState} from "../services/reducers/auth";

type Props = {
    onOpenRegister: () => void,
    onOpenLogin: () => void
};

export function Header({onOpenRegister, onOpenLogin}: Props) {
    const auth = useSelector((store): IAuthState => store.auth);
    return (
        <header className={'header'}>
            <div className={'content'}><Search/>
                <div className={'auth'}>
                    {auth.isLoggedIn ?
                        (
                            <>
                                <p className={'auth__user-data'}>{auth.userData.email}</p>
                                <button className={'auth__signout button'}>Выйти</button>
                            </>
                        )
                        :
                        (
                            <>
                                <button className={'auth__button button'} onClick={onOpenLogin}>
                                    Войти
                                </button>
                                <button className={'auth__button button'} onClick={onOpenRegister}>
                                    Зарегистрироваться
                                </button>
                            </>
                        )
                    }
                </div>
            </div>
        </header>
    );
}