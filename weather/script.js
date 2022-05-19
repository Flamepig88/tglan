//Hämta alla element från HTML filen
const weatherContainer = document.querySelector(".weather-container");
const temp = document.querySelector(".temp");
const date1 = document.querySelector(".date");
const time1 = document.querySelector(".time");
const condition1 = document.querySelector(".condition");
const name1 = document.querySelector(".name");
const pressure1 = document.querySelector(".pressure");
const humidity1 = document.querySelector(".humidity");
const wind1 = document.querySelector(".wind");
const cloud1 = document.querySelector(".cloud");
const visibility1 = document.querySelector(".visibility");
const uv1 = document.querySelector(".uv");
const precip1 = document.querySelector(".precip");
const feelslike1 = document.querySelector(".feelslike");
const searchForm = document.getElementById("location-input");
const input = document.querySelector(".search");
const citiesList = document.querySelectorAll(".city");

//Submit-event till formuläret
searchForm.addEventListener("submit", (e) => {
  if (input.value.length == 0) {
    alert("Vänligen ange en stad i sökrutan");
  } else {
    cityInput = input.value;
    getWeatherData();
    input.value = "";
  }
  e.preventDefault();
});

//Lägger till event för varje stad i listan
citiesList.forEach((city) => {
  city.addEventListener("click", (e) => {
    cityInput = e.target.innerHTML;
    getWeatherData();
  });
});

//Funktion som returnerar veckodagen istället för bara ett datum
function weekDays(day, month, year) {
  const weekday = [
    "Söndag",
    "Måndag",
    "Tisdag",
    "Onsdag",
    "Torsdag",
    "Fredag",
    "Lördag",
  ];
  return weekday[new Date(`${month}/${day}/${year}`).getDay()];
}

//Standard Staden
cityInput = "Södertälje";

// Funktion som hämtar all data från API
function getWeatherData() {
  fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=f74998a310f641339ec123218220104&q=${cityInput}&days=7&aqi=no&alerts=no&lang=sv`
  )
    .then((response) => response.json())
    .then((data) => {
      temp.innerHTML = Math.round(data.current.temp_c) + "&#176;" + "C | ";
      condition1.innerHTML = data.current.condition.text;
      name1.innerHTML = data.location.name;

      const date = data.location.localtime;
      const y = parseInt(date.substr(0, 4));
      const m = parseInt(date.substr(5, 2));
      const d = parseInt(date.substr(8, 2));
      const time = date.substr(11);

      date1.innerHTML = `${weekDays(d, m, y)} ${d}/${m} - ${y}`;
      time1.innerHTML = time + " Lokal tid " + " |";

      //Lägg till väderdetaljerna
      pressure1.innerHTML = data.current.pressure_mb + " hPa";
      humidity1.innerHTML = data.current.humidity + "%";
      wind1.innerHTML = data.current.wind_kph + " km/h";
      cloud1.innerHTML = data.current.cloud;
      visibility1.innerHTML = data.current.vis_km + " km";
      uv1.innerHTML = data.current.uv + " / 10";
      precip1.innerHTML = data.current.precip_mm + " mm";
      feelslike1.innerHTML = Math.round(data.current.feelslike_c) + "&#176;C";

      //Hämta id för varje vädertillfäle
      const code = data.current.condition.code;

      if (code == 1000) {
        weatherContainer.style.backgroundImage = `url(./bakgrunder/klart.jpg)`;
      } else if (
        //Molnigt väder
        code == 1003 ||
        code == 1006 ||
        code == 1009 ||
        code == 1030 ||
        code == 1069 ||
        code == 1087 ||
        code == 1135 ||
        code == 1273 ||
        code == 1276 ||
        code == 1279 ||
        code == 1282
      ) {
        weatherContainer.style.backgroundImage = `url(./bakgrunder/molnigt.jpg)`;
        //Regnigt väder
      } else if (
        code == 1063 ||
        code == 1069 ||
        code == 1072 ||
        code == 1150 ||
        code == 1153 ||
        code == 1180 ||
        code == 1183 ||
        code == 1186 ||
        code == 1189 ||
        code == 1192 ||
        code == 1195 ||
        code == 1204 ||
        code == 1207 ||
        code == 1240 ||
        code == 1243 ||
        code == 1246 ||
        code == 1249 ||
        code == 1252
      ) {
        weatherContainer.style.backgroundImage = `url(./bakgrunder/regnigt.jpg)`;
        //Snöigt väder
      } else {
        weatherContainer.style.backgroundImage = `url(./bakgrunder/snöigt.jpg)`;
      }
    })

    .catch(() => {
      alert("Staden hittades inte, försök igen");
    });
}
getWeatherData();

//

//

weatherContainer.style.opacity = "1";
