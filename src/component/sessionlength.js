import React from 'react';
function SessionLength(props){

    function increaseSession(){
if (props.sessionLength===60){
    return;}
    props.increaseSession();

    }


    function decreaseSession(){
        if (props.sessionLength===1){
            return;

        }
        props.decreaseSession(); }
    return(
        <section>
            <h4>Session Length</h4>
            <button onClick = {decreaseSession}>down</button>
            <p>{props.sessionLength}</p>
            <button onClick = {increaseSession} >up</button>
        </section>
    )
}
export default SessionLength