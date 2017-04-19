//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: [],
    item:{
      active:3
    }
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
    
  }
})
