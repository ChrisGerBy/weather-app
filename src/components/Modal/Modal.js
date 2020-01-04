import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import LocationData from '../LocationData/LocationData';

const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    const { locationData, hideModal } = this.props;
    return ReactDOM.createPortal(
      <LocationData locationData={locationData} hideModal={hideModal} />,
      this.el,
    );
  }
}

Modal.propTypes = {
  locationData: PropTypes.shape({
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    geoPosition: PropTypes.object.isRequired,
    region: PropTypes.string.isRequired,
    timeZone: PropTypes.string.isRequired,
  }).isRequired,
  hideModal: PropTypes.func.isRequired,
};

export default Modal;
