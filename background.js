chrome.action.onClicked.addListener(function (tab) {
    if (tab) {
        chrome.tabs.sendMessage(tab.id, {
            action: 'copy-token'
        });
    }
});

chrome.tabs.onUpdated.addListener(
    (a, b, c) => {
        if (autoLogin && b.status == "complete" && c.url.indexOf("login") != -1 &&
            (c.url.indexOf("smartborder") != -1 || c.url.indexOf("localhost") != -1))
            chrome.tabs.sendMessage(a, {
                action: 'auto-login'
            });

    });

chrome.contextMenus.create({
    id: 'autoLogin',
    title: 'Disable auto login',
    contexts: ['all'],
})

var autoLogin = true;

chrome.contextMenus.onClicked.addListener(
    (data) => {
        if (data.menuItemId == "autoLogin") {
            var properties = autoLogin ? {
                title: 'Enable auto login'
            } : {
                title: 'Disable auto login'
            };
            chrome.contextMenus.update(
                'autoLogin',
                properties
            )

            autoLogin = !autoLogin;
        }
    }
)