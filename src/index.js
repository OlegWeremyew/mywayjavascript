import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

let posts = [
    {id: 1, message: "Hi, how are you?'", likesCount: 12},
    {id: 2, message: "I'm great, and you?", likesCount: 7},
];
let messagesData = [
    {id: 1, message: "Hi"},
    {id: 2, message: "Hello? how are you"},
    {id: 3, message: "You"},
    {id: 4, message: "Yeap"},
    {id: 5, message: "me"},
    {id: 6, message: "Melon is yellow"},
];
let dialogsData = [
    {id: 1, name: "Oleg"},
    {id: 2, name: "Homa"},
    {id: 3, name: "Diana"},
    {id: 4, name: "Fat cat"},
    {id: 5, name: "Alena"},
    {id: 6, name: "Igor"},
];

ReactDOM.render(
    <BrowserRouter>
        <App posts={posts}
             messagesData={messagesData}
             dialogsData={dialogsData}
        />
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
