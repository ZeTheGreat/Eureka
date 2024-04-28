chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    switch (request.command) {
        case 'messageSent':
            localStorage.setObject(request.name, request.data);
            console.info(localStorage.getObject(request.name))
            return;
        case 'getItem':
            sendResponse(localStorage.getObject(request.name));
            return;
    }
});