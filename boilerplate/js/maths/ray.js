var Maths = Maths || {};

Maths.Ray = function(origin, direction){

  this.origin  = origin  || new Point();
  this.direction  = direction  || 0;

};

Maths.Ray.prototype.clone = function() {

  return new Maths.Ray(this.origin, this.direction);

};

