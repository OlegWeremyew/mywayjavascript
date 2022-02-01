import React from 'react';
import c from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {AddMessageFormRedux} from "./AddMessageForm/AddMessageForm";

export const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} img={d.img}/>)
    let messagesElements = state.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>)

    const addNewMessageChange = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div>
            <div className={c.dialogs}>
                <div className={c.dialogItems}>
                    {dialogsElements}
                </div>
                <div className={c.messages}>
                    {messagesElements}
                </div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessageChange}/>
        </div>
    );
};

