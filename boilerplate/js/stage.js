myApp.stage = {

  ctx: '',
  x: 0,
  y: 0,
  width: 500,
  height: 1000,
  offsetX: 0,
  offsetY: 0,
  pixelSize: 3,
  tileSize: 60,

  gravity: {},

  hero: {},
  tiles: []

};

myApp.stage.prepare = function() {

  this.ctx = document.getElementById('canvas').getContext('2d');

  this.gravity = new Maths.Vector(Math.PI / 2, 3);

  this.hero = new myApp.model.Hero({
    x: 120,
    y: 0,
    width: this.tileSize,
    height: this.tileSize * 2,
  });


  this.tiles.push(
    new myApp.model.Block({
      x: 0,
      y: 0,
      width: this.tileSize,
      height: this.tileSize,
      momentum: new Maths.Vector(Math.PI / 3, 12),
      tangible: true,
      pinned: true,
    }),
    new myApp.model.Block({
      x: 0,
      y: 540,
      width: this.tileSize,
      height: this.tileSize,
      momentum: new Maths.Vector(Math.PI / 3, 12),
      tangible: true,
      pinned: true,
      slopeStart: 0,
      slopeEnd: this.tileSize / 3
    }),
    new myApp.model.Block({
      x: 60,
      y: 540,
      width: this.tileSize,
      height: this.tileSize,
      momentum: new Maths.Vector(Math.PI / 3, 12),
      tangible: true,
      pinned: true,
      slopeStart: this.tileSize / 3,
      slopeEnd: this.tileSize
    }),
    new myApp.model.Block({
      x: 0,
      y: 600,
      width: this.tileSize,
      height: this.tileSize,
      momentum: new Maths.Vector(Math.PI / 3, 12),
      tangible: true,
      pinned: true
    }),
    new myApp.model.Block({
      x: 60,
      y: 600,
      width: this.tileSize,
      height: this.tileSize,
      momentum: new Maths.Vector(Math.PI / 3, 12),
      tangible: true,
      pinned: true
    }),
    new myApp.model.Block({
      x: 120,
      y: 600,
      width: this.tileSize,
      height: this.tileSize,
      momentum: new Maths.Vector(Math.PI / 3, 12),
      tangible: true,
      pinned: true
    }),
    new myApp.model.Block({
      x: 180,
      y: 600,
      width: this.tileSize,
      height: this.tileSize,
      momentum: new Maths.Vector(Math.PI / 3, 12),
      tangible: true,
      pinned: true
    }),
    new myApp.model.Block({
      x: 240,
      y: 600,
      width: this.tileSize,
      height: this.tileSize,
      momentum: new Maths.Vector(Math.PI / 3, 12),
      tangible: true,
      pinned: true
    }),
    new myApp.model.Block({
      x: 300,
      y: 600,
      width: this.tileSize,
      height: this.tileSize,
      momentum: new Maths.Vector(Math.PI / 3, 12),
      tangible: true,
      pinned: true
    }),
    new myApp.model.Block({
      x: 360,
      y: 600,
      width: this.tileSize,
      height: this.tileSize,
      momentum: new Maths.Vector(Math.PI / 3, 12),
      tangible: true,
      pinned: true
    }),
  );


};

myApp.stage.reset = function() {
  this.ctx.setTransform(1, 0, 0, 1, 0, 0);
  this.ctx.globalAlpha = 1;
  this.ctx.lineWidth = this.pixelSize;
  this.ctx.strokeStyle = 'rgba(0, 0, 0, .05)';
  this.ctx.fillStyle = 'rgba(0, 0, 0, 1)';
};

myApp.stage.update = function() {

  this.hero.update();

  this.hero.snapLocation();

  this.hero.checkCollisions();

};

myApp.stage.draw = function() {

  this.reset()

  this.ctx.rect(0, 0, this.width, this.height);

  this.ctx.clearRect(0, 0, this.width, this.height);

  this.hero.draw();

  // Loop through tiles.
  this.tiles.forEach(function(tile){

    tile.draw();

  });

};
