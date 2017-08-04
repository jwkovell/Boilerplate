myApp.model.Block = function(options = {}){

  this.x = options['x'] || 0;
  this.y = options['y'] || 0;
  this.width = options['width'] || 0;
  this.height = options['height'] || 0;

  this.slopeStart = options['slopeStart'] || 0;
  this.slopeEnd = options['slopeEnd'] || 0;
  this.collisionMap = [5, 4, 7, 6, 9, 2, 1, 8, 7, 6, 6, 8, 2, 3];

  // Location before applying momentum.
  this.originalX = options['displayX'] || 0;
  this.originalY = options['displayY'] || 0;

  // Visual location.
  this.displayX = options['displayX'] || 0;
  this.displayY = options['displayY'] || 0;

  this.momentum = options['momentum'] || new Maths.Vector();

  this.tangible = options['tangible'] || false;
  this.pinned = options['pinned'] || false;

};

myApp.model.Block.prototype.addMomentum = function(momentum) {

  this.momentum.addVector(momentum);

};

myApp.model.Block.prototype.update = function() {

  var stage = myApp.stage;

  // If block is not pinned in place...
  if (this.pinned === false) {

    // Note original position.
    this.originalX = this.x;
    this.originalY = this.y;

    // Increment momentum with gravity.
    this.momentum.addVector(stage.gravity);

    // Update location based on momentum.
    this.x += this.momentum.getDeltaX();
    this.y += this.momentum.getDeltaY();

  }

};

myApp.model.Block.prototype.snapLocation = function() {

  var pixelSize = myApp.stage.pixelSize;

  // Snap position to pixel.
  this.x = Math.round(this.x / pixelSize) * pixelSize;
  this.y = Math.round(this.y / pixelSize) * pixelSize;

}

myApp.model.Block.prototype.checkCollisions = function() {};

myApp.model.Block.prototype.draw = function() {

  var stage = myApp.stage;
  var ctx = stage.ctx;

  // Reset stage.
  stage.reset();

  // Position.
  ctx.translate(this.x - stage.offsetX, this.y - stage.offsetY);

  ctx.beginPath();
  ctx.rect(0, 0, this.width, this.height);
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(0, 0, 2, 0, Math.PI * 2)
  ctx.fill();
  ctx.closePath();

  if (this.slopeStart + this.slopeEnd) {
    ctx.beginPath();
    ctx.moveTo(0, this.slopeStart);
    ctx.lineTo(this.width, this.slopeEnd);
    ctx.stroke();
    ctx.closePath();
  }

  ctx.font = '12px Arial';
  ctx.fillText(this.x + ', ' + this.y, 2, 14);

};
