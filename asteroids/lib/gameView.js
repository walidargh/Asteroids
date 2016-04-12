

function GameView(ctx, game) {
  this.game = game;
  this.ctx = ctx;
}
GameView.prototype.start = function () {
  var gv = this;
  setInterval( function () {
    gv.game.draw(gv.ctx);
    gv.game.step();

  }, 50);
};


module.exports = GameView;
