/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/GameBoard.js":
/*!*************************************!*\
  !*** ./src/components/GameBoard.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameBoard": function() { return /* binding */ GameBoard; }
/* harmony export */ });
const GameBoard = () => {
  const coordinatesArr = [];
  const missedShotsArr = [];
  const ships = [];

  function createGameBoard() {
    for (let i = 0; i < 10; i++) {
      const arr = [];
      for (let j = 0; j < 10; j++) {
        arr.push(null);
      }
      coordinatesArr.push(arr);
    }
    return coordinatesArr;
  }

  const getGameBoard = () => coordinatesArr;

  function placeShip(ship = {}, coordinates = []) {
    
    const [x, y] = coordinates;
    
    const slicedArr = coordinatesArr[x].slice(y);
    if (
      slicedArr.length >= ship.length &&
      slicedArr.every((item) => item == null)
      ) {
        for (let i = 0; i < ship.length; i++) {
          coordinatesArr[x][y + i] = ship
        }

      ships.push(ship);
      return true;
    }
    return false;
  }

  function receiveAttack(arr){
    const [x, y] = arr;

    if(coordinatesArr[x][y] !== null){
      coordinatesArr[x][y].hit();
      return true;
    }
    missedShotsArr.push(arr);
    return false;
  }

  const missedShots = () => missedShotsArr; 

  const allShipsSunk = () => {
    if(ships.every(ship => ship.isSunk())){
      return true;
    }
    else{
      return false;
    }
  }

  return { createGameBoard, getGameBoard, placeShip, receiveAttack, missedShots, allShipsSunk };
};



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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!********************************************!*\
  !*** ./src/components/GamePresentation.js ***!
  \********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameBoard */ "./src/components/GameBoard.js");


const mainContainer = document.querySelector('.main-container');

const playerGameBoard = (0,_GameBoard__WEBPACK_IMPORTED_MODULE_0__.GameBoard)();

const playerContainer = document.createElement('div');
mainContainer.appendChild(playerContainer);

playerGameBoard.getGameBoard().forEach(() => {
  const square = document.createElement('div');
  square.setAttribute('style', 'width: 100px; height: 100px; background-color: red;');
  playerContainer.appendChild(square)
})


}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQSxzQkFBc0IsUUFBUTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ3FCOzs7Ozs7O1VDN0RyQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBLDhDQUE4Qzs7Ozs7V0NBOUM7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOd0M7O0FBRXhDOztBQUVBLHdCQUF3QixxREFBUzs7QUFFakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOENBQThDLGVBQWUsc0JBQXNCO0FBQ25GO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QvLi9zcmMvY29tcG9uZW50cy9HYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3QvLi9zcmMvY29tcG9uZW50cy9HYW1lUHJlc2VudGF0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEdhbWVCb2FyZCA9ICgpID0+IHtcbiAgY29uc3QgY29vcmRpbmF0ZXNBcnIgPSBbXTtcbiAgY29uc3QgbWlzc2VkU2hvdHNBcnIgPSBbXTtcbiAgY29uc3Qgc2hpcHMgPSBbXTtcblxuICBmdW5jdGlvbiBjcmVhdGVHYW1lQm9hcmQoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBjb25zdCBhcnIgPSBbXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICBhcnIucHVzaChudWxsKTtcbiAgICAgIH1cbiAgICAgIGNvb3JkaW5hdGVzQXJyLnB1c2goYXJyKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvb3JkaW5hdGVzQXJyO1xuICB9XG5cbiAgY29uc3QgZ2V0R2FtZUJvYXJkID0gKCkgPT4gY29vcmRpbmF0ZXNBcnI7XG5cbiAgZnVuY3Rpb24gcGxhY2VTaGlwKHNoaXAgPSB7fSwgY29vcmRpbmF0ZXMgPSBbXSkge1xuICAgIFxuICAgIGNvbnN0IFt4LCB5XSA9IGNvb3JkaW5hdGVzO1xuICAgIFxuICAgIGNvbnN0IHNsaWNlZEFyciA9IGNvb3JkaW5hdGVzQXJyW3hdLnNsaWNlKHkpO1xuICAgIGlmIChcbiAgICAgIHNsaWNlZEFyci5sZW5ndGggPj0gc2hpcC5sZW5ndGggJiZcbiAgICAgIHNsaWNlZEFyci5ldmVyeSgoaXRlbSkgPT4gaXRlbSA9PSBudWxsKVxuICAgICAgKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvb3JkaW5hdGVzQXJyW3hdW3kgKyBpXSA9IHNoaXBcbiAgICAgICAgfVxuXG4gICAgICBzaGlwcy5wdXNoKHNoaXApO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soYXJyKXtcbiAgICBjb25zdCBbeCwgeV0gPSBhcnI7XG5cbiAgICBpZihjb29yZGluYXRlc0Fyclt4XVt5XSAhPT0gbnVsbCl7XG4gICAgICBjb29yZGluYXRlc0Fyclt4XVt5XS5oaXQoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBtaXNzZWRTaG90c0Fyci5wdXNoKGFycik7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgbWlzc2VkU2hvdHMgPSAoKSA9PiBtaXNzZWRTaG90c0FycjsgXG5cbiAgY29uc3QgYWxsU2hpcHNTdW5rID0gKCkgPT4ge1xuICAgIGlmKHNoaXBzLmV2ZXJ5KHNoaXAgPT4gc2hpcC5pc1N1bmsoKSkpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsgY3JlYXRlR2FtZUJvYXJkLCBnZXRHYW1lQm9hcmQsIHBsYWNlU2hpcCwgcmVjZWl2ZUF0dGFjaywgbWlzc2VkU2hvdHMsIGFsbFNoaXBzU3VuayB9O1xufTtcbmV4cG9ydCB7IEdhbWVCb2FyZCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgR2FtZUJvYXJkIH0gZnJvbSBcIi4vR2FtZUJvYXJkXCI7XG5cbmNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250YWluZXInKTtcblxuY29uc3QgcGxheWVyR2FtZUJvYXJkID0gR2FtZUJvYXJkKCk7XG5cbmNvbnN0IHBsYXllckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJDb250YWluZXIpO1xuXG5wbGF5ZXJHYW1lQm9hcmQuZ2V0R2FtZUJvYXJkKCkuZm9yRWFjaCgoKSA9PiB7XG4gIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzcXVhcmUuc2V0QXR0cmlidXRlKCdzdHlsZScsICd3aWR0aDogMTAwcHg7IGhlaWdodDogMTAwcHg7IGJhY2tncm91bmQtY29sb3I6IHJlZDsnKTtcbiAgcGxheWVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHNxdWFyZSlcbn0pXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==