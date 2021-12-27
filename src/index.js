import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/reduxStore";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

let rerenderEnteireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                dispatch={store.dispatch.bind(store)}
                store={store}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEnteireTree(store.getState());

store.subscribe(() => {
    let state = store.getState()
    rerenderEnteireTree(state)
})

reportWebVitals();
