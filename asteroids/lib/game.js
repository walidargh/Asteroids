var Asteroid = require('./asteroid.js');

function Game () {
  this.DIM_X = 2000;
  this.DIM_Y = 1000;
  this.NUM_ASTEROIDS = 100;
  this.asteroids = [];
  this.addAsteroids();
}

Game.prototype.addAsteroids = function () {
  for(var i = 0; i < this.NUM_ASTEROIDS; i++) {
    this.asteroids.push(
      new Asteroid ({pos: this.randomPosition()})
    );
  }
};

Game.prototype.randomPosition = function () {
  var randX = Math.floor(Math.random()*this.DIM_X);
  var randY = Math.floor(Math.random()*this.DIM_Y);
  return [randX, randY];
};

Game.prototype.draw = function (ctx) {
  ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
  this.asteroids.forEach(function (asteroid) {
    asteroid.draw(ctx);
  });
};

Game.prototype.moveObjects = function () {
  this.asteroids.forEach(function (asteroid) {
    asteroid.move();
  });
};

module.exports = Game;
