const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY "
const SEND_MESSAGE = "SEND-MESSAGE"

const dialogsPageReducer = (state, action) => {

    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageBody = action.body
    } else if (action.type === SEND_MESSAGE) {
        let body = state.newMessageBody
        state.newPostText = ""
        state.messages.push({id: 6, message: body},)
    }

    return state
}