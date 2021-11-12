import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
    return (
        <main className="app-wrapper">
            <Header />
            <Navbar />
            <Profile />
        </main>
    );
}

export default App;
