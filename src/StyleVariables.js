(function() {
  var FoovarValue = require('foovar/lib/FoovarValue');
  var StylusExpression = require('foovar/lib/StylusExpression');

  module.exports = {
    stylusMixinCache: new FoovarValue(new StylusExpression({
      "__type": "Expression",
      "lineno": 273,
      "column": 21,
      "filename": "/Users/keita/.ghq/github.com/all-user/live-cam-clock/node_modules/stylus/lib/functions/index.styl",
      "nodes": [
        {
          "__type": "Object",
          "vals": {},
          "lineno": 273,
          "column": 21,
          "filename": "/Users/keita/.ghq/github.com/all-user/live-cam-clock/node_modules/stylus/lib/functions/index.styl"
        }
      ]
    }, true)),
    blockColor: new FoovarValue(new StylusExpression({
      "__type": "Expression",
      "lineno": 4,
      "column": 16,
      "filename": "/Users/keita/.ghq/github.com/all-user/live-cam-clock/src/vars.styl",
      "nodes": [
        {
          "__type": "RGBA",
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 0,
          "name": "transparent",
          "lineno": 21,
          "column": 16,
          "filename": "/Users/keita/.ghq/github.com/all-user/live-cam-clock/src/Components/Clock/Clock.styl"
        }
      ]
    }, true)),
    maskingColor: new FoovarValue(new StylusExpression({
      "__type": "Expression",
      "lineno": 5,
      "column": 18,
      "filename": "/Users/keita/.ghq/github.com/all-user/live-cam-clock/src/vars.styl",
      "nodes": [
        {
          "__type": "RGBA",
          "r": 255,
          "g": 255,
          "b": 255,
          "a": 1,
          "name": "white",
          "lineno": 21,
          "column": 16,
          "filename": "/Users/keita/.ghq/github.com/all-user/live-cam-clock/src/Components/Clock/Clock.styl"
        }
      ]
    }, true))
  };
})();