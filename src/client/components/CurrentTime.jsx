import React from 'react';
import '../styles/styles.css';

function currTime() {
    let dateString = new Date().toTimeString();
    let newDateString = "";
    let hour = parseInt(dateString.substr(0, 2));
    if (hour >= 12) {
        hour = hour - 12;
        newDateString = ("0" + hour).slice(-2) + dateString.substr(2, 7) + "PM";
    } else {
        newDateString = ("0" + hour).slice(-2) + dateString.substr(2, 7) + "AM";
    }
    document.getElementById('currTime').innerHTML = newDateString;
}

const CurrentTime = () => {
    return (
        <div id="currTimeDiv">
            <fieldset>
                <legend>Time</legend>
                <p id="currTime">{setInterval(currTime, 1000)}</p>
            </fieldset >
        </div >
    )
}

export default CurrentTime;