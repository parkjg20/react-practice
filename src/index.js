import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import Bind from "./components/bind/Bind";

const root = ReactDOM.createRoot(document.getElementById('root'));
document.getElementById('root').classList = "flex Centralized";

root.render(
    <BrowserRouter>
        {/*<App />*/}
        {/*<Bind />*/}
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
