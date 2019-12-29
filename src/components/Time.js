import React from 'react'

function Time() {

    const date = new Date();

    const currentHour = date.getHours();
    let currentMins = date.getMinutes();

    let timeStamp = "";

    if (currentHour < 12) {
        timeStamp = "AM";
    }

    else {
        timeStamp = "PM";
    }

    if (currentMins < 10) {
        currentMins = "0" + currentMins.toString();
    }

    return (
        <div>
            <h2 className="time">{currentHour%12}:{currentMins} {timeStamp}</h2>
        </div>
    )
}

export default Time
