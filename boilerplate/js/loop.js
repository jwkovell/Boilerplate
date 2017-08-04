myApp.loop = {

  maxFPS: 24,
  timestamp: 0,
  frame: 0

};

myApp.loop.mainLoop = function(timestamp) {

  var loop = myApp.loop;
  var controls = myApp.controls;

  // If insufficient time has passed...
  if (timestamp < loop.timestamp + (1000 / loop.maxFPS)) {

    // Restart loop.
    requestAnimationFrame(loop.mainLoop);

  } else {

    // Update frame count.
    loop.frame++;

    // Update timestamp.
    loop.timestamp = timestamp;

    // Do stuff.
    myApp.stage.update();
    myApp.stage.draw();

    // Restart loop.
    requestAnimationFrame(loop.mainLoop);

  }

}
