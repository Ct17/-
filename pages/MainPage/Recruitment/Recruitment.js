// pages/MainPage/Recruitment/Recruitment.js

var RecruitmentUrl = require('../../../config.js').RecruitmentUrl;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['男', '女'],
    index: 0,
    sex:''
  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {
    
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
  bindPickerChange(e) {
    this.setData({
      index: e.detail.value
    })
    console.log(e.detail.value);
  },
  formSubmit: function (e) {
    console.log(e)
    wx.showLoading({
      title: '正在上传',
    })
    var sex = "";
    switch (e.detail.value.sex) {
      case 0:
        sex = '男';
        break;
      case 1:
        sex = '女';
        break;
    }
    wx.getStorage({
      key: 'openid',
      success: function(res) {
        wx.request({
          url: RecruitmentUrl,
          data: {
            openid:res.data,
            name: e.detail.value.name,
            sex: sex,
            nation: e.detail.value.nation,
            youthleague: e.detail.value.youthleague,
            politic: e.detail.value.politic,
            phone: e.detail.value.phone,
            speciality: e.detail.value.speciality,
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