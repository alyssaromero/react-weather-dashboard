import React from 'react'

function Greeting() {

    const date = new Date();
    const currentHour = date.getHours();
    let greeting = " ";

    if (currentHour < 12) {
        greeting = "Good Morning";
    }
    else if (currentHour >=12 && currentHour < 17) {
        greeting = "Good Afternoon";
    }
    else {
        greeting = "Good Evening";
    }

    return (
        <div>
            <h1 className="greeting"> {greeting.toUpperCase()} </h1>
        </div>
    )
}

export default Greeting
