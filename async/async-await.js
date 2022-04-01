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
    document.querySelector('#weather-container').innerHTML = ''
    fetch('http://api.weatherapi.com/v1/current.json?key=f74998a310f641339ec123218220104%20&q=Sweden,%20Gothenburg&aqi=no')
      .then(res => {
        return res.json()
      })
      .then(data => {
        const iconUrl = data.icon_url
        const joke = data.value
  
        const weatherContainer = document.querySelector('#weather-container')
  
        const imgEl = document.createElement('img')
        imgEl.setAttribute('src', iconUrl)
  
        const textEl = document.createElement('h2')
        textEl.textContent = weather
  
        weatherContainer.appendChild(imgEl)
        weatherContainer.appendChild(textEl)
      })
      .catch(err => console.log(err))
  }
  
  document.querySelector('#btn').addEventListener('click', printWeather)