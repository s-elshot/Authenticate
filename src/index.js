import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from "react-router-dom";
import AuthContextProvider from "./context/AuthContext";
import UserContextProvider from "./context/UserContext";


ReactDOM.render(
    <React.StrictMode>
        <Router>
            <AuthContextProvider>
            <UserContextProvider>
                <App/>
            </UserContextProvider>
            </AuthContextProvider>

        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
