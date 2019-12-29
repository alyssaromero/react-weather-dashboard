import React from 'react'
import daySunny from '../images2/wi-day-sunny.svg'
import nightClear from '../images2/wi-night-clear.svg'
import rain from '../images2/wi-rain.svg'
import snow from '../images2/wi-snow.svg'
import sleet from '../images2/wi-sleet.svg'
import windy from '../images2/wi-windy.svg'
import fog from '../images2/wi-fog.svg'
import cloudy from '../images2/wi-cloudy.svg'
import dayCloudy from '../images2/wi-day-cloudy.svg'
import nightCloudy from '../images2/wi-night-cloudy.svg'

function WeatherIcon(props) {
    const iconText = ["clear-day", "clear-night", "rain", "snow", "sleet", "windy", "fog", "cloudy", "partly-cloudy-day", "partly-cloudy-night", "default"]
    const iconImage = [daySunny, nightClear, rain, snow, sleet, windy, fog, cloudy, dayCloudy, nightCloudy]

    let i = 0;
    while (props.iconText !== iconText[i]) {
        i++
    }
    const icon = iconImage[i];

    return(
        <div class="weather-icon">
            <img src={icon} alt="weather-icon" width="200" height="200"></img>
        </div>
    )
}

export default WeatherIcon
