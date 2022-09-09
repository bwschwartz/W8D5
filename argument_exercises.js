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


class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
markov.says.myBind(pavlov, "meow", "Kush")();
// Pavlov says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "a tree"
markov.says.myBind(pavlov)("meow", "a tree");
// Pavlov says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
markov.says.myBind(pavlov, "meow")("Markov");
// Pavlov says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind(pavlov);
notMarkovSays("meow", "me");
// Pavlov says meow to me!
// true

