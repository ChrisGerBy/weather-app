(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{62:function(e){e.exports=JSON.parse('{"search.placeholder":"\u0413\u043e\u0440\u043e\u0434","search.button":"\u0423\u0437\u043d\u0430\u0442\u044c \u043f\u043e\u0433\u043e\u0434\u0443","changeBackground.title":"\u0421\u043c\u0435\u043d\u0438\u0442\u044c \u0444\u043e\u043d\u043e\u0432\u0443\u044e \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443","forecast.day":"\u0414\u0435\u043d\u044c","forecast.night":"\u041d\u043e\u0447\u044c","currentConditions.location":"\u0413\u043e\u0440\u043e\u0434","currentConditions.date":"\u0414\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043c\u044f","currentConditions.weather":"\u0422\u0435\u043a\u0443\u0449\u0430\u044f \u043f\u043e\u0433\u043e\u0434\u0430","currentConditions.temperature":"\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430","currentConditions.showLocationInfo":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u043c\u0435\u0441\u0442\u043d\u043e\u0441\u0442\u0438","weather.getForecastButton":" \u041f\u0440\u043e\u0433\u043d\u043e\u0437 \u043f\u043e\u0433\u043e\u0434\u044b \u043d\u0430 5 \u0434\u043d\u0435\u0439","temperature.scale.celsium":"\u0426\u0435\u043b\u044c\u0441\u0438\u0439","temperature.scale.fahrenheit":"\u0424\u0430\u0440\u0435\u043d\u0433\u0435\u0439\u0442","language.english":"\u0410\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439","language.russian":"\u0420\u0443\u0441\u0441\u043a\u0438\u0439","locationData.location":"\u0413\u043e\u0440\u043e\u0434","locationData.region":"\u0420\u0435\u0433\u0438\u043e\u043d","locationData.timezone":"\u0427\u0430\u0441\u043e\u0432\u043e\u0439 \u043f\u043e\u044f\u0441","locationData.geoposition":"\u0413\u0435\u043e\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u044b","locationData.latitude":"\u0428\u0438\u0440\u043e\u0442\u0430","locationData.longitude":"\u0414\u043e\u043b\u0433\u043e\u0442\u0430","nodata.message":"\u041f\u043e \u0412\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437."}')},63:function(e){e.exports=JSON.parse('{"search.placeholder":"City","search.button":"Get weather","changeBackground.title":"Change background","forecast.day":"Day","forecast.night":"Night","currentConditions.location":"Location","currentConditions.date":"Date","currentConditions.weather":"Current weather","currentConditions.temperature":"Temperature","currentConditions.showLocationInfo":"Show location info","weather.getForecastButton":"Forecast for 5 days","temperature.scale.celsium":"Celsium","temperature.scale.fahrenheit":"Fahrenheit","language.english":"English","language.russian":"Russian","locationData.location":"Location","locationData.region":"Region","locationData.timezone":"Timezone","locationData.geoposition":"Geoposition","locationData.latitude":"Latitude","locationData.longitude":"Longitude","nodata.message":"No data found according to your request. Please, change your request and try one more time."}')},71:function(e,t,a){e.exports=a(92)},76:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(8),r=a.n(c),i=(a(76),a(12)),l=a.n(i),s=a(18),u=a(19),m=a(21),d=a(20),g=a(22),h=(a(78),a(53)),p=a(118),f=a(122),E=a(123),w=a(124),v=a(125),y=a(126),C=a(135),D=a(128),b=a(132),k=function(e){return e.split("").slice(11,16).join("")},M=function(e){return e.split("").slice(0,10).join("").split("-").reverse().join(".")},S=function(e,t){return"fahrenheit"===t?Math.ceil(9*e/5+32):Math.ceil(5*(e-32)/9)},I=function(e){return e.toString().length<2?"https://developer.accuweather.com/sites/default/files/0".concat(e,"-s.png"):"https://developer.accuweather.com/sites/default/files/".concat(e,"-s.png")},L=(a(79),a(117)),N=Object(L.defineMessages)({location:{id:"currentConditions.location",defaultMessage:"Location"},date:{id:"currentConditions.date",defaultMessage:"Date"},weather:{id:"currentConditions.weather",defaultMessage:"Current weather"},temperature:{id:"currentConditions.temperature",defaultMessage:"Temperature"},showLocationInfo:{id:"currentConditions.showLocationInfo",defaultMessage:"Show location info"}}),x=function(e){var t=e.currentConditions,a=e.city,n=e.temperatureScale,c=e.onChageTemperatureScale,r=e.country,i=e.showLocationInfo,l=t.WeatherText,s=t.LocalObservationDateTime,u=t.Temperature,m=t.WeatherIcon;return o.a.createElement(p.a,{className:"weather_data"},o.a.createElement(f.a,null,o.a.createElement(E.a,null,o.a.createElement(w.a,null,o.a.createElement(v.a,{component:"th",scope:"row"},o.a.createElement(b.a,N.location)),o.a.createElement(v.a,null,a,", ",r,o.a.createElement(y.a,{variant:"outlined",className:"weather_data_location-info",onClick:i},o.a.createElement(b.a,N.showLocationInfo)))),o.a.createElement(w.a,null,o.a.createElement(v.a,{component:"th",scope:"row"},o.a.createElement(b.a,N.date)),o.a.createElement(v.a,null,M(s),", ",k(s))),o.a.createElement(w.a,null,o.a.createElement(v.a,{component:"th",scope:"row"},o.a.createElement(b.a,N.weather)),o.a.createElement(v.a,{className:"weather_data_current-weather"},o.a.createElement("img",{src:I(m),alt:"weather-icon"}),o.a.createElement("span",null,l))),o.a.createElement(w.a,null,o.a.createElement(v.a,{component:"th",scope:"row"},o.a.createElement(b.a,N.temperature)),o.a.createElement(v.a,null,o.a.createElement("span",null,"celsium"===n?"".concat(u.Metric.Value," \xb0C"):"".concat(u.Imperial.Value," F")),o.a.createElement(C.a,{title:"celsium"===n?"Convert to fahrenheit":"Convert to celsium",interactive:!0,arrow:!0},o.a.createElement("button",{className:"weather_data_tempscale-btn",type:"button",onClick:c},o.a.createElement(D.a,null,"cached"))))))))},F=(a(84),Object(L.defineMessages)({day:{id:"forecast.day",defaultMessage:"Day"},night:{id:"forecast.night",defaultMessage:"Night"}})),j=a(134),_=a(130),T=function(e){var t=e.changeTemperatureScale,a=e.temperatureScale;return o.a.createElement(_.a,{value:a,onChange:t},o.a.createElement(j.a,{value:"celsium"},o.a.createElement(b.a,{id:"temperature.scale.celsium",defaultMessage:"Celsium"})),o.a.createElement(j.a,{value:"fahrenheit"},o.a.createElement(b.a,{id:"temperature.scale.fahrenheit",defaultMessage:"Fahrenheit"})))},O=function(e){var t=e.forecast,a=e.temperatureScale,n=e.city,c=e.onChageTemperatureScale;return o.a.createElement("div",{className:"forecast"},o.a.createElement("h2",null,"Forecast for ",n),o.a.createElement(T,{changeTemperatureScale:c,temperatureScale:a}),o.a.createElement("div",{className:"forecast__data"},t.map((function(e){return o.a.createElement("div",{className:"forecast_item",key:e.date},o.a.createElement("p",{className:"forecast_item_date"},e.date),o.a.createElement("div",{className:"forecast_item_icons"},o.a.createElement("div",{className:"forecast_item_temp_block"},o.a.createElement("p",null,o.a.createElement(b.a,F.night)),o.a.createElement(C.a,{title:e.nightIcon.text,interactive:!0,arrow:!0},o.a.createElement("img",{src:e.nightIcon.picture,alt:"night-icon"}))),o.a.createElement("div",{className:"forecast_item_icons_block"},o.a.createElement("p",null,o.a.createElement(b.a,F.day)),o.a.createElement(C.a,{title:e.dayIcon.text,interactive:!0,arrow:!0},o.a.createElement("img",{src:e.dayIcon.picture,alt:"day-icon"})))),o.a.createElement("div",{className:"forecast_item_temperature"},o.a.createElement("p",null,"celsium"===a?"".concat(e.temperature.fromC," \xb0C"):"".concat(e.temperature.fromF," F")),o.a.createElement("p",null,"celsium"===a?"".concat(e.temperature.toC," \xb0C"):"".concat(e.temperature.toF," F"))))}))))},B=a(129),A=Object(L.defineMessages)({searchPlaceholder:{id:"search.placeholder",defaultMessage:"City"},searchButton:{id:"search.button",defaultMessage:"Get weather"},getForecast:{id:"weather.getForecastButton",defaultMessage:"Forecast for 5 days"}}),P=(a(85),function(e){var t=e.cityOnChange,a=e.searchLocation,n=e.getForecastFor5Days;return o.a.createElement("div",{className:"weather_search-panel"},o.a.createElement(b.a,A.searchPlaceholder,(function(e){return o.a.createElement(B.a,{placeholder:e,onChange:function(e){return t(e)}})})),o.a.createElement(y.a,{variant:"contained",color:"primary",onClick:a},o.a.createElement(b.a,A.searchButton)),o.a.createElement(y.a,{variant:"contained",color:"primary",className:"weather_data_forecast",onClick:n},o.a.createElement(b.a,A.getForecast)))}),q=(a(86),a(87),function(){return o.a.createElement("div",{className:"nodata-message"},o.a.createElement(b.a,{id:"nodata.message",defaultMessage:"No data found according to your request. Please, change your request and try one more time."}))});a(58).config();var z=function(e){function t(e){var a;Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).cityOnChange=function(e){var t=e.target.value,n=a.state.locationData;a.setState({locationData:Object(h.a)({},n,{city:t})})},a.handleWeatherResponse=function(e,t){a.setState({currentConditions:Object(h.a)({},t[0],{currentCity:e}),showCurrentConditions:!0,showForecast:!1})},a.getWeatherData=function(){var e,t,n,o,c,r,i;return l.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return e=a.state.locationData.locationKey,t=a.props.language,n=a.state.locationData.city,s.next=5,l.a.awrap(fetch("http://dataservice.accuweather.com/currentconditions/v1/".concat(e,"?apikey=").concat("vvAU6aMm1qrDsmEk0Aek8dSlh2AElx3g","&language=").concat(t)));case 5:return o=s.sent,s.next=8,l.a.awrap(o.json());case 8:if(c=s.sent,200!==o.status||!c.length){s.next=13;break}a.handleWeatherResponse(n,c),s.next=20;break;case 13:return s.next=15,l.a.awrap(fetch("http://dataservice.accuweather.com/currentconditions/v1/".concat(e,"?apikey=").concat("vvAU6aMm1qrDsmEk0Aek8dSlh2AElx3g","&language=en")));case 15:return r=s.sent,s.next=18,l.a.awrap(r.json());case 18:i=s.sent,200===r.status&&i.length&&a.handleWeatherResponse(n,i);case 20:case"end":return s.stop()}}))},a.setLocationDataState=function(e){var t;a.setState({locationData:{city:e[0].LocalizedName,locationKey:e[0].Key,country:e[0].Country.LocalizedName,geoPosition:{latitude:e[0].GeoPosition.Latitude,longitude:e[0].GeoPosition.Longitude},region:e[0].Region.LocalizedName,timeZone:"".concat(e[0].TimeZone.Name," ").concat((t=e[0].TimeZone.GmtOffset,t>0?"(GMT +".concat(t,")"):"(GMT ".concat(t,")")))},locationFound:!0,showCurrentConditions:!0,showForecast:!1}),a.getWeatherData()},a.searchLocation=function(){var e,t,n,o,c,r;return l.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return e=a.props.language,t=a.state.locationData.city,i.next=4,l.a.awrap(fetch("http://dataservice.accuweather.com/locations/v1/cities/search?apikey=".concat("vvAU6aMm1qrDsmEk0Aek8dSlh2AElx3g","&q=").concat(t,"&language=").concat(e)));case 4:return n=i.sent,i.next=7,l.a.awrap(n.json());case 7:if(o=i.sent,200!==n.status||!o.length){i.next=14;break}window.localStorage.setItem("city",t),window.localStorage.setItem("language",e),a.setLocationDataState(o),i.next=21;break;case 14:return i.next=16,l.a.awrap(fetch("http://dataservice.accuweather.com/locations/v1/cities/search?apikey=".concat("vvAU6aMm1qrDsmEk0Aek8dSlh2AElx3g","&q=").concat(t,"&language=en")));case 16:return c=i.sent,i.next=19,l.a.awrap(c.json());case 19:r=i.sent,200===n.status&&r.length?(window.localStorage.setItem("city",t),window.localStorage.setItem("language","en"),a.setLocationDataState(r)):(window.localStorage.clear(),a.setState({locationFound:!1}));case 21:case"end":return i.stop()}}))},a.onChageTemperatureScale=function(){var e=a.state.temperatureScale;a.setState({temperatureScale:"celsium"===e?"fahrenheit":"celsium"})},a.showLocationInfo=function(){var e=a.state.locationData;(0,a.props.showLocationInfo)(e)},a.getForecastFor5Days=function(){var e,t,n,o,c;return l.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e=a.state.locationData.locationKey,t=a.props.language,r.next=4,l.a.awrap(fetch("https://dataservice.accuweather.com/forecasts/v1/daily/5day/".concat(e,"?apikey=").concat("vvAU6aMm1qrDsmEk0Aek8dSlh2AElx3g","&language=").concat(t)));case 4:return n=r.sent,r.next=7,l.a.awrap(n.json());case 7:o=r.sent,c=o.DailyForecasts.map((function(e){return{date:M(e.Date),time:k(e.Date),temperature:{fromF:"F"===e.Temperature.Minimum.Unit?"".concat(e.Temperature.Minimum.Value):S(e.Temperature.Minimum.Value,"fahrenheit"),fromC:"C"===e.Temperature.Minimum.Unit?"".concat(e.Temperature.Minimum.Value):S(e.Temperature.Minimum.Value,"celsium"),toF:"F"===e.Temperature.Maximum.Unit?"".concat(e.Temperature.Maximum.Value):S(e.Temperature.Maximum.Value,"fahrenheit"),toC:"C"===e.Temperature.Maximum.Unit?"".concat(e.Temperature.Maximum.Value):S(e.Temperature.Maximum.Value,"celsium")},dayIcon:{picture:I(e.Day.Icon),text:e.Day.IconPhrase},nightIcon:{picture:I(e.Night.Icon),text:e.Night.IconPhrase}}})),a.setState({forecastData:c,showForecast:!0,showCurrentConditions:!1});case 10:case"end":return r.stop()}}))};var n=window.localStorage.getItem("city");return a.state={locationData:{city:n,locationKey:null,country:"",geoPosition:{},region:"",timeZone:""},currentConditions:{},showCurrentConditions:!0,temperatureScale:"celsium",forecastData:[],showForecast:!1,locationFound:!0},a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.language,t=this.state.locationData.city;if(t&&e){var a=this.state.locationData;this.setState({locationData:Object(h.a)({},a,{city:t})}),this.searchLocation()}}},{key:"componentDidUpdate",value:function(e){this.props.language!==e.language&&(window.localStorage.getItem("city".concat(this.props.language))&&this.searchLocation())}},{key:"render",value:function(){var e=this,t=this.state,a=t.currentConditions,n=t.temperatureScale,c=t.locationData,r=t.forecastData,i=t.locationFound,l=t.showCurrentConditions,s=t.showForecast,u=c.country,m=c.city;return o.a.createElement("div",{className:"weather"},o.a.createElement(P,{searchLocation:this.searchLocation,cityOnChange:function(t){return e.cityOnChange(t)},getForecastFor5Days:this.getForecastFor5Days}),!i&&o.a.createElement(q,null),i&&l&&!!Object.entries(a).length&&o.a.createElement(x,{city:a.currentCity,country:u,currentConditions:a,temperatureScale:n,onChageTemperatureScale:this.onChageTemperatureScale,showLocationInfo:this.showLocationInfo}),i&&s&&!!r.length&&o.a.createElement(O,{forecast:r,temperatureScale:n,city:m,onChageTemperatureScale:this.onChageTemperatureScale}))}}]),t}(n.Component),U=a(131),V=a(62),W=a(63),G=(a(90),function(e){var t=e.language,a=e.changeLanguage,n=e.getBackground,c=e.backgroundError;return o.a.createElement("div",{className:"settings"},o.a.createElement(_.a,{className:"language-select",value:t,onChange:function(e){return a(e.target.value)}},o.a.createElement(j.a,{value:"en"},o.a.createElement(b.a,{id:"language.english",defaultMessage:"English"})),o.a.createElement(j.a,{value:"ru"},o.a.createElement(b.a,{id:"language.russian",defaultMessage:"Russian"}))),!c&&o.a.createElement(y.a,{variant:"outlined",className:"change-bg-btn",onClick:n},o.a.createElement(b.a,{id:"changeBackground.title",defaultMessage:"Change background"})))}),R=(a(91),Object(L.defineMessages)({location:{id:"locationData.location",defaultMessage:"Location"},region:{id:"locationData.region",defaultMessage:"Region"},timezone:{id:"locationData.timezone",defaultMessage:"Timezone"},geoposition:{id:"locationData.geoposition",defaultMessage:"Geoposition"},latitude:{id:"locationData.latitude",defaultMessage:"Latitude"},longitude:{id:"locationData.longitude",defaultMessage:"Longitude"}})),K=function(e){var t=e.locationData,a=e.hideModal,n=t.city,c=t.country,r=t.geoPosition,i=t.region,l=t.timeZone,s="https://www.google.com/maps/embed/v1/view?zoom=10&center=".concat(r.latitude,",").concat(r.longitude,"&key=").concat("AIzaSyB-NmnytWX1Xb3NijF1kmIuPVv_h28r5gs");return o.a.createElement("div",{className:"location-data"},o.a.createElement("button",{className:"location-data__close-icon",type:"button",onClick:a},o.a.createElement(D.a,null,"close")),o.a.createElement(p.a,{className:"location-data__table"},o.a.createElement(f.a,null,o.a.createElement(E.a,null,o.a.createElement(w.a,null,o.a.createElement(v.a,{component:"th",scope:"row"},o.a.createElement(b.a,R.location)),o.a.createElement(v.a,null,n,","," ",c)),o.a.createElement(w.a,null,o.a.createElement(v.a,{component:"th",scope:"row"},o.a.createElement(b.a,R.region)),o.a.createElement(v.a,null,i)),o.a.createElement(w.a,null,o.a.createElement(v.a,{component:"th",scope:"row"},o.a.createElement(b.a,R.timezone)),o.a.createElement(v.a,null,l)),o.a.createElement(w.a,null,o.a.createElement(v.a,{component:"th",scope:"row"},o.a.createElement(b.a,R.geoposition)),o.a.createElement(v.a,null,o.a.createElement("p",null,o.a.createElement(b.a,R.latitude),": ",r.latitude),o.a.createElement("p",null,o.a.createElement(b.a,R.longitude),": ",r.longitude)))))),o.a.createElement("iframe",{title:"google-map",className:"location-data__map",src:s,allowFullScreen:!0}))},Z=document.getElementById("modal-root"),J=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).el=document.createElement("div"),a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){Z.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){Z.removeChild(this.el)}},{key:"render",value:function(){var e=this.props,t=e.locationData,a=e.hideModal;return r.a.createPortal(o.a.createElement(K,{locationData:t,hideModal:a}),this.el)}}]),t}(o.a.Component),X={ru:V,en:W},$=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).getBackground=function(){fetch("https://api.unsplash.com/search/photos/?page=1&per_page=20&query=".concat("weather","&client_id=").concat("aa60d9c1edf3d6072a6ed669fb29ba51a77452de7819db994693620d1036de0a")).then((function(e){return e.json()})).then((function(e){var t=e.results[Math.floor(20*Math.random())].urls.raw;a.setState({background:t})})).catch((function(e){console.log("Background image not loaded. Reason: ".concat(e)),a.setState({backgroundError:!0})}))},a.getCityName=function(e){var t,n,o,c,r,i,s;return l.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return t=e.coords,n=t.latitude,o=t.longitude,c="https://api.opencagedata.com/geocode/v1/json?q=".concat(n,",").concat(o,"&key=1e58aa5d387545bd905c7a06768ce2be"),u.next=4,l.a.awrap(fetch(c));case 4:return r=u.sent,u.next=7,l.a.awrap(r.json());case 7:1===(i=u.sent).results.length&&(s=i.results[0].components.city,window.localStorage.setItem("city",s),a.setState({city:s}));case 9:case"end":return u.stop()}}))},a.changeLanguage=function(e){a.setState({language:e}),window.localStorage.setItem("language",e)},a.showLocationInfo=function(e){a.setState({locationData:e,showModal:!0})},a.hideModal=function(){a.setState({showModal:!1})},a.state={background:"",backgroundError:!1,language:"en",showModal:!1,locationData:{},city:""},a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=window.localStorage.getItem("city"),t=window.localStorage.getItem("language");t?this.setState({language:t}):(this.setState({language:"ru"}),window.localStorage.setItem("language","ru")),e?this.setState({city:e}):navigator.geolocation?navigator.geolocation.getCurrentPosition(this.getCityName):console.log("Geolocation is not supported by this browser."),this.getBackground()}},{key:"render",value:function(){var e=this,t=this.state,a=t.background,n=t.language,c=t.backgroundError,r=t.showModal,i=t.locationData,l=t.city,s={backgroundImage:"url('".concat(a,"')"),backgroundSize:"cover"};return o.a.createElement(U.a,{locale:n,messages:X[n]},o.a.createElement("div",{className:"App",style:s},l&&o.a.createElement(z,{language:n,showLocationInfo:function(t){return e.showLocationInfo(t)}}),o.a.createElement(G,{language:n,changeLanguage:function(t){return e.changeLanguage(t)},getBackground:this.getBackground,backgroundError:c}),r&&o.a.createElement(J,{locationData:i,hideModal:this.hideModal})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(58).config({path:"../.env"}),r.a.render(o.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[71,1,2]]]);
//# sourceMappingURL=main.4d46da85.chunk.js.map