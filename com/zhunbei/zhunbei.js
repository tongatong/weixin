import { Http } from '../../utils/http.js'
let http = new Http()
const app = getApp()


  Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    username:'',
    sex:'1',
    sexs:'',
    tel:'',
    card:'',
    // education:'',
    zsls:'',
    sexarr: ['请选择性别', '男', '女'],
    sexindex: 0,
    xueliarr: ['请选择学历', '本科', '大专', '高中', '中专', '初中', '小学', '幼儿园及以下'],
    xueliindex: 0,
    education:[],
    date: ''
  },
   

    bindPicker1ChangemyAnnual:function(e){
      // console.log(e)
      this.setData({
        index: e.detail.value
      })
    },
  //获取预报名学生信息
  username:function(e){
    //  console.log(e)
    let username = e.detail.value
    this.setData({
      username: username
    })
  },
    //性别
    Changesex(e) {
      this.setData({
        sexindex: e.detail.value
      })
    },
    //学历
    Changexueli(e) {
      this.setData({
        xueliindex: e.detail.value
      })
    },
    //日期
    bindDateChange(e){
      this.setData({
        date: e.detail.value
      })
    },
    sex: function (e) {
      // console.log(e)
      let sex = e.detail.value
      if (sex == '男') {
        this.setData({
          sex: 1
        })
      }else{
        this.setData({
          sex: 2
        })
      }
      
    },

    tel: function (e) {
      // console.log(e)
      let tel = e.detail.value
      this.setData({
        tel: tel
      })
    },

    card: function (e) {
      //  console.log(e)
      let card = e.detail.value
      this.setData({
        card: card
      })
    },


    education: function (e) {
       
      let education = e.detail.value
      if (education == '小学'){
        this.setData({
          education: 1
        })
        console.log(this.data.education)
      }else if (education == '初中'){
        this.setData({
          education: 2
        })
      } else if (education == '高中') {
        this.setData({
          education: 3
        })
      } else if (education == '大专') {
        this.setData({
          education: 4
        })
      } else if (education == '其他') {
        this.setData({
          education: 5
        })
      }
      
    },


    zsls: function (e) {
      // console.log(e)
      let zsls = e.detail.value
      this.setData({
        zsls: zsls
      })
    },

    //招生老师
    zsls:function(){
      // console.log(12)
      http.request({
        url:'/api/zsls',
        success: (res) =>{
          console.log(res)
          let data =res
          this.setData({
            array:data
          })
        }
      })
    },
    //提交按钮    在地址栏拼接
    openConfirm: function () {
      let username=this.data.username;
      let sex = this.data.sex;
      let tel = this.data.tel;
      let card = this.data.card;
      let education = this.data.education;
      let zsls = this.data.zsls;
      let date = this.data.date;
    //  console.log(username,sex,education)
      let myreg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|31)|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}([0-9]|x|X)$/;
      if (card == '') {
        wx.showToast({
          title: '请输入身份证号',
          icon: 'success',
          duration: 1500
        })
      } else if (card.length != 18) {
        wx.showToast({
          title: '身份证号不正确',
          icon: 'success',
          duration: 1500
        })
      } else if (myreg.test(card)){
        http.request({
          url: '/studentapi?username='+username+'&sex='+sex+'&tel='+tel+'&card='+card+'&education='+education+'&zsls='+zsls,
          success: (res) => {
            //  console.log(res)
          }
        })
        wx.showModal({
          title: '弹窗标题',
          content: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
          confirmText: "继续报名",
          cancelText: "提交成功",
          success: function (res) {
          
          }
        });
      }
    },
    openAlert: function () {
      wx.navigateTo({
        url: '../yubaoming/yubaoming',
      })
    },


    Go: function () {
      wx.navigateTo({
        url: '../../pages/home/home',
      })
    },
  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {
    let names = wx.getStorageSync('name')
    this.setData({
      name: names
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