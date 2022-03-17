chrome.action.onClicked.addListener(function(tab) {
	if (tab){
		chrome.tabs.sendMessage(tab.id, {action: 'copy-token'});
	}
});