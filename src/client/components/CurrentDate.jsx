import React from 'react';
import '../styles/styles.css';

const CurrentTime = () => {
    return (
        <div id="currDateDiv">
            <fieldset>
                <legend>Date</legend>
                <p>{new Date().toLocaleDateString("en-GB")}</p>
            </fieldset >
        </div >
    )
}

export default CurrentTime;