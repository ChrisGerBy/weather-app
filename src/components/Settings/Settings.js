import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import './Settings.styles.css';

const Settings = ({
  language, changeLanguage, getBackground, backgroundError,
}) => (
  <div className="settings">
    <Select
      className="language-select"
      value={language}
      onChange={(event) => changeLanguage(event.target.value)}
    >
      <MenuItem value="en"><FormattedMessage id="language.english" defaultMessage="English" /></MenuItem>
      <MenuItem value="ru"><FormattedMessage id="language.russian" defaultMessage="Russian" /></MenuItem>
    </Select>
    {!backgroundError && (
    <Button variant="outlined" className="change-bg-btn" onClick={getBackground}>
      <FormattedMessage id="changeBackground.title" defaultMessage="Change background" />
    </Button>
    )}
  </div>
);

Settings.propTypes = {
  language: PropTypes.string.isRequired,
  changeLanguage: PropTypes.func.isRequired,
  getBackground: PropTypes.func.isRequired,
  backgroundError: PropTypes.bool.isRequired,
};

export default Settings;
