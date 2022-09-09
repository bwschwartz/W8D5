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

MovingObject.prototype.sound = "hi";
MovingObject.prototype.print = function () {
  console.log(`hi from ${this.name}`);
}

function Ship(name, sound) {
  this.name = name;
  this.sound = sound;
}
Ship.inherits(MovingObject);

const myMovingObject = new MovingObject("Kat")

console.log(myMovingObject.print())
console.log(myMovingObject.sound)

const myShip = new Ship("Ben", "bye")

console.log(myShip.print())
console.log(myShip.sound)

