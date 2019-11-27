import React from 'react';
function SessionLength(props){
    return(
        <section>
            <button>down</button>
            <p>{props.sessionLength}</p>
            <button>up</button>
        </section>
    )
}
export default SessionLength