import React from 'react'
import DarkSkyApi from 'dark-sky-api'
import WeatherIcon from './WeatherIcon'

class PredictedWeather extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            predictedWeather: []
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

        DarkSkyApi.loadForecast()
        .then(result =>
            this.setState({
                isLoaded: true,
                predictedWeather: result.daily.data[this.props.weekDay]
            }));
  }

  render() {
      const { error, isLoaded, predictedWeather } = this.state;
      console.log(predictedWeather)
      const predictedIcon = predictedWeather.icon
      const predictedSummary = predictedWeather.summary
      const maxTemp = predictedWeather.temperatureHigh
      const minTemp = predictedWeather.temperatureLow

      if (error) {
          return <div>Error</div>
      }
      if (!isLoaded) {
          return <div>Loading... </div>
      } else {
          return (
              <div className="predicted-weather-card">
                  <WeatherIcon iconText={predictedIcon}/>
                  <div className="predicted-weather-content">
                      <p className="max-temp"><strong>{maxTemp}°</strong><span className="min-temp">/{minTemp}°</span></p>
                      <p className="summary">{predictedSummary}</p>
                  </div>
                  </div>
          )
      }
  }
}

export default PredictedWeather
