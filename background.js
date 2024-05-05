chrome.runtime.onMessage.addListener(async function(request, sender, sendResponse) {
    switch (request.message) {
        case 'messageSent':
            chrome.storage.local.set({[request.message]: request.data});
            console.info(await chrome.storage.local.get(request.name))
            return;
        case 'getItem':
            sendResponse(localStorage.getObject(request.name), (x) => console.info(x));
            return;
    }
});