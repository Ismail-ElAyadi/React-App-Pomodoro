import React from "react";
import "../App.css";
import BreakInterval from "./breakinterval";
import SessionLength from "./sessionlength";
import Timer from "./timer";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            breakLength: 5,
            sessionLength: 25,
            timerMinute: 25,
        };
        this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this);
        this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this);
    }
    onIncreaseBreakLength() {
        this.setState(prevState => ({
            breakLength: prevState.breakLength + 1,
        }));
    }

    onDecreaseBreakLength() {
        this.setState(prevState => ({
            breakLength: prevState.breakLength - 1,
        }));
    }
    render() {
        return (
            <main>
                <section>
                    <h2>Pomodorow x</h2>
                    <BreakInterval
                        breakInterval={this.state.breakLength}
                        increaseBreak={this.onIncreaseBreakLength}
                        decreaseBreak={this.onDecreaseBreakLength}
                    />
                    <SessionLength sessionLength={this.state.sessionLength} />
                </section>
                <Timer timerMinute={this.state.timerMinute} />
            </main>
        );
    }
}

export default App;
