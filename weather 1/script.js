//Hämta alla element från HTML filen
const app = document.querySelector(".weather-container");
const temp = document.querySelector(".temp");
const dateOutput = document.querySelector(".date");
const timeOutput = document.querySelector(".time");
const conditionOutput = document.querySelector(".condition");
const nameOutput = document.querySelector(".name");
const pressureOutput = document.querySelector(".pressure");
const humidityOutput = document.querySelector(".humidity");
const windOutput = document.querySelector(".wind");
const form = document.getElementById("location-input");
const search = document.querySelector(".search");
const btn = document.querySelector(".submit");
const cities = document.querySelectorAll(".city");
const cloudOutput = document.querySelector(".cloud");
const visibilityOutput = document.querySelector(".visibility");
const uvOutput = document.querySelector(".uv");
const precipOutput = document.querySelector(".precip");
const feelslikeOutput = document.querySelector(".feelslike");

//Standard Staden
cityInput = "Södertälje";

//Lägger till event för varje stad i listan
cities.forEach((city) => {
  city.addEventListener("click", (e) => {
    cityInput = e.target.innerHTML;
    fetchWeatherData();
  });
});

//Submit-event till formuläret
form.addEventListener("submit", (e) => {
  if (search.value.length == 0) {
    alert("Vänligen ange en stad i sökrutan");
  } else {
    cityInput = search.value;
    fetchWeatherData();
    search.value = "";
  }
  e.preventDefault();
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

// Funktion som hämtar all data från API
function fetchWeatherData() {
  fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=f74998a310f641339ec123218220104&q=${cityInput}&days=7&aqi=no&alerts=no&lang=sv`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      //Lägg till temperatur och vädertillfälle
      temp.innerHTML = Math.round(data.current.temp_c) + "&#176;" + "C | ";
      conditionOutput.innerHTML = data.current.condition.text;

      //Lägg till stadens namn
      nameOutput.innerHTML = data.location.name;

      //Lägg till väderdetaljerna
      pressureOutput.innerHTML = data.current.pressure_mb + " hPa";
      humidityOutput.innerHTML = data.current.humidity + "%";
      windOutput.innerHTML = data.current.wind_kph + " km/h";
      cloudOutput.innerHTML = data.current.cloud;
      visibilityOutput.innerHTML = data.current.vis_km + " km";
      uvOutput.innerHTML = data.current.uv + " / 10";
      precipOutput.innerHTML = data.current.precip_mm + " mm";
      feelslikeOutput.innerHTML =
        Math.round(data.current.feelslike_c) + "&#176;C";

      //Formaterar om datumet utifrån detta (2021-10-09 17:53) till: tid, dag, datum/månad - år
      const date = data.location.localtime;
      const y = parseInt(date.substr(0, 4));
      const m = parseInt(date.substr(5, 2));
      const d = parseInt(date.substr(8, 2));
      const time = date.substr(11);

      dateOutput.innerHTML = `${weekDays(d, m, y)} ${d}/${m} - ${y}`;
      timeOutput.innerHTML = time + " Lokal tid " + " |";

      //Standard tid på dagen
      let timeOfDay = "dag";

      //Ändra till natt ifall det är natt i staden du söker på
      if (data.current.is_day == 0) {
        timeOfDay = "natt";
      }

      //Hämta id för varje vädertillfäle
      const code = data.current.condition.code;

      if (code == 1000) {
        app.style.backgroundImage = `url(./bakgrunder/${timeOfDay}/klart.jpg)`;
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
        app.style.backgroundImage = `url(./bakgrunder/${timeOfDay}/molnigt.jpg)`;
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
        app.style.backgroundImage = `url(./bakgrunder/${timeOfDay}/regnigt.jpg)`;
        //Snöigt väder
      } else {
        app.style.backgroundImage = `url(./bakgrunder/${timeOfDay}/snöigt.jpg)`;
      }
    })

    //Varning ifall staden inte kan hittas
    .catch(() => {
      alert("Staden hittades inte, försök igen");
    });
}
fetchWeatherData();

app.style.opacity = "1";
