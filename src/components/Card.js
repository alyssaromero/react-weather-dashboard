import React from 'react'
import Weather from './Weather'
import PredictedWeather from './PredictedWeather'

class Card extends React.Component {
    render() {
        const date = new Date();
        const weekDays = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
        const currentMonth = date.getMonth()+1;
        const currentDate = date.getDate();
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

        let computedIndex = parseInt(this.props.index) + parseInt(date.getDay());
        console.log(computedIndex)

        if (computedIndex > 6) {
            computedIndex = computedIndex-7;
        }

        if (this.props.index == 0) {
            const day = weekDays[computedIndex];
            return (
                <div className="current-forecast-container d-flex">
                    <div className="today-forecast-card">
                        <div className="card-header d-flex">
                            <p className="bold">TODAY</p>
                            <p className="sub-text">/{day} {currentMonth}.{currentDate}</p>
                        </div>
                        <div className="today-weather">
                            <PredictedWeather weekDay={computedIndex} />
                        </div>
                    </div>
                    <div className="today-forecast-card">
                        <div className="card-header d-flex">
                            <p className="bold">CURRENT</p>
                            <p className="sub-text">/{currentHour%12}:{currentMins} {timeStamp}</p>
                        </div>
                        <div className="today-weather">
                            <Weather />
                        </div>
                    </div>
                </div>
            );
        }

        else {
            const day = weekDays[computedIndex];
            console.log(computedIndex);

            return (
                <div className="future-forecast-container d-flex">
                    <div className="future-forecast-card">
                        <div className="card-header d-flex">
                            <p className="bold">{day}</p>
                            <p className="sub-text">/{currentMonth}.{currentDate+parseInt(this.props.index)}</p>
                        </div>
                        <div className="card-weather">
                            <PredictedWeather weekDay={computedIndex}/>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Card
