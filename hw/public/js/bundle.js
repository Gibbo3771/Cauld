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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BaseComponent; });\n/* harmony import */ var _helpers_pub_sub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/pub_sub */ \"./src/helpers/pub_sub.js\");\n/* harmony import */ var _helpers_mutation_watcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/mutation_watcher */ \"./src/helpers/mutation_watcher.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar BaseComponent =\n/*#__PURE__*/\nfunction () {\n  function BaseComponent(props) {\n    var _this = this;\n\n    _classCallCheck(this, BaseComponent);\n\n    this.destroy = function () {\n      while (_this.parent.firstChild) {\n        _this.parent.removeChild(_this.parent.firstChild);\n      }\n    };\n\n    this.update = function () {\n      if (_this.stateDidChange()) {\n        console.log(\"Component is updating\", _this);\n        _this.prevState = _this.state;\n\n        _this.destroy();\n\n        var div = document.createElement('div');\n        div.innerHTML = _this.render();\n\n        _this.parent.appendChild(div);\n      }\n    };\n\n    this.getParent = function () {\n      return _this.parent;\n    };\n\n    this.stateDidChange = function () {\n      return JSON.stringify(_this.state) !== JSON.stringify(_this.prevState);\n    };\n\n    this.setState = function (state) {\n      _this.prevState = _this.state;\n      _this.state = state;\n      _helpers_pub_sub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publish(\"APP:UPDATE\");\n    };\n\n    this.getState = function () {\n      return _this.state;\n    };\n\n    console.log(\"Base component created\");\n    this.parent = document.createElement('div');\n    _helpers_pub_sub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publish(\"APP:COMPONENT_ADDED\", {\n      component: this\n    });\n    this.state = {};\n    this.prevState = this.state;\n    this.props = props;\n    this.watcher = new _helpers_mutation_watcher__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.parent);\n  }\n\n  _createClass(BaseComponent, [{\n    key: \"render\",\n    value: function render() {\n      return null;\n    }\n  }]);\n\n  return BaseComponent;\n}();\n\n\n\n//# sourceURL=webpack:///./src/components/BaseComponent.js?");

/***/ }),

/***/ "./src/components/SimpleContainer.js":
/*!*******************************************!*\
  !*** ./src/components/SimpleContainer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SimpleContainer; });\n/* harmony import */ var _BaseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseComponent */ \"./src/components/BaseComponent.js\");\n/* harmony import */ var _SimpleParagraph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SimpleParagraph */ \"./src/components/SimpleParagraph.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar SimpleContainer =\n/*#__PURE__*/\nfunction (_BaseComponent) {\n  _inherits(SimpleContainer, _BaseComponent);\n\n  function SimpleContainer(props) {\n    var _this;\n\n    _classCallCheck(this, SimpleContainer);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(SimpleContainer).call(this, props));\n    _this.state = {\n      number: 1\n    };\n\n    _this.getParent().addEventListener(\"click\", function () {\n      console.log(_this.state);\n      var number = _this.state.number;\n\n      _this.setState({\n        number: number + 1\n      });\n    });\n\n    return _this;\n  }\n\n  _createClass(SimpleContainer, [{\n    key: \"render\",\n    value: function render() {\n      var p = new _SimpleParagraph__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n        number: this.state.number\n      });\n      return \"<div></div>\";\n    }\n  }]);\n\n  return SimpleContainer;\n}(_BaseComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n;\n\n//# sourceURL=webpack:///./src/components/SimpleContainer.js?");

/***/ }),

/***/ "./src/components/SimpleParagraph.js":
/*!*******************************************!*\
  !*** ./src/components/SimpleParagraph.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SimpleParagraph; });\n/* harmony import */ var _BaseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseComponent */ \"./src/components/BaseComponent.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar SimpleParagraph =\n/*#__PURE__*/\nfunction (_BaseComponent) {\n  _inherits(SimpleParagraph, _BaseComponent);\n\n  function SimpleParagraph(props) {\n    _classCallCheck(this, SimpleParagraph);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(SimpleParagraph).call(this, props));\n  }\n\n  _createClass(SimpleParagraph, [{\n    key: \"render\",\n    value: function render() {\n      return \"<p>\".concat(this.props.number, \"</p>\");\n    }\n  }]);\n\n  return SimpleParagraph;\n}(_BaseComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n\n//# sourceURL=webpack:///./src/components/SimpleParagraph.js?");

/***/ }),

/***/ "./src/helpers/mutation_watcher.js":
/*!*****************************************!*\
  !*** ./src/helpers/mutation_watcher.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MutationWatcher; });\n/* harmony import */ var _pub_sub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pub_sub */ \"./src/helpers/pub_sub.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\nvar MutationWatcher = function MutationWatcher(target) {\n  var _this = this;\n\n  _classCallCheck(this, MutationWatcher);\n\n  this.notify = function () {\n    console.log(\"yay\");\n    _pub_sub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publish(\"APP:UPDATE\");\n  };\n\n  this.disconnect = function () {\n    _this.observer.disconnect();\n  };\n\n  var config = {\n    attributes: true,\n    childList: true,\n    subtree: true\n  };\n  this.observer = new MutationObserver(function () {\n    return _this.notify();\n  });\n  this.observer.observe(target, config);\n};\n\n\n\n//# sourceURL=webpack:///./src/helpers/mutation_watcher.js?");

/***/ }),

/***/ "./src/helpers/pub_sub.js":
/*!********************************!*\
  !*** ./src/helpers/pub_sub.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PubSub; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar PubSub =\n/*#__PURE__*/\nfunction () {\n  function PubSub() {\n    _classCallCheck(this, PubSub);\n  }\n\n  _createClass(PubSub, null, [{\n    key: \"publish\",\n    value: function publish(channel) {\n      var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n      var e = new CustomEvent(channel, {\n        detail: payload\n      });\n      document.dispatchEvent(e); // Send message out to low level stuff\n\n      e = new CustomEvent(\"APP:UPDATE\", null);\n      document.dispatchEvent(e);\n    }\n  }, {\n    key: \"subcribe\",\n    value: function subcribe(channel, callback) {\n      document.addEventListener(channel, callback);\n    }\n  }]);\n\n  return PubSub;\n}();\n\n\n\n//# sourceURL=webpack:///./src/helpers/pub_sub.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/styles/style.scss\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _single_page_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./single_page_app */ \"./src/single_page_app.js\");\n/* harmony import */ var _components_SimpleContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/SimpleContainer */ \"./src/components/SimpleContainer.js\");\n/* harmony import */ var _helpers_pub_sub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/pub_sub */ \"./src/helpers/pub_sub.js\");\n\n\n\n // App entry point\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  console.log(\"Initialising\");\n  new _single_page_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_components_SimpleContainer__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n  _helpers_pub_sub__WEBPACK_IMPORTED_MODULE_3__[\"default\"].publish(\"APP:CREATED\");\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/single_page_app.js":
/*!********************************!*\
  !*** ./src/single_page_app.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SinglePageApp; });\n/* harmony import */ var _helpers_pub_sub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/pub_sub */ \"./src/helpers/pub_sub.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\nvar SinglePageApp = function SinglePageApp(App) {\n  var _this = this;\n\n  _classCallCheck(this, SinglePageApp);\n\n  this.update = function () {\n    _this.children.forEach(function (c) {\n      console.log(\"Checking if component needs updated:\", c);\n      c.update();\n    });\n  };\n\n  this.addComponent = function (payload) {\n    console.log(\"Adding component\");\n\n    _this.children.push(payload.detail.component);\n  };\n\n  this.destroyComponent = function (payload) {\n    _this.children = _this.children.filter(function (component) {\n      return component !== payload.component;\n    });\n  };\n\n  this.createDefaultProps = function () {\n    return {\n      root: _this.root,\n      children: _this.children\n    };\n  };\n\n  this.root = document.getElementById('root');\n  document.body.appendChild(this.root);\n  this.children = new Array();\n  _helpers_pub_sub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subcribe(\"APP:UPDATE\", this.update);\n  _helpers_pub_sub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subcribe(\"APP:COMPONENT_ADDED\", function (evt) {\n    return _this.addComponent(evt);\n  });\n  _helpers_pub_sub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subcribe(\"APP:COMPONENT_REMOVED\", this.destroyComponent);\n  this.app = new App(this.createDefaultProps());\n  this.root.appendChild(this.app.getParent());\n};\n\n\n;\n\n//# sourceURL=webpack:///./src/single_page_app.js?");

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