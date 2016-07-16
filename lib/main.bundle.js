/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./lib";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _electron = __webpack_require__(333);

	var _os = __webpack_require__(334);

	var _os2 = _interopRequireDefault(_os);

	var _path = __webpack_require__(335);

	var _path2 = _interopRequireDefault(_path);

	var _fs = __webpack_require__(336);

	var _fs2 = _interopRequireDefault(_fs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DEVELOPMENT = (undefined) !== 'production';

	var mainWindow = null;
	_electron.app.on('window-all-closed', function () {
	  process.platform == 'darwin' && _electron.app.quit();
	});
	_electron.app.on('ready', createWindow);
	_electron.app.on('activate', function () {
	  // On OS X it's common to re-create a window in the app when the
	  // dock icon is clicked and there are no other windows open.
	  if (mainWindow === null) {
	    createWindow();
	  }
	});

	function createWindow() {
	  if (DEVELOPMENT) {
	    loadReactDevTools();
	  }
	  mainWindow = new _electron.BrowserWindow({ width: 800, heitht: 600 });
	  mainWindow.loadURL('file://' + __dirname + '/../index.html');
	  if (DEVELOPMENT) {
	    mainWindow.openDevTools();
	  }
	  mainWindow.on('closed', function () {
	    mainWindow = null;
	  });
	}

	function loadReactDevTools() {
	  var id = 'fmkadmapgofadopljbjfkapdkoienihi';
	  var extdir = _path2.default.resolve(_os2.default.homedir(), 'Library/Application Support/Google/Chrome/Default/Extensions');
	  var versions = _fs2.default.readdirSync(extdir + '/' + id).sort();
	  var version = versions.pop();
	  _electron.BrowserWindow.addDevToolsExtension(extdir + '/' + id + '/' + version);
	}

/***/ },

/***/ 333:
/***/ function(module, exports) {

	module.exports = require("electron");

/***/ },

/***/ 334:
/***/ function(module, exports) {

	module.exports = require("os");

/***/ },

/***/ 335:
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },

/***/ 336:
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ }

/******/ });