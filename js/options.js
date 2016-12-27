document.addEventListener('DOMContentLoaded', function(){
  $('#saveButton').on('click', saveName);
  console.log('options chargees');
});

function saveName(){
  if (confirm('Do you want to save ' + $('#inputName')[0].value + ' as current user name ?')){
    storageManager.storeByKey("name", $('#inputName')[0].value);
    console.log('Name saved : ' + $('#inputName')[0].value);
    chrome.tabs.getCurrent(function(tab){
      chrome.tabs.remove(tab.id, function(){});
    });
  } else {
    
  }
  
}