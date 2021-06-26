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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/modules/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/modules/index.js":
/*!*****************************!*\
  !*** ./js/modules/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _map_cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map_cards */ \"./js/modules/map_cards.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./js/modules/utils.js\");\n\n\nvar DOWNLOAD_URL = \"https://603e38c548171b0017b2ecf7.mockapi.io/homes\";\nvar STATUS_CODE_OK = \"200\";\nvar FILTER_INPUT_CLASS = \".filter-block__input\";\nvar DELAY = 250;\n\nvar fetchData = function fetchData(onLoad, onError) {\n  var xhr = new XMLHttpRequest();\n  xhr.responseType = 'json';\n  xhr.addEventListener('load', function () {\n    if (xhr.readyState === 4 && xhr.status == STATUS_CODE_OK) {\n      onLoad(xhr.response);\n    } else {\n      onError(xhr.status);\n    }\n  });\n  xhr.addEventListener('error', function () {\n    onError('Произошла ошибка. Обратитесь к администратору.');\n  });\n  xhr.addEventListener('timeout', function () {\n    onError('Превышено время ожидания ответа от сервера.');\n  });\n  xhr.timeout = 10000;\n  xhr.open('GET', DOWNLOAD_URL, true);\n  xhr.send();\n};\n\nfetchData(function (data) {\n  if (data) {\n    var filteredData = data;\n    var cardBlock = document.querySelector(\".main-body__aparts-list\");\n    Object(_map_cards__WEBPACK_IMPORTED_MODULE_0__[\"mapCards\"])(filteredData, cardBlock);\n    var filterInput = document.querySelector(FILTER_INPUT_CLASS);\n\n    var onChange = function onChange(evt) {\n      if (evt.target.value.length > 3) {\n        filteredData = filterData(data, evt);\n        Object(_map_cards__WEBPACK_IMPORTED_MODULE_0__[\"mapCards\"])(filteredData, cardBlock);\n      } else if (evt.target.value.length === 0) {\n        Object(_map_cards__WEBPACK_IMPORTED_MODULE_0__[\"mapCards\"])(data, cardBlock);\n      }\n    };\n\n    onChange = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"debounce\"])(onChange, DELAY);\n    filterInput.addEventListener(\"input\", onChange);\n  }\n}, function (status) {\n  console.log(status);\n});\n\nvar filterData = function filterData(data, evt) {\n  var filteredData = data.filter(function (appart) {\n    return appart.title.toLowerCase().includes(evt.target.value.toLowerCase());\n  });\n  return filteredData;\n};\n\n//# sourceURL=webpack:///./js/modules/index.js?");

/***/ }),

/***/ "./js/modules/map_cards.js":
/*!*********************************!*\
  !*** ./js/modules/map_cards.js ***!
  \*********************************/
/*! exports provided: mapCards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mapCards\", function() { return mapCards; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./js/modules/utils.js\");\n\nvar INDEPENDENT_LIVING = \"Independent living\";\nvar SUPPORT_AVALIABLE = \"Restaurant & Support available\";\nvar mapCards = function mapCards(data, block) {\n  block.textContent = \"\";\n  var seeMoreButton = document.querySelector(\".main-body__button\");\n\n  if (data.length == 0) {\n    seeMoreButton.style.display = \"none\";\n    var notification = document.createElement(\"div\");\n    notification.classList.add(\"notification\");\n    notification.append(document.getElementById(\"notification\").content.cloneNode(true));\n    block.append(notification);\n  } else {\n    seeMoreButton.style.display = \"block\";\n\n    for (var i = 0; i < 6; i++) {\n      if (data[i]) {\n        var card = document.createElement(\"li\");\n        card.classList.add(\"aparts-list__item\");\n        card.append(document.getElementById(\"card\").content.cloneNode(true));\n        var imageIndex = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"getRandomInt\"])(1, 5);\n        card.querySelector(\".card__image\").setAttribute(\"src\", \"./img/apart\" + imageIndex + \".png\");\n\n        switch (data[i].type) {\n          case \"IndependentLiving\":\n            card.querySelector(\".card__type\").textContent = INDEPENDENT_LIVING;\n            break;\n\n          case \"SupportAvailable\":\n            card.querySelector(\".card__type\").classList.add(\"card__type--orange-background\");\n            card.querySelector(\".card__type\").textContent = SUPPORT_AVALIABLE;\n            break;\n        }\n\n        card.querySelector(\".card__title\").textContent = data[i].title;\n        card.querySelector(\".card__address\").textContent = data[i].address;\n        card.querySelector(\".card__price\").textContent = \"£\" + data[i].price;\n        block.append(card);\n      }\n    }\n  }\n};\n\n//# sourceURL=webpack:///./js/modules/map_cards.js?");

/***/ }),

/***/ "./js/modules/utils.js":
/*!*****************************!*\
  !*** ./js/modules/utils.js ***!
  \*****************************/
/*! exports provided: getRandomInt, debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandomInt\", function() { return getRandomInt; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"debounce\", function() { return debounce; });\nvar getRandomInt = function getRandomInt(min, max) {\n  return Math.floor(Math.random() * (max - min)) + min;\n};\nvar debounce = function debounce(callback, delay) {\n  var timeout;\n  return function () {\n    var _arguments = arguments,\n        _this = this;\n\n    var fnCall = function fnCall() {\n      callback.apply(_this, _arguments);\n    };\n\n    clearTimeout(timeout);\n    timeout = setTimeout(fnCall, delay);\n  };\n};\n\n//# sourceURL=webpack:///./js/modules/utils.js?");

/***/ })

/******/ });