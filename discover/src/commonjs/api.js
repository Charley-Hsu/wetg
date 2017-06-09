import wepy from 'wepy';

export default {
    // getUserInfo () {
    //     return new Promise((resolve, reject) => {
    //         let cache = global.getUserInfo();
    //         if (cache) {
    //             resolve(cache);
    //         } else {
    //             wepy.login().then((res) => {
    //                 wepy.getUserInfo().then((res) => {
    //                     console.log('getuserinfo success');
    //                     console.log(res)
    //                     global.setUserInfo(res.userInfo);
    //                     resolve(res.userInfo);
    //                 }).catch(reject);
    //             }).catch(reject);
    //         }
    //     });
    // },
    tgPost(url,data,cookie){
      return new Promise((resolve, reject) => {
        wx.request({
          url: url,
          method:"POST",
          data: data || {},
          header: { 
            'content-type': 'application/x-www-form-urlencoded', 
            'Cookie': cookie || ''
          },
          success:(d)=>{
            resolve(d)
          },
          fail:(error)=>{
            reject(error)
          }
        });
      });
    },
    tgGet(url,data,cookie){
      let requestUrl = url + this.urlEncode(data).replace("&","?");
      return new Promise((resolve, reject) => {
        wx.request({
          url: requestUrl,
          header: { 
            'content-type': 'application/json', 
            'Cookie': cookie || ''
          },
          success:(d)=>{
            resolve(d)
            // let data = d.data.data;
            // let length = data.length-1;
            // let obj = { };
            // if (data[length].key == "loadMore") {
            //     let moreUrl = data[length].data;
            //     for (var i = length; i >= 0; i--) {
            //         if (typeof(obj[data[i].key]) === "undefined") {
            //             let arr = [ ];
            //             obj[data[i].key] = data[i];
            //             console.log(obj)
            //         }else{
                        

            //         };
            //         resolve(obj);
            //     };
            // }else{
            //   resolve(data)
            // };
          },
          fail:(error)=>{
            reject(error)
          }
        });
      });
    },
    /**
     * param 将要转为URL参数字符串的对象
     * key URL参数字符串的前缀
     * encode true/false 是否进行URL编码,默认为true
     * 
     * return URL参数字符串
     */
    urlEncode(param, key, encode) {
      if(param==null) return '';
      var paramStr = '';
      var t = typeof (param);
      if (t == 'string' || t == 'number' || t == 'boolean') {
        paramStr += '&' + key + '=' + ((encode==null||encode) ? encodeURIComponent(param) : param);
      } else {
        for (var i in param) {
          var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);
          paramStr += this.urlEncode(param[i], k, encode);
        }
      }
      return paramStr;
    }
}
