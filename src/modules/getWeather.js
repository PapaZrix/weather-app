const getWeather = (() => {
    function convertData(data) {
        const {
            name: city,
            sys: { country },
            main: { temp, temp_max, temp_min, feels_like, humidity},
            wind: { speed },
            weather: [{ icon, main, description }],
        } = data
        return { city, country, temp, temp_max, temp_min, feels_like, humidity, speed, icon, main, description }
    }

    async function getData(city) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=b534890fb1f0d8b1b72ad9ff4c82520e`
        try {
            const response = await fetch(url, {mode: 'cors'})
            if (!response.ok) {
                throw new Error(`City ${city} not found`)
            }
            const data = convertData(await response.json())
            return data
        } catch(error) {
            // alert(error)
            console.log(error)
            return
        }
    }

    return { getData }
})()

export default getWeather