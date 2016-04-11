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
