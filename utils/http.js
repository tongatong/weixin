import { config   } from "../config.js"

const tips = {
  1:'抱歉，出错了',
  1005:"appkey无效",
  3000:"期刊不存在"
}

//请求类   config
class Http{
  request(params){
    // console.log(params)
    if(!params.method){
      params.method= "GET"
    }
    wx.request({
      url: config.api_base_url + params.url,
      method:params.method,
      data:params.data,
      header:{
        "content-type":'application/json',
        "appkey":config.appKey
      },
      success:(res)=>{  //成功
      //  console.log(res)
        let code = res.statusCode.toString()
        if(code.startsWith('2')){
          params.success(res.data)
        }
      },
      fail:(err)=>{
       
      }
    })
  }
}




export { Http  }
