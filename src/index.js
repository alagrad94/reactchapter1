import React, { Component } from 'react';
import './index.css';
import ReactDOM from "react-dom"
import Kennel from "./components/Kennel"
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<Kennel />, document.querySelector("#root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
