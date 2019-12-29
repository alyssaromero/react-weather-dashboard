import React from 'react'
import DarkSkyApi from 'dark-sky-api'
import WeatherIcon from './WeatherIcon'

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            currentWeather: []
        };
    }

    componentDidMount() {

        DarkSkyApi.apiKey = 'dd3e07cae81823ecf0a2c1fd42bf095c';
        DarkSkyApi.proxy = false;
        DarkSkyApi.units = 'us'; // default 'us'
        DarkSkyApi.language = 'en'; // default 'en'
        DarkSkyApi.postProcessor = (item) => { // default null;
          item.day = item.dateTime.format('ddd');
          return item;
        }

        DarkSkyApi.loadCurrent()
        .then(result =>
            this.setState({
                isLoaded: true,
                currentWeather: result
            }));
  }

  render() {
      const { error, isLoaded, currentWeather } = this.state;
      console.log(currentWeather)

      if (error) {
          return <div>Error</div>
      }
      if (!isLoaded) {
          return <div>Loading... </div>
      } else {
          return (
              <div className="current-weather-card">
                  <WeatherIcon iconText={currentWeather.icon}/>
                  <div className="current-weather-content">
                      <p className="temp"><strong>{currentWeather.temperature}°</strong></p>
                      <p className="summary">{currentWeather.summary}</p>
                  </div>
              </div>
          )
      }
  }
}

export default Weather
