chrome.runtime.sendMessage({message: "messageSent"}, function (response) {
    console.log(response);
});