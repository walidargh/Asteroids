function sum () {
  var args = Array.prototype.slice.call(arguments);
  var result = 0;
  args.forEach(function (i) {
    result += i;
  });
  return result;
}

// console.log(sum(1, 2, 3, 4) === 10);
// console.log(sum(1, 2, 3, 4, 5) === 15);
// console.log(sum());
// console.log(sum('hello', 'hi', 'bye'));
Function.prototype.myBind = function (obj) {
  var fn = this;
  var bindArgs = Array.prototype.slice.call(arguments);
  return function () {
    var fnArgs = Array.prototype.slice.call(arguments);
    var args = bindArgs.slice(1).concat(fnArgs);
    return fn.apply(obj, args);
  };
};


function Cat(name) {
  this.name = name;
}

Cat.prototype.says = function (sound, person) {
  console.log(this.name + " says " + sound + " to " + person + "!");
  return true;
};

var markov = new Cat("Markov");
var breakfast = new Cat("Breakfast");
// console.log(markov.says.apply(markov, ['meow', 'Kush']));
// console.log(markov.says.myBind(breakfast, "meow", "Kush")());
// markov.says.myBind(breakfast)("meow", "a tree");
// markov.says.myBind(breakfast, "meow")("Markov");
// var notMarkovSays = markov.says.myBind(breakfast);
// notMarkovSays("meow", "me");
