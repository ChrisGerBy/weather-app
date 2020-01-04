import React from 'react';
import PropTypes from 'prop-types';

import './Forecast.styles.css';
import { Tooltip } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import TemperatureScale from "../TemperatureScale";

const Forecast = ({ forecast, temperatureScale, city, onChageTemperatureScale }) => (
  <div className="forecast">
    <h2>Forecast for {city}</h2>
    <TemperatureScale changeTemperatureScale={onChageTemperatureScale} temperatureScale={temperatureScale} />
      <div className="forecast__data">
      {forecast.map((day) => (
        <div className="forecast_item" key={day.date}>
          <p className="forecast_item_date">{day.date}</p>
          <div className="forecast_item_icons">
            <div className="forecast_item_temp_block">
              <p><FormattedMessage {...messages.night} /></p>
              <Tooltip title={day.nightIcon.text} interactive arrow>
                <img src={day.nightIcon.picture} alt="night-icon" />
              </Tooltip>
            </div>
            <div className="forecast_item_icons_block">
              <p><FormattedMessage {...messages.day} /></p>
              <Tooltip title={day.dayIcon.text} interactive arrow>
                <img src={day.dayIcon.picture} alt="day-icon" />
              </Tooltip>
            </div>
          </div>
          <div className="forecast_item_temperature">
            <p>{temperatureScale === 'celsium' ? `${day.temperature.fromC} °C` : `${day.temperature.fromF} F`}</p>
            <p>{temperatureScale === 'celsium' ? `${day.temperature.toC} °C` : `${day.temperature.toF} F`}</p>
          </div>

        </div>
      ))}
    </div>
  </div>
);

Forecast.propTypes = {
  forecast: PropTypes.arrayOf(PropTypes.object).isRequired,
  temperatureScale: PropTypes.string.isRequired,
};

export default Forecast;
