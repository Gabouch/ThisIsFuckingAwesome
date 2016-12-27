UserMessages = function(){
  this.displayError = function(message){
    if(message){
      alert(message);
    } else {
      alert('An error occured');
    }
  }
};

var userMessages = new UserMessages();