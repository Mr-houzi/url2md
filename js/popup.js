var app = new Vue({
    el: '#app',
    data: {
        titleList: [],
        url: '',
        showModal: false,
        urlMode: 1,
    },
    created: function () {
        let _this = this

        if (localStorage.getItem("urlMode")) {
            this.urlMode = parseInt(localStorage.getItem("urlMode"))
        }

        chrome.tabs.getSelected(function(tab){
            _this.url = tab.url
            let originTitle = tab.title
            let title = originTitle.replace(/^\([^)]*\)/, '').trim()
            let mainSep = '-'
            let otherSepList = ["_", "\\|", "·"]
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
            if (this.urlMode === 1) {
                this.url = formatUrl(this.url)
            }

            copy(`[${this.titleList[index]}](${this.url})`)
            window.close()
        },
        clickSettingBtn() {
            this.showModal = !this.showModal
        },
        clickModal() {
            this.showModal = !this.showModal
        },
        changeSettingRadio(value) {
            this.urlMode = value
            localStorage.setItem('urlMode', value)
        }
    }
})