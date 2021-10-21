chrome.contextMenus.create({
    title: "复制Url为Markdown格式",
    contexts: ["all"],
    onclick: function(clickData){
        console.log(1)
        console.log(clickData)
        let md = ''
        if (clickData.mediaType === 'image') {
             md = `![](${clickData.srcUrl})`
        } else if (clickData.linkUrl !== 'undefined') {
             md = `[](${clickData.linkUrl})`
        }

        // 复制到粘贴板
        var input = document.createElement('textarea');
        document.body.appendChild(input);
        input.value = md;
        input.focus();
        input.select();
        document.execCommand('Copy');
        input.remove();

    }
});
