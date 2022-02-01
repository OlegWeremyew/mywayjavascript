import React from 'react';
import c from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {

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

export default Dialogs;

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"} name={"newMessageBody"} placeholder={"enter your message"}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm({form:"dialogAddMessageForm"})(AddMessageForm)