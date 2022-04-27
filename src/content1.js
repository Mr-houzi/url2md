// 参考 https://stackoverflow.com/questions/71321983/copy-to-clipboard-in-chrome-extension-v3
chrome.runtime.onMessage.addListener( // this is the message listener
  function(request, sender, sendResponse) {
    if (request.message === "copyText")
      copyToTheClipboard(request.textToCopy);
  }
);

async function copyToTheClipboard(textToCopy){
  const el = document.createElement('textarea');
  el.value = textToCopy;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}
