import React, { Component } from 'react';
import './App.css';
import Weather from './components/Weather';
import { IntlProvider } from 'react-intl';
import messagesRu from './translations/ru.json';
import messagesEn from './translations/en.json';
import Settings from "./components/Settings";
import Modal from './components/Modal';

const messages = {
  ru: messagesRu,
  en: messagesEn,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: '',
      backgroundError: false,
      language: 'en',
      showModal: false,
      locationData: {},
      city: '',
    };
  }

  getBackground = () => {
    const query = 'weather';
    fetch(`https://api.unsplash.com/search/photos/?page=1&per_page=20&query=${query}&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        const image = data.results[Math.floor(Math.random() * 20)].urls.raw;
        this.setState({ background: image });
      })
      .catch((error) => {
        console.log(`Background image not loaded. Reason: ${error}`);
        this.setState({ backgroundError: true });
      });
  };

  getCityName = async (data) => {
    const { latitude, longitude } = data.coords;
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=1e58aa5d387545bd905c7a06768ce2be`;
    const response = await fetch(url);
    const responseData =await response.json();
    if (responseData.results.length === 1) {
      const currentCity = responseData.results[0].components.city;
      window.localStorage.setItem('city', currentCity);
      this.setState({ city: currentCity });
    }
  };

  componentDidMount() {
    const city = window.localStorage.getItem(`city`); 
    const language = window.localStorage.getItem('language');
    if (language) {
      this.setState({ language });
    } else {
      this.setState({ language: 'ru' });
      window.localStorage.setItem('language', 'ru');
    }
    if (!city) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.getCityName);
      } else {
       console.log("Geolocation is not supported by this browser.");
      }
    } else {
      this.setState({ city });
    }
    this.getBackground();
  }

  changeLanguage = (language) => {
    this.setState({ language });
    window.localStorage.setItem('language', language);
  };

  showLocationInfo = (data) => {
    this.setState({
      locationData: data,
      showModal: true,
    });
  };

  hideModal = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    const { background, language, backgroundError, showModal, locationData, city } = this.state;
    const backgroundPicture = {
      backgroundImage: `url('${background}')`,
      backgroundSize: 'cover',
    };

    return (
      <IntlProvider locale={language} messages={messages[language]}>
        <div className="App" style={backgroundPicture}>
          { city && <Weather language={language} showLocationInfo={(data) => this.showLocationInfo(data)} />}
          <Settings language={language} changeLanguage={(lang) => this.changeLanguage(lang)} getBackground={this.getBackground} backgroundError={backgroundError} />
          {showModal && <Modal locationData={locationData} hideModal={this.hideModal} />}
        </div>
      </IntlProvider>
    );
  }
}

export default App;
