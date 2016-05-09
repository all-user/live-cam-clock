(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (__dirname){
'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');

var cr = require('crash-reporter');
cr.start({
  productName: 'electron_mockup',
  companyName: 'electron_mockup'
});

var mainWindow = null;

app.on('window-all-closed', function () {
  process.platform == 'darwin' && app.quit();
});

app.on('ready', function () {
  mainWindow = new BrowserWindow({ width: 800, heitht: 600 });
  mainWindow.loadURL('file://' + __dirname + '/../../index.html');
  // mainWindow.openDevTools();
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
});

}).call(this,"/Users/keita/.ghq/github.com/all-user/live-cam-clock/src/js")

},{"app":"app","browser-window":"browser-window","crash-reporter":"crash-reporter"}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvVXNlcnMva2VpdGEvLmdocS9naXRodWIuY29tL2FsbC11c2VyL2xpdmUtY2FtLWNsb2NrL3NyYy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FDQUEsSUFBSSxNQUFNLFFBQVEsS0FBUixDQUFWO0FBQ0EsSUFBSSxnQkFBZ0IsUUFBUSxnQkFBUixDQUFwQjs7QUFFQSxJQUFJLEtBQUssUUFBUSxnQkFBUixDQUFUO0FBQ0EsR0FBRyxLQUFILENBQVM7QUFDUCxlQUFhLGlCQUROO0FBRVAsZUFBYTtBQUZOLENBQVQ7O0FBS0EsSUFBSSxhQUFhLElBQWpCOztBQUVBLElBQUksRUFBSixDQUFPLG1CQUFQLEVBQTRCLFlBQU07QUFBRSxVQUFRLFFBQVIsSUFBb0IsUUFBcEIsSUFBZ0MsSUFBSSxJQUFKLEVBQWhDO0FBQTZDLENBQWpGOztBQUVBLElBQUksRUFBSixDQUFPLE9BQVAsRUFBZ0IsWUFBTTtBQUNwQixlQUFhLElBQUksYUFBSixDQUFrQixFQUFFLE9BQU8sR0FBVCxFQUFjLFFBQVEsR0FBdEIsRUFBbEIsQ0FBYjtBQUNBLGFBQVcsT0FBWCxhQUE4QixTQUE5Qjs7QUFFQSxhQUFXLEVBQVgsQ0FBYyxRQUFkLEVBQXdCLFlBQU07QUFBRSxpQkFBYSxJQUFiO0FBQW9CLEdBQXBEO0FBQ0QsQ0FMRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJsZXQgYXBwID0gcmVxdWlyZSgnYXBwJyk7XG5sZXQgQnJvd3NlcldpbmRvdyA9IHJlcXVpcmUoJ2Jyb3dzZXItd2luZG93Jyk7XG5cbmxldCBjciA9IHJlcXVpcmUoJ2NyYXNoLXJlcG9ydGVyJyk7XG5jci5zdGFydCh7XG4gIHByb2R1Y3ROYW1lOiAnZWxlY3Ryb25fbW9ja3VwJyxcbiAgY29tcGFueU5hbWU6ICdlbGVjdHJvbl9tb2NrdXAnXG59KTtcblxubGV0IG1haW5XaW5kb3cgPSBudWxsO1xuXG5hcHAub24oJ3dpbmRvdy1hbGwtY2xvc2VkJywgKCkgPT4geyBwcm9jZXNzLnBsYXRmb3JtID09ICdkYXJ3aW4nICYmIGFwcC5xdWl0KCk7IH0pO1xuXG5hcHAub24oJ3JlYWR5JywgKCkgPT4ge1xuICBtYWluV2luZG93ID0gbmV3IEJyb3dzZXJXaW5kb3coeyB3aWR0aDogODAwLCBoZWl0aHQ6IDYwMCB9KTtcbiAgbWFpbldpbmRvdy5sb2FkVVJMKGBmaWxlOi8vJHsgX19kaXJuYW1lIH0vLi4vLi4vaW5kZXguaHRtbGApO1xuICAvLyBtYWluV2luZG93Lm9wZW5EZXZUb29scygpO1xuICBtYWluV2luZG93Lm9uKCdjbG9zZWQnLCAoKSA9PiB7IG1haW5XaW5kb3cgPSBudWxsOyB9KTtcbn0pO1xuIl19
