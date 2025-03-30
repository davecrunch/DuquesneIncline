document.addEventListener("DOMContentLoaded", function () {
    const weatherContainer = document.getElementById("weather");

    // Fetch the weather data from Weather.gov API
    fetch("https://api.weather.gov/gridpoints/PBZ/38,52/forecast")
        .then(response => {
            if (!response.ok) {
                throw new Error("Weather data not available");
            }
            return response.json();
        })
        .then(data => {
            // Get the first period (current weather forecast)
            let forecast = data.properties.periods[0];

            weatherContainer.innerHTML = `
                <h3>${forecast.name}</h3>
                <h3><b>Temperature:</b> ${forecast.temperature}°${forecast.temperatureUnit}</h3>
                <h3><b>Condition:</b> ${forecast.shortForecast}</h3>
                <img src="${forecast.icon}" alt="Weather Icon">
            `;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            weatherContainer.innerHTML = `<p>Weather data not available.</p>`;
        });
});

//API used from weather.gov, ChatGPT used to understand how to use the API.
//ChatGPT helped me with line 14 and the error messages.