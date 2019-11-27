import React from "react";
class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            isSession: true,
            timerSecond: 0,
        };
    }
    render() {
        return (
            <section>
                <section>
                    <h4>
                        {" "}
                        {this.PaymentResponse.isSession === true
                            ? "Session"
                            : "break"}
                    </h4>
                    <span>{this.props.timerMinute}</span>
                    <span>:</span>
                    <span>{this.state.timerSecond}</span>
                </section>
            </section>
        );
    }
}
export default Timer;
