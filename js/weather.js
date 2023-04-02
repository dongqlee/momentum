const API_KEY = "76acc525f0823946782163644c560d3c";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`
  fetch(url)
  .then(response => response.json())
  .then(data => {
    const nowLocationWeather = document.getElementById('now_location_weather');
    if(data.main.temp > 100) {
      data.main.temp = Math.round((data.main.temp.toFixed(2) - 273.15)*100) / 100;
    };
    nowLocationWeather.innerText = data.name + " / " + data.weather[0].main + " / " + data.main.temp + " °C";
    
  });
}
function onGeoErr() {
  alert("위치를 찾을 수 없습니다.");
}

navigator.geolocation.getCurrentPosition( onGeoOk, onGeoErr)