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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/BaseComponent.js":
/*!*****************************************!*\
  !*** ./src/components/BaseComponent.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BaseComponent; });\n/* harmony import */ var _helpers_pub_sub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/pub_sub */ \"./src/helpers/pub_sub.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar BaseComponent =\n/*#__PURE__*/\nfunction () {\n  function BaseComponent() {\n    _classCallCheck(this, BaseComponent);\n\n    this.parent = document.createElement('div');\n    this.snapshot = null;\n    _helpers_pub_sub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publish(\"APP:COMPONENT_ADDED\", {\n      component: this\n    });\n  }\n\n  _createClass(BaseComponent, [{\n    key: \"render\",\n    value: function render() {}\n  }, {\n    key: \"destroy\",\n    value: function destroy() {\n      while (parent.firstChild) {\n        parent.removeChild(parent.firstChild);\n      }\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      if (this.parent.innerHTML !== this.snapshot) {\n        this.destroy();\n        this.parent.appendChild(this.render());\n        this.snapshot = this.parent.innerHTML;\n      }\n\n      ;\n    }\n  }, {\n    key: \"getParent\",\n    value: function getParent() {\n      return this.parent;\n    }\n  }]);\n\n  return BaseComponent;\n}();\n\n\n\n//# sourceURL=webpack:///./src/components/BaseComponent.js?");

/***/ }),

/***/ "./src/helpers/pub_sub.js":
/*!********************************!*\
  !*** ./src/helpers/pub_sub.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PubSub; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar PubSub =\n/*#__PURE__*/\nfunction () {\n  function PubSub() {\n    _classCallCheck(this, PubSub);\n  }\n\n  _createClass(PubSub, null, [{\n    key: \"publish\",\n    value: function publish(channel) {\n      var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n      var e = new CustomEvent(channel, {\n        payload: payload\n      });\n      document.dispatchEvent(e); // Send message out to low level stuff\n\n      e = new CustomEvent(\"APP:UPDATE\", null);\n      document.dispatchEvent(e);\n    }\n  }, {\n    key: \"subcribe\",\n    value: function subcribe(channel, callback) {\n      document.addEventListener(channel, callback);\n    }\n  }]);\n\n  return PubSub;\n}();\n\n\n\n//# sourceURL=webpack:///./src/helpers/pub_sub.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/styles/style.scss\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _single_page_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./single_page_app */ \"./src/single_page_app.js\");\n/* harmony import */ var _components_BaseComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/BaseComponent */ \"./src/components/BaseComponent.js\");\n/* harmony import */ var _helpers_pub_sub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/pub_sub */ \"./src/helpers/pub_sub.js\");\n\n\n\n // App entry point\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  new _single_page_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"](new _components_BaseComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"]());\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/single_page_app.js":
/*!********************************!*\
  !*** ./src/single_page_app.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SinglePageApp; });\n/* harmony import */ var _helpers_pub_sub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/pub_sub */ \"./src/helpers/pub_sub.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar SinglePageApp =\n/*#__PURE__*/\nfunction () {\n  function SinglePageApp(app) {\n    _classCallCheck(this, SinglePageApp);\n\n    this.root = document.createElement('div');\n    this.components = [];\n    this.init(app);\n  }\n\n  _createClass(SinglePageApp, [{\n    key: \"init\",\n    // Setup code, keep constructor cleanish\n    value: function init(app) {\n      _helpers_pub_sub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subcribe(\"APP:UPDATE\", this.update);\n      _helpers_pub_sub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subcribe(\"APP:COMPONENT_ADDED\", this.addComponent);\n      _helpers_pub_sub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subcribe(\"APP:COMPONENT_REMOVED\", this.destroyComponent);\n      this.root.appendChild(app.getParent());\n      _helpers_pub_sub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publish(\"APP:CREATED\");\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      this.components.forEach(function (c) {\n        c.update();\n      });\n    }\n  }, {\n    key: \"addComponent\",\n    value: function addComponent(payload) {\n      this.components.push(payload.component);\n    }\n  }, {\n    key: \"destroyComponent\",\n    value: function destroyComponent(payload) {\n      this.components = this.components.filter(function (component) {\n        return component !== payload.component;\n      });\n    }\n  }]);\n\n  return SinglePageApp;\n}();\n\n\n;\n\n//# sourceURL=webpack:///./src/single_page_app.js?");

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles/style.scss?");

/***/ })

/******/ });