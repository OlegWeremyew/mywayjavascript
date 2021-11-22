import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
    return (
        <main className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/dialogs/*" element={<Dialogs
                        state={props.state.dialogsPage}/>}/>
                    <Route path="/profile/*" element={<Profile
                        state={props.state.profilePage}
                        addPost={props.addPost}/>}/>
                    <Route path="/news/*" element={<News/>}/>
                    <Route path="/music/*" element={<Music/>}/>
                    <Route path="/setting/*" element={<Settings/>}/>
                </Routes>
            </div>
        </main>
    );
}

//24-выпуск
export default App;
