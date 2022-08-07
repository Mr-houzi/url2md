export default {
  // 保留url中的unicode字符，利用%20代替空格
  formatUrl: function(url) {
    return decodeURI(url).replaceAll(" ", "%20")
  }
}
