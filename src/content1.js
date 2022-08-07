chrome.runtime.onMessage.addListener( // this is the message listener
  async function(request, sender, sendResponse) {
    if (request.message === "copyText") {
      await navigator.clipboard.writeText(request.textToCopy)
    }
  }
);
