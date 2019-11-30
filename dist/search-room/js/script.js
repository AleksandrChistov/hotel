/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"search-room": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./pages/search-room/search-room.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/footer/footer.styl":
/*!***************************************!*\
  !*** ./components/footer/footer.styl ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./components/footer/footer.styl?");

/***/ }),

/***/ "./components/header/header.js":
/*!*************************************!*\
  !*** ./components/header/header.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _img_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/logo.svg */ \"./components/header/img/logo.svg\");\n/* harmony import */ var _img_logo_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_img_logo_svg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _header_styl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.styl */ \"./components/header/header.styl\");\n/* harmony import */ var _header_styl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_styl__WEBPACK_IMPORTED_MODULE_1__);\n\n\n$('.menu-hamburger').on('click', function () {\n  $('.header-menu__list').toggleClass('header-menu__list_active');\n  $('.menu-hamburger').toggleClass('menu-hamburger__close');\n});\n$(document).on('click', function (e) {\n  const gamburger = $(e.target).closest('.menu-hamburger');\n  const gamburgerClose = $('.menu-hamburger__close');\n  const popup = $(e.target).closest('.header-menu__list_active');\n\n  if (!popup.length && gamburgerClose.length && !gamburger.length) {\n    $('.header-menu__list').removeClass('header-menu__list_active');\n    $('.menu-hamburger').removeClass('menu-hamburger__close');\n  }\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./components/header/header.js?");

/***/ }),

/***/ "./components/header/header.styl":
/*!***************************************!*\
  !*** ./components/header/header.styl ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./components/header/header.styl?");

/***/ }),

/***/ "./components/header/img/logo.svg":
/*!****************************************!*\
  !*** ./components/header/img/logo.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/logo.svg\";\n\n//# sourceURL=webpack:///./components/header/img/logo.svg?");

/***/ }),

/***/ "./components/main/img/favicon.ico":
/*!*****************************************!*\
  !*** ./components/main/img/favicon.ico ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/favicon.ico\";\n\n//# sourceURL=webpack:///./components/main/img/favicon.ico?");

/***/ }),

/***/ "./components/main/main.js":
/*!*********************************!*\
  !*** ./components/main/main.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fonts_fonts_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../fonts/fonts.styl */ \"./fonts/fonts.styl\");\n/* harmony import */ var _fonts_fonts_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fonts_fonts_styl__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _img_favicon_ico__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/favicon.ico */ \"./components/main/img/favicon.ico\");\n/* harmony import */ var _img_favicon_ico__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_favicon_ico__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _main_styl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.styl */ \"./components/main/main.styl\");\n/* harmony import */ var _main_styl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_main_styl__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _media_styl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./media.styl */ \"./components/main/media.styl\");\n/* harmony import */ var _media_styl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_media_styl__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n//# sourceURL=webpack:///./components/main/main.js?");

/***/ }),

/***/ "./components/main/main.styl":
/*!***********************************!*\
  !*** ./components/main/main.styl ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./components/main/main.styl?");

/***/ }),

/***/ "./components/main/media.styl":
/*!************************************!*\
  !*** ./components/main/media.styl ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./components/main/media.styl?");

/***/ }),

/***/ "./components/slider-room/slider-room.js":
/*!***********************************************!*\
  !*** ./components/slider-room/slider-room.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _slider_room_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider-room.styl */ \"./components/slider-room/slider-room.styl\");\n/* harmony import */ var _slider_room_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_slider_room_styl__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _small_components_rate_button_rating_rating_styl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../small-components/rate-button/rating/rating.styl */ \"./components/small-components/rate-button/rating/rating.styl\");\n/* harmony import */ var _small_components_rate_button_rating_rating_styl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_small_components_rate_button_rating_rating_styl__WEBPACK_IMPORTED_MODULE_1__);\n\n\nlet clicked = true;\n$('.slider-room-arrow-left').on(\"click\", function () {\n  if (clicked) {\n    clicked = false;\n    const img = $(this).closest(\".slider-room\").children(\".slider-room-block-img\");\n    let marginLeft = img.css(\"marginLeft\");\n    const li = $(this).closest(\".slider-room\").find(\".slider-room-indicator\");\n    li.removeClass(\"slider-room-indicator_bg_white\");\n    let liNumber = Math.abs(Math.ceil(parseInt(marginLeft) / 271));\n\n    if (parseInt(marginLeft) >= 0) {\n      const countImages = img.find(\".slider-room-img\").length;\n      img.animate({\n        marginLeft: -(countImages - 1) * 271 + \"px\"\n      }, 500);\n      $(li[li.length - 1]).addClass(\"slider-room-indicator_bg_white\");\n      setTimeout(() => clicked = true, 500);\n      return false;\n    }\n\n    img.animate({\n      marginLeft: \"+=271px\"\n    }, 500);\n    $(li[liNumber - 1]).addClass(\"slider-room-indicator_bg_white\");\n    setTimeout(() => clicked = true, 500);\n  }\n});\n$('.slider-room-arrow-right').on(\"click\", function () {\n  if (clicked) {\n    clicked = false;\n    const img = $(this).closest(\".slider-room\").children(\".slider-room-block-img\");\n    let marginLeft = img.css(\"marginLeft\");\n    const countImages = img.find(\".slider-room-img\").length;\n    const li = $(this).closest(\".slider-room\").find(\".slider-room-indicator\");\n    li.removeClass(\"slider-room-indicator_bg_white\");\n    let liNumber = Math.abs(Math.floor(parseInt(marginLeft) / 271));\n\n    if (parseInt(marginLeft) <= -(countImages - 1) * 271) {\n      img.animate({\n        marginLeft: \"0px\"\n      }, 500);\n      $(li[0]).addClass(\"slider-room-indicator_bg_white\");\n      setTimeout(() => clicked = true, 500);\n      return false;\n    }\n\n    img.animate({\n      marginLeft: \"+=-271px\"\n    }, 500);\n    $(li[liNumber + 1]).addClass(\"slider-room-indicator_bg_white\");\n    setTimeout(() => clicked = true, 500);\n  }\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./components/slider-room/slider-room.js?");

/***/ }),

/***/ "./components/slider-room/slider-room.styl":
/*!*************************************************!*\
  !*** ./components/slider-room/slider-room.styl ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./components/slider-room/slider-room.styl?");

/***/ }),

/***/ "./components/small-components/checkbox-buttons/checkbox-buttons.styl":
/*!****************************************************************************!*\
  !*** ./components/small-components/checkbox-buttons/checkbox-buttons.styl ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./components/small-components/checkbox-buttons/checkbox-buttons.styl?");

/***/ }),

/***/ "./components/small-components/dropdown/dropdown.js":
/*!**********************************************************!*\
  !*** ./components/small-components/dropdown/dropdown.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _img_icon_dropdown_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/icon-dropdown.svg */ \"./components/small-components/dropdown/img/icon-dropdown.svg\");\n/* harmony import */ var _img_icon_dropdown_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_img_icon_dropdown_svg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _img_icon_dropdown_active_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/icon-dropdown-active.svg */ \"./components/small-components/dropdown/img/icon-dropdown-active.svg\");\n/* harmony import */ var _img_icon_dropdown_active_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_icon_dropdown_active_svg__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst guest = [['гость', 'гостя', 'гостей'], ['гость', 'гостя', 'гостей'], [\"младенец\", \"младенца\", \"младенцев\"], [2, 0, 1, 1, 1, 2], ['Сколько гостей'], [\"0guest\", \"1guest\", \"2guest\"], \"guest\"];\nconst accommodations = [['спальня', 'спальни', 'спален'], ['кровать', 'кровати', 'кроватей'], [\"ванная комната\", \"ванные комнаты\", \"ванных комнат\"], [2, 0, 1, 1, 1, 2], ['Выберите удобства'], [\"0accommodations\", \"1accommodations\", \"2accommodations\"], \"accommodations\"];\nlet nameDrop;\n$(\".dropdown\").on('mousedown', function (e) {\n  nameDrop = $(this).children(\".dropdown__input\").attr(\"id\");\n  nameDrop = nameDrop === \"accommodations\" ? accommodations : guest;\n});\n$('.dropdown__input').on('mousedown', function (e) {\n  e.preventDefault();\n});\n$('.dropdown__title').on('click', function (e) {\n  e.preventDefault();\n});\n$(\".dropdown__input\").on(\"click\", function () {\n  $(this).toggleClass(\"dropdown__input_active\");\n  $(this).siblings(\".dropdown-window\").slideToggle(\"dropdown-window_display_none\");\n});\n$(\".dropdown-window__increment\").on(\"click\", function () {\n  let value = +$(this).siblings(\".dropdown-window__value\").text();\n  increment($(this), value);\n\n  if (value === 0) {\n    const decrement = $(this).siblings(\".dropdown-window__decrement\");\n    decrement.addClass(\"dropdown-window__decrement_active\");\n  }\n\n  if (value === 9) {\n    $(this).removeClass(\"dropdown-window__increment_active\");\n  }\n});\n$(\".dropdown-window__decrement\").on(\"click\", function () {\n  let value = +$(this).siblings(\".dropdown-window__value\").text();\n  decrement($(this), value);\n\n  if (value === 1) {\n    $(this).removeClass(\"dropdown-window__decrement_active\");\n  }\n\n  if (value === 10) {\n    const increment = $(this).siblings(\".dropdown-window__increment\");\n    increment.addClass(\"dropdown-window__increment_active\");\n  }\n});\n$(\".dropdown-window__apply\").on(\"click\", function () {\n  if (+$(`#drop_${nameDrop[6]}`).find(\".dropdown-window__value\").text() !== 0) {\n    $(`#${nameDrop[6]}`).toggleClass(\"dropdown__input_active\");\n    $(`#drop_${nameDrop[6]}`).slideToggle(\"dropdown-window_display_none\");\n  }\n});\n$(\".dropdown-window__clear\").on(\"click\", function () {\n  clearDropdown($(this));\n});\n\nfunction increment(el, value) {\n  if (value < 10) {\n    let id = +el.siblings(\".dropdown-window__value\").attr(\"id\").match(/[0-9][0-9]*/g);\n    let currentValue = [];\n    nameDrop[5].forEach(el => {\n      let val = $(`#${el}`).text();\n      currentValue.push(val);\n    });\n    el.siblings(\".dropdown-window__value\").text(value + 1);\n\n    if (nameDrop === guest) {\n      changeInputValueGuest(id, value + 1, currentValue);\n    } else {\n      changeInputValue(id, value + 1, currentValue);\n    }\n  }\n\n  if ($(`#drop_${nameDrop[6]}`).children(\".dropdown-window__clear\").is(\":hidden\")) {\n    $(`#drop_${nameDrop[6]}`).children(\".dropdown-window__clear\").show(300);\n  }\n}\n\nfunction decrement(el, value) {\n  if (value > 0) {\n    let id = +el.siblings(\".dropdown-window__value\").attr(\"id\").match(/[0-9][0-9]*/g);\n    let currentValue = [];\n    nameDrop[5].forEach(el => {\n      let val = $(`#${el}`).text();\n      currentValue.push(val);\n    });\n    el.siblings(\".dropdown-window__value\").text(value - 1);\n\n    if (nameDrop === guest) {\n      changeInputValueGuest(id, value - 1, currentValue);\n    } else {\n      changeInputValue(id, value - 1, currentValue);\n    }\n  }\n\n  if (+$(`#drop_${nameDrop[6]}`).find(\".dropdown-window__value\").text() === 0) {\n    $(`#drop_${nameDrop[6]}`).find(\".dropdown-window__clear\").hide(300);\n    $(`#${nameDrop[6]}`).val(nameDrop[4]);\n  }\n}\n\nfunction changeInputValue(id, value, currentValue) {\n  let [val1, val2, val3] = currentValue;\n  [val1, val2, val3] = [+val1, +val2, +val3];\n\n  if (val1 + val2 + val3 === 0) {\n    $(`#${nameDrop[6]}`).val(`1 ${nameDrop[id][0]}`);\n    return false;\n  }\n\n  if (id === 0 && value === 0) {\n    if (val2 === 0) {\n      let nam3 = val3 === 0 ? \"\" : `${val3} ${calcCorrectEndings(val3, nameDrop[2])}`;\n      $(`#${nameDrop[6]}`).val(trimEnd(`${nam3}`));\n      return false;\n    } else {\n      let nam2 = `${val2} ${calcCorrectEndings(val2, nameDrop[1])}`;\n      let nam3 = val3 === 0 ? \"\" : `, ${val3} ${calcCorrectEndings(val3, nameDrop[2])}`;\n      $(`#${nameDrop[6]}`).val(trimEnd(`${nam2}${nam3}`));\n      return false;\n    }\n  } else if (id === 0) {\n    let nam1 = `${value} ${calcCorrectEndings(value, nameDrop[0])}`;\n    let nam2 = val2 === 0 ? \"\" : `, ${val2} ${calcCorrectEndings(val2, nameDrop[1])}`;\n    let nam3 = val3 === 0 ? \"\" : `, ${val3} ${calcCorrectEndings(val3, nameDrop[2])}`;\n    $(`#${nameDrop[6]}`).val(trimEnd(`${nam1}${nam2}${nam3}`));\n    return false;\n  }\n\n  if (id === 1 && value === 0) {\n    if (val1 === 0) {\n      let nam3 = val3 === 0 ? \"\" : `${val3} ${calcCorrectEndings(val3, nameDrop[2])}`;\n      $(`#${nameDrop[6]}`).val(trimEnd(`${nam3}`));\n      return false;\n    } else {\n      let nam1 = val1 === 0 ? \"\" : `${val1} ${calcCorrectEndings(val1, nameDrop[0])}`;\n      let nam3 = val3 === 0 ? \"\" : `, ${val3} ${calcCorrectEndings(val3, nameDrop[2])}`;\n      $(`#${nameDrop[6]}`).val(trimEnd(`${nam1}${nam3}`));\n      return false;\n    }\n  } else if (id === 1) {\n    let nam1 = val1 === 0 ? \"\" : `${val1} ${calcCorrectEndings(val1, nameDrop[0])}`;\n    let nam2 = val1 === 0 ? `${value} ${calcCorrectEndings(value, nameDrop[1])}` : `, ${value} ${calcCorrectEndings(value, nameDrop[1])}`;\n    let nam3 = val3 === 0 ? \"\" : `, ${val3} ${calcCorrectEndings(val3, nameDrop[2])}`;\n    $(`#${nameDrop[6]}`).val(trimEnd(`${nam1}${nam2}${nam3}`));\n    return false;\n  }\n\n  if (id === 2 && value === 0) {\n    if (val1 > 0) {\n      let nam1 = `${val1} ${calcCorrectEndings(val1, nameDrop[0])}`;\n      let nam2 = val2 === 0 ? \"\" : `, ${val2} ${calcCorrectEndings(val2, nameDrop[1])}`;\n      $(`#${nameDrop[6]}`).val(trimEnd(`${nam1}${nam2}`));\n      return false;\n    } else {\n      let nam2 = val2 === 0 ? \"\" : `${val2} ${calcCorrectEndings(val2, nameDrop[1])}`;\n      $(`#${nameDrop[6]}`).val(trimEnd(`${nam2}`));\n      return false;\n    }\n  } else if (id === 2) {\n    if (val1 === 0 && val2 === 0) {\n      let nam3 = `${value} ${calcCorrectEndings(value, nameDrop[2])}`;\n      $(`#${nameDrop[6]}`).val(trimEnd(`${nam3}`));\n      return false;\n    } else if (val1 > 0 && val2 > 0) {\n      let nam1 = `${val1} ${calcCorrectEndings(val1, nameDrop[0])}`;\n      let nam2 = `, ${val2} ${calcCorrectEndings(val2, nameDrop[1])}`;\n      let nam3 = `, ${value} ${calcCorrectEndings(value, nameDrop[2])}`;\n      $(`#${nameDrop[6]}`).val(trimEnd(`${nam1}${nam2}${nam3}`));\n      return false;\n    } else {\n      let nam1 = val1 === 0 ? \"\" : `${val1} ${calcCorrectEndings(val1, nameDrop[0])}`;\n      let nam2 = val2 === 0 ? \"\" : `${val2} ${calcCorrectEndings(val2, nameDrop[1])}`;\n      let nam3 = `, ${value} ${calcCorrectEndings(value, nameDrop[2])}`;\n      $(`#${nameDrop[6]}`).val(trimEnd(`${nam1}${nam2}${nam3}`));\n      return false;\n    }\n  }\n}\n\nfunction changeInputValueGuest(id, value, currentValue) {\n  let [val1, val2, val3] = currentValue;\n  [val1, val2, val3] = [+val1, +val2, +val3];\n\n  if (val1 + val2 + val3 === 0) {\n    $(`#${nameDrop[6]}`).val(`1 ${nameDrop[id][0]}`);\n    return false;\n  }\n\n  if (id === 0 && value === 0) {\n    if (val2 === 0) {\n      let nam3 = val3 === 0 ? \"\" : `${val3} ${calcCorrectEndings(val3, nameDrop[2])}`;\n      $(`#${nameDrop[6]}`).val(trimEnd(`${nam3}`));\n      return false;\n    } else {\n      let nam2 = `${val2} ${calcCorrectEndings(val2, nameDrop[0])}`;\n      let nam3 = val3 === 0 ? \"\" : `, ${val3} ${calcCorrectEndings(val3, nameDrop[2])}`;\n      $(`#${nameDrop[6]}`).val(trimEnd(`${nam2}${nam3}`));\n      return false;\n    }\n  } else if (id === 0) {\n    let nam1 = value + val2;\n    nam1 = `${nam1} ${calcCorrectEndings(nam1, nameDrop[0])}`;\n    let nam3 = val3 === 0 ? \"\" : `, ${val3} ${calcCorrectEndings(val3, nameDrop[2])}`;\n    $(`#${nameDrop[6]}`).val(trimEnd(`${nam1}${nam3}`));\n    return false;\n  }\n\n  if (id === 1 && value === 0) {\n    if (val1 === 0) {\n      let nam3 = val3 === 0 ? \"\" : `${val3} ${calcCorrectEndings(val3, nameDrop[2])}`;\n      $(`#${nameDrop[6]}`).val(trimEnd(`${nam3}`));\n      return false;\n    } else {\n      let nam2 = val1 + value;\n      nam2 = `${nam2} ${calcCorrectEndings(nam2, nameDrop[0])}`;\n      let nam3 = val3 === 0 ? \"\" : `, ${val3} ${calcCorrectEndings(val3, nameDrop[2])}`;\n      $(`#${nameDrop[6]}`).val(trimEnd(`${nam2}${nam3}`));\n      return false;\n    }\n  } else if (id === 1) {\n    let nam2 = val1 + value;\n    nam2 = `${nam2} ${calcCorrectEndings(nam2, nameDrop[0])}`;\n    let nam3 = val3 === 0 ? \"\" : `, ${val3} ${calcCorrectEndings(val3, nameDrop[2])}`;\n    $(`#${nameDrop[6]}`).val(trimEnd(`${nam2}${nam3}`));\n    return false;\n  }\n\n  if (id === 2 && value === 0) {\n    if (val1 > 0 || val2 > 0) {\n      let nam1 = val1 + val2;\n      nam1 = `${nam1} ${calcCorrectEndings(nam1, nameDrop[0])}`;\n      $(`#${nameDrop[6]}`).val(trimEnd(`${nam1}`));\n      return false;\n    } else {\n      $(`#${nameDrop[6]}`).val(``);\n      return false;\n    }\n  } else if (id === 2) {\n    if (val1 === 0 && val2 === 0) {\n      let nam3 = `${value} ${calcCorrectEndings(value, nameDrop[2])}`;\n      $(`#${nameDrop[6]}`).val(trimEnd(`${nam3}`));\n      return false;\n    } else {\n      let nam1 = val1 + val2;\n      nam1 = `${nam1} ${calcCorrectEndings(nam1, nameDrop[0])}`;\n      let nam3 = `, ${value} ${calcCorrectEndings(value, nameDrop[2])}`;\n      $(`#${nameDrop[6]}`).val(trimEnd(`${nam1}${nam3}`));\n      return false;\n    }\n  }\n} // Функция ставит троеточие в конце, если в строке больше 20 символов\n\n\nfunction trimEnd(str) {\n  if (str.length > 19) {\n    return str.match(/[0-9][0-9]*\\s[а-я][а-я]*\\,\\s[0-9][0-9]*\\s[а-я][а-я]*/g) + \"...\";\n  }\n\n  return str;\n} // Функция вычисляет правильные окончания\n\n\nfunction calcCorrectEndings(number, name) {\n  return name[number % 100 > 4 && number % 100 < 20 ? 2 : nameDrop[3][number % 10 < 5 ? number % 10 : 5]];\n}\n\nfunction clearDropdown(el) {\n  $(`#${nameDrop[6]}`).val(nameDrop[4][0]);\n  $(`#drop_${nameDrop[6]}`).find(\".dropdown-window__value\").text(\"0\");\n  $(`#drop_${nameDrop[6]}`).find(\".dropdown-window__decrement\").removeClass(\"dropdown-window__decrement_active\");\n  $(`#drop_${nameDrop[6]}`).find(\".dropdown-window__increment\").addClass(\"dropdown-window__increment_active\");\n  el.hide(500);\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./components/small-components/dropdown/dropdown.js?");

/***/ }),

/***/ "./components/small-components/dropdown/img/icon-dropdown-active.svg":
/*!***************************************************************************!*\
  !*** ./components/small-components/dropdown/img/icon-dropdown-active.svg ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/icon-dropdown-active.svg\";\n\n//# sourceURL=webpack:///./components/small-components/dropdown/img/icon-dropdown-active.svg?");

/***/ }),

/***/ "./components/small-components/dropdown/img/icon-dropdown.svg":
/*!********************************************************************!*\
  !*** ./components/small-components/dropdown/img/icon-dropdown.svg ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/icon-dropdown.svg\";\n\n//# sourceURL=webpack:///./components/small-components/dropdown/img/icon-dropdown.svg?");

/***/ }),

/***/ "./components/small-components/expandable-checkbox-list/checkbox-list.js":
/*!*******************************************************************************!*\
  !*** ./components/small-components/expandable-checkbox-list/checkbox-list.js ***!
  \*******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _dropdown_img_icon_dropdown_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dropdown/img/icon-dropdown.svg */ \"./components/small-components/dropdown/img/icon-dropdown.svg\");\n/* harmony import */ var _dropdown_img_icon_dropdown_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dropdown_img_icon_dropdown_svg__WEBPACK_IMPORTED_MODULE_0__);\n\n$(\".checkbox-click\").on(\"click\", function () {\n  $(this).siblings(\".checkbox__modal\").slideToggle(\"checkbox__modal_display_none\");\n  $(this).parent().toggleClass([\"checkbox_img_arrow\", \"checkbox_img_arrow_transform\"]);\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./components/small-components/expandable-checkbox-list/checkbox-list.js?");

/***/ }),

/***/ "./components/small-components/expandable-checkbox-list/checkbox-list.styl":
/*!*********************************************************************************!*\
  !*** ./components/small-components/expandable-checkbox-list/checkbox-list.styl ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./components/small-components/expandable-checkbox-list/checkbox-list.styl?");

/***/ }),

/***/ "./components/small-components/filter-date-dropdown/filter-date.js":
/*!*************************************************************************!*\
  !*** ./components/small-components/filter-date-dropdown/filter-date.js ***!
  \*************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var air_datepicker_src_js_air_datepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! air-datepicker/src/js/air-datepicker */ \"../node_modules/air-datepicker/src/js/air-datepicker.js\");\n/* harmony import */ var air_datepicker_src_js_air_datepicker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(air_datepicker_src_js_air_datepicker__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var air_datepicker_dist_css_datepicker_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! air-datepicker/dist/css/datepicker.css */ \"../node_modules/air-datepicker/dist/css/datepicker.css\");\n/* harmony import */ var air_datepicker_dist_css_datepicker_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(air_datepicker_dist_css_datepicker_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n$('.filter-date-window').data('datepicker');\n$('.filter-date-window').datepicker({\n  inline: true,\n  range: true,\n  clearButton: true,\n  applyButton2: true,\n  language: {\n    monthsShort: ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек']\n  },\n  dateFormat: 'd M',\n  onSelect: function (formattedDate, date, inst) {\n    const [date1, date2] = formattedDate.split(\",\");\n\n    if (date2) {\n      $(\"#filterDate\").val(`${date1} - ${date2}`);\n    } else {\n      $(\"#filterDate\").val(date1);\n    }\n  }\n});\n$('.filter-date__input').on('mousedown', function (e) {\n  e.preventDefault();\n});\n$('.filter-date__input').on('click', function (e) {\n  $('.filter-date-window').fadeToggle(\"dropdown-window_display_none\");\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./components/small-components/filter-date-dropdown/filter-date.js?");

/***/ }),

/***/ "./components/small-components/filter-date-dropdown/filter-date.styl":
/*!***************************************************************************!*\
  !*** ./components/small-components/filter-date-dropdown/filter-date.styl ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./components/small-components/filter-date-dropdown/filter-date.styl?");

/***/ }),

/***/ "./components/small-components/pagination/pagination.styl":
/*!****************************************************************!*\
  !*** ./components/small-components/pagination/pagination.styl ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./components/small-components/pagination/pagination.styl?");

/***/ }),

/***/ "./components/small-components/range-slider/range-slider.js":
/*!******************************************************************!*\
  !*** ./components/small-components/range-slider/range-slider.js ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(noUiSlider, $) {/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nouislider */ \"../node_modules/nouislider/distribute/nouislider.js\");\n/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var nouislider_distribute_nouislider_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nouislider/distribute/nouislider.css */ \"../node_modules/nouislider/distribute/nouislider.css\");\n/* harmony import */ var nouislider_distribute_nouislider_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nouislider_distribute_nouislider_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst slider = document.getElementById('range');\nnoUiSlider.create(slider, {\n  start: [5000, 10000],\n  connect: true,\n  step: 100,\n  range: {\n    'min': 0,\n    'max': 16000\n  }\n});\nslider.noUiSlider.on('slide', function () {\n  let [val1, val2] = slider.noUiSlider.get();\n  $(\".range-slider__number\").text(new Intl.NumberFormat('ru-RU').format(+val1) + \"₽ - \" + new Intl.NumberFormat('ru-RU').format(+val2) + \"₽\");\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! nouislider */ \"../node_modules/nouislider/distribute/nouislider.js\"), __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./components/small-components/range-slider/range-slider.js?");

/***/ }),

/***/ "./components/small-components/range-slider/range-slider.styl":
/*!********************************************************************!*\
  !*** ./components/small-components/range-slider/range-slider.styl ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./components/small-components/range-slider/range-slider.styl?");

/***/ }),

/***/ "./components/small-components/rate-button/rating/rating.styl":
/*!********************************************************************!*\
  !*** ./components/small-components/rate-button/rating/rating.styl ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./components/small-components/rate-button/rating/rating.styl?");

/***/ }),

/***/ "./components/small-components/rich-checkbox-buttons/rich-checkbox.styl":
/*!******************************************************************************!*\
  !*** ./components/small-components/rich-checkbox-buttons/rich-checkbox.styl ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./components/small-components/rich-checkbox-buttons/rich-checkbox.styl?");

/***/ }),

/***/ "./fonts/fonts.styl":
/*!**************************!*\
  !*** ./fonts/fonts.styl ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./fonts/fonts.styl?");

/***/ }),

/***/ "./pages/search-room/media.styl":
/*!**************************************!*\
  !*** ./pages/search-room/media.styl ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./pages/search-room/media.styl?");

/***/ }),

/***/ "./pages/search-room/search-room.js":
/*!******************************************!*\
  !*** ./pages/search-room/search-room.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _components_main_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/main/main.js */ \"./components/main/main.js\");\n/* harmony import */ var _components_header_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/header/header.js */ \"./components/header/header.js\");\n/* harmony import */ var _components_small_components_filter_date_dropdown_filter_date_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/small-components/filter-date-dropdown/filter-date.js */ \"./components/small-components/filter-date-dropdown/filter-date.js\");\n/* harmony import */ var _components_small_components_filter_date_dropdown_filter_date_styl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/small-components/filter-date-dropdown/filter-date.styl */ \"./components/small-components/filter-date-dropdown/filter-date.styl\");\n/* harmony import */ var _components_small_components_filter_date_dropdown_filter_date_styl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_small_components_filter_date_dropdown_filter_date_styl__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_small_components_dropdown_dropdown_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/small-components/dropdown/dropdown.js */ \"./components/small-components/dropdown/dropdown.js\");\n/* harmony import */ var _components_small_components_range_slider_range_slider_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/small-components/range-slider/range-slider.js */ \"./components/small-components/range-slider/range-slider.js\");\n/* harmony import */ var _components_small_components_range_slider_range_slider_styl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/small-components/range-slider/range-slider.styl */ \"./components/small-components/range-slider/range-slider.styl\");\n/* harmony import */ var _components_small_components_range_slider_range_slider_styl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_small_components_range_slider_range_slider_styl__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_small_components_checkbox_buttons_checkbox_buttons_styl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/small-components/checkbox-buttons/checkbox-buttons.styl */ \"./components/small-components/checkbox-buttons/checkbox-buttons.styl\");\n/* harmony import */ var _components_small_components_checkbox_buttons_checkbox_buttons_styl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_small_components_checkbox_buttons_checkbox_buttons_styl__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_small_components_rich_checkbox_buttons_rich_checkbox_styl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/small-components/rich-checkbox-buttons/rich-checkbox.styl */ \"./components/small-components/rich-checkbox-buttons/rich-checkbox.styl\");\n/* harmony import */ var _components_small_components_rich_checkbox_buttons_rich_checkbox_styl__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_small_components_rich_checkbox_buttons_rich_checkbox_styl__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_small_components_expandable_checkbox_list_checkbox_list_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/small-components/expandable-checkbox-list/checkbox-list.js */ \"./components/small-components/expandable-checkbox-list/checkbox-list.js\");\n/* harmony import */ var _components_small_components_expandable_checkbox_list_checkbox_list_styl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/small-components/expandable-checkbox-list/checkbox-list.styl */ \"./components/small-components/expandable-checkbox-list/checkbox-list.styl\");\n/* harmony import */ var _components_small_components_expandable_checkbox_list_checkbox_list_styl__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_components_small_components_expandable_checkbox_list_checkbox_list_styl__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components_slider_room_slider_room_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/slider-room/slider-room.js */ \"./components/slider-room/slider-room.js\");\n/* harmony import */ var _components_small_components_pagination_pagination_styl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/small-components/pagination/pagination.styl */ \"./components/small-components/pagination/pagination.styl\");\n/* harmony import */ var _components_small_components_pagination_pagination_styl__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_components_small_components_pagination_pagination_styl__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _components_footer_footer_styl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/footer/footer.styl */ \"./components/footer/footer.styl\");\n/* harmony import */ var _components_footer_footer_styl__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_components_footer_footer_styl__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _search_room_styl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./search-room.styl */ \"./pages/search-room/search-room.styl\");\n/* harmony import */ var _search_room_styl__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_search_room_styl__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _media_styl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./media.styl */ \"./pages/search-room/media.styl\");\n/* harmony import */ var _media_styl__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_media_styl__WEBPACK_IMPORTED_MODULE_15__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n$('.filter-btn').on('click', function (e) {\n  $('.filter').toggleClass('filter_active');\n  $('.filter__shadow').fadeToggle();\n});\n$('.filter__shadow').on('click', function (e) {\n  $(this).fadeToggle();\n  $('.filter').toggleClass('filter_active');\n});\n$('.filter-btn_lg').on('click', function (e) {\n  $('.filter__shadow').fadeToggle();\n  $('.filter').toggleClass('filter_active');\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./pages/search-room/search-room.js?");

/***/ }),

/***/ "./pages/search-room/search-room.styl":
/*!********************************************!*\
  !*** ./pages/search-room/search-room.styl ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./pages/search-room/search-room.styl?");

/***/ })

/******/ });
//# sourceMappingURL=script.js.map