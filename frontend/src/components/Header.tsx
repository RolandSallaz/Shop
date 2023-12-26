import './Header.scss';
import {Search} from "./Search";

type Props = {};

export function Header(props: Props) {
    return (
        <header className={'header'}>
            <div className={'content'}><Search/>
                <div className={'auth'}>
                    <button className={'auth__button'}>Войти</button>
                    <button className={'auth__button'}>Зарегистрироваться</button>
                </div>
            </div>
        </header>
    );
}