import React from 'react';
import c from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={c.dialog + " " + c.active}>
            <div>
                <img src={props.img} alt="ava"/>
            </div>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

export default DialogItem;