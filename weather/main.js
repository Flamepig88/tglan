//Hämta alla element från HTML filen
const app = document.querySelector(".weather-container");
const temp = document.querySelector(".temp");
const dateOutput = document.querySelector(".date");
const timeOutput = document.querySelector(".time");
const conditionOutput = document.querySelector(".condition");
const nameOutput = document.querySelector(".name");
const icon = document.querySelector(".icon");
const cloudOutput = document.querySelector(".cloud");
const humidityOutput = document.querySelector(".humidity");
const windOutput = document.querySelector(".wind");
const form = document.getElementById("location-input");
const search = document.querySelector(".search");
const btn = document.querySelector(".submit");
const cities = document.querySelectorAll(".city");
const hourly = document.querySelector(".hour");

//Första staden som laddas in
let cityInput = "Södertälje";

//Lägger till event för varje stad i listan
cities.forEach((city) => {
  city.addEventListener("click", (e) => {
    //Ändra staden till den du väljer
    cityInput = e.target.innerHTML;
    //Hämtar all data från API
    fetchWeatherData();
    //Fade animation
    app.style.opacity = "0";
  });
});

//Submit event till formuläret
form.addEventListener("submit", (e) => {
  //Varning ifall input-fältet är tomt
  if (search.value.length == 0) {
    alert("Skriv in en giltlig stad");
  } else {
    //Byt till staden du har skrivit in
    cityInput = search.value;
    //Hämtar all data från API
    fetchWeatherData();
    //Ta bort all text från input-fältet
    search.value = "";
    //Fade animation
    app.style.opacity = "0";
  }
  e.preventDefault();
});

//Function som returnerar veckodagen istället för bara ett datum
function dayOfTheWeek(day, month, year) {
  const weekday = [
    "Söndag",
    "Måndag",
    "Tisdag",
    "Onsdag",
    "Torsdag",
    "Fredag",
    "Lördag",
  ];
  return weekday[new Date(`${day}/${month}/${year}`).getDay()];
}

// Funktion som hämtar all data från API
function fetchWeatherData() {
  fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=f74998a310f641339ec123218220104&q=${cityInput}&days=7&aqi=no&alerts=no&lang=sv`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      //Lägg till temperatur och väder
      temp.innerHTML = data.current.temp_c + "&#176;";
      conditionOutput.innerHTML = data.current.condition.text;

      const hourForecasts = data.forecast.forecastday[0].hour;

      const forecastDataList = hourForecasts.map((f) => {
        return f.temp_c;
      });

      console.log(forecastDataList);

      // hourForecasts.forEach((hourlyData) => {});

      //Timmar
      hourly.innerHTML = data.forecast.forecastday[0].hour[0].temp_c;

      /* Get the date and time from the city and extract 
    the day, month, year and time into individual variables*/
      const date = data.location.localtime;
      const y = parseInt(date.substr(0, 4));
      const m = parseInt(date.substr(8, 2));
      const d = parseInt(date.substr(5, 2));
      const time = date.substr(11);

      /*Reformat the date into somehing more 
    appealing and add it to the page*/
      /*Original format: 2021-10-09 17:53*/
      /*New Format: 17:53 - Friday 9, 10 2021*/
      dateOutput.innerHTML = `${dayOfTheWeek(d, m, y)} ${m}/${d} - ${y}`;
      timeOutput.innerHTML = time;

      //Lägg till stadens namn
      nameOutput.innerHTML = data.location.name;

      /*Get the corresponding icon url for 
    the weather and extract a part of it*/
      const iconId = data.current.condition.icon.substr(
        "//cdn.weatherapi.com/weather/64x64/".length
      );
      /*Reformat the icon url to your own 
    local folder path and add it to the page*/
      icon.src = "./icons/" + iconId;

      //Lägg til väderdetaljerna
      cloudOutput.innerHTML = data.current.cloud + "%";
      humidityOutput.innerHTML = data.current.humidity + "%";
      windOutput.innerHTML = data.current.wind_kph + "km/h";

      //Standard tid på dagen
      let timeOfDay = "dag";
      //Hämta id för varje vädertillfäle
      const code = data.current.condition.code;

      //Ändra till natt ifall det är natt i staden du söker på
      if (!data.current.is_day) {
        timeOfDay = "natt";
      }

      if (code == 1000) {
        //Ändrar bakgrundsbilden till klart väder ifall det är klart ute
        app.style.backgroundImage = `url(./images/${timeOfDay}/klart.jpg)`;

        //Ändra sök-knappens färg beroende på tid
        btn.style.background = "#e5ba92";

        if (timeOfDay == "night") {
          btn.style.background = "#181e27";
        }
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
        app.style.backgroundImage = `url(./images/${timeOfDay}/molnigt.jpg)`;
        btn.style.background = "#fa6d1b";
        if (timeOfDay == "night") {
          btn.style.background = "#181e27";
        }
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
        app.style.backgroundImage = `url(./images/${timeOfDay}/regnigt.jpg)`;
        btn.style.background = "#647d75";
        if (timeOfDay == "night") {
          btn.style.background = "#325c80";
        }
        //Snöigt väder
      } else {
        app.style.backgroundImage = `url(./images/${timeOfDay}/snöigt.jpg)`;
        btn.style.background = "#4d72aa";
        if (timeOfDay == "night") {
          btn.style.background = "#1b1b1b";
        }
      }
      //Fade animation
      app.style.opacity = "1";
    })

    //Varning ifall staden inte kan hittas
    .catch(() => {
      alert("Staden hittades inte, försök igen");

      //Fade animation
      app.style.opacity = "1";
    });
}

//Hämtar all data från API när sidan laddas in
fetchWeatherData();

//Fade animaiton
app.style.opacity = "1";
