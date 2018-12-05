// com/jycx/jycx.js



Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false,
    inputTyping:'',
    students:[],
  },

  showInput:function(){
    this.setData({
      inputShowed:true
    })
  },

  inputTyping:function(e){
    // console.log(e)
    let name=e.detail.value
    // console.log(name)
    let that=this
    let { next_page_url }=this.data
    wx.request({
      url:"http://3w.houbowang.com/json/student.php?uu=" + name,
      success:(res)=>{
        // console.log(res)
        let { data }=res
        this.setData({
          students:data
        })
      }
    })
  },

  //返回上一页
  Go:function (options) {
    wx.navigateTo({
      url: '../../pages/home/home',
    })
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

  }
})