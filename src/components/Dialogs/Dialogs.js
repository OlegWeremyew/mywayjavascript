import React from 'react';
import c from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogItems}>
                <div className={c.dialog + " " +c.active}>
                    <NavLink to="/dialogs/1">Oleg</NavLink>
                </div>
                <div className={c.dialog}>
                    <NavLink to="/dialogs/2">Homa</NavLink>
                </div>
                <div className={c.dialog}>
                    <NavLink to="/dialogs/3">Diana</NavLink>
                </div>
                <div className={c.dialog}>
                    <NavLink to="/dialogs/4">Fat cat</NavLink>
                </div>
                <div className={c.dialog}>
                    <NavLink to="/dialogs/5">Alena</NavLink>
                </div>
                <div className={c.dialog}>
                    <NavLink to="/dialogs/6">Igor</NavLink>
                </div>
            </div>
            <div className={c.messages}>
                <div className="{c.message}">Hi</div>
                <div className="{c.message}">Ohohoh</div>
                <div className="{c.message}">beer</div>
            </div>
        </div>
    );
}

export default Dialogs;