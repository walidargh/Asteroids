

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
