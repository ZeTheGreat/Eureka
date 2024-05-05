const submitButton = document.querySelector("#submit-button")
const textArea = document.querySelector("#note-to-add")

submitButton.addEventListener("click", () => {
    // chrome.runtime.openOptionsPage();
    chrome.runtime.sendMessage({message: "messageSent", data: textArea.value});
})

