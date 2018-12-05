//index.js
//获取应用实例
import { Http } from '../../utils/http.js'
let http = new Http()
const app = getApp()


Page({
  data:{
    username:'',
    tel:'',
    password:''
  },

  username:function(e){
    // console.log(e)
    let username = e.detail.value
    this.setData({
      username:username
    })
  },

  tel:function (e) {
    // console.log(e)
    let tel = e.detail.value
    this.setData({
      tel: tel
    })
  },

  password: function (e) {
    // console.log(e)
    let password = e.detail.value
    this.setData({
      password: password
    })
  },

  Login:function(){
    let username=this.data.username;
    let tel=this.data.tel;
    let password =this.data.password
    // console.log(username,tel,password)
    let myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(18[0-9]{1})|(19[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if(tel==''){
      wx.showToast({
        title:'请输入手机号',
        icon: 'success',
        duration: 1500
      })
    }else if(tel.length!=11){
      wx.showToast({
        title: '手机号长度有误!',
        icon: 'success',
        duration: 1500
      })
    }else if(!myreg.test(tel)){
      wx.showToast({
        title: '手机号格式有误',
        icon: 'success',
        duration: 1500
      })
    }else if (myreg.test(tel)){
      http.request({
        url: '/api/login?username=' + username + '&tel=' + tel + '&password=' + password,
        method: 'post',
        success: (res) => {
          // console.log(res)
          if (res.status == 200) {
            wx.setStorageSync('name',username)
            wx.redirectTo({
              url: '../home/home',
            })
          } else if (res.status == 201) {
            wx.showToast({
              title: res.message,
              icon: 'success',
              duration: 1500
            })
          } else if (res.status == 201) {
            wx.showToast({
              title: res.message,
              icon: 'success',
              duration: 1500
            })
          } else if (res.status == 202) {
            wx.showToast({
              title: res.message,
              icon: 'success',
              duration: 1500
            })
          } else if (res.status == 203) {
            wx.showToast({
              title: res.message,
              icon: 'success',
              duration: 1500
            })
          } else if (res.status == 204) {
            wx.showToast({
              title: res.message,
              icon: 'success',
              duration: 1500
            })
          }
        }
      })
    }
    
  },




  //点击跳到主页面
  Home:function(options){
    wx.redirectTo({
      url: '../home/home',
    })
  },
})
