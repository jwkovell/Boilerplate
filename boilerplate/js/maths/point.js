var Maths = Maths || {};

Maths.Point = function(x, y){

  this.x = x || 0;
  this.y = y || 0;

};

Maths.Point.prototype.clone = function() {

  return new Maths.Point(this.x, this.y);

};

Maths.Point.prototype.applyVector = function(vector = new Maths.Vector()) {

  this.x += vector.getDeltaX();
  this.y += vector.getDeltaY();

};
