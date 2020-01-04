import React from 'react';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { FormattedMessage } from 'react-intl';
import messages from './messages';


import './SearchLocation.styles.css';

const SearchLocation = ({ cityOnChange, searchLocation }) => (
  <div className="weather_search-panel">
    <FormattedMessage {...messages.searchPlaceholder}>
      {
          (placeholder) => (
            <Input placeholder={placeholder} onChange={(event) => cityOnChange(event)} />
          )
        }
    </FormattedMessage>

    <Button variant="contained" color="primary" onClick={searchLocation}>
      <FormattedMessage {...messages.searchButton} />
    </Button>
  </div>
);

SearchLocation.propTypes = {
  cityOnChange: PropTypes.func.isRequired,
  searchLocation: PropTypes.func.isRequired,
};


export default SearchLocation;
