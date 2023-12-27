import {useState} from "react";
import "./App.scss";
import {Sidebar} from "./Sidebar";
import {Header} from "./Header";
import {Route, Routes} from "react-router-dom";
import {Main} from "./Main";
import {Stats} from "./Stats";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Sidebar/>
            <div className={'main-container'}>
                <Header/>
                <Routes>
                    <Route path={'/'} element={<Main/>}/>
                    <Route path={'/stats'} element={<Stats/>}/>
                </Routes>
            </div>
        </>
    );
}

export default App;
