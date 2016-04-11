var GameView = require('./gameView.js');
var Game = require('./game.js');

var canvasEl = document.getElementsByTagName("canvas")[0];
var ctx = canvasEl.getContext('2d');
console.log(canvasEl);

canvasEl.height = window.innerHeight;
canvasEl.width = window.innerWidth;

new GameView(ctx, new Game()).start();
