import * as React from 'react';
import './Sidebar.scss';
import {SideLink} from "./SideLink";
import homeImage from "../assets/home.svg";
import statsImage from "../assets/task.svg";
import adminPanelImage from "../assets/dev.svg";
import storeImage from "../assets/store.svg";
import {Footer} from "./Footer";

type Props = {};

export function Sidebar(props: Props) {
    return (
        <div className={'leftSide-container'}>
            <nav className={'sidebar'}>
                <SideLink link={'/'} src={homeImage} text={'Главная'}/>
                <SideLink link={'/orders'} src={storeImage} text={'Мои заказы'}/>
                <SideLink link={'/stats'} src={statsImage} text={'Статистика'}/>
                <SideLink link={'/admin'} src={adminPanelImage} text={'Админ-панель'}/>
            </nav>
            <Footer/>
        </div>
    );
};