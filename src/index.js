import UI from "./modules/UI";
import getWeather from "./modules/getWeather";

document.addEventListener('DOMContentLoaded', async() => {
    const weatherData = await getWeather.getData('Zagreb')
    UI.setWeather(weatherData)
})

