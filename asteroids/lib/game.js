var Asteroid = require('./asteroid.js');

function Game () {
  this.DIM_X = 2000;
  this.DIM_Y = 1000;
  this.NUM_ASTEROIDS = 5;
  this.asteroids = [];
  this.addAsteroids();
}

Game.prototype.addAsteroids = function () {
  for(var i = 0; i < this.NUM_ASTEROIDS; i++) {
    this.asteroids.push(
      new Asteroid ({pos: this.randomPosition(), game: this})
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

Game.prototype.wrap = function(pos) {
  return [pos[0] % this.DIM_X, pos[1] % this.DIM_Y];
};

Game.prototype.checkCollision = function () {
  for(var i = 0; i < this.asteroids.length; i++) {
    for (var j = 0; j < this.asteroids.length; j++) {
      if ((i !== j)  &&
      this.asteroids[i].isCollidedWith(this.asteroids[j])) {
            this.asteroids[i].color = "blue";
            this.asteroids[j].color = "yellow";
            // alert("COLLISION");
      }
    }
  }
};

Game.prototype.step = function () {
  this.moveObjects();
  this.checkCollision();
};

module.exports = Game;
