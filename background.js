chrome.browserAction.onClicked.addListener(function(activeTab){
  var newURL = "http://www.google.com/";
  chrome.tabs.create({ url: newURL });
});