export const getTime = (str) => str.split('').slice(11, 16).join('');

export const getDate = (str) => str.split('').slice(0, 10).join('').split('-')
  .reverse()
  .join('.');

export const convertTemperature = (temperature, targetScale) => (
  targetScale === 'fahrenheit'
    ? Math.ceil((temperature * 9 / 5 + 32))
    : Math.ceil(((temperature - 32) * 5 / 9))
);

export const createWeatherIconLink = (num) => ((num.toString().length < 2)
  ? `https://developer.accuweather.com/sites/default/files/0${num}-s.png`
  : `https://developer.accuweather.com/sites/default/files/${num}-s.png`);

export const formatTimeZone = (num) => (
  num > 0
    ? `(GMT +${num})`
    : `(GMT ${num})`
);
