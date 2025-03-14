document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "0689cb3d0c818afb7c838e086cd9671f";
    const cityInput = document.querySelector("#cityInput");
    const getWeatherBtn = document.querySelector("#getWeatherBtn");
    const weatherInfo = document.querySelector("#weatherInfo");

    getWeatherBtn.addEventListener("click", function () {
        const city = cityInput.value.trim();
        if (city === "") {
            weatherInfo.innerHTML = `<p style="color:white;">Please enter a city name.</p>`;
            return;
        }
        fetchWeather(city);
    });

    async function fetchWeather(city) {
        try {
            let response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
            );
            let data = await response.json();

            if (response.ok) {
                displayWeather(data);
                setDynamicBackground(data.weather[0].main); 
            } else {
                weatherInfo.innerHTML = `<p style="color:white;">City not found. Try again!</p>`;
            }
        } catch (error) {
            console.log("Error fetching weather data:", error);
            weatherInfo.innerHTML = `<p style="color:red;">Something went wrong. Try again later.</p>`;
        }
    }

    function displayWeather(data) {
        weatherInfo.innerHTML = `
            <h2>Weather in ${data.name}</h2>
            <p> Temperature: ${data.main.temp}°C</p>
            <p> Humidity: ${data.main.humidity}%</p>
            <p> Condition: ${data.weather[0].description}</p>
        `;
    }

    function setDynamicBackground(weatherMain) {
        let bgUrl = '';

        switch (weatherMain.toLowerCase()) {
            case 'clear':
                bgUrl = 'images/clear.jpg';
                break;
            case 'clouds':                                                              
                bgUrl = 'images/cloud.jpg';
                break;
            case 'rain':
            case 'drizzle':
                bgUrl = 'images/rain.jpg';
                break;
            case 'snow':
                bgUrl = 'images/snow.jpg';
                break;
            case 'thunderstorm':
                bgUrl = 'images/thunder.jpg';
                break;
            case 'mist':
            case 'fog':
            case 'haze':
                bgUrl = 'images/fog.jpg';
                break;
            default:
                bgUrl = 'images/default.jpg';
        }

        document.body.style.backgroundImage = `url('${bgUrl}')`;
        document.body.style.transition = "background-image 0.5s ease-in-out"; 
    }

    const menuBtn = document.getElementById("menuBtn");
    const closeBtn = document.getElementById("closeBtn");
    const menu = document.getElementById("menu");
    const backdrop = document.getElementById("backdrop");
    const body = document.body;

    menuBtn.addEventListener("click", () => {
        body.classList.add("menu-active");
    });

    closeBtn.addEventListener("click", () => {
        body.classList.remove("menu-active");
    });

    backdrop.addEventListener("click", () => {
        body.classList.remove("menu-active");
    });
});
