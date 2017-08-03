myApp.model.Block = function(options = {}){

  this.x = options['x'] || 0;
  this.y = options['y'] || 0;
  this.width = options['width'] || 0;
  this.height = options['height'] || 0;

  this.momentum = options['momentum'] || new Maths.Vector();

  this.tangible = options['tangible'] || false;

};

myApp.model.Block.prototype.addMomentum = function(momentum) {

  this.momentum.addVector(momentum);

};

myApp.model.Block.prototype.update = function() {

  var self = this;
  var stage = myApp.stage;
  var controls = myApp.controls;
  var pixelSize = stage.pixelSize;

  // Increment momentum with gravity.
  this.momentum.addVector(new Maths.Vector(Math.PI * .5, 2));

  // Update location based on momentum.
  this.x += this.momentum.getDeltaX();
  this.y += this.momentum.getDeltaY();

  // Update location based on controls.
  if (controls.keyRight) {
    this.x += 15;
  }
  if (controls.keyLeft) {
    this.x -= 15;
  }

  // Snap position to pixel.
  this.x = Math.round(this.x / pixelSize) * pixelSize;
  this.y = Math.round(this.y / pixelSize) * pixelSize;

  // Loop through tiles.
  stage.tiles.forEach(function(tile){

    // check for horizontal collision with tile.
    if (
      self.x > tile.x - self.width &&
      self.x < tile.x + self.width
    ) {

      // check for vertical collision with tile.
      if (
        self.y > tile.y - self.height &&
        self.y < tile.y + self.height
      ) {

        self.momentum.magnitude = 0;

        self.y = tile.y - self.height;
        //self.x = tile.x - self.width;

      }

    }

  });


};

myApp.model.Block.prototype.draw = function() {

  var stage = myApp.stage;
  var ctx = stage.ctx;

  // Reset stage.
  stage.reset();

  // Position.
  ctx.translate(this.x, this.y);

  ctx.beginPath();
  ctx.rect(0, 0, this.width, this.height);
  ctx.stroke();
  ctx.closePath();

};
