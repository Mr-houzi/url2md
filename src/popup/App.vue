<template xmlns="http://www.w3.org/1999/html">
<!--  <hello-world />-->
  <div>
    <div style="display: flex; align-items: center">
      <img src="icons/logo.png">
      <h1 style="margin-left: 20px">url2md</h1>
    </div>
    <h3>请选择要复制的 title</h3>
    <div class="list" style="width: 200px">
      <label class="radio-item"
         style="font-size: 14px"
         :for="'radio-btn-' + index"
         v-for="(item, index) in titleList" :key="index">
        <input type="radio" name="list"
               :id="'radio-btn-' + index"
               :value="item"
               @change="changeInput(index)"
        >
        {{item}}
      </label>
    </div>
    <p style="padding-bottom: 10px;">
      <a target="_blank" href="https://github.com/Mr-houzi/url2md">文档</a>
      &nbsp;
      <a target="_blank" href="https://github.com/Mr-houzi/url2md/issues">反馈</a>
      <span class="setting-btn" style="float: right" @click="clickSettingBtn">
            <svg t="1640016621560" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8203" data-darkreader-inline-fill="" width="16" height="16"><path d="M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56c10.1-8.6 13.8-22.6 9.3-35.2l-0.9-2.6c-18.1-50.5-44.9-96.9-79.7-137.9l-1.8-2.1c-8.6-10.1-22.5-13.9-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85c-2.4-13.1-12.7-23.3-25.8-25.7l-2.7-0.5c-52.1-9.4-106.9-9.4-159 0l-2.7 0.5c-13.1 2.4-23.4 12.6-25.8 25.7l-15.8 85.4c-35.9 13.6-69.2 32.9-99 57.4l-81.9-29.1c-12.5-4.4-26.5-0.7-35.1 9.5l-1.8 2.1c-34.8 41.1-61.6 87.5-79.7 137.9l-0.9 2.6c-4.5 12.5-0.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5c-10.1 8.6-13.8 22.6-9.3 35.2l0.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1c8.6 10.1 22.5 13.9 35.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4c2.4 13.1 12.7 23.3 25.8 25.7l2.7 0.5c26.1 4.7 52.8 7.1 79.5 7.1 26.7 0 53.5-2.4 79.5-7.1l2.7-0.5c13.1-2.4 23.4-12.6 25.8-25.7l15.7-85c36.2-13.6 69.7-32.9 99.7-57.6l81.3 28.9c12.5 4.4 26.5 0.7 35.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l0.9-2.6c4.5-12.3 0.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9c-11.3 26.1-25.6 50.7-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97c-28.1 3.2-56.8 3.2-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9z" p-id="8204" fill="#707070" data-darkreader-inline-fill="" style="--darkreader-inline-fill:#677074;"></path><path d="M512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176z m79.2 255.2C570 602.3 541.9 614 512 614c-29.9 0-58-11.7-79.2-32.8C411.7 560 400 531.9 400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8C612.3 444 624 472.1 624 502c0 29.9-11.7 58-32.8 79.2z" p-id="8205" fill="#707070" data-darkreader-inline-fill="" style="--darkreader-inline-fill:#677074;"></path></svg>
        </span>
    </p>

    <div class="modal-mask" v-show="showModal" @click="clickModal"></div>
    <div class="setting-modal" v-show="showModal">
      <h3>url 设置</h3>
      <label class="radio-item" for="settingRadio0">
        <input type="radio" name="urlMode" id="settingRadio0"
               @change="changeSettingRadio(0)"
               :checked="urlMode === 0"
        >
        Unicode字符将被编码
      </label>
      <label class="radio-item" for="settingRadio1">
        <input type="radio" name="urlMode" id="settingRadio1"
               @change="changeSettingRadio(1)"
               :checked="urlMode === 1"
        >
        保留Unicode字符
      </label>
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import helper from "../helper";

export default {
  name: 'App',
  data() {
    return {
      titleList: [],
      url: '',
      showModal: false,
      urlMode: 1,
    }
  },
  created: function () {
    let _this = this

    if (localStorage.getItem("urlMode")) {
      this.urlMode = parseInt(localStorage.getItem("urlMode"))
    }

    chrome.tabs.query({
        active: true,
        lastFocusedWindow: true
    }, function(tabs){
        var tab = tabs[0]
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
    async changeInput(index) {
      if (this.urlMode === 1) {
        this.url = helper.formatUrl(this.url)
      }

      await navigator.clipboard.writeText(`[${this.titleList[index]}](${this.url})`)
      this.$set(this.titleList, index, "已复制 √")
      setTimeout(window.close, 500)
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
}
</script>

<style>
html, body {
  height: 200px;
}
.setting-modal {
  width: 200px;
  height: 120px;
  background: whitesmoke;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 10px;
}
.modal-mask {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}
.radio-item {
  display: block;
  font-size: 12px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: gray 1px dashed;
}
.radio-item input{
  vertical-align: middle;
  margin-top: -2px;
  margin-bottom: 1px;
  margin: 0px;
  padding: 0px;
}
</style>
