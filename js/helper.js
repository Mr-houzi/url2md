// 复制到粘贴板
function copy(text) {
    var input = document.createElement('textarea');
    document.body.appendChild(input);
    input.value = text;
    input.focus();
    input.select();
    document.execCommand('Copy');
    input.remove();
}

// 保留url中的unicode字符，利用%20代替空格
function formatUrl(url) {
    return decodeURI(url).replaceAll(" ", "%20")
}