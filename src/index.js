import UI from "./modules/UI";
import getWeather from "./modules/getWeather";
import tempConversion from "./modules/conversion";

// Default city => show this weather when loaded
document.addEventListener('DOMContentLoaded', async() => {
    const weatherData = await getWeather.getData('Zagreb')
    UI.setWeather(weatherData)
})

// Prevent page refreshing when form is submitted
const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
})

// Search for new city weather
const searchBtn = document.querySelector('.search-btn')
searchBtn.addEventListener('click', async() => {
    const input = document.querySelector('input').value
    if (input === '') return
    const weatherData = await getWeather.getData(input)
    UI.setWeather(weatherData)
    form.reset() 
})

// Convert Celsius < -- > Fahrenheit
const switchBtn = document.querySelector('.switch')
switchBtn.addEventListener('click', tempConversion.toggleUnits)