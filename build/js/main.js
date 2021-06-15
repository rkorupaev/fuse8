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
/*! no static exports found */
/***/ (function(module, exports) {

eval("var DOWNLOAD_URL = \"https://603e38c548171b0017b2ecf7.mockapi.io/homes\";\nvar STATUS_CODE_OK = \"200\";\nvar INDEPENDENT_LIVING = \"Independent living\";\nvar SUPPORT_AVALIABLE = \"Restaurant & Support available\";\n\nvar fetchData = function fetchData(onLoad, onError) {\n  var xhr = new XMLHttpRequest();\n  xhr.responseType = 'json';\n  xhr.addEventListener('load', function () {\n    if (xhr.readyState === 4 && xhr.status == STATUS_CODE_OK) {\n      onLoad(xhr.response);\n    } else {\n      onError(xhr.status);\n    }\n  });\n  xhr.addEventListener('error', function () {\n    onError('Произошла ошибка. Обратитесь к администратору.');\n  });\n  xhr.addEventListener('timeout', function () {\n    onError('Превышено время ожидания ответа от сервера.');\n  });\n  xhr.timeout = 10000;\n  xhr.open('GET', DOWNLOAD_URL, true);\n  xhr.send();\n};\n\nfetchData(function (data) {\n  if (data) {\n    mapCards(data);\n  }\n}, function (status) {\n  console.log(status);\n});\n\nvar mapCards = function mapCards(data) {\n  var cardBlock = document.querySelector(\".main-body__aparts-list\");\n\n  for (var i = 0; i < data.length; i++) {\n    var card = document.createElement(\"li\");\n    card.classList.add(\"aparts-list__item\");\n    card.append(document.getElementById(\"card\").content.cloneNode(true));\n\n    switch (data[i].type) {\n      case \"IndependentLiving\":\n        card.querySelector(\".card__type\").textContent = INDEPENDENT_LIVING;\n        break;\n\n      case \"SupportAvailable\":\n        card.querySelector(\".card__type\").classList.add(\"card__type--orange-background\");\n        card.querySelector(\".card__type\").textContent = SUPPORT_AVALIABLE;\n        break;\n    }\n\n    card.querySelector(\".card__title\").textContent = data[i].title;\n    card.querySelector(\".card__address\").textContent = data[i].address;\n    card.querySelector(\".card__price\").textContent = \"£\" + data[i].price;\n    cardBlock.append(card);\n  }\n};\n\n//# sourceURL=webpack:///./js/modules/index.js?");

/***/ })

/******/ });