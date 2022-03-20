const API_KEY = "9fc16af12f3217a3f63a2ddf3ef3c229";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then((response) => response.json()).then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} ${Math.round(data.main.temp)}º`;
    });
}

function onGeoError() {
    alert("Can't find you, No weather for you. ");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
