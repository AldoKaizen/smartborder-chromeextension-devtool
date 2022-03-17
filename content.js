function customConsole() {
	function getToken() {
		try {
		   var el = document.createElement('textarea');
		   el.value = JSON.parse(localStorage.userSessions)[0].Token;
		   el.setAttribute('readonly', '');
		   document.body.appendChild(el);
		   el.select();
		   document.execCommand('copy');
		   document.body.removeChild(el);
		   console.log('Token copiado');
		} catch (error){
			console.log('El token no existe');
		}
	}
	window.gt = getToken;
}

function getToken() {
	try {
	   var el = document.createElement('textarea');
	   el.value = JSON.parse(localStorage.userSessions)[0].Token;
	   el.setAttribute('readonly', '');
	   document.body.appendChild(el);
	   el.select();
	   document.execCommand('copy');
	   document.body.removeChild(el);
	   console.log('Token copiado');
	} catch (error){
		console.log('El token no existe');
	}
}

chrome.runtime.onMessage.addListener(function(request, sender) {
	// handle icon click
	if(!!request){
		switch(request.action){
			case 'copy-token':
				this.getToken();
				break;
		}
	}
    
});

var script = document.createElement('script'),
    code   = document.createTextNode('(' + customConsole + ')();');
script.appendChild(code);
(document.body || document.head || document.documentElement).appendChild(script);