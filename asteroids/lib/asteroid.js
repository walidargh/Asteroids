

var MovingObject = require('./movingObject.js');
var Util = require('./utils.js');

var Asteroid = window.Asteroid = function (attr) {

  attr.vel = Util.randomVec(Math.random()*40);
  attr.color = attr.color || "red";
  attr.radius = attr.radius || 30;

  MovingObject.call(this, attr );
};

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;
