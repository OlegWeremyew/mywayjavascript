import React from 'react';
import {updateNewMessageBodyCreater, sendMessageCreator} from "../../redux/dialogsPageReducer"
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreater(body))
        },
    }
}

const DialogsContainer = compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs)

export default DialogsContainer;