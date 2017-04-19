//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    navIndex:0,
    item:{
      active:1
    },
    select:"index",
    hidden:true,
    list1:null,
    list2:null
  
  },
  swiperChange(event){
    this.setData({
      navIndex:event.detail.current
    })
  },
  changePage(event){
    this.setData({
      currentIndex:event.target.dataset.index
    })
  },
  onLoad(){
    this.fetch_1(),
    this.fetch_2()
  },
  fetch_1(){
    var _this=this;
    wx.request({
      url: app.globalData.globalUrl+'/api/list1',
      data: {},
      method: 'GET', 
      
      success: function(res){
        console.log(res.data.data)
        // success
        _this.setData({
          list1:res.data.data
        })
        
      }     
    })
  },
   fetch_2(){
    var _this=this;
    wx.request({
      url: app.globalData.globalUrl+'/api/list2',
      data: {},
      method: 'GET', 
      
      success: function(res){
        console.log(res.data.data)
        // success
        _this.setData({
          list2:res.data.data
        })
        
      }     
    })
  },
bindDownLoad(){
  console.log(2)
 
},

 
  goDownFn1(e) {
    wx.showLoading({mask:true,title:"努力加载..."});
    wx.showToast({
      icon:"success",
      title:"加载中...",
      mask:true
    });
    
    var _this=this;
    wx.request({
      url:app.globalData.globalUrl+'/api/list1',
      data: {},
      method: 'GET', 
      success: function(res){
        console.log(_this);
        console.log(res.data.data);
        console.log(res.data.list1);
        // success
        
        var li=_this.data.list1.concat(res.data.data);
        _this.setData({
          list1:li
        })
      }
    })
  },
goDownFn2(e) {
    wx.showLoading({mask:true,title:"努力加载..."});
    wx.showToast({
      icon:"success",
      title:"加载中...",
      mask:true
    });
    
    var _this=this;
    wx.request({
      url:app.globalData.globalUrl+'/api/list2',
      data: {},
      method: 'GET', 
      success: function(res){
        console.log(_this);
        console.log(res.data.data);
        console.log(res.data.list1);
        // success
        
        var li=_this.data.list2.concat(res.data.data);
        _this.setData({
          list2:li
        })
      }
    })
  }

})
