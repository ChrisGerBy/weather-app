import React from 'react';
import PropTypes from 'prop-types';
import {
  Table, TableBody, TableCell, TableContainer, TableRow, Icon,
} from '@material-ui/core';
import { FormattedMessage } from 'react-intl';

import './LocationData.styles.css';
import messages from './messages';

const LocationData = ({ locationData, hideModal }) => {
  const {
    city, country, geoPosition, region, timeZone,
  } = locationData;

  const url = `https://www.google.com/maps/embed/v1/view?zoom=10&center=${geoPosition.latitude},${geoPosition.longitude}&key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}`;

  return (
    <div className="location-data">
      <button className="location-data__close-icon" type="button" onClick={hideModal}>
        <Icon>close</Icon>
      </button>
      <TableContainer className="location-data__table">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row"><FormattedMessage {...messages.location} /></TableCell>
              <TableCell>
                {city}
                ,
                {' '}
                {country}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row"><FormattedMessage {...messages.region} /></TableCell>
              <TableCell>
                {region}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row"><FormattedMessage {...messages.timezone} /></TableCell>
              <TableCell>
                {timeZone}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row"><FormattedMessage {...messages.geoposition} /></TableCell>
              <TableCell>
                <p>
                  <FormattedMessage {...messages.latitude} />
                  {': '}
                  {geoPosition.latitude}
                </p>
                <p>
                  <FormattedMessage {...messages.longitude} />
                  {': '}
                  {geoPosition.longitude}
                </p>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <iframe title="google-map" className="location-data__map" src={url} allowFullScreen />
    </div>

  );
};

LocationData.propTypes = {
  locationData: PropTypes.shape({
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    geoPosition: PropTypes.object.isRequired,
    region: PropTypes.string.isRequired,
    timeZone: PropTypes.string.isRequired,
  }).isRequired,
  hideModal: PropTypes.func.isRequired,
};

export default LocationData;
