myApp.model.Hero = function(options = {}){

  this.x = options['x'] || 0;
  this.y = options['y'] || 0;
  this.width = options['width'] || 0;
  this.height = options['height'] || 0;

  // Location before applying momentum.
  this.originalX = options['displayX'] || 0;
  this.originalY = options['displayY'] || 0;

  // Visual location.
  this.displayX = options['displayX'] || 0;
  this.displayY = options['displayY'] || 0;

  this.momentum = options['momentum'] || new Maths.Vector();

  // State variables.
  this.onGround = true;

};

myApp.model.Hero.prototype.update = function() {

  var stage = myApp.stage;

  // Note original position.
  this.originalX = this.x;
  this.originalY = this.y;

  // Increment momentum with gravity.
  this.momentum.addVector(stage.gravity);

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

  // If space key is pressed...
  if (controls.keySpace) {

    // If on ground...
    if (this.onGround) {
      this.onGround = false;
      this.y -= 40;
      var jump = new Maths.Vector(Math.PI / -2, 60);
      this.momentum.addVector(jump);
    }

  }

};

myApp.model.Hero.prototype.snapLocation = function() {

  var pixelSize = myApp.stage.pixelSize;

  // Snap position to pixel.
  this.x = Math.round(this.x / pixelSize) * pixelSize;
  this.y = Math.round(this.y / pixelSize) * pixelSize;

};

myApp.model.Hero.prototype.checkCollisions = function() {

  var self = this;
  var stage = myApp.stage;
  var pixelSize = stage.pixelSize;

  // Loop through tiles.
  stage.tiles.forEach(function(tile){

    // If tile is tangible...
    if (tile.tangible) {

      // Check for horizontal alignment with tile.
      if (
        self.x > tile.x - self.width &&
        self.x < tile.x + self.width
      ) {

        // Check for vertical alignment with tile.
        if (
          self.y > tile.y - self.height &&
          self.y < tile.y + self.height
        ) {





          self.onGround = true;

          self.momentum.magnitude = 0;

          self.y = tile.y - self.height;
          //self.x = tile.x - self.width;

        }

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
