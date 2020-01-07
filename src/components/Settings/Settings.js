import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import './Settings.styles.css';

const Settings = ({
  language, changeLanguage, getBackground, backgroundError,
}) => {
  const settingsBlockRef = React.createRef();
  const closeIcon = React.createRef();

  const toggleSettings = () => {
    const displayStyle = settingsBlockRef.current.style.display;
    if (displayStyle === 'none' || !displayStyle) {
      settingsBlockRef.current.classList.add('mobile-view');
      settingsBlockRef.current.style.display = 'flex';
      closeIcon.current.style.display = 'block';
    } else {
      settingsBlockRef.current.classList.remove('mobile-view');
      settingsBlockRef.current.style.display = 'none';
      closeIcon.current.style.display = 'none';
    }
  };

  return (
    <div className="settings">
      <div className="settings__block" ref={settingsBlockRef}>
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
        <button className="settings__close-icon" type="button" ref={closeIcon} onClick={toggleSettings}>
          <Icon>close</Icon>
        </button>
      </div>
      <Icon className="settings__icon" onClick={toggleSettings}>language</Icon>
    </div>
  );
};

Settings.propTypes = {
  language: PropTypes.string.isRequired,
  changeLanguage: PropTypes.func.isRequired,
  getBackground: PropTypes.func.isRequired,
  backgroundError: PropTypes.bool.isRequired,
};

export default Settings;
