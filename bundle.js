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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// import React from 'react';
// import { render } from 'react-dom';
// import { connect, Provider } from 'react-redux';
// import { createStore } from 'redux';

var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;
var _ReactRedux = ReactRedux,
    connect = _ReactRedux.connect,
    Provider = _ReactRedux.Provider;
var _Redux = Redux,
    createStore = _Redux.createStore;

// Here's a reducer...

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { name: 'JP' };
  var action = arguments[1];

  switch (action.type) {
    case 'SET_NEW_NAME':
      return { name: action.newName };
    default:
      return state;
  }
};

// ... and store.
var store = createStore(reducer);

// Here we have a functional component with two props: name value and onSetNewName function.
var MyComponent = function MyComponent(_ref) {
  var name = _ref.name,
      onSetNewName = _ref.onSetNewName;
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h3',
      null,
      'Hi, my name is ',
      name
    ),
    React.createElement('input', { type: 'text', onChange: onSetNewName, value: name })
  );
};

// Our component's name prop will be mapped to the name value of store ...
var mapStateToProps = function mapStateToProps(state) {
  return {
    name: state.name
  };
};

// ... and our component's onSetNewName prop will be mapped to dispatch
// an action which contains a new name.
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onSetNewName: function onSetNewName(e) {
      return dispatch({ type: 'SET_NEW_NAME', newName: e.target.value });
    }
  };
};

// Here we connect our component ...
var MyContainer = connect(mapStateToProps, mapDispatchToProps)(MyComponent);

// ... make our store available to connect() calls in the component tree.
// Finally we'll render our container.
render(React.createElement(
  Provider,
  { store: store },
  React.createElement(MyContainer, null)
), document.getElementById('root'));

// console.log('webpack suxxxxx')
//
// let el = document.getElementById('root');
//
// el.innerHTML = "BLAH BLAH BLAH";

/***/ })
/******/ ]);