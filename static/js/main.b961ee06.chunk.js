(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{61:function(e){e.exports=JSON.parse('{"search.placeholder":"\u0413\u043e\u0440\u043e\u0434","search.button":"\u0423\u0437\u043d\u0430\u0442\u044c \u043f\u043e\u0433\u043e\u0434\u0443","changeBackground.title":"\u0421\u043c\u0435\u043d\u0438\u0442\u044c \u0444\u043e\u043d\u043e\u0432\u0443\u044e \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443","forecast.day":"\u0414\u0435\u043d\u044c","forecast.night":"\u041d\u043e\u0447\u044c","currentConditions.location":"\u0413\u043e\u0440\u043e\u0434","currentConditions.date":"\u0414\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043c\u044f","currentConditions.weather":"\u0422\u0435\u043a\u0443\u0449\u0430\u044f \u043f\u043e\u0433\u043e\u0434\u0430","currentConditions.temperature":"\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430","currentConditions.showLocationInfo":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u043c\u0435\u0441\u0442\u043d\u043e\u0441\u0442\u0438","weather.getForecastButton":" \u041f\u0440\u043e\u0433\u043d\u043e\u0437 \u043f\u043e\u0433\u043e\u0434\u044b \u043d\u0430 5 \u0434\u043d\u0435\u0439","temperature.scale.celsium":"\u0426\u0435\u043b\u044c\u0441\u0438\u0439","temperature.scale.fahrenheit":"\u0424\u0430\u0440\u0435\u043d\u0433\u0435\u0439\u0442","language.english":"\u0410\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439","language.russian":"\u0420\u0443\u0441\u0441\u043a\u0438\u0439","locationData.location":"\u0413\u043e\u0440\u043e\u0434","locationData.region":"\u0420\u0435\u0433\u0438\u043e\u043d","locationData.timezone":"\u0427\u0430\u0441\u043e\u0432\u043e\u0439 \u043f\u043e\u044f\u0441","locationData.geoposition":"\u0413\u0435\u043e\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u044b","locationData.latitude":"\u0428\u0438\u0440\u043e\u0442\u0430","locationData.longitude":"\u0414\u043e\u043b\u0433\u043e\u0442\u0430","nodata.message":"\u041f\u043e \u0412\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437."}')},62:function(e){e.exports=JSON.parse('{"search.placeholder":"City","search.button":"Get weather","changeBackground.title":"Change background","forecast.day":"Day","forecast.night":"Night","currentConditions.location":"Location","currentConditions.date":"Date","currentConditions.weather":"Current weather","currentConditions.temperature":"Temperature","currentConditions.showLocationInfo":"Show location info","weather.getForecastButton":"Forecast for 5 days","temperature.scale.celsium":"Celsium","temperature.scale.fahrenheit":"Fahrenheit","language.english":"English","language.russian":"Russian","locationData.location":"Location","locationData.region":"Region","locationData.timezone":"Timezone","locationData.geoposition":"Geoposition","locationData.latitude":"Latitude","locationData.longitude":"Longitude","nodata.message":"No data found according to your request. Please, change your request and try one more time."}')},71:function(e,t,a){e.exports=a(92)},76:function(e,t,a){},77:function(e,t,a){},79:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(8),r=a.n(c),i=(a(76),a(17)),l=a(18),s=a(20),u=a(19),m=a(21),d=(a(77),a(12)),g=a.n(d),h=a(52),p=a(125),f=a(131),w=a(117),E=a(121),v=a(122),y=a(123),C=a(124),b=a(134),D=a(127),M=function(e){return e.split("").slice(11,16).join("")},k=function(e){return e.split("").slice(0,10).join("").split("-").reverse().join(".")},L=function(e,t){return"fahrenheit"===t?Math.ceil(9*e/5+32):Math.ceil(5*(e-32)/9)},S=function(e){return e.toString().length<2?"https://developer.accuweather.com/sites/default/files/0".concat(e,"-s.png"):"https://developer.accuweather.com/sites/default/files/".concat(e,"-s.png")},x=function(e){return e>0?"(GMT +".concat(e,")"):"(GMT ".concat(e,")")},N=(a(79),a(116)),F=Object(N.defineMessages)({location:{id:"currentConditions.location",defaultMessage:"Location"},date:{id:"currentConditions.date",defaultMessage:"Date"},weather:{id:"currentConditions.weather",defaultMessage:"Current weather"},temperature:{id:"currentConditions.temperature",defaultMessage:"Temperature"},showLocationInfo:{id:"currentConditions.showLocationInfo",defaultMessage:"Show location info"}}),I=function(e){var t=e.currentConditions,a=e.city,n=e.temperatureScale,c=e.onChageTemperatureScale,r=e.country,i=e.showLocationInfo,l=t.WeatherText,s=t.LocalObservationDateTime,u=t.Temperature,m=t.WeatherIcon;return o.a.createElement(w.a,{className:"weather_data"},o.a.createElement(E.a,null,o.a.createElement(v.a,null,o.a.createElement(y.a,null,o.a.createElement(C.a,{component:"th",scope:"row"},o.a.createElement(f.a,F.location)),o.a.createElement(C.a,null,a,", ",r,o.a.createElement(p.a,{variant:"outlined",className:"weather_data_location-info",onClick:i},o.a.createElement(f.a,F.showLocationInfo)))),o.a.createElement(y.a,null,o.a.createElement(C.a,{component:"th",scope:"row"},o.a.createElement(f.a,F.date)),o.a.createElement(C.a,null,k(s),", ",M(s))),o.a.createElement(y.a,null,o.a.createElement(C.a,{component:"th",scope:"row"},o.a.createElement(f.a,F.weather)),o.a.createElement(C.a,{className:"weather_data_current-weather"},o.a.createElement("img",{src:S(m),alt:"weather-icon"}),o.a.createElement("span",null,l))),o.a.createElement(y.a,null,o.a.createElement(C.a,{component:"th",scope:"row"},o.a.createElement(f.a,F.temperature)),o.a.createElement(C.a,null,o.a.createElement("span",null,"celsium"===n?"".concat(u.Metric.Value," \xb0C"):"".concat(u.Imperial.Value," F")),o.a.createElement(b.a,{title:"celsium"===n?"Convert to fahrenheit":"Convert to celsium",interactive:!0,arrow:!0},o.a.createElement("button",{className:"weather_data_tempscale-btn",type:"button",onClick:c},o.a.createElement(D.a,null,"cached"))))))))},O=(a(84),Object(N.defineMessages)({day:{id:"forecast.day",defaultMessage:"Day"},night:{id:"forecast.night",defaultMessage:"Night"}})),j=function(e){var t=e.forecast,a=e.temperatureScale;return o.a.createElement("div",{className:"forecast"},t.map((function(e){return o.a.createElement("div",{className:"forecast_item",key:e.date},o.a.createElement("p",{className:"forecast_item_date"},e.date),o.a.createElement("div",{className:"forecast_item_icons"},o.a.createElement("div",{className:"forecast_item_temp_block"},o.a.createElement("p",null,o.a.createElement(f.a,O.night)),o.a.createElement(b.a,{title:e.nightIcon.text,interactive:!0,arrow:!0},o.a.createElement("img",{src:e.nightIcon.picture,alt:"night-icon"}))),o.a.createElement("div",{className:"forecast_item_icons_block"},o.a.createElement("p",null,o.a.createElement(f.a,O.day)),o.a.createElement(b.a,{title:e.dayIcon.text,interactive:!0,arrow:!0},o.a.createElement("img",{src:e.dayIcon.picture,alt:"day-icon"})))),o.a.createElement("div",{className:"forecast_item_temperature"},o.a.createElement("p",null,"celsium"===a?"".concat(e.temperature.fromC," \xb0C"):"".concat(e.temperature.fromF," F")),o.a.createElement("p",null,"celsium"===a?"".concat(e.temperature.toC," \xb0C"):"".concat(e.temperature.toF," F"))))})))},_=a(133),T=a(129),W=function(e){var t=e.changeTemperatureScale,a=e.temperatureScale;return o.a.createElement(T.a,{value:a,onChange:t},o.a.createElement(_.a,{value:"celsium"},o.a.createElement(f.a,{id:"temperature.scale.celsium",defaultMessage:"Celsium"})),o.a.createElement(_.a,{value:"fahrenheit"},o.a.createElement(f.a,{id:"temperature.scale.fahrenheit",defaultMessage:"Fahrenheit"})))},P=a(128),B=Object(N.defineMessages)({searchPlaceholder:{id:"search.placeholder",defaultMessage:"City"},searchButton:{id:"search.button",defaultMessage:"Get weather"}}),J=(a(85),function(e){var t=e.cityOnChange,a=e.searchLocation;return o.a.createElement("div",{className:"weather_search-panel"},o.a.createElement(f.a,B.searchPlaceholder,(function(e){return o.a.createElement(P.a,{placeholder:e,onChange:function(e){return t(e)}})})),o.a.createElement(p.a,{variant:"contained",color:"primary",onClick:a},o.a.createElement(f.a,B.searchButton)))}),R=(a(86),Object(N.defineMessages)({getForecast:{id:"weather.getForecastButton",defaultMessage:"Forecast for 5 days"}})),z=(a(87),function(){return o.a.createElement("div",{className:"nodata-message"},o.a.createElement(f.a,{id:"nodata.message",defaultMessage:"No data found according to your request. Please, change your request and try one more time."}))});a(57).config();var V=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).cityOnChange=function(e){var t=e.target.value,n=a.state.locationData;a.setState({locationData:Object(h.a)({},n,{city:t})})},a.handleWeatherResponse=function(e,t){a.setState({currentConditions:Object(h.a)({},t[0],{currentCity:e})}),a.state.forecastData.length&&a.getForecastFor5Days()},a.getWeatherData=function(){var e,t,n,o,c,r,i;return g.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return e=a.state.locationData.locationKey,t=a.props.language,n=a.state.locationData.city,l.next=5,g.a.awrap(fetch("https://dataservice.accuweather.com/currentconditions/v1/".concat(e,"?apikey=").concat("wFX5sPg7RCJJsLdwdOsv8xLY7v4Wy8lW","&language=").concat(t)));case 5:return o=l.sent,l.next=8,g.a.awrap(o.json());case 8:if(c=l.sent,200!==o.status||!c.length){l.next=13;break}a.handleWeatherResponse(n,c),l.next=20;break;case 13:return l.next=15,g.a.awrap(fetch("https://dataservice.accuweather.com/currentconditions/v1/".concat(e,"?apikey=").concat("wFX5sPg7RCJJsLdwdOsv8xLY7v4Wy8lW","&language=en")));case 15:return r=l.sent,l.next=18,g.a.awrap(r.json());case 18:i=l.sent,200===r.status&&i.length&&a.handleWeatherResponse(n,i);case 20:case"end":return l.stop()}}))},a.setLocationDataState=function(e,t){a.setState({locationData:{city:t[0].LocalizedName,locationKey:t[0].Key,country:t[0].Country.LocalizedName,geoPosition:{latitude:t[0].GeoPosition.Latitude,longitude:t[0].GeoPosition.Longitude},region:t[0].Region.LocalizedName,timeZone:"".concat(t[0].TimeZone.Name," ").concat(x(t[0].TimeZone.GmtOffset))},locationFound:!0}),window.localStorage.setItem("city",e),a.getWeatherData()},a.searchLocation=function(e,t){var n,o,c,r;return g.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,g.a.awrap(fetch("https://dataservice.accuweather.com/locations/v1/cities/search?apikey=".concat("wFX5sPg7RCJJsLdwdOsv8xLY7v4Wy8lW","&q=").concat(e,"&language=").concat(t)));case 2:return n=i.sent,i.next=5,g.a.awrap(n.json());case 5:if(o=i.sent,200!==n.status||!o.length){i.next=10;break}a.setLocationDataState(e,o),i.next=17;break;case 10:return i.next=12,g.a.awrap(fetch("https://dataservice.accuweather.com/locations/v1/cities/search?apikey=".concat("wFX5sPg7RCJJsLdwdOsv8xLY7v4Wy8lW","&q=").concat(e,"&language=en")));case 12:return c=i.sent,i.next=15,g.a.awrap(c.json());case 15:r=i.sent,200===n.status&&r.length?a.setLocationDataState(e,r):(window.localStorage.removeItem("city"),a.setState({locationFound:!1}));case 17:case"end":return i.stop()}}))},a.onChageTemperatureScale=function(){var e=a.state.temperatureScale;a.setState({temperatureScale:"celsium"===e?"fahrenheit":"celsium"})},a.getCityName=function(e){var t,n,o,c,r,i,l;return g.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.coords,n=t.latitude,o=t.longitude,c="https://api.opencagedata.com/geocode/v1/json?q=".concat(n,",").concat(o,"&key=1e58aa5d387545bd905c7a06768ce2be"),s.next=4,g.a.awrap(fetch(c));case 4:return r=s.sent,s.next=7,g.a.awrap(r.json());case 7:1===(i=s.sent).results.length&&(l=i.results[0].components.city,a.setState({locationData:{city:l}}),window.localStorage.setItem("city",l),window.localStorage.setItem("language","en"),a.searchLocation(l,"en"));case 9:case"end":return s.stop()}}))},a.showLocationInfo=function(){var e=a.state.locationData;(0,a.props.showLocationInfo)(e)},a.getForecastFor5Days=function(){var e,t,n,o,c;return g.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e=a.state.locationData.locationKey,t=a.props.language,r.next=4,g.a.awrap(fetch("https://dataservice.accuweather.com/forecasts/v1/daily/5day/".concat(e,"?apikey=").concat("wFX5sPg7RCJJsLdwdOsv8xLY7v4Wy8lW","&language=").concat(t)));case 4:return n=r.sent,r.next=7,g.a.awrap(n.json());case 7:o=r.sent,c=o.DailyForecasts.map((function(e){return{date:k(e.Date),time:M(e.Date),temperature:{fromF:"F"===e.Temperature.Minimum.Unit?"".concat(e.Temperature.Minimum.Value):L(e.Temperature.Minimum.Value,"fahrenheit"),fromC:"C"===e.Temperature.Minimum.Unit?"".concat(e.Temperature.Minimum.Value):L(e.Temperature.Minimum.Value,"celsium"),toF:"F"===e.Temperature.Maximum.Unit?"".concat(e.Temperature.Maximum.Value):L(e.Temperature.Maximum.Value,"fahrenheit"),toC:"C"===e.Temperature.Maximum.Unit?"".concat(e.Temperature.Maximum.Value):L(e.Temperature.Maximum.Value,"celsium")},dayIcon:{picture:S(e.Day.Icon),text:e.Day.IconPhrase},nightIcon:{picture:S(e.Night.Icon),text:e.Night.IconPhrase}}})),a.setState({forecastData:c});case 10:case"end":return r.stop()}}))},a.state={locationData:{city:"",locationKey:null,country:"",geoPosition:{},region:"",timeZone:""},currentConditions:{},temperatureScale:"celsium",forecastData:[],locationFound:!0},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.language,a=window.localStorage.getItem("city".concat(t));if(a){var n=this.state.locationData;this.setState({locationData:Object(h.a)({},n,{city:a})},(function(){return e.searchLocation(a,t)}))}else navigator.geolocation?navigator.geolocation.getCurrentPosition(this.getCityName):console.log("Geolocation is not supported by this browser.")}},{key:"componentDidUpdate",value:function(e,t){if(this.props.language!==e.language){var a=window.localStorage.getItem("city".concat(this.props.language));a&&this.searchLocation(a,this.props.language)}}},{key:"render",value:function(){var e=this,t=this.state,a=t.currentConditions,n=t.temperatureScale,c=t.locationData,r=t.forecastData,i=t.locationFound,l=c.country,s=c.city,u=this.props.language;return o.a.createElement("div",{className:"weather"},o.a.createElement(J,{searchLocation:function(){return e.searchLocation(s,u)},cityOnChange:function(t){return e.cityOnChange(t)}}),!i&&o.a.createElement(z,null),i&&!!Object.entries(a).length&&o.a.createElement(o.a.Fragment,null,o.a.createElement(I,{city:a.currentCity,country:l,currentConditions:a,temperatureScale:n,onChageTemperatureScale:this.onChageTemperatureScale,showLocationInfo:this.showLocationInfo}),o.a.createElement(p.a,{variant:"contained",color:"primary",className:"weather_data_forecast",onClick:this.getForecastFor5Days},o.a.createElement(f.a,R.getForecast))),i&&!!r.length&&o.a.createElement(o.a.Fragment,null,o.a.createElement(W,{changeTemperatureScale:this.onChageTemperatureScale,temperatureScale:n}),o.a.createElement(j,{forecast:r,temperatureScale:n})))}}]),t}(n.Component),G=a(130),q=a(61),X=a(62),U=(a(90),function(e){var t=e.language,a=e.changeLanguage,n=e.getBackground,c=e.backgroundError;return o.a.createElement("div",{className:"settings"},o.a.createElement(T.a,{className:"language-select",value:t,onChange:function(e){return a(e.target.value)}},o.a.createElement(_.a,{value:"en"},o.a.createElement(f.a,{id:"language.english",defaultMessage:"English"})),o.a.createElement(_.a,{value:"ru"},o.a.createElement(f.a,{id:"language.russian",defaultMessage:"Russian"}))),!c&&o.a.createElement(p.a,{variant:"outlined",className:"change-bg-btn",onClick:n},o.a.createElement(f.a,{id:"changeBackground.title",defaultMessage:"Change background"})))}),K=(a(91),Object(N.defineMessages)({location:{id:"locationData.location",defaultMessage:"Location"},region:{id:"locationData.region",defaultMessage:"Region"},timezone:{id:"locationData.timezone",defaultMessage:"Timezone"},geoposition:{id:"locationData.geoposition",defaultMessage:"Geoposition"},latitude:{id:"locationData.latitude",defaultMessage:"Latitude"},longitude:{id:"locationData.longitude",defaultMessage:"Longitude"}})),Y=function(e){var t=e.locationData,a=e.hideModal,n=t.city,c=t.country,r=t.geoPosition,i=t.region,l=t.timeZone,s="https://www.google.com/maps/embed/v1/view?zoom=10&center=".concat(r.latitude,",").concat(r.longitude,"&key=").concat("AIzaSyB-NmnytWX1Xb3NijF1kmIuPVv_h28r5gs");return o.a.createElement("div",{className:"location-data"},o.a.createElement("button",{className:"location-data__close-icon",type:"button",onClick:a},o.a.createElement(D.a,null,"close")),o.a.createElement(w.a,{className:"location-data__table"},o.a.createElement(E.a,null,o.a.createElement(v.a,null,o.a.createElement(y.a,null,o.a.createElement(C.a,{component:"th",scope:"row"},o.a.createElement(f.a,K.location)),o.a.createElement(C.a,null,n,","," ",c)),o.a.createElement(y.a,null,o.a.createElement(C.a,{component:"th",scope:"row"},o.a.createElement(f.a,K.region)),o.a.createElement(C.a,null,i)),o.a.createElement(y.a,null,o.a.createElement(C.a,{component:"th",scope:"row"},o.a.createElement(f.a,K.timezone)),o.a.createElement(C.a,null,l)),o.a.createElement(y.a,null,o.a.createElement(C.a,{component:"th",scope:"row"},o.a.createElement(f.a,K.geoposition)),o.a.createElement(C.a,null,o.a.createElement("p",null,o.a.createElement(f.a,K.latitude),": ",r.latitude),o.a.createElement("p",null,o.a.createElement(f.a,K.longitude),": ",r.longitude)))))),o.a.createElement("iframe",{title:"google-map",className:"location-data__map",src:s,allowFullScreen:!0}))},Z=document.getElementById("modal-root"),A=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).el=document.createElement("div"),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){Z.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){Z.removeChild(this.el)}},{key:"render",value:function(){var e=this.props,t=e.locationData,a=e.hideModal;return r.a.createPortal(o.a.createElement(Y,{locationData:t,hideModal:a}),this.el)}}]),t}(o.a.Component),$={ru:q,en:X},H=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).getBackground=function(){fetch("https://api.unsplash.com/search/photos/?page=1&per_page=20&query=".concat("weather","&client_id=").concat("aa60d9c1edf3d6072a6ed669fb29ba51a77452de7819db994693620d1036de0a")).then((function(e){return e.json()})).then((function(e){var t=e.results[Math.floor(20*Math.random())].urls.raw;a.setState({background:t})})).catch((function(e){console.log("Background image not loaded. Reason: ".concat(e)),a.setState({backgroundError:!0})}))},a.changeLanguage=function(e){a.setState({language:e}),window.localStorage.setItem("language",e)},a.showLocationInfo=function(e){a.setState({locationData:e,showModal:!0})},a.hideModal=function(){a.setState({showModal:!1})},a.state={background:"",backgroundError:!1,language:"en",showModal:!1,locationData:{}},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getBackground();var e=window.localStorage.getItem("language");e&&this.setState({language:e})}},{key:"render",value:function(){var e=this,t=this.state,a=t.background,n=t.language,c=t.backgroundError,r=t.showModal,i=t.locationData,l={backgroundImage:"url('".concat(a,"')"),backgroundSize:"cover"};return o.a.createElement(G.a,{locale:n,messages:$[n]},o.a.createElement("div",{className:"App",style:l},o.a.createElement(V,{language:n,showLocationInfo:function(t){return e.showLocationInfo(t)}}),o.a.createElement(U,{language:n,changeLanguage:function(t){return e.changeLanguage(t)},getBackground:this.getBackground,backgroundError:c}),r&&o.a.createElement(A,{locationData:i,hideModal:this.hideModal})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(57).config({path:"../.env"}),r.a.render(o.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[71,1,2]]]);
//# sourceMappingURL=main.b961ee06.chunk.js.map