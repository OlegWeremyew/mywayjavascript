import {combineReducers, createStore} from "redux";
import profilePageReducer from "./profilePageReducer";
import dialogsPageReducer from "./dialogsPageReducer";
import sidebarReducer from "./sidebarReducer";

let reducers = combineReducers({
    profilePageReducer: profilePageReducer,
    dialogsPageReducer: dialogsPageReducer,
    sidebarReducer: sidebarReducer
})

let store = createStore(reducers)

export default store