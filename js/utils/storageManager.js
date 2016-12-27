const NO_LOCAL_STORAGE_ERROR = 'Local storage not supported';
const NO_CALLBACK_ERROR = 'Local storage not supported';

StorageManager = function(){
  
  /**
   * Checks if local storage is available
   */
  this.checkStorage = function(){
    return window.localStorage ? true : false;
  };
  
  /**
   * Runs a function after checking if local storage is available
   */
  this.checkStorageThenCallback = function(callback){
    var retour;
    if (this.checkStorage){
      if (callback){
        retour = callback();
      } else {
        userMessages.displayError(NO_CALLBACK_ERROR);
      }
    } else {
        userMessages.displayError(NO_LOCAL_STORAGE_ERROR);
    }
    return retour;
  };
  
  /**
   * Stores a value with the key in localStorage
   */
  this.storeByKey = function(key, value){
    var storeByKeyCallback = function(){
      window.localStorage[key] = value;
    };
    
    this.checkStorageThenCallback(storeByKeyCallback);
  };
  
  /**
   *Gets a value stored in local storage by key
   */
  this.getByKey = function(key){
    var retour;
    
    var getByKeyCallback = function(){
      var retour = window.localStorage[key] ? window.localStorage[key] : null;
      return retour;
    };
    
    retour = this.checkStorageThenCallback(getByKeyCallback);
    
    return retour;
  };
  
};

var storageManager = new StorageManager();
