import React from 'react';
import c from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={c.dialog + " " + c.active}>
            <NavLink to={path}>{props.name}</NavLink>
            <div>
                <img src={props.img} alt="ava"/>
            </div>
        </div>
    );
};

export default DialogItem;