import React from 'react';
import PropTypes from 'prop-types';
import {
  TableContainer, Table, TableBody, TableRow, TableCell, Icon, Tooltip, Button,
} from '@material-ui/core';
import { FormattedMessage } from 'react-intl';
import { getTime, getDate, createWeatherIconLink } from '../../helpers/helper';

import './CurrentConditions.styles.css';
import messages from './messages';

const CurrentConditions = ({
  currentConditions, city, temperatureScale, onChageTemperatureScale, country, showLocationInfo,
}) => {
  const {
    WeatherText, LocalObservationDateTime, Temperature, WeatherIcon,
  } = currentConditions;

  return (
    <TableContainer className="weather_data">
      <Table>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row"><FormattedMessage {...messages.location} /></TableCell>
            <TableCell>
              {city}
              {', '}
              {country}
              <Button variant="outlined" className="weather_data_location-info" onClick={showLocationInfo}>
                <p className="weather_data_location-info__label"><FormattedMessage {...messages.showLocationInfo} /></p>
                <Icon className="weather_data_location-info__icon">room</Icon>
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row"><FormattedMessage {...messages.date} /></TableCell>
            <TableCell>
              {getDate(LocalObservationDateTime)}
              {', '}
              {getTime(LocalObservationDateTime)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row"><FormattedMessage {...messages.weather} /></TableCell>
            <TableCell className="weather_data_current-weather">
              <img src={createWeatherIconLink(WeatherIcon)} alt="weather-icon" />
              <span>{WeatherText}</span>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row"><FormattedMessage {...messages.temperature} /></TableCell>
            <TableCell>
              <span>{temperatureScale === 'celsium' ? `${Temperature.Metric.Value} °C` : `${Temperature.Imperial.Value} F`}</span>
              <Tooltip title={temperatureScale === 'celsium' ? 'Convert to fahrenheit' : 'Convert to celsium'} interactive arrow>
                <button className="weather_data_tempscale-btn" type="button" onClick={onChageTemperatureScale}>
                  <Icon>cached</Icon>
                </button>
              </Tooltip>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

CurrentConditions.propTypes = {
  city: PropTypes.string.isRequired,
  temperatureScale: PropTypes.string.isRequired,
  onChageTemperatureScale: PropTypes.func.isRequired,
  currentConditions: PropTypes.shape({
    WeatherText: PropTypes.string.isRequired,
    LocalObservationDateTime: PropTypes.string.isRequired,
    Temperature: PropTypes.object.isRequired,
    WeatherIcon: PropTypes.number.isRequired,
  }).isRequired,
  country: PropTypes.string,
  showLocationInfo: PropTypes.func.isRequired,
};

export default CurrentConditions;
