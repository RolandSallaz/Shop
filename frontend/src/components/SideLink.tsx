import './Sidelink.scss';
import {Link, NavLink} from "react-router-dom";

type Props = {
    link: string,
    src: string,
    text: string
};

export function SideLink({link, src, text}: Props) {
    return (
        <NavLink to={link} className={({isActive}) => `sidebar-link ${isActive ? "sidebar-link_active" : ""}`}>
            <img src={src} alt={'Sidebar icon'} className={'sidebar-link__image'}/>
            <p className={'sidebar-link__text'}>{text}</p>
        </NavLink>
    );
};