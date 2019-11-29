import React from "react";

function BreakInterval(props) {
    function decreaseCounter() {
        if (props.breakInterval === 1) {
            return;
        }
        props.decreaseBreak();
    }
    function increaseCounter() {
        if (props.breakInterval === 60) {
            return;
        }
        props.increaseBreak();
    }

    return (
        <section>
            <div class="break">
                <h4>Temps de Pause</h4>
                <button
                    disabled={props.isPlay === true ? "disabled" : ""}
                    onClick={decreaseCounter}>
                    -
                </button>
                <p>{props.breakInterval}</p>
                <button
                    disabled={props.isPlay === true ? "disabled" : ""}
                    onClick={increaseCounter}>
                    {" "}
                    +{" "}
                </button>
            </div>
        </section>
    );
}
export default BreakInterval;
