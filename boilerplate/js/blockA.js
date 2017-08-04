myApp.model.BlockA = function(options = {}){

  // BlockA is a type of block.
  myApp.model.BlockA.call(this, options);

};

myApp.model.BlockA.prototype = Object.create(myApp.model.Block.prototype);
myApp.model.BlockA.prototype.constructor = myApp.model.BlockA;

myApp.model.BlockA.prototype.update = function() {};
