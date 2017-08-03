myApp.model.Person = function(options = {}){

  this.firstName = options['firstName'] || '';
  this.lastName = options['lastName'] || '';

};

myApp.model.Person.prototype.greet = function() {

  alert('Welcome, ' + this.firstName + ' ' + this.lastName);

};
