import React from "react";

import "../App.css";
import BreakInterval from "./breakinterval";
import SessionLength from "./sessionlength";
import Timer from './timer.js';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            breakLength: 5,
            sessionLength: 25,
            TimerMinute: 25,
        };
    }
    render() {
        return (
            <main>
                <h2>Pomodorow</h2>
                <BreakInterval breakInterval={this.state.breakLength} />
                <SessionLength sessionLength={this.state.sessionLength} />
            </main>
        );
    }
}

export default App;
