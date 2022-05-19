import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

const dialogs = [
    {id: 1, name: 'Valery'},
    {id: 2, name: 'Dmitry'},
    {id: 3, name: 'Kseniya'},
    {id: 4, name: 'Vitaliy'},
    {id: 5, name: 'Vladislav'},
    {id: 6, name: 'Eugene'}
]

const messages = [
    {id: 1, message: 'Hello wooooah here!'},
    {id: 2, message: 'I don’t care what you think about me. I don’t think about you at all.'},
    {id: 3, message: 'Life is a series of choices.'},
    {id: 4, message: 'Today is the best day.'},
    {id: 5, message: 'Love is in the air.'},
    {id: 6, message: 'Bla bla bla'}
]

const posts = [
    {id: 1, message: 'Hello world!', likesCount: 23},
    {id: 2, message: 'React, Redux.. you will know them cool!', likesCount: 15},
    {id: 3, message: 'Each failure is the next success!', likesCount: 100},
    {id: 4, message: 'Wake me up when September ends..', likesCount: 7}
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <App posts={posts} dialogs={dialogs} messages={messages}/>
        </React.StrictMode>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
