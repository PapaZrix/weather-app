/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);

/***/ }),

/***/ "./src/modules/conversion.js":
/*!***********************************!*\
  !*** ./src/modules/conversion.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tempConversion);

/***/ }),

/***/ "./src/modules/getWeather.js":
/*!***********************************!*\
  !*** ./src/modules/getWeather.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeather);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/UI */ "./src/modules/UI.js");
/* harmony import */ var _modules_getWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/getWeather */ "./src/modules/getWeather.js");
/* harmony import */ var _modules_conversion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/conversion */ "./src/modules/conversion.js");




// Default city => show this weather when loaded
document.addEventListener('DOMContentLoaded', async() => {
    const weatherData = await _modules_getWeather__WEBPACK_IMPORTED_MODULE_1__["default"].getData('Zagreb')
    _modules_UI__WEBPACK_IMPORTED_MODULE_0__["default"].setWeather(weatherData)
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
    const weatherData = await _modules_getWeather__WEBPACK_IMPORTED_MODULE_1__["default"].getData(input)
    _modules_UI__WEBPACK_IMPORTED_MODULE_0__["default"].setWeather(weatherData)
    form.reset() 
})

// Convert Celsius < -- > Fahrenheit
const switchBtn = document.querySelector('.switch')
switchBtn.addEventListener('click', _modules_conversion__WEBPACK_IMPORTED_MODULE_2__["default"].toggleUnits)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxpQkFBaUI7QUFDcEQscUJBQXFCLGlCQUFpQixJQUFJLG9CQUFvQjtBQUM5RDtBQUNBO0FBQ0Esc0ZBQXNGLGlCQUFpQjtBQUN2RztBQUNBLDBDQUEwQyxpQkFBaUI7QUFDM0QsNkNBQTZDLHdCQUF3QjtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxpQkFBaUI7QUFDM0QsNkNBQTZDLHdCQUF3QjtBQUNyRTtBQUNBLDZFQUE2RSxpQkFBaUI7QUFDOUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyx1QkFBdUI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsbUJBQW1CO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxxQkFBcUI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHFCQUFxQjtBQUN0RDtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLENBQUM7O0FBRUQsaUVBQWU7Ozs7Ozs7Ozs7Ozs7O0FDdkRmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQ0FBcUMsc0NBQXNDO0FBQzNFLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2IsQ0FBQzs7QUFFRCxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7QUNwQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUztBQUM1QixvQkFBb0IsK0NBQStDO0FBQ25FLG9CQUFvQixPQUFPO0FBQzNCLHdCQUF3Qix5QkFBeUI7QUFDakQsVUFBVTtBQUNWLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBLHlFQUF5RSxLQUFLO0FBQzlFO0FBQ0EsK0NBQStDLGFBQWE7QUFDNUQ7QUFDQSx3Q0FBd0MsTUFBTTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2IsQ0FBQzs7QUFFRCxpRUFBZTs7Ozs7O1VDL0JmO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ044QjtBQUNnQjtBQUNJOztBQUVsRDtBQUNBO0FBQ0EsOEJBQThCLG1FQUFrQjtBQUNoRCxJQUFJLDhEQUFhO0FBQ2pCLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsbUVBQWtCO0FBQ2hELElBQUksOERBQWE7QUFDakI7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxvQ0FBb0MsdUVBQTBCLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvY29udmVyc2lvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2dldFdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBVSSA9ICgoKSA9PiB7XG4gICAgZnVuY3Rpb24gc2V0V2VhdGhlcih3ZWF0aGVyRGF0YSkge1xuICAgICAgICBpZiAoIXdlYXRoZXJEYXRhKSByZXR1cm5cblxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJylcbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnXG5cbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCArPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0b3BcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0XCI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwidGVtcFwiPiR7d2VhdGhlckRhdGEudGVtcH3CsDwvaDE+XG4gICAgICAgICAgICAgICAgPHA+JHt3ZWF0aGVyRGF0YS5jaXR5fSwgJHt3ZWF0aGVyRGF0YS5jb3VudHJ5fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1pZGRsZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub24tbW9iaWxlXCI+PGltZyBzcmM9XCJodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHt3ZWF0aGVyRGF0YS5pY29ufUAyeC5wbmdcIiBhbHQ9XCJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9iaWxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cIndlYXRoZXJcIj4ke3dlYXRoZXJEYXRhLm1haW59PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPiR7d2VhdGhlckRhdGEuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm9uLW1vYmlsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJ3ZWF0aGVyXCI+JHt3ZWF0aGVyRGF0YS5tYWlufTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj4ke3dlYXRoZXJEYXRhLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwibW9iaWxlXCIgc3JjPVwiaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7d2VhdGhlckRhdGEuaWNvbn1AMngucG5nXCIgYWx0PVwiXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3R0b21cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+XG4gICAgICAgICAgICAgICAgPHA+RmVlbHMgbGlrZTwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZlZWxzXCI+JHt3ZWF0aGVyRGF0YS5mZWVsc19saWtlfcKwPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiaHVtaWRpdHlcIj5IdW1pZGl0eTwvcD5cbiAgICAgICAgICAgICAgICA8cD4ke3dlYXRoZXJEYXRhLmh1bWlkaXR5fSU8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ3aW5kXCI+V2luZDwvcD5cbiAgICAgICAgICAgICAgICA8cD4ke3dlYXRoZXJEYXRhLnNwZWVkfSBtL3M8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+XG4gICAgICAgICAgICAgICAgPHA+TWluIHRlbXA8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtaW5cIj4ke3dlYXRoZXJEYXRhLnRlbXBfbWlufcKwPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxuICAgICAgICAgICAgICAgIDxwPk1heCB0ZW1wPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibWF4XCI+JHt3ZWF0aGVyRGF0YS50ZW1wX21heH3CsDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5gXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc2V0V2VhdGhlciB9XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IFVJIiwiY29uc3QgdGVtcENvbnZlcnNpb24gPSAoKCkgPT4ge1xuICAgIGNvbnN0IHRvZ2dsZVVuaXRzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB0ZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXAnKVxuICAgICAgICBjb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVlbHMnKVxuICAgICAgICBjb25zdCBtaW5UZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1pbicpXG4gICAgICAgIGNvbnN0IG1heFRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWF4JylcbiAgICAgICAgbGV0IGNvbnZlcnNpb25FbGVtZW50cyA9IFt0ZW1wLCBmZWVsc0xpa2UsIG1pblRlbXAsIG1heFRlbXBdXG5cbiAgICAgICAgLy8gTWFrZSBhIG5ldyBhcnJheSBhbmQgbWFrZSBpdCBpZ25vcmUgdGhlIHRlbXBlcmF0dXJlIHN5bWJvbCBcbiAgICAgICAgbGV0IHRlbXBzID0gY29udmVyc2lvbkVsZW1lbnRzLm1hcChcbiAgICAgICAgICAgIChlbGUpID0+IGVsZS50ZXh0Q29udGVudC5tYXRjaCgvLT9bXFxkXFwuXSsoPz1bwrBdKS8pWzBdXG4gICAgICAgIClcblxuICAgICAgICBjb252ZXJzaW9uRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGxldCBjb252ZXJ0ZWRUZW1wID0gY29udmVydFVuaXRzKHRlbXBzW2luZGV4XSlcbiAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKGNvbnZlcnRlZFRlbXAgKiAxMDApIC8gMTAwfcKwYFxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHN3aXRjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2l0Y2gnKVxuICAgICAgICBzd2l0Y2hCdG4uY2hpbGROb2Rlc1swXS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxuICAgICAgICBzd2l0Y2hCdG4uY2hpbGROb2Rlc1syXS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxuICAgIH1cblxuICAgIGNvbnN0IGNvbnZlcnRVbml0cyA9ICh0ZW1wKSA9PiB7XG4gICAgICAgIGNvbnN0IHN3aXRjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2l0Y2gnKVxuXG4gICAgICAgIGlmIChzd2l0Y2hCdG4uY2hpbGROb2Rlc1swXS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICByZXR1cm4gMS44ICogTnVtYmVyKHRlbXApICsgMzJcbiAgICAgICAgfSBlbHNlIGlmIChzd2l0Y2hCdG4uY2hpbGROb2Rlc1syXS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICByZXR1cm4gKDUgLyA5KSAqIChOdW1iZXIodGVtcCkgLSAzMilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IHRvZ2dsZVVuaXRzIH1cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgdGVtcENvbnZlcnNpb24iLCJjb25zdCBnZXRXZWF0aGVyID0gKCgpID0+IHtcbiAgICBmdW5jdGlvbiBjb252ZXJ0RGF0YShkYXRhKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIG5hbWU6IGNpdHksXG4gICAgICAgICAgICBzeXM6IHsgY291bnRyeSB9LFxuICAgICAgICAgICAgbWFpbjogeyB0ZW1wLCB0ZW1wX21heCwgdGVtcF9taW4sIGZlZWxzX2xpa2UsIGh1bWlkaXR5fSxcbiAgICAgICAgICAgIHdpbmQ6IHsgc3BlZWQgfSxcbiAgICAgICAgICAgIHdlYXRoZXI6IFt7IGljb24sIG1haW4sIGRlc2NyaXB0aW9uIH1dLFxuICAgICAgICB9ID0gZGF0YVxuICAgICAgICByZXR1cm4geyBjaXR5LCBjb3VudHJ5LCB0ZW1wLCB0ZW1wX21heCwgdGVtcF9taW4sIGZlZWxzX2xpa2UsIGh1bWlkaXR5LCBzcGVlZCwgaWNvbiwgbWFpbiwgZGVzY3JpcHRpb24gfVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldERhdGEoY2l0eSkge1xuICAgICAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JnVuaXRzPW1ldHJpYyZBUFBJRD1iNTM0ODkwZmIxZjBkOGIxYjcyYWQ5ZmY0YzgyNTIwZWBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7bW9kZTogJ2NvcnMnfSlcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENpdHkgJHtjaXR5fSBub3QgZm91bmRgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGNvbnZlcnREYXRhKGF3YWl0IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIHJldHVybiBkYXRhXG4gICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIGFsZXJ0KGVycm9yKVxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IGdldERhdGEgfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBnZXRXZWF0aGVyIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgVUkgZnJvbSBcIi4vbW9kdWxlcy9VSVwiO1xuaW1wb3J0IGdldFdlYXRoZXIgZnJvbSBcIi4vbW9kdWxlcy9nZXRXZWF0aGVyXCI7XG5pbXBvcnQgdGVtcENvbnZlcnNpb24gZnJvbSBcIi4vbW9kdWxlcy9jb252ZXJzaW9uXCI7XG5cbi8vIERlZmF1bHQgY2l0eSA9PiBzaG93IHRoaXMgd2VhdGhlciB3aGVuIGxvYWRlZFxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGFzeW5jKCkgPT4ge1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgZ2V0V2VhdGhlci5nZXREYXRhKCdaYWdyZWInKVxuICAgIFVJLnNldFdlYXRoZXIod2VhdGhlckRhdGEpXG59KVxuXG4vLyBQcmV2ZW50IHBhZ2UgcmVmcmVzaGluZyB3aGVuIGZvcm0gaXMgc3VibWl0dGVkXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG59KVxuXG4vLyBTZWFyY2ggZm9yIG5ldyBjaXR5IHdlYXRoZXJcbmNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYnRuJylcbnNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jKCkgPT4ge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZVxuICAgIGlmIChpbnB1dCA9PT0gJycpIHJldHVyblxuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgZ2V0V2VhdGhlci5nZXREYXRhKGlucHV0KVxuICAgIFVJLnNldFdlYXRoZXIod2VhdGhlckRhdGEpXG4gICAgZm9ybS5yZXNldCgpIFxufSlcblxuLy8gQ29udmVydCBDZWxzaXVzIDwgLS0gPiBGYWhyZW5oZWl0XG5jb25zdCBzd2l0Y2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpdGNoJylcbnN3aXRjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRlbXBDb252ZXJzaW9uLnRvZ2dsZVVuaXRzKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==