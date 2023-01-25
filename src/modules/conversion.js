const tempConversion = (() => {
    const toggleUnits = () => {
        const temp = document.querySelector('.temp')
        const feelsLike = document.querySelector('.feels')
        const minTemp = document.querySelector('.min')
        const maxTemp = document.querySelector('.max')
        let conversionElements = [temp, feelsLike, minTemp, maxTemp]

        // Make a new array and make it ignore the temperature symbol 
        let temps = conversionElements.map(
            (ele) => ele.textContent.match(/-?[\d\.]+(?=[°])/)[0]
        )

        conversionElements.forEach((element, index) => {
            let convertedTemp = convertUnits(temps[index])
            element.textContent = `${Math.round(convertedTemp * 100) / 100}°`
        })

        const switchBtn = document.querySelector('.switch')
        switchBtn.childNodes[0].classList.toggle('active')
        switchBtn.childNodes[2].classList.toggle('active')
    }

    const convertUnits = (temp) => {
        const switchBtn = document.querySelector('.switch')

        if (switchBtn.childNodes[0].classList.contains('active')) {
            return 1.8 * Number(temp) + 32
        } else if (switchBtn.childNodes[2].classList.contains('active')) {
            return (5 / 9) * (Number(temp) - 32)
        }
    }

    return { toggleUnits }
})()

export default tempConversion