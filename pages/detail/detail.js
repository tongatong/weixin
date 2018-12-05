// pages/detail/detail.js


import { Http } from '../../utils/http.js'
let http = new Http()
const WxParse = require('../../wxParse/wxParse.js')
const app = getApp()

var postData = require("../list/list.js");




Page({
  // 从列表页跳到Home页面
  Xiang: function (options) {
    wx.redirectTo({
      url: '../list/list',
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    Detail:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    // console.log(option.goodsId);
    
    //新闻详情
    http.request({
      url: '/xinwenshow?id=' + option.goodsId,
      header: {
        'content-type': 'application/json'
      },
      success:(res)=>{
        console.log(res)
        this.setData({
          Detail:res.list
        })
        // let that = this;
        // let aa = this.data.Detail.text;
        // console.log(aa)
        WxParse.wxParse('article', 'html', res.list.text, this, 5);
      }
    })

  
    //政策制度
    http.request({
      url: '/zhengceshow?id=' + option.goodsId,
      header: {
        'content-type': 'application/json'
      },
      success: (res) => {
        console.log(res)
        this.setData({
          Detail: res.list
        })
        // let that = this;
        // let aa = this.data.Detail.text;
        // console.log(aa)
        WxParse.wxParse('article', 'html', res.list.text, this, 15);
      }
    })



    //集团通知
    http.request({
      url: '/api/msg?id=' + option.goodsId,
      header: {
        'content-type': 'application/json'
      },
      success: (res) => {
        console.log(res)
        this.setData({
          Detail: res.list
        })
        // let that = this;
        // let aa = this.data.Detail.text;
        // console.log(aa)
        WxParse.wxParse('article', 'html', res.list.text, this, 15);
      }
    })


    //投诉举报
    http.request({
      url: '/wenzhangshow?id=' + option.goodsId,
      success: (res) => {
        // console.log(res)
        this.setData({
          Detail: res.list
        })
        WxParse.wxParse('article', 'html', res.list.text, this, 5);
      }
    })

    //新闻详情
  //   http.request({
  //     url: '/xinwenshow?id=' + option.goodsId,
  //     success: (res) => {
  //       console.log(res)
  //       this.setData({
  //         Detail: res.list
  //       })
  //     }
  //   })
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

  }
})