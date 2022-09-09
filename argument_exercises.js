function sum(...args) {
  let total = 0;
  args.forEach (ele => {
    total += ele;
  })
  return total;
}

// console.log(sum(1, 2, 3, 4, 5))

// with arguments
// Function.prototype.myBind = function () {
//   const that = this;

//   ctx = arguments[0];

//   let outer_args = Array.from(arguments).slice(1, arguments.length);

//   return function () {
//     let inner_args = Array.from(arguments);
//     let all_args = outer_args.concat(inner_args);
//     return that.apply(ctx, all_args);
//   }
// }

// with args
Function.prototype.myBind = function (ctx, ...args) {
  const that = this;

  let outer_args = args;

  return function (...args) {
    let inner_args = args;
    let all_args = outer_args.concat(inner_args);
    return that.apply(ctx, all_args);
  }
}


// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   says(sound, person) {
//     console.log(`${this.name} says ${sound} to ${person}!`);
//     return true;
//   }
// }

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
// // Pavlov says meow to a tree!
// // true

// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// // Pavlov says meow to Markov!
// // true

// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
// // Pavlov says meow to me!
// // true

function curriedSum(numArgs) {
  let numbers = [];

  function _curriedSum(num) {
    numbers.push(num)
    if (numbers.length === numArgs) {
      const total = numbers.reduce((acc, ele) => acc + ele);
      return total;
    } else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}

const total = curriedSum(4);
console.log(total(5)(30)(20)(1)); // => 56

// Function.prototype.curry = function(numArgs) {
//   let argumentz = [];
//   let that = this;
//   function _curriedFunc(arg) {
//     argumentz.push(arg)
//     if (argumentz.length === numArgs) {
//       return that.apply(this, argumentz);
//     } else {
//       return _curriedFunc;
//     }
//   }
//   return _curriedFunc;
// }



Function.prototype.curry = function(numArgs) {
  let argumentz = [];
  let that = this;
  function _curriedFunc(...args) {
    argumentz = argumentz.concat(args)
    if (argumentz.length === numArgs) {
      return that.apply(this, argumentz);
    } else {
      return _curriedFunc;
    }
  }
  return _curriedFunc;
}

const curry = console.log.curry(4);
console.log(curry);