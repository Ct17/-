// pages/ShowProject/ShowProject.js
var GetProjectUrl = require('../../config.js').GetProjectUrl;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    project:"",
    hasproject:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.getproject();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    wx.showToast({
      title: '加载中',
      icon: 'loading'
    })
    this.getproject();
  },
  stopPullDownRefresh: function () {
    wx.stopPullDownRefresh({
      complete: function (res) {
        wx.hideToast()
      }
    })
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  getproject:function(){
    var that= this;
    wx.request({
      url: GetProjectUrl,
      data:{

      },
      success:function(res){
        wx.hideLoading();
        console.log(res.data);
        that.setData({
          project:res.data
        })
        if (that.data.project != "") {
          that.setData({
            hasproject: true
          })
        } else {
          that.setData({
            hasproject: false
          })
        }
        console.log(that.data.project)
      }
    })
  }
})