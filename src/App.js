import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {LoginContainer} from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/AppReducer";
import Preloader from "./common/Preloader/Preloader";

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <main className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>

                        <Route path="/profile" element={<ProfileContainer/>}>
                            <Route path=":userId" element={<ProfileContainer/>}/>
                        </Route>

                        <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                        <Route path="/users/*" element={<UsersContainer/>}/>
                        <Route path="/login" element={<LoginContainer/>}/>
                        <Route path="/news/*" element={<News/>}/>
                        <Route path="/music/*" element={<Music/>}/>
                        <Route path="/setting/*" element={<Settings/>}/>

                    </Routes>
                </div>
            </main>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
})

export const AppContainer = connect(mapStateToProps, {
    initializeApp
})(App);
