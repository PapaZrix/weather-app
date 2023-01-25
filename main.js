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


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxpQkFBaUI7QUFDcEQscUJBQXFCLGlCQUFpQixJQUFJLG9CQUFvQjtBQUM5RDtBQUNBO0FBQ0Esc0ZBQXNGLGlCQUFpQjtBQUN2RztBQUNBLDBDQUEwQyxpQkFBaUI7QUFDM0QsNkNBQTZDLHdCQUF3QjtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxpQkFBaUI7QUFDM0QsNkNBQTZDLHdCQUF3QjtBQUNyRTtBQUNBLDZFQUE2RSxpQkFBaUI7QUFDOUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyx1QkFBdUI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsbUJBQW1CO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxxQkFBcUI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHFCQUFxQjtBQUN0RDtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLENBQUM7O0FBRUQsaUVBQWU7Ozs7Ozs7Ozs7Ozs7O0FDdkRmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFNBQVM7QUFDNUIsb0JBQW9CLCtDQUErQztBQUNuRSxvQkFBb0IsT0FBTztBQUMzQix3QkFBd0IseUJBQXlCO0FBQ2pELFVBQVU7QUFDVixpQkFBaUI7QUFDakI7O0FBRUE7QUFDQSx5RUFBeUUsS0FBSztBQUM5RTtBQUNBLCtDQUErQyxhQUFhO0FBQzVEO0FBQ0Esd0NBQXdDLE1BQU07QUFDOUM7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLENBQUM7O0FBRUQsaUVBQWU7Ozs7OztVQy9CZjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ044QjtBQUNnQjs7QUFFOUM7QUFDQSw4QkFBOEIsbUVBQWtCO0FBQ2hELElBQUksOERBQWE7QUFDakIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9nZXRXZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVUkgPSAoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIHNldFdlYXRoZXIod2VhdGhlckRhdGEpIHtcbiAgICAgICAgaWYgKCF3ZWF0aGVyRGF0YSkgcmV0dXJuXG5cbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpXG4gICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuXG4gICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgKz0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwidG9wXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdFwiPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cInRlbXBcIj4ke3dlYXRoZXJEYXRhLnRlbXB9wrA8L2gxPlxuICAgICAgICAgICAgICAgIDxwPiR7d2VhdGhlckRhdGEuY2l0eX0sICR7d2VhdGhlckRhdGEuY291bnRyeX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtaWRkbGVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm9uLW1vYmlsZVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7d2VhdGhlckRhdGEuaWNvbn1AMngucG5nXCIgYWx0PVwiXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vYmlsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJ3ZWF0aGVyXCI+JHt3ZWF0aGVyRGF0YS5tYWlufTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj4ke3dlYXRoZXJEYXRhLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vbi1tb2JpbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwid2VhdGhlclwiPiR7d2VhdGhlckRhdGEubWFpbn08L2gxPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCI+JHt3ZWF0aGVyRGF0YS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cIm1vYmlsZVwiIHNyYz1cImh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke3dlYXRoZXJEYXRhLmljb259QDJ4LnBuZ1wiIGFsdD1cIlwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm90dG9tXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxuICAgICAgICAgICAgICAgIDxwPkZlZWxzIGxpa2U8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJmZWVsc1wiPiR7d2VhdGhlckRhdGEuZmVlbHNfbGlrZX3CsDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm9cIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImh1bWlkaXR5XCI+SHVtaWRpdHk8L3A+XG4gICAgICAgICAgICAgICAgPHA+JHt3ZWF0aGVyRGF0YS5odW1pZGl0eX0lPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwid2luZFwiPldpbmQ8L3A+XG4gICAgICAgICAgICAgICAgPHA+JHt3ZWF0aGVyRGF0YS5zcGVlZH0gbS9zPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxuICAgICAgICAgICAgICAgIDxwPk1pbiB0ZW1wPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibWluXCI+JHt3ZWF0aGVyRGF0YS50ZW1wX21pbn3CsDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm9cIj5cbiAgICAgICAgICAgICAgICA8cD5NYXggdGVtcDwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm1heFwiPiR7d2VhdGhlckRhdGEudGVtcF9tYXh9wrA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+YFxuICAgIH1cblxuICAgIHJldHVybiB7IHNldFdlYXRoZXIgfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBVSSIsImNvbnN0IGdldFdlYXRoZXIgPSAoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIGNvbnZlcnREYXRhKGRhdGEpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgbmFtZTogY2l0eSxcbiAgICAgICAgICAgIHN5czogeyBjb3VudHJ5IH0sXG4gICAgICAgICAgICBtYWluOiB7IHRlbXAsIHRlbXBfbWF4LCB0ZW1wX21pbiwgZmVlbHNfbGlrZSwgaHVtaWRpdHl9LFxuICAgICAgICAgICAgd2luZDogeyBzcGVlZCB9LFxuICAgICAgICAgICAgd2VhdGhlcjogW3sgaWNvbiwgbWFpbiwgZGVzY3JpcHRpb24gfV0sXG4gICAgICAgIH0gPSBkYXRhXG4gICAgICAgIHJldHVybiB7IGNpdHksIGNvdW50cnksIHRlbXAsIHRlbXBfbWF4LCB0ZW1wX21pbiwgZmVlbHNfbGlrZSwgaHVtaWRpdHksIHNwZWVkLCBpY29uLCBtYWluLCBkZXNjcmlwdGlvbiB9XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YShjaXR5KSB7XG4gICAgICAgIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mdW5pdHM9bWV0cmljJkFQUElEPWI1MzQ4OTBmYjFmMGQ4YjFiNzJhZDlmZjRjODI1MjBlYFxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHttb2RlOiAnY29ycyd9KVxuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2l0eSAke2NpdHl9IG5vdCBmb3VuZGApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gY29udmVydERhdGEoYXdhaXQgcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgLy8gYWxlcnQoZXJyb3IpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZ2V0RGF0YSB9XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IGdldFdlYXRoZXIiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBVSSBmcm9tIFwiLi9tb2R1bGVzL1VJXCI7XG5pbXBvcnQgZ2V0V2VhdGhlciBmcm9tIFwiLi9tb2R1bGVzL2dldFdlYXRoZXJcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGFzeW5jKCkgPT4ge1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgZ2V0V2VhdGhlci5nZXREYXRhKCdaYWdyZWInKVxuICAgIFVJLnNldFdlYXRoZXIod2VhdGhlckRhdGEpXG59KVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=