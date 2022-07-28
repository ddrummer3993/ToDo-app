
var x = document.getElementById("demo");
var res = {};



function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  async function showPosition(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
   
    let apiKey = 'vCS2tUBXUeIPaCbMP6G3viGR2TUnsOEY';
    const api = `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${apiKey}&q=${lat},${long}`
  //  x.innerHTML = "Latisdsdtude: " + position.coords.latitude + 
  //  "<br>Longitude: " + position.coords.longitude + "<br>endpoint:" + api; 


   fetch(api)
   .then(response => response.json()) /* turn data into json*/
   .then((data) => {
     /*Access the actual data in now returned json*/
      let city = data.LocalizedName;
      let state = data.AdministrativeArea.ID;
      let locationKey = data.Key;
      getInfo(locationKey);

      res['city'] = data.LocalizedName;
      res['state'] = data.AdministrativeArea.ID;
      res['parentCity'] = data.ParentCity.EnglishName;

   });
   
  }

  async function getInfo(key){
    // let apiKey = 'CAfnhJlUtFmcRbpFncqrzchNwxj2rnuo';
    let apiKey = 'vCS2tUBXUeIPaCbMP6G3viGR2TUnsOEY';
    const weatherApi = `http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${apiKey}`;
    
    fetch(weatherApi)
    .then(response => response.json()) /* turn data into json*/
    .then((data) => {
      
      
      res['weatherText'] =data[0].WeatherText;
      res['temp'] = data[0].Temperature.Imperial.Value;
      res['link'] = data[0].Link;
      res['precipitationType'] = data[0].PrecipitationType; //may be null
      res['UVIndex'] = data[0].UVIndex;
      res['UVIndexText'] = data[0].UVIndexText;
      res['RelativeHumidity'] = data[0].RelativeHumidity;  
      res['weatherIcon'] = data[0].WeatherIcon;
      x.innerText = JSON.stringify(res);
      return res;
    });

  }

getLocation();

