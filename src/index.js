import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./component/app";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


window.setInterval(function(){

    let sec= +document.getElementById('sec').innerHTML

let min = +document.getElementById('min').innerHTML
document.getElementById('head').innerHTML = `${min}:${sec}`
    /// call your function here
  }, 1000);
