import {useState} from "react";
import "./App.scss";
import {Sidebar} from "./Sidebar";
import {Header} from "./Header";
import {Route, Routes} from "react-router-dom";
import {Main} from "./Main";
import {Stats} from "./Stats";
import {Orders} from "./Orders";
import {Admin} from "./Admin";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Sidebar/>
            <div className={'main-container'}>
                <Header/>
                <Routes>
                    <Route path={'/'} element={<Main/>}/>
                    <Route path={'/orders'} element={<Orders/>}/>
                    <Route path={'/stats'} element={<Stats/>}/>
                    <Route path={'/Admin'} element={<Admin/>}/>
                </Routes>
            </div>
        </>
    );
}

export default App;
