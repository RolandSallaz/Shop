import './Header.scss';
import {Search} from "./Search";

type Props = {
    onOpenRegister: () => void,
    onOpenLogin: () => void
};

export function Header({onOpenRegister,onOpenLogin}: Props) {
    return (
        <header className={'header'}>
            <div className={'content'}><Search/>
                <div className={'auth'}>
                    <button className={'auth__button button'} onClick={onOpenLogin}>Войти</button>
                    <button className={'auth__button button'} onClick={onOpenRegister}>Зарегистрироваться</button>
                </div>
            </div>
        </header>
    );
}