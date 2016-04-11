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
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(3);
	module.exports = __webpack_require__(7);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	

	var MovingObject = __webpack_require__(2);
	var Util = __webpack_require__(3);

	var Asteroid = window.Asteroid = function (attr) {

	  attr.vel = Util.randomVec(Math.random()*40);
	  attr.color = attr.color || "red";
	  attr.radius = attr.radius || 10;

	  MovingObject.call(this, attr );
	};

	Util.inherits(Asteroid, MovingObject);

	module.exports = Asteroid;


/***/ },
/* 2 */
/***/ function(module, exports) {

	function MovingObject (attributes) {
	  this.pos = attributes.pos;
	  this.vel = attributes.vel;
	  this.radius = attributes.radius;
	  this.color = attributes.color;
	}

	MovingObject.prototype.draw = function(ctx) {
	  ctx.fillStyle = this.color;
	  ctx.beginPath();

	  ctx.arc(
	    this.pos[0],
	    this.pos[1],
	    this.radius,
	    0,
	    2 * Math.PI,
	    false
	  );

	  ctx.fill();
	};

	MovingObject.prototype.move = function () {
	  this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
	};

	module.exports = MovingObject;


/***/ },
/* 3 */
/***/ function(module, exports) {

	function Util () {}

	Util.inherits = function(ChildClass, ParentClass){
	    function Surrogate () {}
	    Surrogate.prototype = ParentClass.prototype;
	    ChildClass.prototype = new Surrogate();
	    ChildClass.prototype.constructor = ChildClass;
	};

	Util.randomVec = function(length){
	  var randX = Math.floor(Math.random()*length);
	  var randY = Math.floor(Math.sqrt((length * length) - (randX * length)));
	  return [randX, randY];
	};

	module.exports = Util;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var Asteroid = __webpack_require__(1);

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


/***/ },
/* 5 */
/***/ function(module, exports) {

	

	function GameView(ctx, game) {
	  this.game = game;
	  this.ctx = ctx;
	}
	GameView.prototype.start = function () {
	  var gv = this;
	  setInterval( function () {
	    gv.game.draw(gv.ctx);
	    gv.game.moveObjects();

	  }, 20);
	};


	module.exports = GameView;


/***/ },
/* 6 */
/***/ function(module, exports) {

	

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var GameView = __webpack_require__(5);
	var Game = __webpack_require__(4);

	var canvasEl = document.getElementsByTagName("canvas")[0];
	var ctx = canvasEl.getContext('2d');
	console.log(canvasEl);

	canvasEl.height = window.innerHeight;
	canvasEl.width = window.innerWidth;

	new GameView(ctx, new Game()).start();


/***/ }
/******/ ]);