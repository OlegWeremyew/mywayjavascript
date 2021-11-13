import React from 'react';
import c from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={c.dialog + " " + c.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {

    return (
        <div className="{c.message}">{props.message}</div>
    );
}


const Dialogs = (props) => {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogItems}>
                <DialogItem name="Oleg" id="1"/>
                <DialogItem name="Homa" id="2"/>
                <DialogItem name="Diana" id="3"/>
                <DialogItem name="Fat cat" id="4"/>
                <DialogItem name="Alena" id="5"/>
                <DialogItem name="Igor" id="6"/>
            </div>
            <div className={c.messages}>
                <Message message='Hi'/>
                <Message message='Hello? how are you'/>
                <Message message='You'/>
                <Message message='me'/>
                <Message message='Melon is yellow'/>
            </div>
        </div>
    );
}

export default Dialogs;