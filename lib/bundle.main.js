(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (__dirname){
'use strict';

var _require = require('electron');

var app = _require.app;
var BrowserWindow = _require.BrowserWindow;
var crashReporter = _require.crashReporter;

var createWindow = function createWindow() {
  mainWindow = new BrowserWindow({ width: 800, heitht: 600 });
  mainWindow.loadURL('file://' + __dirname + '/../../index.html');
  // mainWindow.openDevTools();
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
};

var mainWindow = null;
app.on('window-all-closed', function () {
  process.platform == 'darwin' && app.quit();
});
app.on('ready', createWindow);
app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

}).call(this,"/Users/keita/.ghq/github.com/all-user/live-cam-clock/src/js")

},{"electron":"electron"}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvVXNlcnMva2VpdGEvLmdocS9naXRodWIuY29tL2FsbC11c2VyL2xpdmUtY2FtLWNsb2NrL3NyYy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O2VDQThDLFFBQVEsVUFBUixDOztJQUF0QyxHLFlBQUEsRztJQUFLLGEsWUFBQSxhO0lBQWUsYSxZQUFBLGE7O0FBQzVCLElBQU0sZUFBZSxTQUFmLFlBQWUsR0FBTTtBQUN6QixlQUFhLElBQUksYUFBSixDQUFrQixFQUFFLE9BQU8sR0FBVCxFQUFjLFFBQVEsR0FBdEIsRUFBbEIsQ0FBYjtBQUNBLGFBQVcsT0FBWCxhQUE4QixTQUE5Qjs7QUFFQSxhQUFXLEVBQVgsQ0FBYyxRQUFkLEVBQXdCLFlBQU07QUFBRSxpQkFBYSxJQUFiO0FBQW9CLEdBQXBEO0FBQ0QsQ0FMRDs7QUFPQSxJQUFJLGFBQWEsSUFBakI7QUFDQSxJQUFJLEVBQUosQ0FBTyxtQkFBUCxFQUE0QixZQUFNO0FBQUUsVUFBUSxRQUFSLElBQW9CLFFBQXBCLElBQWdDLElBQUksSUFBSixFQUFoQztBQUE2QyxDQUFqRjtBQUNBLElBQUksRUFBSixDQUFPLE9BQVAsRUFBZ0IsWUFBaEI7QUFDQSxJQUFJLEVBQUosQ0FBTyxVQUFQLEVBQW1CLFlBQU07OztBQUd2QixNQUFJLGVBQWUsSUFBbkIsRUFBeUI7QUFDdkI7QUFDRDtBQUNGLENBTkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY29uc3QgeyBhcHAsIEJyb3dzZXJXaW5kb3csIGNyYXNoUmVwb3J0ZXIgfSA9IHJlcXVpcmUoJ2VsZWN0cm9uJyk7XG5jb25zdCBjcmVhdGVXaW5kb3cgPSAoKSA9PiB7XG4gIG1haW5XaW5kb3cgPSBuZXcgQnJvd3NlcldpbmRvdyh7IHdpZHRoOiA4MDAsIGhlaXRodDogNjAwIH0pO1xuICBtYWluV2luZG93LmxvYWRVUkwoYGZpbGU6Ly8keyBfX2Rpcm5hbWUgfS8uLi8uLi9pbmRleC5odG1sYCk7XG4gIC8vIG1haW5XaW5kb3cub3BlbkRldlRvb2xzKCk7XG4gIG1haW5XaW5kb3cub24oJ2Nsb3NlZCcsICgpID0+IHsgbWFpbldpbmRvdyA9IG51bGw7IH0pO1xufTtcblxubGV0IG1haW5XaW5kb3cgPSBudWxsO1xuYXBwLm9uKCd3aW5kb3ctYWxsLWNsb3NlZCcsICgpID0+IHsgcHJvY2Vzcy5wbGF0Zm9ybSA9PSAnZGFyd2luJyAmJiBhcHAucXVpdCgpOyB9KTtcbmFwcC5vbigncmVhZHknLCBjcmVhdGVXaW5kb3cpO1xuYXBwLm9uKCdhY3RpdmF0ZScsICgpID0+IHtcbiAgLy8gT24gT1MgWCBpdCdzIGNvbW1vbiB0byByZS1jcmVhdGUgYSB3aW5kb3cgaW4gdGhlIGFwcCB3aGVuIHRoZVxuICAvLyBkb2NrIGljb24gaXMgY2xpY2tlZCBhbmQgdGhlcmUgYXJlIG5vIG90aGVyIHdpbmRvd3Mgb3Blbi5cbiAgaWYgKG1haW5XaW5kb3cgPT09IG51bGwpIHtcbiAgICBjcmVhdGVXaW5kb3coKTtcbiAgfVxufSk7XG4iXX0=
