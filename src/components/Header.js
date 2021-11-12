import React from 'react';
import c from "./Header.module.css"
const Header = () => {
    return (
        <header className={c.header}>
            <img src="https://pbs.twimg.com/media/EUmpUI6UEAImg9a.jpg" alt="logo"/>
        </header>
    );
}

export default Header;