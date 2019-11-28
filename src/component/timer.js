import React from "react";
class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            isSession: true,
            timerSecond: 0,
        };
        this.play = this.play.bind(this)
    }
    play(){

    }
    render() {
        return (
            <section>
                    <h4>
                        {this.state.isSession === true ? "Session" : "break"}
                    </h4>
                    <span>{this.props.timerMinute}</span>
                    <span>:</span>
                    <span>
                        {this.state.timerSecond === 0
                            ? "00"
                            : this.state.timerSecond < 10
                            ? `0${this.state.timerSecond}`
                            : this.state.timerSecond}{" "}
                    </span>
                    <section>
                <button onClick={this.play} >Play</button>
                <button onClick={this.stop} >stop</button>
                <button onClick={this.reset} >Refresh</button>

            </section>
            </section>

          
        );
    }
}
export default Timer;
