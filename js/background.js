chrome.contextMenus.create({
    title: "复制Url为Markdown格式",
    contexts: ["all"],
    onclick: function(clickData, tab){
        // console.log(clickData, tab)
    }
});

chrome.contextMenus.onClicked.addListener((clickData, tab) => {
    chrome.tabs.executeScript(tab.id, {
        code: `(${findElement})(${JSON.stringify(clickData)})`,
        frameId: clickData.frameId,
        matchAboutBlank: true,
        runAt: 'document_start',
    }, ([result] = []) => {
        if (chrome.runtime.lastError) {
            console.error('Error: ' + chrome.runtime.lastError.message);
        } else {

            let md = ''
            if (clickData.mediaType === 'image') {
                let altText = typeof(result) == 'undefined' ? '' : result
                md = `![${altText}](${clickData.srcUrl})`
            } else if (typeof(clickData.linkUrl) !== 'undefined') {
                let text = typeof(clickData.selectionText) == 'undefined' ? '未选中文字' : clickData.selectionText
                md = `[${text}](${clickData.linkUrl})`
            } else {
                // 过滤title，eg：(46 条消息) xxxx => xxxx
                let title = tab.title
                title = title.replace(/^\([^)]*\)/, '').trim()
                md = `[${title}](${tab.url})`
            }

            copy(md)
        }
    });
});
/**
 * ***********************************************************
 * this function's code will be executed as a content script in the web page
 * @link https://stackoverflow.com/questions/61771600/is-there-a-way-to-get-the-alt-tag-of-an-image-from-chrome-contextmenu-create
 */
function findElement({mediaType, srcUrl}) {
    const tagName = mediaType === 'image' ? 'img' : mediaType;
    for (const el of document.querySelectorAll(tagName)) {
        if (el.src === srcUrl) {
            return el.alt;
        }
    }
}
/*************************** end ****************************/