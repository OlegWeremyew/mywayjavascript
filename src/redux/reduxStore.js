import {combineReducers, createStore} from "redux";
import profilePageReducer from "./profilePageReducer";
import dialogsPageReducer from "./dialogsPageReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import {authReducer} from "./auth-reducer";

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

let store = createStore(reducers);

window.store = store

export default store