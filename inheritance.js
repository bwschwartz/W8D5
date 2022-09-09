// ES5 without Object.create

// Function.prototype.inherits = function(parentClass) {
//   function Surrogate() {}
//   Surrogate.prototype = parentClass.prototype
//   this.prototype = new Surrogate ();
//   this.prototype.constructor = this;
// }

// with Object.create
Function.prototype.inherits = function(parentClass) {
  this.prototype = Object.create(parentClass.prototype);
  this.prototype.constructor = this;
}


function MovingObject(name) {
  this.name = name;
}

MovingObject.prototype.testAttr = "hi";
MovingObject.prototype.print = function () {
  console.log(`hi from ${this.name}`);
}

function Ship(name) {
  this.name = name;
  // this.testAttr = "bye";
}
Ship.inherits(MovingObject);

const myShip = new Ship("Ben")

console.log(myShip.print())
console.log(myShip.testAttr)

