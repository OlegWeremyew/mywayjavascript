import {combineReducers, createStore} from "redux";
import profilePageReducer from "./profilePageReducer";
import dialogsPageReducer from "./dialogsPageReducer";
import sidebarReducer from "./sidebarReducer";

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    sidebar: sidebarReducer
});

let store = createStore(reducers);

window.store = store

export default store