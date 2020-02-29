import React from 'react';
import '../styles/styles.css';

function timeFormatterAMPM() {
    document.getElementById('currTime').innerHTML = new Date().toLocaleTimeString();
}

const CurrentTime = () => {
    return (
        <div id="currTimeDiv">
            <fieldset>
                <legend>Time</legend>
                <p id="currTime">{setInterval(timeFormatterAMPM, 1000)}</p>
            </fieldset >
        </div >
    )
}

export default CurrentTime;