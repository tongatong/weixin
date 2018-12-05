// pages/list/list.js

import { Home } from "../../models/home.js"
let home = new Home()   //实例化

import { Http } from '../../utils/http.js'
let http = new Http()
const app = getApp()



Page({
  data: {
    News: [],
  },
 
  // 从详情页回到列表页
  LieBiao: function (options) {
    wx.redirectTo({
      url: '../home/home',
    })
  },




  catchTapCategory: function (e) {
    console.log(e)
    var that = this;
    var goodsId = e.currentTarget.dataset.goodsid;
    console.log('goodsId:' + goodsId);
    wx.navigateTo({ url: '../detail/detail?goodsId=' + goodsId })
  },
  /**
   * 页面的初始数据
   */
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    if (options.tiao == "new") {
      http.request({ 
        url:'/xinwenapi',
        success:(res)=>{
          this.setData({
            News: res.list.data
          })
        }
      })
    }else if (options.tiao == "shichang") {
      http.request({
        url: '/api/shows?key= c56d0e9a7ccec67b4ea131655038d604',
        success: (res) => {
          // console.log(res)
          this.setData({
            News: res.list.list.data
          })
        }
      })
    }else if (options.tiao == "youhui") {
      http.request({
        url: '/api/select?key= c56d0e9a7ccec67b4ea131655038d604',
        success: (res) => {
          // console.log(res)
          this.setData({
            News: res.list.list.data
          })
        }
      })
    }else if(options.tiao == "zhengche") {
      http.request({
        url: '/zhengceapi',
        success: (res) => {
          // console.log(res)
          this.setData({
            News: res.list.data
          })
        }
      })
    } else if (options.tiao == "tousu") {
      http.request({
        url: '/wenzhangapi',
        success: (res) => {
          // console.log(res)
          this.setData({
            News: res.list.data
          })
        }
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

  }
})