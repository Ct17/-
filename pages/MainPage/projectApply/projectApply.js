// pages/projectaApply/projectApply.js

var ProjectApplyUrl = require('../../../config.js').ProjectApplyUrl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '2019-07-01',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    function bindDateChange(e) {
      this.setData({
        date: e.detail.value
      })
    }
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
  bindDateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },
  formSubmit: function (e) {
    console.log(e)
    wx.showLoading({
      title: '正在上传',
    })
    wx.getStorage({
      key: 'openid',
      success: function (res) {
        wx.request({
          url:ProjectApplyUrl,
          data: {
            openid: res.data,
            projectName: e.detail.value.projectName,
            projectLeader: e.detail.value.projectLeader,
            phone: e.detail.value.phone,
            date: e.detail.value.date,
            applyDepartment: e.detail.value.applyDepartment,
            description: e.detail.value.description
          },
          success: function (res1) {
            console.log(res1.data);
            wx.hideLoading();
            wx.showToast({
              title: '上传成功',
            })
          }
        })
      },
    })

  }
})