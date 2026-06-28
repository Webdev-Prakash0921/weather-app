const apikey = "597b86c7c5bd900d5947ad3073afeb05";

function getWeather() {
    const city = document.getElementById("cityInput").value;

    if (city === "") {
        document.getElementById("weatherResult").innerHTML = "Please enter a city name!";
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data.cod === 200) {
            document.getElementById("weatherResult").innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p> 🌡️ Temperature: ${data.main.temp}°C</p>
            <p> ☁️ Weather: ${data.weather[0].description}</p>
            <p> 💧 Humidity: ${data.main.humidity}%</p>`;
            
        } else {
            document.getElementById("weatherResult").innerHTML = "City not Found!";
        }
    })
    .catch(error => {
        document.getElementById("weatherResult").innerHTML = "Something went wrong!";
    });
}