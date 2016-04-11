function curriedSum(numArgs){

  var numbers = [];

  var _curriedSum = function(num){
    numbers.push(num);
    if (numbers.length === numArgs){
      return numbers.reduce(function(a,b) {return a+b; });
    }
    else{
      return _curriedSum;
    }
  };
  return _curriedSum;
}

// var sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1));
Function.prototype.curry = function(numArgs){
  var fn = this;
  var numbers = [];

  var _curried =  function(num) {
    numbers.push(num);

    if(numbers.length === numArgs){
      return fn.apply(this, numbers);
    }
    else{
      return _curried;
    }
  };
  return _curried;
};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}


var f1 = sumThree.curry(3);
var f2 = f1(4);
var f3 = f2(20);
var result = f3(6); // = 30

// or more briefly:
console.log(sumThree.curry(3)(4)(20)(6)); // == 30
