import React, { Component } from 'react';
import CurrentConditions from '../CurrentConditions';
import Forecast from "../Forecast";
import { getDate, getTime, convertTemperature, createWeatherIconLink, formatTimeZone } from "../../helpers/helper";
import SearchLocation from "../SearchLocation";

import './Weather.styles.css';
import NoDataView from "../NoDataView";

require('dotenv').config();

class Weather extends Component {
  constructor(props) {
    super(props);
    const city = window.localStorage.getItem('city');
    this.state = {
      locationData: {
        city,
        locationKey: null,
        country: '',
        geoPosition: {},
        region: '',
        timeZone: '',
      },
      currentConditions: {},
      showCurrentConditions: true,
      temperatureScale: 'celsium',
      forecastData: [],
      showForecast: false,
      locationFound: true,
    };
  }

  cityOnChange = (e) => {
    const city = e.target.value;
    const { locationData } = this.state;
    this.setState({ locationData: {
      ...locationData,
      city
    } });
  };

  handleWeatherResponse = (city, data) => {
    this.setState({
      currentConditions: {
        ...data[0],
        currentCity: city,
      },
      showCurrentConditions: true,
      showForecast: false,
    });
  };

  getWeatherData = async () => {
    const { locationKey } = this.state.locationData;
    const { language } = this.props;
    const { city } = this.state.locationData;
    const currentConditionsResponse = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${process.env.REACT_APP_ACCUWEATHER_API_KEY}&language=${language}`)
    const currentConditions = await currentConditionsResponse.json();
    if (currentConditionsResponse.status === 200 && currentConditions.length) {
      this.handleWeatherResponse(city, currentConditions);

    } else {
      const currentConditionsResponseEN = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${process.env.REACT_APP_ACCUWEATHER_API_KEY}&language=en`)
      const currentConditionsEN = await currentConditionsResponseEN.json();
      if (currentConditionsResponseEN.status === 200 && currentConditionsEN.length) {
        this.handleWeatherResponse(city, currentConditionsEN);
      }
    }
  };

  setLocationDataState = (data) => {
    this.setState({
      locationData: {
        city: data[0].LocalizedName,
        locationKey: data[0].Key,
        country: data[0].Country.LocalizedName,
        geoPosition: {
          latitude: data[0].GeoPosition.Latitude,
          longitude: data[0].GeoPosition.Longitude,
        },
        region: data[0].Region.LocalizedName,
        timeZone: `${data[0].TimeZone.Name} ${formatTimeZone(data[0].TimeZone.GmtOffset)}`,
      },
      locationFound: true,
      showCurrentConditions: true,
      showForecast: false,
    });
    this.getWeatherData();
  };

  searchLocation = async () => {
    const { language } = this.props;
    const { city } = this.state.locationData;
    const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${process.env.REACT_APP_ACCUWEATHER_API_KEY}&q=${city}&language=${language}`);
    const cityData = await response.json();
    if (response.status === 200 && cityData.length){
      window.localStorage.setItem(`city`, city);
      window.localStorage.setItem(`language`, language);
        this.setLocationDataState(cityData);
    } else {
      // Try default search with english language
      const responseEn = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${process.env.REACT_APP_ACCUWEATHER_API_KEY}&q=${city}&language=en`);
      const cityDataEn = await responseEn.json();
      if (response.status === 200 && cityDataEn.length) {
        window.localStorage.setItem(`city`, city);
        window.localStorage.setItem(`language`, 'en');
        this.setLocationDataState(cityDataEn);
      } else {
        window.localStorage.clear();
        this.setState({ locationFound: false })
      }

    }
  };

  onChageTemperatureScale = () => {
    const { temperatureScale } = this.state;
    this.setState({
      temperatureScale: temperatureScale === 'celsium' ? 'fahrenheit' : 'celsium',
    })
  };

  showLocationInfo = () => {
    const { locationData } = this.state;
    const { showLocationInfo } = this.props;
    showLocationInfo(locationData);
  };

  getForecastFor5Days = async () => {
    const { locationKey } = this.state.locationData;
    const { language } = this.props;
    const response = await fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${process.env.REACT_APP_ACCUWEATHER_API_KEY}&language=${language}`);
    const forecastData = await response.json();

    const data = forecastData.DailyForecasts.map(date => {
      return {
        date: getDate(date.Date),
        time: getTime(date.Date),
        temperature: {
          fromF: date.Temperature.Minimum.Unit === 'F' ? `${date.Temperature.Minimum.Value}` : convertTemperature(date.Temperature.Minimum.Value, 'fahrenheit'),
          fromC: date.Temperature.Minimum.Unit === 'C' ? `${date.Temperature.Minimum.Value}` : convertTemperature(date.Temperature.Minimum.Value,'celsium'),
          toF: date.Temperature.Maximum.Unit === 'F' ? `${date.Temperature.Maximum.Value}` : convertTemperature(date.Temperature.Maximum.Value, 'fahrenheit'),
          toC: date.Temperature.Maximum.Unit === 'C' ? `${date.Temperature.Maximum.Value}` : convertTemperature(date.Temperature.Maximum.Value,'celsium'),
        },
        dayIcon: {
          picture: createWeatherIconLink(date.Day.Icon),
          text: date.Day.IconPhrase,
        },
        nightIcon: {
          picture: createWeatherIconLink(date.Night.Icon),
          text: date.Night.IconPhrase,
        }
      }
    });

    this.setState({
      forecastData: data,
      showForecast: true,
      showCurrentConditions: false,
    });
  };

  componentDidMount() {
    const { language } = this.props;
    const { city } = this.state.locationData;

    if(city && language) {
      const { locationData } = this.state;
      this.setState({ locationData: {
        ...locationData,
        city,
      }});
      this.searchLocation();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.language !== prevProps.language) {
      const city = window.localStorage.getItem(`city${this.props.language}`);
      if (city) {
        this.searchLocation();
      }
    }
  }

  render() {
    const { currentConditions, temperatureScale, locationData, forecastData, locationFound, showCurrentConditions, showForecast } = this.state;
    const { country, city } = locationData;

    return (
      <div className="weather">
        <SearchLocation searchLocation={this.searchLocation} cityOnChange={(e) => this.cityOnChange(e)} getForecastFor5Days={this.getForecastFor5Days}/>
        {!locationFound && <NoDataView />}
        {locationFound && showCurrentConditions && !!Object.entries(currentConditions).length &&
        <CurrentConditions
          city={currentConditions.currentCity}
          country={country}
          currentConditions={currentConditions}
          temperatureScale={temperatureScale}
          onChageTemperatureScale={this.onChageTemperatureScale}
          showLocationInfo={this.showLocationInfo}
        />
        }
        {locationFound && showForecast && !!forecastData.length &&
        <Forecast forecast={forecastData} temperatureScale={temperatureScale} city={city} onChageTemperatureScale={this.onChageTemperatureScale}/>
        }
        </div>
    );
  }
}

export default Weather;
