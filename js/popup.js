document.addEventListener('DOMContentLoaded', function(){
  console.log('popup chargees');
  
  // Displays the name saved via the options page
  //printWelcome();
  
  // Displays the answeresult of the foaas service
  printFoaas();
  
});


/**
 * Prints the welcome header
 */
function printWelcome(){
  
  var name = storageManager.getByKey('name');
  var welcomeText = name ? 'Welcome ' + name : 'Welcome !';
  
  displayManager.displayInElementById('bonjourUtilisateur', welcomeText);
  
  console.log('welcomeText : ' + welcomeText);
}

/**
 * Prints the result of ws Foaas
 */
function printFoaas(){
  
  var url = 'http://www.foaas.com/awesome/' + storageManager.getByKey('name');
  
  var successCallback = function(data){
    console.log('message : ' + data.message + ', subtitle : ' + data.subtitle);
    displayManager.displayInElementById('quote', data.message);
    if (data.subtitle.indexOf('null') === -1){
      $('#cite').show();
      displayManager.displayInElementById('cite', data.subtitle.substring(1));
    } else {
      $('#cite').hide();
    }
  }

  $.ajax({
    url: url,
    headers : {
        'Accept' : 'application/json'
    },
    success: successCallback
  });
}