import { Http } from '../utils/http.js'

//通过extends继承父类（也可以实例化后调用）
class Zhunbei extends Http{
  getDataList(sCallBack){
    //封装后的请求调用
    this.request({
      url:'/studentapi',
      success:(res)=>{
        sCallBack(res)
      }
    }) 
  }
  
}

export { Zhunbei }