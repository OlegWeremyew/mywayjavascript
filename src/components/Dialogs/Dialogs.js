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
};

const Message = (props) => {

    return (
        <div className="{c.message}">{props.message}</div>
    );
};

let dialogsData = [
    {id: 1, name: "Oleg"},
    {id: 2, name: "Homa"},
    {id: 3, name: "Diana"},
    {id: 4, name: "Fat cat"},
    {id: 5, name: "Alena"},
    {id: 6, name: "Igor"},
];

let messagesData = [
    {id: 1, message: "Hi"},
    {id: 2, message: "Hello? how are you"},
    {id: 3, message: "You"},
    {id: 4, message: "Yeap"},
    {id: 5, message: "me"},
    {id: 6, message: "Melon is yellow"},
];

let dialogsElements = dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
let messagesElements = messagesData.map(m => <Message message={m.message} id={m.id}/>)

const Dialogs = (props) => {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogItems}>
                {dialogsElements}
            </div>
            <div className={c.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;