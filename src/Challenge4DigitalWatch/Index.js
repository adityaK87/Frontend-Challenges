import React, { useState } from "react";
import './Index.css';

function DisplayTime() {
    const watch = new Date();
    const [time, setTime] = useState(watch);
    let hours = watch.getHours();
    let minutes = watch.getMinutes();
    let seconds = watch.getSeconds();
    var ampm = "AM";

    // this is for 12 hour formate with pm

    if (hours > 12) {
        hours = hours - 12;
        ampm = "PM";
    }

    // for 2 => 02;

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    let update = () => {
        setTime(new Date())
    }
    setInterval(update, 1000)


    // This watch can be made by using =>new Date().toLocaleTimeString()
    // const Time = new Date().toLocaleTimeString();
    // const [time, setTime] = useState(Time);
    // const update = () => {
    //     setTime(new Date().toLocaleTimeString());
    // };
    // setInterval(update, 1000);



    return (
        <div className="time-container">
            <h1 className="digital-watch">Digital Watch</h1>
            <div className="watch-container">
                <h1 className="time hours">{hours}</h1>
                <h1 className="dot">:</h1>
                <h1 className="time minutes">{minutes}</h1>
                <h1 className="dot">:</h1>
                <h1 className="time  seconds">{seconds} </h1>
                <span className="ampm">{ampm}</span>
            </div>
            {/* <div>
                {Time}
            </div> */}
        </div>
    );
}

export default DisplayTime;