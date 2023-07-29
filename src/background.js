import helper from './helper.js';

browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log('Hello from the background')
})
let btnText = browser.i18n.getMessage('rightClickBtnText')

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'copy',
    title: "url2md:" + btnText,
    contexts: ["all"],
    // onclick: function(clickData, tab){
    //   // console.log(clickData, tab)
    // }
  })
})

chrome.contextMenus.onClicked.addListener(async (clickData, tab) => {

  console.log(clickData)

  if (chrome.runtime.lastError) {
    // console.error('Error: ' + chrome.runtime.lastError.message);
  } else {
    let title = ''
    let url = ''
    let isImg = false
    if (clickData.mediaType === 'image') {
      // alt text
      title = ''
      url = clickData.srcUrl
      isImg = true
    } else if (typeof(clickData.linkUrl) !== 'undefined') {
      title = typeof(clickData.selectionText) == 'undefined' ? '未选中文字' : clickData.selectionText
      url = clickData.linkUrl
    } else {
      // 过滤title，eg：(46 条消息) xxxx => xxxx
      let tabTitle = tab.title.replace(/^\([^)]*\)/, '').trim()
      // 划词（若存在划词，则优先使用划词，若无，则使用tab title）
      title = typeof(clickData.selectionText) == 'undefined' ? tabTitle : clickData.selectionText
      url = tab.url
    }

    let urlMode = ''
    urlMode = await readLocalStorage('urlMode')

    let md = ''

    if (isImg) {
      md += '!'
    }

    if (urlMode === 1) {
      md += `[${title}](${helper.formatUrl(url)})`
    } else {
      md += `[${title}](${url})`
    }

    // send to content.js handle
    await chrome.tabs.sendMessage(tab.id,
      {
        message: "copyText",
        textToCopy: md
      }, function(response) {
        console.log('sm')
      }
    )
  }
})

const readLocalStorage = async (key) => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get([key], function (result) {
      if (result[key] === undefined) {
        resolve(null)
      } else {
        resolve(result[key])
      }
    })
  })
}
