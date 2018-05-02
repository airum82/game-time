/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/Froggy.js":
/*!***********************!*\
  !*** ./lib/Froggy.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Froggy = function () {
  function Froggy(x, y, width, height) {
    _classCallCheck(this, Froggy);

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  _createClass(Froggy, [{
    key: "draw",
    value: function draw(context) {
      context.fillRect(this.x, this.y, this.width, this.height);
    }
  }]);

  return Froggy;
}();

module.exports = Froggy;

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isGameOver = false;
var Froggy = __webpack_require__(/*! ./Froggy.js */ "./lib/Froggy.js");
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

context.fillStyle = 'black';
context.fillRect(0, 0, canvas.width, canvas.height);

context.fillStyle = 'green';
context.fillRect(0, 530, 600, 40);
context.fillRect(0, 280, 600, 40);
context.fillRect(0, 0, 600, 40);
context.fillStyle = 'blue';
context.fillRect(0, 40, 600, 240);

function addStreetLines() {
	var x = 0;
	var y = 480;
	var endX = 600;
	for (var i = 0; i < 3; i++) {
		context.strokeStyle = 'white';
		context.setLineDash([5]);
		context.strokeWidth = 2;
		context.beginPath();
		context.moveTo(x, y);
		context.lineTo(endX, y);
		context.stroke();
		y = y - 50;
	}
}

addStreetLines();

// function gameLoop() {
// 	context.clearRect(0, 0, canvas.width, canvas.height);
// 	blocks.forEach(block => {
// 		block.move().draw(context);
// 	});

// 	if (isGameOver) {
// 		//display final score and replay button
// 	} else {
// 		requestAnimationFrame(gameLoop);
// 	}
// }

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0Zyb2dneS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW5kZXguanMiXSwibmFtZXMiOlsiRnJvZ2d5IiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsImNvbnRleHQiLCJmaWxsUmVjdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJpc0dhbWVPdmVyIiwicmVxdWlyZSIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwiZmlsbFN0eWxlIiwiYWRkU3RyZWV0TGluZXMiLCJlbmRYIiwiaSIsInN0cm9rZVN0eWxlIiwic2V0TGluZURhc2giLCJzdHJva2VXaWR0aCIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNuRU1BLE07QUFDSixrQkFBWUMsQ0FBWixFQUFlQyxDQUFmLEVBQWtCQyxLQUFsQixFQUF5QkMsTUFBekIsRUFBaUM7QUFBQTs7QUFDL0IsU0FBS0gsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsU0FBS0MsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7Ozs7eUJBRUlDLE8sRUFBUztBQUNaQSxjQUFRQyxRQUFSLENBQWlCLEtBQUtMLENBQXRCLEVBQXlCLEtBQUtDLENBQTlCLEVBQWlDLEtBQUtDLEtBQXRDLEVBQTZDLEtBQUtDLE1BQWxEO0FBQ0Q7Ozs7OztBQUdIRyxPQUFPQyxPQUFQLEdBQWlCUixNQUFqQixDOzs7Ozs7Ozs7Ozs7OztBQ2JBLElBQUlTLGFBQWEsS0FBakI7QUFDQSxJQUFJVCxTQUFTLG1CQUFBVSxDQUFRLG9DQUFSLENBQWI7QUFDQSxJQUFJQyxTQUFTQyxTQUFTQyxjQUFULENBQXdCLE1BQXhCLENBQWI7QUFDQSxJQUFJUixVQUFVTSxPQUFPRyxVQUFQLENBQWtCLElBQWxCLENBQWQ7O0FBRUFULFFBQVFVLFNBQVIsR0FBb0IsT0FBcEI7QUFDQVYsUUFBUUMsUUFBUixDQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QkssT0FBT1IsS0FBOUIsRUFBcUNRLE9BQU9QLE1BQTVDOztBQUVBQyxRQUFRVSxTQUFSLEdBQW9CLE9BQXBCO0FBQ0FWLFFBQVFDLFFBQVIsQ0FBaUIsQ0FBakIsRUFBb0IsR0FBcEIsRUFBeUIsR0FBekIsRUFBOEIsRUFBOUI7QUFDQUQsUUFBUUMsUUFBUixDQUFpQixDQUFqQixFQUFvQixHQUFwQixFQUF5QixHQUF6QixFQUE4QixFQUE5QjtBQUNBRCxRQUFRQyxRQUFSLENBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLEdBQXZCLEVBQTRCLEVBQTVCO0FBQ0FELFFBQVFVLFNBQVIsR0FBb0IsTUFBcEI7QUFDQVYsUUFBUUMsUUFBUixDQUFpQixDQUFqQixFQUFvQixFQUFwQixFQUF3QixHQUF4QixFQUE2QixHQUE3Qjs7QUFFQSxTQUFTVSxjQUFULEdBQTBCO0FBQ3hCLEtBQUlmLElBQUksQ0FBUjtBQUNBLEtBQUlDLElBQUksR0FBUjtBQUNBLEtBQUllLE9BQU8sR0FBWDtBQUNELE1BQUksSUFBSUMsSUFBSSxDQUFaLEVBQWVBLElBQUksQ0FBbkIsRUFBc0JBLEdBQXRCLEVBQTJCO0FBQzFCYixVQUFRYyxXQUFSLEdBQXNCLE9BQXRCO0FBQ0FkLFVBQVFlLFdBQVIsQ0FBb0IsQ0FBQyxDQUFELENBQXBCO0FBQ0FmLFVBQVFnQixXQUFSLEdBQXNCLENBQXRCO0FBQ0FoQixVQUFRaUIsU0FBUjtBQUNBakIsVUFBUWtCLE1BQVIsQ0FBZXRCLENBQWYsRUFBa0JDLENBQWxCO0FBQ0FHLFVBQVFtQixNQUFSLENBQWVQLElBQWYsRUFBcUJmLENBQXJCO0FBQ0FHLFVBQVFvQixNQUFSO0FBQ0F2QixNQUFJQSxJQUFJLEVBQVI7QUFDQTtBQUNEOztBQUVEYzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbGliL2luZGV4LmpzXCIpO1xuIiwiY2xhc3MgRnJvZ2d5IHtcbiAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBjb250ZXh0LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZyb2dneTsiLCJ2YXIgaXNHYW1lT3ZlciA9IGZhbHNlO1xudmFyIEZyb2dneSA9IHJlcXVpcmUoJy4vRnJvZ2d5LmpzJyk7XG52YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUnKTtcbnZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbmNvbnRleHQuZmlsbFN0eWxlID0gJ2JsYWNrJztcbmNvbnRleHQuZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcblxuY29udGV4dC5maWxsU3R5bGUgPSAnZ3JlZW4nO1xuY29udGV4dC5maWxsUmVjdCgwLCA1MzAsIDYwMCwgNDApO1xuY29udGV4dC5maWxsUmVjdCgwLCAyODAsIDYwMCwgNDApO1xuY29udGV4dC5maWxsUmVjdCgwLCAwLCA2MDAsIDQwKTtcbmNvbnRleHQuZmlsbFN0eWxlID0gJ2JsdWUnO1xuY29udGV4dC5maWxsUmVjdCgwLCA0MCwgNjAwLCAyNDApO1xuXG5mdW5jdGlvbiBhZGRTdHJlZXRMaW5lcygpIHtcblx0XHR2YXIgeCA9IDA7XG5cdFx0dmFyIHkgPSA0ODA7XG5cdFx0dmFyIGVuZFggPSA2MDA7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHRjb250ZXh0LnN0cm9rZVN0eWxlID0gJ3doaXRlJztcblx0XHRjb250ZXh0LnNldExpbmVEYXNoKFs1XSk7XG5cdFx0Y29udGV4dC5zdHJva2VXaWR0aCA9IDI7XG5cdFx0Y29udGV4dC5iZWdpblBhdGgoKTtcblx0XHRjb250ZXh0Lm1vdmVUbyh4LCB5KTtcblx0XHRjb250ZXh0LmxpbmVUbyhlbmRYLCB5KTtcblx0XHRjb250ZXh0LnN0cm9rZSgpO1xuXHRcdHkgPSB5IC0gNTA7XG5cdH1cbn1cblxuYWRkU3RyZWV0TGluZXMoKTtcblxuLy8gZnVuY3Rpb24gZ2FtZUxvb3AoKSB7XG4vLyBcdGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4vLyBcdGJsb2Nrcy5mb3JFYWNoKGJsb2NrID0+IHtcbi8vIFx0XHRibG9jay5tb3ZlKCkuZHJhdyhjb250ZXh0KTtcbi8vIFx0fSk7XG5cdFxuLy8gXHRpZiAoaXNHYW1lT3Zlcikge1xuLy8gXHRcdC8vZGlzcGxheSBmaW5hbCBzY29yZSBhbmQgcmVwbGF5IGJ1dHRvblxuLy8gXHR9IGVsc2Uge1xuLy8gXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG4vLyBcdH1cbi8vIH0iXSwic291cmNlUm9vdCI6IiJ9