import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost, updateNewPostText} from "./redux/state";

let rerenderEnteireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={store._state}
                addPost={store.addPost}
                updateNewPostText={store.updateNewPostText}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEnteireTree(state);

subscribe(rerenderEnteireTree)

reportWebVitals();
