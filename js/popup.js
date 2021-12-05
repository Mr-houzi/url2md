var app = new Vue({
    el: '#app',
    data: {
        titleList: [],
        url: '',
    },
    created: function () {
        let _this = this

        chrome.tabs.getSelected(function(tab){
            _this.url = tab.url
            let originTitle = tab.title
            let title = originTitle.replace(/^\([^)]*\)/, '').trim()
            let mainSep = '-'
            let otherSepList = ["_", "\\|"]
            let regex = otherSepList.join('|')
            regex = new RegExp(regex, "g")
            title = title.replace(regex, '-')

            let sepIndexs = []
            for(let i = 0; i < title.length; i++) {
                if (title[i] === mainSep) {
                    sepIndexs.push(i)
                }
            }
            for (let i = 0; i < sepIndexs.length; i++) {
                let tmp = title.substr(0, sepIndexs[i])
                _this.titleList.push(tmp.trim())
            }

            _this.titleList.push(title)
            _this.titleList.push(originTitle)
        })
    },
    methods: {
        changeInput(index) {
            // 复制到粘贴板
            copy(`[${this.titleList[index]}](${this.url})`)
            window.close()
        },
    }
})