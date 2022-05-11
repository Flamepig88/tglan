//Hämta alla element från HTML filen
const app = document.querySelector(".weather-container");
const temp = document.querySelector(".temp");
const dateOutput = document.querySelector(".date");
const timeOutput = document.querySelector(".time");
const conditionOutput = document.querySelector(".condition");
const nameOutput = document.querySelector(".name");
const icon = document.querySelector(".icon");
const pressureOutput = document.querySelector(".pressure");
const humidityOutput = document.querySelector(".humidity");
const windOutput = document.querySelector(".wind");
const form = document.getElementById("location-input");
const search = document.querySelector(".search");
const btn = document.querySelector(".submit");
const cities = document.querySelectorAll(".city");
const hour1 = document.querySelector(".temp1");
const hour2 = document.querySelector(".temp2");
const hour3 = document.querySelector(".temp3");
const hour4 = document.querySelector(".temp4");
const hour5 = document.querySelector(".temp5");
const hour6 = document.querySelector(".temp6");
const hour7 = document.querySelector(".temp7");
const hour8 = document.querySelector(".temp8");
const hour9 = document.querySelector(".temp9");
const hour10 = document.querySelector(".temp10");
const hour11 = document.querySelector(".temp11");
const hour12 = document.querySelector(".temp12");
const hour13 = document.querySelector(".temp13");
const hour14 = document.querySelector(".temp14");
const hour15 = document.querySelector(".temp15");
const hour16 = document.querySelector(".temp16");
const hour17 = document.querySelector(".temp17");
const hour18 = document.querySelector(".temp18");
const hour19 = document.querySelector(".temp19");
const hour20 = document.querySelector(".temp20");
const hour21 = document.querySelector(".temp21");
const hour22 = document.querySelector(".temp22");
const hour23 = document.querySelector(".temp23");
const hour24 = document.querySelector(".temp24");

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
    alert("Ange en giltlig stad");
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

//Funktion som returnerar veckodagen istället för bara ett datum
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
      temp.innerHTML = Math.round(data.current.temp_c) + "&#176;";
      conditionOutput.innerHTML = data.current.condition.text;

      //Timmar

      const hourForecasts = data.forecast.forecastday[0].hour;

      const forecastDataList = hourForecasts.map((f) => {
        return f.temp_c;
      });

      //varje timme
      hour1.innerHTML =
        Math.round(data.forecast.forecastday[0].hour[0].temp_c) + "&#176;";
      hour2.innerHTML =
        Math.round(data.forecast.forecastday[0].hour[1].temp_c) + "&#176;";
      hour3.innerHTML =
        Math.round(data.forecast.forecastday[0].hour[2].temp_c) + "&#176;";
      hour4.innerHTML =
        Math.round(data.forecast.forecastday[0].hour[3].temp_c) + "&#176;";
      hour5.innerHTML =
        Math.round(data.forecast.forecastday[0].hour[4].temp_c) + "&#176;";
      hour6.innerHTML =
        Math.round(data.forecast.forecastday[0].hour[5].temp_c) + "&#176;";
      hour7.innerHTML =
        Math.round(data.forecast.forecastday[0].hour[6].temp_c) + "&#176;";
      hour8.innerHTML =
        Math.round(data.forecast.forecastday[0].hour[7].temp_c) + "&#176;";
      hour9.innerHTML =
        Math.round(data.forecast.forecastday[0].hour[8].temp_c) + "&#176;";
      hour10.innerHTML =
        Math.round(data.forecast.forecastday[0].hour[9].temp_c) + "&#176;";
      hour11.innerHTML =
        Math.round(data.forecast.forecastday[0].hour[10].temp_c) + "&#176;";
      hour12.innerHTML =
        Math.round(data.forecast.forecastday[0].hour[11].temp_c) + "&#176;";
      hour13.innerHTML =
        Math.round(data.forecast.forecastday[0].hour[12].temp_c) + "&#176;";
      hour14.innerHTML =
        Math.round(data.forecast.forecastday[0].hour[13].temp_c) + "&#176;";
      hour15.innerHTML =
        Math.round(data.forecast.forecastday[0].hour[14].temp_c) + "&#176;";
      hour16.innerHTML =
        Math.round(data.forecast.forecastday[0].hour[15].temp_c) + "&#176;";
      hour17.innerHTML =
        Math.round(data.forecast.forecastday[0].hour[16].temp_c) + "&#176;";
      hour18.innerHTML =
        Math.round(data.forecast.forecastday[0].hour[17].temp_c) + "&#176;";
      hour19.innerHTML =
        Math.round(data.forecast.forecastday[0].hour[18].temp_c) + "&#176;";
      hour20.innerHTML =
        Math.round(data.forecast.forecastday[0].hour[19].temp_c) + "&#176;";
      hour21.innerHTML =
        Math.round(data.forecast.forecastday[0].hour[20].temp_c) + "&#176;";
      hour22.innerHTML =
        Math.round(data.forecast.forecastday[0].hour[21].temp_c) + "&#176;";
      hour23.innerHTML =
        Math.round(data.forecast.forecastday[0].hour[22].temp_c) + "&#176;";
      hour24.innerHTML =
        Math.round(data.forecast.forecastday[0].hour[23].temp_c) + "&#176;";

      // hourly.innerHTML = forecastDataList;

      // console.log(forecastDataList);

      // hourForecasts.forEach((hourlyData) => {
      //   const listItemDOM = hourlyWeatherContainer
      //     .generateListItemDOM(hourlyData)
      //     .appendChild(listItemDOM);
      // });

      //Timmar
      //hourly.innerHTML = data.forecast.forecastday[0].hour[0].temp_c;

      const date = data.location.localtime;
      const y = parseInt(date.substr(0, 4));
      const m = parseInt(date.substr(8, 2));
      const d = parseInt(date.substr(5, 2));
      const time = date.substr(11);

      /*Original format: 2021-10-09 17:53*/
      /*New Format: 17:53 - Friday 9, 10 2021*/
      dateOutput.innerHTML = `${dayOfTheWeek(d, m, y)} ${m}/${d} - ${y}`;
      timeOutput.innerHTML = time;

      //Lägg till stadens namn
      nameOutput.innerHTML = data.location.name;

      //Hämta url till ikonen och völj ut en del av den
      const iconId = data.current.condition.icon.substr(
        "//cdn.weatherapi.com/weather/64x64/".length
      );

      //Hänvisa till din egen mapp. || .length ändras till ./mappens namn + iconId (bildens namn)/
      icon.src = "./icons/" + iconId;

      //Lägg til väderdetaljerna
      pressureOutput.innerHTML = data.current.pressure_mb + " hPa";
      humidityOutput.innerHTML = data.current.humidity + "%";
      windOutput.innerHTML = data.current.wind_kph + " km/h";

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
        app.style.backgroundImage = `url(./bakgrunder/${timeOfDay}/klart.jpg)`;

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
        app.style.backgroundImage = `url(./bakgrunder/${timeOfDay}/molnigt.jpg)`;
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
        app.style.backgroundImage = `url(./bakgrunder/${timeOfDay}/regnigt.jpg)`;
        btn.style.background = "#647d75";
        if (timeOfDay == "night") {
          btn.style.background = "#325c80";
        }
        //Snöigt väder
      } else {
        app.style.backgroundImage = `url(./bakgrunder/${timeOfDay}/snöigt.jpg)`;
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
