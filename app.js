//app.js

var GetUseUrl = require('config.js').GetUseUrl;
var GetOpenidUrl = require('config.js').GetOpenidUrl; 

App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        if(res.code){
          console.log(res.code);
          wx.showLoading({
            title: '获取用户信息',
          })

          wx.request({
            url: GetOpenidUrl,
            data:{
              js_code:res.code,
            },
            success:function(res){
              wx.setStorage({
                key: 'openid',
                data: res.data,
              })
              console.log('openid  '+res.data);
              wx.hideLoading();
              /*wx.request({
                url: GetUseUrl,
                data:{
                  openid: res.data
                },
                success:function(res){
                  console.log(res.data);
                  if(res.data===''){
                    wx.navigateTo({
                      url: '../bind/bind',
                    })
                  }else{
                    if(res.data.admin==1){
                      wx.setStorage({
                        key: 'admin',
                        data: true,
                      })
                    }else{
                      if(res.data.admin ==0){
                        wx.setStorage({
                          key: 'admin',
                          data: false,
                        })
                      }
                    }
                  }
                }
              })*/

            }
          })

        }
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              //this.globalData.userInfo = res.userInfo
              wx.setStorage({
                key: 'userInfo',
                data: res.userInfo,
              })
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})