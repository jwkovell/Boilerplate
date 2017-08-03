myApp.controls = {

  action: false,

  actionX: 0,
  actionY: 0,

  actionStartX: 0,
  actionStartY: 0,

  actionEndX: 0,
  actionEndY: 0,

  actionDeltaX: 0,
  actionDeltaY: 0,

  keyLeft: false,
  keyRight: false,

};

myApp.controls.update = function() {};

document.addEventListener('mousedown', function(event){

  var controls = myApp.controls;

  controls.action = true;

  controls.actionX = event.clientX;
  controls.actionY = event.clientY;

  controls.actionStartX = event.clientX;
  controls.actionStartY = event.clientY;

  controls.actionDeltaX = 0;
  controls.actionDeltaY = 0;

});

document.addEventListener('mouseup', function(event){

  var controls = myApp.controls;

  controls.action = false;

  controls.actionX = event.clientX;
  controls.actionY = event.clientY;

  controls.actionEndX = event.clientX;
  controls.actionEndY = event.clientY;

});

document.addEventListener('mousemove', function(event){

  var controls = myApp.controls;

  if (controls.action === true) {

    controls.actionX = event.clientX;
    controls.actionY = event.clientY;

    controls.actionDeltaX = controls.actionStartX - controls.actionX;
    controls.actionDeltaY = controls.actionStartY - controls.actionY;

  }

});

window.addEventListener('wheel', function(event){});

window.addEventListener("keydown", function(event){

  var controls = myApp.controls;
  var keyCode = event.keyCode;

  if (keyCode == 37) {
    controls.keyLeft = true;
  }

  if (keyCode == 39) {
    controls.keyRight = true;
  }

});

window.addEventListener("keyup", function(event){

  var controls = myApp.controls;
  var keyCode = event.keyCode;

  if (keyCode == 37) {
    controls.keyLeft = false;
  }

  if (keyCode == 39) {
    controls.keyRight = false;
  }

});

window.addEventListener('resize', function(event) {});
