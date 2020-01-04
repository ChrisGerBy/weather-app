import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { FormattedMessage } from "react-intl";

import CurrentConditions from '../CurrentConditions';
import Forecast from "../Forecast";
import TemperatureScale from '../TemperatureScale';
import { getDate, getTime, convertTemperature, createWeatherIconLink, formatTimeZone } from "../../helpers/helper";
import SearchLocation from "../SearchLocation";

import './Weather.styles.css';
import messages from './messages';
import NoDataView from "../NoDataView";

require('dotenv').config();

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationData: {
        city: '',
        locationKey: null,
        country: '',
        geoPosition: {},
        region: '',
        timeZone: '',
      },
      currentConditions: {},
      temperatureScale: 'celsium',
      forecastData: [],
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
    });

    const { forecastData } = this.state;

    if(forecastData.length) {
      this.getForecastFor5Days();
    }
  };

  getWeatherData = async () => {
    const { locationKey } = this.state.locationData;
    const { language } = this.props;
    const { city } = this.state.locationData;
    const currentConditionsResponse = await fetch(`https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${process.env.REACT_APP_ACCUWEATHER_API_KEY}&language=${language}`)
    const currentConditions = await currentConditionsResponse.json();
    if (currentConditionsResponse.status === 200 && currentConditions.length) {
      this.handleWeatherResponse(city, currentConditions);

    } else {
      const currentConditionsResponseEN = await fetch(`https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${process.env.REACT_APP_ACCUWEATHER_API_KEY}&language=en`)
      const currentConditionsEN = await currentConditionsResponseEN.json();
      if (currentConditionsResponseEN.status === 200 && currentConditionsEN.length) {
        this.handleWeatherResponse(city, currentConditionsEN);
      }
    }
  };

  setLocationDataState = (city, data) => {
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
    });
    window.localStorage.setItem(`city`, city);
    this.getWeatherData();
  };


  searchLocation = async (city, language) => {
    const response = await fetch(`https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${process.env.REACT_APP_ACCUWEATHER_API_KEY}&q=${city}&language=${language}`);
    const cityData = await response.json();
    if (response.status === 200 && cityData.length){
        this.setLocationDataState(city, cityData);
    } else {
      // Try default search with english language
      const responseEn = await fetch(`https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${process.env.REACT_APP_ACCUWEATHER_API_KEY}&q=${city}&language=en`);
      const cityDataEn = await responseEn.json();
      if (response.status === 200 && cityDataEn.length) {
        this.setLocationDataState(city, cityDataEn);
      } else {
        window.localStorage.removeItem(`city`);
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

  getCityName = async (data) => {
    const { latitude, longitude } = data.coords;
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=1e58aa5d387545bd905c7a06768ce2be`;
    const response = await fetch(url);
    const responseData =await response.json();
    if (responseData.results.length === 1) {
      const currentCity = responseData.results[0].components.city;
      this.setState({ locationData: { city: currentCity }})
      window.localStorage.setItem('city', currentCity);
      window.localStorage.setItem('language', 'en');
      this.searchLocation(currentCity, 'en');
    }
  };

  componentDidMount() {
    const { language } = this.props;
    const city = window.localStorage.getItem(`city${language}`);
    if (city) {
      const { locationData } = this.state;
      this.setState({ locationData: {
        ...locationData,
        city
      } }, () => this.searchLocation(city, language));
    } else {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.getCityName);
      } else {
       console.log("Geolocation is not supported by this browser.");
      }
    }
  }

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

    this.setState({ forecastData: data });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.language !== prevProps.language) {
      const city = window.localStorage.getItem(`city${this.props.language}`);
      if (city) {
        this.searchLocation(city, this.props.language);
      }
    }
  }


  render() {
    const { currentConditions, temperatureScale, locationData, forecastData, locationFound } = this.state;
    const { country, city } = locationData;
    const { language } = this.props;


    return (
      <div className="weather">
        <SearchLocation searchLocation={() => this.searchLocation(city, language)} cityOnChange={(e) => this.cityOnChange(e)}/>
        {!locationFound && <NoDataView />}
        {locationFound && !!Object.entries(currentConditions).length &&
          <>
            <CurrentConditions
              city={currentConditions.currentCity}
              country={country}
              currentConditions={currentConditions}
              temperatureScale={temperatureScale}
              onChageTemperatureScale={this.onChageTemperatureScale}
              showLocationInfo={this.showLocationInfo}
            />
            <Button variant="contained" color="primary" className="weather_data_forecast" onClick={this.getForecastFor5Days}>
              <FormattedMessage {...messages.getForecast} />
            </Button>
          </>
        }
        {locationFound && !!forecastData.length &&
        <>
          <TemperatureScale changeTemperatureScale={this.onChageTemperatureScale} temperatureScale={temperatureScale}/>
          <Forecast forecast={forecastData} temperatureScale={temperatureScale} />
        </>
        }
        </div>
    );
  }
}

export default Weather;
