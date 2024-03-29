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
        } catch (error) {
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
    } catch (error) {
        console.log('El token no existe');
    }
}

function autoLogin() {
    try {
        setTimeout(() => {
            var usernameInput = document.getElementById("username");
            usernameInput.value = "test2@kzsoftworks.com";
            usernameInput.dispatchEvent(new Event('input', {bubbles: true}));

            var pwInput = document.getElementById("password");
            pwInput.value = "1234";
            pwInput.dispatchEvent(new Event('input', {bubbles: true}));

            document.getElementById("loginButton").click();
        }, 10);
    } catch (error) {
        console.log('El token no existe');
    }
}

chrome.runtime.onMessage.addListener(function (request, sender) {
    // handle icon click
    if (!!request) {
        switch (request.action) {
            case 'copy-token':
                this.getToken();
                break;
            case 'auto-login':
                this.autoLogin();
                break;
        }
    }

});

var script = document.createElement('script'),
    code = document.createTextNode('(' + customConsole + ')();');
script.appendChild(code);
(document.body || document.head || document.documentElement).appendChild(script);