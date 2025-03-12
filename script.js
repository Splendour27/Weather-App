let cityInput =
document.querySelector("#cityInput");
let getWeatherBtn =
document.querySelector("getWeatherBtn");

const apiKey= "2f8ee0ef02efee4839075a7d7189e73"

async function fetchWeather(city) {
    try {
        let response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        let data = await response.json();

        if (response.ok) {
            displayWeather(data);
        }
        
        else {
            weatherInfo.innerHTML = `<p style="color:red;">City not found. Try again!</p>`;
        }
    } 
    catch  (error) {
        conhsole.log("Error fetching weather data:", error);
        weatherInfo.innerHTML = `<p style="color:red;">Something went wrong. Try again later.</p>`;
    }}

    function displayWeather(data) {
        weatherInfo.innerHTML = `
            <h2>Weather in ${data.name}</h2>
            <p> Temperature: ${data.main.temp}°C</p>
            <p> Humidity: ${data.main.humidity}%</p>
            <p> Condition: ${data.weather[0].description}</p>
        `;}




