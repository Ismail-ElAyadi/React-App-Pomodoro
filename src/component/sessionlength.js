import React from "react";
function SessionLength(props) {
    function increaseSession() {
        if (props.sessionLength === 60) {
            return;
        }
        props.increaseSession();
    }

    function decreaseSession() {
        if (props.sessionLength === 1) {
            return;
        }
        props.decreaseSession();
    }
    return (
        <section class="session">
            <div class="break">
            <h4>Temps de travail</h4>

            <button
                disabled={props.isPlay === true ? "disabled" : ""}
                onClick={decreaseSession}>
                -
            </button>
            <p>{props.sessionLength}</p>
            <button
                disabled={props.isPlay === true ? "disabled" : ""}
                onClick={increaseSession}>
                +
            </button>
            </div>
        </section>
    );
}
export default SessionLength;
