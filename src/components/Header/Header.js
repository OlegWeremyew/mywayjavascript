import React from 'react';
import c from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={c.header}>
            <img src="https://pbs.twimg.com/media/EUmpUI6UEAImg9a.jpg" alt="logo"/>
            <div className={c.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>logout</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;