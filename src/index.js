import React from "react"
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import {Container, Row, Col} from 'react-bootstrap'


ReactDOM.render(
    
    <div className="index">
            <h1 className="title">GitHub Profiles</h1>
            <App />

    </div>
, document.getElementById("root"));
