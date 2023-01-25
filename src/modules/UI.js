const UI = (() => {
    function setWeather(weatherData) {
        if (!weatherData) return

        const container = document.querySelector('.container')
        container.innerHTML = ''

        container.innerHTML += `
        <div class="top">
            <div class="left">
                <h1 class="temp">${weatherData.temp}°</h1>
                <p>${weatherData.city}, ${weatherData.country}</p>
            </div>
            <div class="middle">
                <div class="non-mobile"><img src="https://openweathermap.org/img/wn/${weatherData.icon}@2x.png" alt=""></div>
                <div class="mobile">
                    <h1 class="weather">${weatherData.main}</h1>
                    <p class="description">${weatherData.description}</p>
                </div>
            </div>
            <div class="right">
                <div class="non-mobile">
                    <h1 class="weather">${weatherData.main}</h1>
                    <p class="description">${weatherData.description}</p>
                </div>
                <img class="mobile" src="https://openweathermap.org/img/wn/${weatherData.icon}@2x.png" alt="">
            </div>
        </div>
        <div class="bottom">
            <div class="info">
                <p>Feels like</p>
                <p class="feels">${weatherData.feels_like}°</p>
            </div>
            <div class="info">
                <p class="humidity">Humidity</p>
                <p>${weatherData.humidity}%</p>
            </div>
            <div class="info">
                <p class="wind">Wind</p>
                <p>${weatherData.speed} m/s</p>
            </div>
            <div class="info">
                <p>Min temp</p>
                <p class="min">${weatherData.temp_min}°</p>
            </div>
            <div class="info">
                <p>Max temp</p>
                <p class="max">${weatherData.temp_max}°</p>
            </div>
        </div>`
    }

    return { setWeather }
})()

export default UI