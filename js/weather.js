const API_KEY = "9f5dcfac0cee441ab6f143e60271ecc0";
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lns = position.coords.longitude;
  console.log("현재위치", lat, lns);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lns}&appid=${API_KEY}`;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoErr() {
  alert("Cant fint you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);
