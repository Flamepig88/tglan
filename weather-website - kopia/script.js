const timeEl = document.getElementById("time");
const dateEl = document.getElementById("date");
const currentWeatherItemsEl = document.getElementById("current-weather-items");
const cityEl = document.getElementById("city");
const weatherForecastEl = document.getElementById("weather-forecast");
const currentTempEl = document.getElementById("current-temp");

const days = [
  "Söndag",
  "Måndag",
  "Tisdag",
  "Onsdag",
  "Torsdag",
  "Fredag",
  "Lördag",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Maj",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Okt",
  "Nov",
  "Dec",
];

const API_KEY = "49cc8c821cd2aff9af04c9f98c36eb74";

setInterval(() => {
  const time = new Date();
  const month = time.getMonth();
  const date = time.getDate();
  const day = time.getDay();
  const hour = time.getHours();
  const hoursIn12HrFormat = hour ? hour % 24 : hour;
  const minutes = time.getMinutes();

  timeEl.innerHTML =
    (hoursIn12HrFormat < 10 ? "0" + hoursIn12HrFormat : hoursIn12HrFormat) +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) +
    " ";

  dateEl.innerHTML = days[day] + ", " + date + " " + months[month];
});

let cityInput = "Södertälje";

getWeatherData();
function getWeatherData() {
  fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=f74998a310f641339ec123218220104&q=${cityInput}&days=7&aqi=no&alerts=no&lang=sv`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      showWeatherData(data);
    });
}

function showWeatherData(data) {
  let { humidity, pressure_mb, wind_kph } = data.current;
  const sunrise = data.forecast.forecastday[0].astro.sunrise;
  const fixedSunrise = sunrise.substr(0, 5);
  const sunset = data.forecast.forecastday[0].astro.sunset;
  const fixedSunset = sunset.substr(0, 5);

  cityEl.innerHTML = data.location.name;

  currentWeatherItemsEl.innerHTML = `<div class="weather-item">
        <div>Luftfuktighet</div>
        <div>${humidity}%</div>
    </div>
    <div class="weather-item">
        <div>Lufttryck</div>
        <div>${pressure_mb} hPa</div>
    </div>
    <div class="weather-item">
        <div>Vind</div>
        <div>${wind_kph} km/h</div>
    </div>

    <div class="weather-item">
        <div>Soluppgång</div>
        <div>${fixedSunrise}</div>
    </div>
    <div class="weather-item">
        <div>Solnedgång</div>
        <div>${fixedSunset}</div>
    </div>
    
    
    `;

  let otherDayForcast = "";
  data.forecast.forecastday[0].forEach((day, idx) => {
    if (idx == 0) {
      currentTempEl.innerHTML = `
            <img src="http://openweathermap.org/img/wn//${day.weather[0].icon}@4x.png" alt="weather icon" class="w-icon">
            <div class="other">
                <div class="day">${date}</div>
                <div class="temp">Night - ${mintemp_c}&#176;C</div>
                <div class="temp">Day - ${maxtemp_c}&#176;C</div>
            </div>
            
            `;
    } else {
      otherDayForcast += `
            <div class="weather-forecast-item">
                <div class="day">${window
                  .moment(date.date * 1000)
                  .format("ddd")}</div>
                <img src="http://openweathermap.org/img/wn/${
                  day.weather[0].icon
                }@2x.png" alt="weather icon" class="w-icon">
                <div class="temp">Night - ${day.temp.night}&#176;C</div>
                <div class="temp">Day - ${day.temp.day}&#176;C</div>
            </div>
            
            `;
    }
  });

  weatherForecastEl.innerHTML = otherDayForcast;
}
