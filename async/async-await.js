/* ------- Exempel 1---------- */

// function printData(title) {
//   const pEl = document.createElement('p')
//   pEl.textContent = title
//   document.body.appendChild(pEl)
// }

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(res => {
//     return res.json()
//   })
//   .then(data => {
//     data.forEach(item => {
//       printData(item.title)
//     })
//   })
//   .catch(err => console.log(err))

/* ------- Exempel 2---------- */

function printWeather() {
  document.querySelector("#weather-container").innerHTML = "";
  fetch(
    "http://api.weatherapi.com/v1/current.json?key=f74998a310f641339ec123218220104%20&q=Sweden,%20Gothenburg&aqi=no"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const location = data.location.country;
      const iconUrl = data.current.condition.icon;
      const weather = data.current.temp_c;
      const time = data.location.localtime;
      const weatherCondition = data.current.condition.text;

      const weatherContainer = document.querySelector("#weather-container");

      const imgEl = document.createElement("img");
      imgEl.setAttribute("src", iconUrl);

      const textEl = document.createElement("h2");
      textEl.textContent = weather;

      const textEl2 = document.createElement("h2");
      textEl2.textContent = location;

      const textEl3 = document.createElement("h2");
      textEl3.textContent = time;

      const textEl4 = document.createElement("h2");
      textEl4.textContent = weatherCondition;

      weatherContainer.appendChild(imgEl);
      weatherContainer.appendChild(textEl);
      weatherContainer.appendChild(textEl2);
      weatherContainer.appendChild(textEl3);
      weatherContainer.appendChild(textEl4);
    })
    .catch((err) => console.log(err));
}

document.querySelector("#btn").addEventListener("click", printWeather);

function printWeatherSpain() {
  document.querySelector("#weather-container1").innerHTML = "";
  fetch(
    "http://api.weatherapi.com/v1/current.json?key=f74998a310f641339ec123218220104&q=Spain&aqi=no"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const location1 = data.location.country;
      const iconUrl1 = data.current.condition.icon;
      const weather1 = data.current.temp_c;
      const time = data.location.localtime;
      const weatherCondition = data.current.condition.text;

      const weatherContainer = document.querySelector("#weather-container1");

      const imgEl = document.createElement("img");
      imgEl.setAttribute("src", iconUrl1);

      const textEl = document.createElement("h2");
      textEl.textContent = weather1;

      const textEl2 = document.createElement("h2");
      textEl2.textContent = location1;

      const textEl3 = document.createElement("h2");
      textEl3.textContent = time;

      const textEl4 = document.createElement("h2");
      textEl4.textContent = weatherCondition;

      weatherContainer.appendChild(imgEl);
      weatherContainer.appendChild(textEl);
      weatherContainer.appendChild(textEl2);
      weatherContainer.appendChild(textEl3);
      weatherContainer.appendChild(textEl4);
    })
    .catch((err) => console.log(err));
}

document.querySelector("#btn1").addEventListener("click", printWeatherSpain);
