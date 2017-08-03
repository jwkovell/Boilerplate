var Maths = Maths || {};

Maths.Vector = function(direction, magnitude){

  this.direction = direction || 0;
  this.magnitude = magnitude || 0;

};

Maths.Vector.prototype.clone = function() {

  return new Maths.Vector(this.direction, this.magnitude);

};

Maths.Vector.prototype.getDeltaX = function() {

  return this.magnitude * Math.cos(this.direction);

};

Maths.Vector.prototype.getDeltaY = function() {

  return this.magnitude * Math.sin(this.direction);

};

Maths.Vector.prototype.addVector = function(vector = new Maths.Vector()) {

  var newDeltaX = this.getDeltaX() + vector.getDeltaX();
  var newDeltaY = this.getDeltaY() + vector.getDeltaY();

  this.direction = Math.atan2(newDeltaY, newDeltaX);

  if (newDeltaX === 0) {
    this.magnitude = newDeltaY;
  } else if (newDeltaY === 0) {
    this.magnitude = newDeltaX;
  } else {
    this.magnitude = Math.sqrt(Math.pow(newDeltaX, 2) + Math.pow(newDeltaY, 2));
  }

};

// Returns line based on this vector beginning at given starting point.
Maths.Vector.prototype.toLine = function(startPoint = new Maths.Point()) {

  var endPoint = startPoint.clone().applyVector(this);
  return new Maths.Line(startPoint, endPoint);

};
