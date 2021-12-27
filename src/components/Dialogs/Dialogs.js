import React from 'react';
import c from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} img={d.img}/>)
    let messagesElements = state.messages.map(m => <Message message={m.message} id={m.id}/>)
    let newMessageBody = state.newMessageBody

    const onSendMessageClick = () => {
        props.sendMessage()
    }

    const onNewMessageChange = (e) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
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
            <div>
                <div>
                    <textarea value={newMessageBody} onChange={onNewMessageChange} placeholder="enter your message"/>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;