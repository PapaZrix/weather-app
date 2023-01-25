import UI from "./modules/UI";
import getWeather from "./modules/getWeather";

document.addEventListener('DOMContentLoaded', async() => {
    const weatherData = await getWeather.getData('Zagreb')
    UI.setWeather(weatherData)
})

const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
})

const searchBtn = document.querySelector('.search-btn')
searchBtn.addEventListener('click', async() => {
    const input = document.querySelector('input').value
    if (input === '') return
    const weatherData = await getWeather.getData(input)
    UI.setWeather(weatherData)
    form.reset() 
})