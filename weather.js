const res = {};

export function getLocation() {
  if (navigator.geolocation) {
    console.log(navigator.geolocation);
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

async function showPosition(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  let apiKey = 'CAfnhJlUtFmcRbpFncqrzchNwxj2rnuo';
  //let apiKey = "vCS2tUBXUeIPaCbMP6G3viGR2TUnsOEY";
  const api = `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${apiKey}&q=${lat},${long}`;
  //  x.innerHTML = "Latisdsdtude: " + position.coords.latitude +
  //  "<br>Longitude: " + position.coords.longitude + "<br>endpoint:" + api;

  fetch(api)
    .then((response) => response.json()) /* turn data into json*/
    .then((data) => {
      /*Access the actual data in now returned json*/
      let city = data.LocalizedName;
      let state = data.AdministrativeArea.ID;
      let locationKey = data.Key;
      getInfo(locationKey);

      res["city"] = data.LocalizedName;
      res["state"] = data.AdministrativeArea.ID;
      //res['parentCity'] = data.ParentCity.EnglishName;
    });
}

async function getInfo(key) {
   let apiKey = 'CAfnhJlUtFmcRbpFncqrzchNwxj2rnuo';
 // let apiKey = "vCS2tUBXUeIPaCbMP6G3viGR2TUnsOEY";
  const weatherApi = `http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${apiKey}`;

  fetch(weatherApi)
    .then((response) => response.json()) /* turn data into json*/
    .then((data) => {
      res["weatherText"] = data[0].WeatherText;
      res["temp"] = data[0].Temperature.Imperial.Value;
      res["link"] = data[0].Link;
      res["precipitationType"] = data[0].PrecipitationType; //may be null
      res["UVIndex"] = data[0].UVIndex;
      res["UVIndexText"] = data[0].UVIndexText;
      res["RelativeHumidity"] = data[0].RelativeHumidity;
      res["weatherIcon"] = data[0].WeatherIcon;
      appendWeather(res);
      return res;
    });
}

function appendWeather(weatherObj) {
  const weatherAndIcon = document.querySelector("#weatherAndIcon");
  const icon = document.querySelector("#icon");
  const weather = document.querySelector("#weather");
  const dateTimeContainer = document.querySelector("#date-time-container");
  console.log(weatherObj);

  let cityState = document.createElement("h4");
  cityState.innerText = `${weatherObj.city}, ${weatherObj.state}`;
  let clock = document.getElementById("clock");
  dateTimeContainer.insertBefore(cityState, clock);

  const weatherIconNum = parseInt(weatherObj.weatherIcon);
  let weatherPic = document.createElement("img");
  if (weatherIconNum <= 4) {
    weatherPic.src = "./resources/weatherIcons/1.png";
  } else if (weatherIconNum <= 6) {
    weatherPic.src = "./resources/weatherIcons/2.png";
  } else if (weatherIconNum <= 11) {
    weatherPic.src = "./resources/weatherIcons/3.png";
  } else if (weatherIconNum <= 18) {
    weatherPic.src = "./resources/weatherIcons/4.png";
  } else if (weatherIconNum <= 29) {
    weatherPic.src = "./resources/weatherIcons/5.png";
  }
  weatherPic.classList.add("weather-pic");
  icon.appendChild(weatherPic);

  let weatherText = document.createElement("h5");
  weatherText.innerText = `${weatherObj.weatherText}`;
  weather.appendChild(weatherText);

  let tempText = document.createElement("h5");
  tempText.innerText = `${weatherObj.temp} Farenheit`;
  weather.appendChild(tempText);

  if (weatherObj.precipitationType) {
    let precipitationText = document.createElement("h5");
    precipitationText.innerText = `${weatherObj.precipitationType}`;
    weather.appendChild(precipitationText);
  }
}
