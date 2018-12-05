// com/yubaoming/yubaoming.js

import { Zhunbei } from "../../models/zhunbei.js"
let zhun = new Zhunbei()   //实例化
const app = getApp()


Page({

  /**
   * 页面的初始数据
   */
  data: {
    Info:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    zhun.getDataList((res) => {
      console.log(res)
      res.list.data.map(item=>{
        if(item.sex==1){
          item.sex='男'
        }
        if (item.sex == 2) {
          item.sex = '女'
        }
        if (item.education == 1) {
          item.education = '小学'
        }else if(item.education == 2){
          item.education = '初中'
        } else if (item.education == 3) {
          item.education = '高中'
        } else if (item.education == 4) {
          item.education = '大专'
        } else if (item.education == 5) {
          item.education = '其他'
        }
          
        
      })
      this.setData({
        Info: res.list.data
      })
    })
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