Function.prototype.inherits = function (superClass) {
  function Surrogate () {}
  Surrogate.prototype = superClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

function MovingObject (name, velocity) {
  this.name = name;
  this.velocity = velocity;
}

MovingObject.prototype.impact = function () {
  console.log("Boom!");
};

function Ship () {}
Ship.inherits(MovingObject);
Ship.prototype.captain = function(captain) {
  this.captain = captain;
  console.log(captain);
};

function Asteroid () {
  MovingObject.call()
}
Asteroid.inherits(MovingObject);

var newShip = new Ship ("Ulysses", 3.8);
var newAsteroid = new Asteroid ("Philae", 2.7);

newShip.captain("Rosetta");
// newAsteroid.captain("Rosetta");
newShip.impact();
newAsteroid.impact();
console.log(newAsteroid.name);
console.log(newAsteroid.velocity);
// console.log(MovingObject.prototype);
//
// console.log(newShip.__proto__.__proto__);
// console.log(newAsteroid.__proto__);
