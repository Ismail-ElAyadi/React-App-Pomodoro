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
        this.onIncreaseSessionLength = this.onIncreaseSessionLength.bind(this);
        this.onDecreaseSessionLength = this.onDecreaseSessionLength.bind(this);
        this.onToggleInterval = this.onToggleInterval.bind(this);
        this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind(this);
    }
    onIncreaseBreakLength() {
        this.setState(prevState => ({
            breakLength: prevState.breakLength + 1,
        }));
    }

    onDecreaseBreakLength() {
        this.setState(prevState => ({
            breakLength: prevState.breakLength - 1,
            timerMinute: prevState.breakLength - 1,
        }));
    }

    onIncreaseSessionLength() {
        this.setState(prevState => ({
            sessionLength: prevState.sessionLength + 1,
            timerMinute: prevState.sessionLength + 1,
        }));
    }

    onDecreaseSessionLength() {
        this.setState(prevState => ({
            sessionLength: prevState.sessionLength - 1,
            timerMinute: prevState.sessionLength - 1,
        }));
    }
    onUpdateTimerMinute() {
        this.setState(prevState => {
            return {
                timerMinute: prevState.timerMinute - 1,
            };
        });
    }
    onToggleInterval(isSession) {
        if (isSession) {
            this.setState({
                timerMinute: this.state.sessionLength,
            });
        } else {
            this.setState({
                timerMinute: this.state.breakLength,
            });
        }
    }
    render() {
        return (
            <main>
                <section>
                    <h2>Pomodorow</h2>
                    <BreakInterval
                        breakInterval={this.state.breakLength}
                        increaseBreak={this.onIncreaseBreakLength}
                        decreaseBreak={this.onDecreaseBreakLength}
                    />
                    <SessionLength
                        sessionLength={this.state.sessionLength}
                        increaseSession={this.onIncreaseSessionLength}
                        decreaseSession={this.onDecreaseSessionLength}
                    />
                </section>
                <Timer
                    timerMinute={this.state.timerMinute}
                    breakLength={this.state.breakLength}
                    updateTimerMinute={this.onUpdateTimerMinute}
                    toggleInterval={this.onToggleInterval}
                />
            </main>
        );
    }
}

export default App;
