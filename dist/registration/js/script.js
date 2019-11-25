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
/******/ 		"registration": 0
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
/******/ 	deferredModules.push(["./pages/registration/registration.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/form-reg/form-reg.js":
/*!*****************************************!*\
  !*** ./components/form-reg/form-reg.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _small_components_text_field_text_field_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../small-components/text-field/text-field.styl */ \"./components/small-components/text-field/text-field.styl\");\n/* harmony import */ var _small_components_text_field_text_field_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_small_components_text_field_text_field_styl__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _small_components_radio_buttons_radio_styl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../small-components/radio-buttons/radio.styl */ \"./components/small-components/radio-buttons/radio.styl\");\n/* harmony import */ var _small_components_radio_buttons_radio_styl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_small_components_radio_buttons_radio_styl__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _small_components_toggle_toggle_block_styl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../small-components/toggle/toggle-block.styl */ \"./components/small-components/toggle/toggle-block.styl\");\n/* harmony import */ var _small_components_toggle_toggle_block_styl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_small_components_toggle_toggle_block_styl__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _small_components_buttons_buttons_styl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../small-components/buttons/buttons.styl */ \"./components/small-components/buttons/buttons.styl\");\n/* harmony import */ var _small_components_buttons_buttons_styl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_small_components_buttons_buttons_styl__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _form_reg_styl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-reg.styl */ \"./components/form-reg/form-reg.styl\");\n/* harmony import */ var _form_reg_styl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_form_reg_styl__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var imask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! imask */ \"../node_modules/imask/dist/imask.esm.js\");\n\n\n\n\n\n\nconst element = document.getElementById('maskedTextFormReg');\nObject(imask__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(element, {\n  mask: Date,\n  pattern: 'd.`m.`Y',\n  blocks: {\n    d: {\n      mask: imask__WEBPACK_IMPORTED_MODULE_5__[\"default\"].MaskedRange,\n      from: 1,\n      to: 31,\n      maxLength: 2\n    },\n    m: {\n      mask: imask__WEBPACK_IMPORTED_MODULE_5__[\"default\"].MaskedRange,\n      from: 1,\n      to: 12,\n      maxLength: 2\n    },\n    Y: {\n      mask: imask__WEBPACK_IMPORTED_MODULE_5__[\"default\"].MaskedRange,\n      from: 1900,\n      to: 2010\n    }\n  }\n});\n\n//# sourceURL=webpack:///./components/form-reg/form-reg.js?");

/***/ }),

/***/ "./components/form-reg/form-reg.styl":
/*!*******************************************!*\
  !*** ./components/form-reg/form-reg.styl ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./components/form-reg/form-reg.styl?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fonts_fonts_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../fonts/fonts.styl */ \"./fonts/fonts.styl\");\n/* harmony import */ var _fonts_fonts_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fonts_fonts_styl__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _img_favicon_ico__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/favicon.ico */ \"./components/main/img/favicon.ico\");\n/* harmony import */ var _img_favicon_ico__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_favicon_ico__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _main_styl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.styl */ \"./components/main/main.styl\");\n/* harmony import */ var _main_styl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_main_styl__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n//# sourceURL=webpack:///./components/main/main.js?");

/***/ }),

/***/ "./components/main/main.styl":
/*!***********************************!*\
  !*** ./components/main/main.styl ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./components/main/main.styl?");

/***/ }),

/***/ "./components/small-components/buttons/buttons.styl":
/*!**********************************************************!*\
  !*** ./components/small-components/buttons/buttons.styl ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./components/small-components/buttons/buttons.styl?");

/***/ }),

/***/ "./components/small-components/radio-buttons/radio.styl":
/*!**************************************************************!*\
  !*** ./components/small-components/radio-buttons/radio.styl ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./components/small-components/radio-buttons/radio.styl?");

/***/ }),

/***/ "./components/small-components/text-field/text-field.styl":
/*!****************************************************************!*\
  !*** ./components/small-components/text-field/text-field.styl ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./components/small-components/text-field/text-field.styl?");

/***/ }),

/***/ "./components/small-components/toggle/toggle-block.styl":
/*!**************************************************************!*\
  !*** ./components/small-components/toggle/toggle-block.styl ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./components/small-components/toggle/toggle-block.styl?");

/***/ }),

/***/ "./fonts/fonts.styl":
/*!**************************!*\
  !*** ./fonts/fonts.styl ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./fonts/fonts.styl?");

/***/ }),

/***/ "./pages/registration/img/bg-registration.jpg":
/*!****************************************************!*\
  !*** ./pages/registration/img/bg-registration.jpg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/bg-registration.jpg\";\n\n//# sourceURL=webpack:///./pages/registration/img/bg-registration.jpg?");

/***/ }),

/***/ "./pages/registration/registration.js":
/*!********************************************!*\
  !*** ./pages/registration/registration.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_main_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/main/main.js */ \"./components/main/main.js\");\n/* harmony import */ var _registration_styl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registration.styl */ \"./pages/registration/registration.styl\");\n/* harmony import */ var _registration_styl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_registration_styl__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _img_bg_registration_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/bg-registration.jpg */ \"./pages/registration/img/bg-registration.jpg\");\n/* harmony import */ var _img_bg_registration_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_bg_registration_jpg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_form_reg_form_reg_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/form-reg/form-reg.js */ \"./components/form-reg/form-reg.js\");\n\n\n\n\n\n//# sourceURL=webpack:///./pages/registration/registration.js?");

/***/ }),

/***/ "./pages/registration/registration.styl":
/*!**********************************************!*\
  !*** ./pages/registration/registration.styl ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./pages/registration/registration.styl?");

/***/ })

/******/ });
//# sourceMappingURL=script.js.map