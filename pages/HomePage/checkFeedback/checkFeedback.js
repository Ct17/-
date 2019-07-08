var GetFeedbackUrl = require('../../../config.js').GetFeedbackUrl;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    feedback: "",
    hasfeedback: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.getfeedback();
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
    this.getfeedback();
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
  getfeedback: function () {
    var that = this;
    wx.request({
      url: GetFeedbackUrl,
      data: {

      },
      success: function (res) {
        wx.hideLoading();
        console.log(res.data);
        that.setData({
          feedback: res.data
        })
        if (that.data.project != "") {
          that.setData({
            hasfeedback: true
          })
        } else {
          that.setData({
            hasfeedback: false
          })
        }
        console.log(that.data.feedback)
      }
    })
  }
})