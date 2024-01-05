import {useState} from "react";
import "./App.scss";
import {Sidebar} from "./Sidebar";
import {Header} from "./Header";
import {Route, Routes} from "react-router-dom";
import {Main} from "./Main";
import {Stats} from "./Stats";
import {Orders} from "./Orders";
import {Admin} from "./Admin";
import {AuthPopup} from "./AuthPopup";
import {IAuth} from "../utils/types";

function App() {
    const [count, setCount] = useState(0);
    const [authPopupData, setAuthPopupData] = useState<{ isOpened: boolean, type: IAuth }>({
        isOpened: false,
        type: 'register'
    });

    function closeAuthPopup() {
        setAuthPopupData({...authPopupData, isOpened: false});
    }

    function handleOpenLoginPopup() {
        setAuthPopupData({isOpened: true, type: 'login'})
    }

    function handleOpenRegisterPopup() {
        setAuthPopupData({isOpened: true, type: 'register'})
    }

    return (
        <>
            <Sidebar/>
            <div className={'main-container'}>
                <Header onOpenRegister={handleOpenRegisterPopup} onOpenLogin={handleOpenLoginPopup}/>
                <Routes>
                    <Route path={'/'} element={<Main/>}/>
                    <Route path={'/orders'} element={<Orders/>}/>
                    <Route path={'/stats'} element={<Stats/>}/>
                    <Route path={'/Admin'} element={<Admin/>}/>
                </Routes>
            </div>
            <AuthPopup onCloseClick={closeAuthPopup} isOpened={authPopupData.isOpened} type={authPopupData.type}/>
        </>
    );
}

export default App;
