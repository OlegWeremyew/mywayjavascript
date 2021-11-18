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

let messageData = [
    {id: 1, message: "Hi"},
    {id: 2, message: "Hello? how are you"},
    {id: 3, message: "You"},
    {id: 4, message: "Yeap"},
    {id: 5, message: "me"},
    {id: 6, message: "Melon is yellow"},
];

const Dialogs = (props) => {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
            </div>
            <div className={c.messages}>
                <Message message={messageData[0].message} id={messageData[0].id} />
                <Message message={messageData[1].message} id={messageData[1].id} />
                <Message message={messageData[2].message} id={messageData[2].id} />
                <Message message={messageData[3].message} id={messageData[3].id} />
                <Message message={messageData[4].message} id={messageData[4].id} />
                <Message message={messageData[5].message} id={messageData[5].id} />
            </div>
        </div>
    );
};

export default Dialogs;