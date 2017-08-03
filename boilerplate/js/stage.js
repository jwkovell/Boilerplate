myApp.stage = {

  ctx: '',
  x: 0,
  y: 0,
  width: 1000,
  height: 1000,
  pixelSize: 5,
  tileSize: 60,

  block: {},
  tiles: []

};

myApp.stage.prepare = function() {

  this.ctx = document.getElementById('canvas').getContext('2d');

  this.block = new myApp.model.Block({
    x: 120,
    y: 0,
    width: this.tileSize,
    height: this.tileSize,
  });

  this.tiles.push(
    new myApp.model.Block({
      x: 0,
      y: 600,
      width: this.tileSize,
      height: this.tileSize,
      momentum: new Maths.Vector(Math.PI / 3, 12),
      tangible: true
    }),
    new myApp.model.Block({
      x: 60,
      y: 600,
      width: this.tileSize,
      height: this.tileSize,
      momentum: new Maths.Vector(Math.PI / 3, 12),
      tangible: true
    }),
    new myApp.model.Block({
      x: 120,
      y: 600,
      width: this.tileSize,
      height: this.tileSize,
      momentum: new Maths.Vector(Math.PI / 3, 12),
      tangible: true
    }),
    new myApp.model.Block({
      x: 180,
      y: 600,
      width: this.tileSize,
      height: this.tileSize,
      momentum: new Maths.Vector(Math.PI / 3, 12),
      tangible: true
    }),
    new myApp.model.Block({
      x: 240,
      y: 600,
      width: this.tileSize,
      height: this.tileSize,
      momentum: new Maths.Vector(Math.PI / 3, 12),
      tangible: true
    }),
    new myApp.model.Block({
      x: 300,
      y: 600,
      width: this.tileSize,
      height: this.tileSize,
      momentum: new Maths.Vector(Math.PI / 3, 12),
      tangible: true
    }),
    new myApp.model.Block({
      x: 360,
      y: 600,
      width: this.tileSize,
      height: this.tileSize,
      momentum: new Maths.Vector(Math.PI / 3, 12),
      tangible: true
    }),
  );


};

myApp.stage.reset = function() {
  this.ctx.setTransform(1, 0, 0, 1, 0, 0);
  this.ctx.globalAlpha = 1;
  this.ctx.lineWidth = this.pixelSize;
  this.ctx.strokeStyle = 'rgba(0, 0, 0, .02)';
  this.ctx.fillStyle = 'rgba(0, 0, 0, 1)';
};

myApp.stage.update = function() {

  this.block.update();

};

myApp.stage.draw = function() {

  this.reset()

  this.ctx.rect(0, 0, this.width, this.height);

  this.ctx.clearRect(0, 0, this.width, this.height);

  this.block.draw();

  // Loop through tiles.
  this.tiles.forEach(function(tile){

    tile.draw();

  });

};
