const API_KEY = '21253193c19828273df95f6fa9bad02d'
const API_URL = 'https://api.openweathermap.org/data/2.5/'

const search = document.querySelector('.input');
const city = document.querySelector('.city');
const country = document.querySelector('.country');
const date = document.querySelector('.date');
const month = document.querySelector('.month');
const day = document.querySelector('.day');
const degree = document.querySelector('.degree span');
const img = document.querySelector('.img');
const position = document.querySelector('.position');
const humidity = document.querySelector('.humidity span');
const wind = document.querySelector('.wind span');
const box = document.querySelector('.box');

search.addEventListener('keypress', function (e) {
  if (e.keyCode == 13) {
    fetch(`${API_URL}weather?q=${search.value}&appid=${API_KEY}`)
      .then((res) => res.json())
      .then((data)=>info(data))
  }
})


function info(data) {
  city.innerHTML = data.name
  country.innerHTML = data.sys.country
  degree.innerHTML = Math.round(data.main.temp - 273.15)
  humidity.innerHTML = data.main.humidity + '%'
  wind.innerHTML = data.wind.speed + 'mph'
  position.innerHTML = data.weather[0].main
  setIcon(data)
  box.style.display = 'block'
}

function setIcon(data) {
  let icon = data.weather[0].icon
  img.setAttribute('src', `http://openweathermap.org/img/wn/${icon}@2x.png`)
}

function time() {
  let dataTime = new Date()
  let month = ['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  date.innerHTML = dataTime.getDate() < 10 ? '0' + dataTime.getDate() : dataTime.getDate()
  month.innerHTML = month[dataTime.getMonth()]
  day.innerHTML = days[dataTime.getDay()]
}

time()