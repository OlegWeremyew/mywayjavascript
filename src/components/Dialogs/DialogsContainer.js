import React from 'react';
import {updateNewMessageBodyCreater, sendMessageCreator} from "../../redux/dialogsPageReducer"
import Dialogs from "./Dialogs";
import {StoreContext} from "../../StoreContext";


const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let state = store.getState().dialogsPage

                    const onSendMessageClick = () => {
                        store.dispatch(sendMessageCreator())
                    }

                    const onNewMessageChange = (body) => {
                        store.dispatch(updateNewMessageBodyCreater(body))
                    }

                    return (
                        <Dialogs
                            updateNewMessageBody={onNewMessageChange}
                            sendMessage={onSendMessageClick}
                            dialogsPage={state}/>
                    )
                }
            }
        </StoreContext.Consumer>
    );
};

export default DialogsContainer;