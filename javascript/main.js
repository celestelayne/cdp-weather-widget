console.log('this works')

let input = document.querySelector(".zipcode");
let btn = document.querySelector(".search-button");

let CITY_NAME = document.querySelector(".city_name");
let CITY_TEMP = document.querySelector(".temperature");

getWeatherData = (zip) => {
  let API_KEY = config.WEATHER_API_KEY;
  let API_ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&APPID=${API_KEY}`;

  fetch(API_ENDPOINT)
    .then((response) => response.json())
    .then(data => {
      let local_weather_data = data;
    	console.log(local_weather_data)

      let weather_in_celsius = Math.round(
        local_weather_data.main.temp - 273
      );

      CITY_NAME.textContent = local_weather_data.name;
      CITY_TEMP.textContent = weather_in_celsius + " C"
    }
  )}

const getZipCode = (e) => {
  e.preventDefault();
  let ZIP_CODE = input.value;
  getWeatherData(ZIP_CODE);
};

btn.addEventListener("click", getZipCode);