
import { Home } from "../../models/home.js"
let home = new Home()   //实例化

import { Http } from '../../utils/http.js'
let http =new Http()
const app = getApp()

Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
    name:'',
    //集团新闻
    News: [],
    //政策制度
    Zhengce:[],
    //市场通知
    ShiChang:[],
    //优惠活动
    Youhui:[],
    //投诉举报
    tousu:[],
    loadingHidden: true
  },
  
  //加载动画
  loadingTap: function () {
    this.setData({
      loadingHidden: false
    });
    var that = this;
    setTimeout(function () {
      that.setData({
        loadingHidden: true
      });
      that.update();
    }, 1000);
  },


  //返回上一页
  // Back:function(options){
  //   wx.redirectTo({
  //     url:'../index/index'
  //   })
  // },
//集团新闻
  onLoad: function (options) {
    let names = wx.getStorageSync('name')
    this.setData({
      name: names
    })
    home.getDataList((res)=>{
      // console.log(res)
      this.setData({
        News:res.list.data
      })
    }),
     //政策制度
    http.request({
      url:'/zhengceapi',
      success:(res)=>{
        //  console.log(res)
        this.setData({
          Zhengce:res.list.data
        })
      }
    })

     //市场通知
    http.request({
      url:'/api/shows?key= c56d0e9a7ccec67b4ea131655038d604',
      success:(res)=>{
      //  console.log(res)
        this.setData({
          ShiChang:res.list.list.data
        })
      }
    })


    //优惠活动
    http.request({
      url: '/api/select?key= c56d0e9a7ccec67b4ea131655038d604',
      success: (res) => {
        // console.log(res)
        this.setData({
          Youhui: res.list.list.data
        })
      }
    })


    
    //投诉举报
    http.request({
      url: '/wenzhangapi',
      success: (res) => {
        //  console.log(res)
        this.setData({
          tousu: res.list.data
        })
      }
    })
  },

  
  //列表页 
  List:function(data){
    let tiao=data.currentTarget.dataset.tiao
    // console.log(tiao)
    wx.redirectTo({
      url: '../list/list?tiao='+ tiao,
    })
  },

  

  // 就业查询
  JYCX:function(options) {
    wx.redirectTo({
      url: '../../com/jycx/jycx',
    })
  },

  // 就业利好
  JYLH: function (options) {
    wx.redirectTo({
      url: '../../com/jylh/jylh',
    })
  },

  // 预报名学生信息
  Zhun: function (options) {
    wx.redirectTo({
      url: '../../com/zhunbei/zhunbei',
    })
  },

  // 组织结构
  ZZJG: function (options) {
    wx.redirectTo({
      url: '../../com/zzjg/zzjg',
    })
  },


  // 在校生查询
  ZXS: function (options) {
    wx.redirectTo({
      url: '../../com/zxs/zxs',
    })
  },

  
})