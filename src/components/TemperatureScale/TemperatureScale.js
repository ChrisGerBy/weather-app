import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { FormattedMessage } from 'react-intl';

const TemperatureScale = ({ changeTemperatureScale, temperatureScale }) => (
  <Select
    value={temperatureScale}
    onChange={changeTemperatureScale}
  >
    <MenuItem value="celsium"><FormattedMessage id="temperature.scale.celsium" defaultMessage="Celsium" /></MenuItem>
    <MenuItem value="fahrenheit"><FormattedMessage id="temperature.scale.fahrenheit" defaultMessage="Fahrenheit" /></MenuItem>
  </Select>
);

TemperatureScale.propTypes = {
  changeTemperatureScale: PropTypes.func.isRequired,
  temperatureScale: PropTypes.string.isRequired,
};

export default TemperatureScale;
