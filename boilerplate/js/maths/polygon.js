var Maths = Maths || {};

Maths.Polygon = function(vertices){

  this.vertices = vertices || []

};

Maths.Polygon.prototype.clone = function() {

  return new Maths.Polygon(this.vertices);

};

