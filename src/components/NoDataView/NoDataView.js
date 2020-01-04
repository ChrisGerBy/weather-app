import React from 'react';
import { FormattedMessage } from 'react-intl';

import './NoDataView.styles.css';

const NoDataView = () => (
  <div className="nodata-message">
    <FormattedMessage id="nodata.message" defaultMessage="No data found according to your request. Please, change your request and try one more time." />
  </div>
);

export default NoDataView;
