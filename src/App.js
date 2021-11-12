import React from 'react';
import './App.css';
import Header from "./components/Header";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";

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
