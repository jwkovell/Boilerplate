var Maths = Maths || {};

Maths.Line = function(startPoint, endPoint){

  this.startPoint = startPoint || new Maths.Point();
  this.endPoint = endPoint || new Maths.Point();

};

Maths.Line.prototype.clone = function() {

  return new Maths.Line(this.startPoint.clone(), this.endPoint.clone());

};

Maths.Line.prototype.getLength = function() {

  return Math.sqrt(Math.pow(this.startPoint.x - this.endPoint.x, 2) + Math.pow(Math.pow(this.startPoint.y - this.endPoint.y, 2)));

};

Maths.Line.prototype.getLineIntersect = function(line = new Maths.Line()) {



};
