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



document.addEventListener('DOMContentLoaded', async() => {
    const weatherData = await _modules_getWeather__WEBPACK_IMPORTED_MODULE_1__["default"].getData('Zagreb')
    _modules_UI__WEBPACK_IMPORTED_MODULE_0__["default"].setWeather(weatherData)
})

const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
})

const searchBtn = document.querySelector('.search-btn')
searchBtn.addEventListener('click', async() => {
    const input = document.querySelector('input').value
    if (input === '') return
    const weatherData = await _modules_getWeather__WEBPACK_IMPORTED_MODULE_1__["default"].getData(input)
    _modules_UI__WEBPACK_IMPORTED_MODULE_0__["default"].setWeather(weatherData)
    form.reset() 
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxpQkFBaUI7QUFDcEQscUJBQXFCLGlCQUFpQixJQUFJLG9CQUFvQjtBQUM5RDtBQUNBO0FBQ0Esc0ZBQXNGLGlCQUFpQjtBQUN2RztBQUNBLDBDQUEwQyxpQkFBaUI7QUFDM0QsNkNBQTZDLHdCQUF3QjtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxpQkFBaUI7QUFDM0QsNkNBQTZDLHdCQUF3QjtBQUNyRTtBQUNBLDZFQUE2RSxpQkFBaUI7QUFDOUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyx1QkFBdUI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsbUJBQW1CO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxxQkFBcUI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHFCQUFxQjtBQUN0RDtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLENBQUM7O0FBRUQsaUVBQWU7Ozs7Ozs7Ozs7Ozs7O0FDdkRmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFNBQVM7QUFDNUIsb0JBQW9CLCtDQUErQztBQUNuRSxvQkFBb0IsT0FBTztBQUMzQix3QkFBd0IseUJBQXlCO0FBQ2pELFVBQVU7QUFDVixpQkFBaUI7QUFDakI7O0FBRUE7QUFDQSx5RUFBeUUsS0FBSztBQUM5RTtBQUNBLCtDQUErQyxhQUFhO0FBQzVEO0FBQ0Esd0NBQXdDLE1BQU07QUFDOUM7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLENBQUM7O0FBRUQsaUVBQWU7Ozs7OztVQy9CZjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ044QjtBQUNnQjs7QUFFOUM7QUFDQSw4QkFBOEIsbUVBQWtCO0FBQ2hELElBQUksOERBQWE7QUFDakIsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLG1FQUFrQjtBQUNoRCxJQUFJLDhEQUFhO0FBQ2pCO0FBQ0EsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9VSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2dldFdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBVSSA9ICgoKSA9PiB7XG4gICAgZnVuY3Rpb24gc2V0V2VhdGhlcih3ZWF0aGVyRGF0YSkge1xuICAgICAgICBpZiAoIXdlYXRoZXJEYXRhKSByZXR1cm5cblxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJylcbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnXG5cbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCArPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0b3BcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0XCI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwidGVtcFwiPiR7d2VhdGhlckRhdGEudGVtcH3CsDwvaDE+XG4gICAgICAgICAgICAgICAgPHA+JHt3ZWF0aGVyRGF0YS5jaXR5fSwgJHt3ZWF0aGVyRGF0YS5jb3VudHJ5fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1pZGRsZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub24tbW9iaWxlXCI+PGltZyBzcmM9XCJodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHt3ZWF0aGVyRGF0YS5pY29ufUAyeC5wbmdcIiBhbHQ9XCJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9iaWxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cIndlYXRoZXJcIj4ke3dlYXRoZXJEYXRhLm1haW59PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPiR7d2VhdGhlckRhdGEuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm9uLW1vYmlsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJ3ZWF0aGVyXCI+JHt3ZWF0aGVyRGF0YS5tYWlufTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj4ke3dlYXRoZXJEYXRhLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwibW9iaWxlXCIgc3JjPVwiaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7d2VhdGhlckRhdGEuaWNvbn1AMngucG5nXCIgYWx0PVwiXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3R0b21cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+XG4gICAgICAgICAgICAgICAgPHA+RmVlbHMgbGlrZTwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZlZWxzXCI+JHt3ZWF0aGVyRGF0YS5mZWVsc19saWtlfcKwPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiaHVtaWRpdHlcIj5IdW1pZGl0eTwvcD5cbiAgICAgICAgICAgICAgICA8cD4ke3dlYXRoZXJEYXRhLmh1bWlkaXR5fSU8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ3aW5kXCI+V2luZDwvcD5cbiAgICAgICAgICAgICAgICA8cD4ke3dlYXRoZXJEYXRhLnNwZWVkfSBtL3M8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+XG4gICAgICAgICAgICAgICAgPHA+TWluIHRlbXA8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtaW5cIj4ke3dlYXRoZXJEYXRhLnRlbXBfbWlufcKwPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxuICAgICAgICAgICAgICAgIDxwPk1heCB0ZW1wPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibWF4XCI+JHt3ZWF0aGVyRGF0YS50ZW1wX21heH3CsDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5gXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc2V0V2VhdGhlciB9XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IFVJIiwiY29uc3QgZ2V0V2VhdGhlciA9ICgoKSA9PiB7XG4gICAgZnVuY3Rpb24gY29udmVydERhdGEoZGF0YSkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBuYW1lOiBjaXR5LFxuICAgICAgICAgICAgc3lzOiB7IGNvdW50cnkgfSxcbiAgICAgICAgICAgIG1haW46IHsgdGVtcCwgdGVtcF9tYXgsIHRlbXBfbWluLCBmZWVsc19saWtlLCBodW1pZGl0eX0sXG4gICAgICAgICAgICB3aW5kOiB7IHNwZWVkIH0sXG4gICAgICAgICAgICB3ZWF0aGVyOiBbeyBpY29uLCBtYWluLCBkZXNjcmlwdGlvbiB9XSxcbiAgICAgICAgfSA9IGRhdGFcbiAgICAgICAgcmV0dXJuIHsgY2l0eSwgY291bnRyeSwgdGVtcCwgdGVtcF9tYXgsIHRlbXBfbWluLCBmZWVsc19saWtlLCBodW1pZGl0eSwgc3BlZWQsIGljb24sIG1haW4sIGRlc2NyaXB0aW9uIH1cbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBnZXREYXRhKGNpdHkpIHtcbiAgICAgICAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZ1bml0cz1tZXRyaWMmQVBQSUQ9YjUzNDg5MGZiMWYwZDhiMWI3MmFkOWZmNGM4MjUyMGVgXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge21vZGU6ICdjb3JzJ30pXG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDaXR5ICR7Y2l0eX0gbm90IGZvdW5kYClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBjb252ZXJ0RGF0YShhd2FpdCByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgICAgICAvLyBhbGVydChlcnJvcilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyBnZXREYXRhIH1cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgZ2V0V2VhdGhlciIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFVJIGZyb20gXCIuL21vZHVsZXMvVUlcIjtcbmltcG9ydCBnZXRXZWF0aGVyIGZyb20gXCIuL21vZHVsZXMvZ2V0V2VhdGhlclwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgYXN5bmMoKSA9PiB7XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyLmdldERhdGEoJ1phZ3JlYicpXG4gICAgVUkuc2V0V2VhdGhlcih3ZWF0aGVyRGF0YSlcbn0pXG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJylcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbn0pXG5cbmNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYnRuJylcbnNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jKCkgPT4ge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZVxuICAgIGlmIChpbnB1dCA9PT0gJycpIHJldHVyblxuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgZ2V0V2VhdGhlci5nZXREYXRhKGlucHV0KVxuICAgIFVJLnNldFdlYXRoZXIod2VhdGhlckRhdGEpXG4gICAgZm9ybS5yZXNldCgpIFxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=