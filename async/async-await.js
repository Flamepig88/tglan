const button = document.querySelector(".button");
const inputValue = document.querySelector(".inputValue");

button.addEventListener("click", function () {
  fetch(
    "http://api.weatherapi.com/v1/current.json?key=f74998a310f641339ec123218220104%20&q=" +
      inputValue.value +
      "&aqi=no&lang=sv"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const weatherContainer = document.querySelector(".weather-container");

      // const countryName = data.location.country;
      const cityName = data.location.name;
      const iconUrl = data.current.condition.icon;
      const weather = data.current.temp_c;
      const time = data.location.localtime;
      const weatherCondition = data.current.condition.text;
      const feelsLike = data.current.feelslike_c;
      const humidity = data.current.humidity;
      const uv = data.current.uv;

      const imgEl = document.createElement("img");
      imgEl.setAttribute("src", iconUrl);

      const textEl = document.createElement("h2");
      textEl.textContent =
        weather + " °C / " + "Känns som " + feelsLike + " °C";

      // const textEl2 = document.createElement("h2");
      // textEl2.textContent = countryName;

      const textEl6 = document.createElement("h1");
      textEl6.textContent = cityName;

      const textEl3 = document.createElement("h2");
      textEl3.textContent = time;

      const textEl4 = document.createElement("h2");
      textEl4.textContent = weatherCondition;

      // const textEl5 = document.createElement("h2");
      // textEl5.textContent = 'Känns som ' + feelsLike + ' °C';

      const textEl7 = document.createElement("h2");
      textEl7.textContent = "Luftfuktighet: " + humidity + "%";

      const textEl8 = document.createElement("h2");
      textEl8.textContent = "UV-strålning: " + uv;

      weatherContainer.appendChild(imgEl);
      weatherContainer.appendChild(textEl6);
      weatherContainer.appendChild(textEl);
      // weatherContainer.appendChild(textEl5);
      // weatherContainer.appendChild(textEl2);
      weatherContainer.appendChild(textEl3);
      weatherContainer.appendChild(textEl4);
      weatherContainer.appendChild(textEl7);
      weatherContainer.appendChild(textEl8);
    });
  document.querySelector(".weather-container").innerHTML = "";
});

//hjälp av beni
