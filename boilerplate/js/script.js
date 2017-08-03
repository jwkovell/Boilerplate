// Define application namespace.
var myApp = myApp || {};

// Model holds all constructor functions.
myApp.model = myApp.model || {};

document.addEventListener('DOMContentLoaded', function(){

  // Prepare stage.
  myApp.stage.prepare();

  // Start loop.
  requestAnimationFrame(myApp.loop.mainLoop);

});

