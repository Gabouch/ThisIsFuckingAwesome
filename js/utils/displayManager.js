DisplayManager = function(){

  this.displayInElementById = function(elementId, text){
    $('#' + elementId)[0].innerHTML = text;
  }

};

var displayManager = new DisplayManager();