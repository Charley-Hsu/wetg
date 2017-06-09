'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
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
  tgPost: function tgPost(url, data, cookie) {
    return new Promise(function (resolve, reject) {
      wx.request({
        url: url,
        method: "POST",
        data: data || {},
        header: {
          'content-type': 'application/x-www-form-urlencoded',
          'Cookie': cookie || ''
        },
        success: function success(d) {
          resolve(d);
        },
        fail: function fail(error) {
          reject(error);
        }
      });
    });
  },
  tgGet: function tgGet(url, data, cookie) {
    var requestUrl = url + this.urlEncode(data).replace("&", "?");
    return new Promise(function (resolve, reject) {
      wx.request({
        url: requestUrl,
        header: {
          'content-type': 'application/json',
          'Cookie': cookie || ''
        },
        success: function success(d) {
          resolve(d
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
          );
        },
        fail: function fail(error) {
          reject(error);
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
  urlEncode: function urlEncode(param, key, encode) {
    if (param == null) return '';
    var paramStr = '';
    var t = typeof param === 'undefined' ? 'undefined' : _typeof(param);
    if (t == 'string' || t == 'number' || t == 'boolean') {
      paramStr += '&' + key + '=' + (encode == null || encode ? encodeURIComponent(param) : param);
    } else {
      for (var i in param) {
        var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);
        paramStr += this.urlEncode(param[i], k, encode);
      }
    }
    return paramStr;
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJ0Z1Bvc3QiLCJ1cmwiLCJkYXRhIiwiY29va2llIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ3eCIsInJlcXVlc3QiLCJtZXRob2QiLCJoZWFkZXIiLCJzdWNjZXNzIiwiZCIsImZhaWwiLCJlcnJvciIsInRnR2V0IiwicmVxdWVzdFVybCIsInVybEVuY29kZSIsInJlcGxhY2UiLCJwYXJhbSIsImtleSIsImVuY29kZSIsInBhcmFtU3RyIiwidCIsImVuY29kZVVSSUNvbXBvbmVudCIsImkiLCJrIiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7OztrQkFFZTtBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUEsUUFsQlcsa0JBa0JKQyxHQWxCSSxFQWtCQUMsSUFsQkEsRUFrQktDLE1BbEJMLEVBa0JZO0FBQ3JCLFdBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q0MsU0FBR0MsT0FBSCxDQUFXO0FBQ1RQLGFBQUtBLEdBREk7QUFFVFEsZ0JBQU8sTUFGRTtBQUdUUCxjQUFNQSxRQUFRLEVBSEw7QUFJVFEsZ0JBQVE7QUFDTiwwQkFBZ0IsbUNBRFY7QUFFTixvQkFBVVAsVUFBVTtBQUZkLFNBSkM7QUFRVFEsaUJBQVEsaUJBQUNDLENBQUQsRUFBSztBQUNYUCxrQkFBUU8sQ0FBUjtBQUNELFNBVlE7QUFXVEMsY0FBSyxjQUFDQyxLQUFELEVBQVM7QUFDWlIsaUJBQU9RLEtBQVA7QUFDRDtBQWJRLE9BQVg7QUFlRCxLQWhCTSxDQUFQO0FBaUJELEdBcENVO0FBcUNYQyxPQXJDVyxpQkFxQ0xkLEdBckNLLEVBcUNEQyxJQXJDQyxFQXFDSUMsTUFyQ0osRUFxQ1c7QUFDcEIsUUFBSWEsYUFBYWYsTUFBTSxLQUFLZ0IsU0FBTCxDQUFlZixJQUFmLEVBQXFCZ0IsT0FBckIsQ0FBNkIsR0FBN0IsRUFBaUMsR0FBakMsQ0FBdkI7QUFDQSxXQUFPLElBQUlkLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENDLFNBQUdDLE9BQUgsQ0FBVztBQUNUUCxhQUFLZSxVQURJO0FBRVROLGdCQUFRO0FBQ04sMEJBQWdCLGtCQURWO0FBRU4sb0JBQVVQLFVBQVU7QUFGZCxTQUZDO0FBTVRRLGlCQUFRLGlCQUFDQyxDQUFELEVBQUs7QUFDWFAsa0JBQVFPO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkJBO0FBb0JELFNBM0JRO0FBNEJUQyxjQUFLLGNBQUNDLEtBQUQsRUFBUztBQUNaUixpQkFBT1EsS0FBUDtBQUNEO0FBOUJRLE9BQVg7QUFnQ0QsS0FqQ00sQ0FBUDtBQWtDRCxHQXpFVTs7QUEwRVg7Ozs7Ozs7QUFPQUcsV0FqRlcscUJBaUZERSxLQWpGQyxFQWlGTUMsR0FqRk4sRUFpRldDLE1BakZYLEVBaUZtQjtBQUM1QixRQUFHRixTQUFPLElBQVYsRUFBZ0IsT0FBTyxFQUFQO0FBQ2hCLFFBQUlHLFdBQVcsRUFBZjtBQUNBLFFBQUlDLFdBQVlKLEtBQVoseUNBQVlBLEtBQVosQ0FBSjtBQUNBLFFBQUlJLEtBQUssUUFBTCxJQUFpQkEsS0FBSyxRQUF0QixJQUFrQ0EsS0FBSyxTQUEzQyxFQUFzRDtBQUNwREQsa0JBQVksTUFBTUYsR0FBTixHQUFZLEdBQVosSUFBb0JDLFVBQVEsSUFBUixJQUFjQSxNQUFmLEdBQXlCRyxtQkFBbUJMLEtBQW5CLENBQXpCLEdBQXFEQSxLQUF4RSxDQUFaO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsV0FBSyxJQUFJTSxDQUFULElBQWNOLEtBQWQsRUFBcUI7QUFDbkIsWUFBSU8sSUFBSU4sT0FBTyxJQUFQLEdBQWNLLENBQWQsR0FBa0JMLE9BQU9ELGlCQUFpQlEsS0FBakIsR0FBeUIsTUFBTUYsQ0FBTixHQUFVLEdBQW5DLEdBQXlDLE1BQU1BLENBQXRELENBQTFCO0FBQ0FILG9CQUFZLEtBQUtMLFNBQUwsQ0FBZUUsTUFBTU0sQ0FBTixDQUFmLEVBQXlCQyxDQUF6QixFQUE0QkwsTUFBNUIsQ0FBWjtBQUNEO0FBQ0Y7QUFDRCxXQUFPQyxRQUFQO0FBQ0Q7QUE5RlUsQyIsImZpbGUiOiJhcGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIC8vIGdldFVzZXJJbmZvICgpIHtcclxuICAgIC8vICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBsZXQgY2FjaGUgPSBnbG9iYWwuZ2V0VXNlckluZm8oKTtcclxuICAgIC8vICAgICAgICAgaWYgKGNhY2hlKSB7XHJcbiAgICAvLyAgICAgICAgICAgICByZXNvbHZlKGNhY2hlKTtcclxuICAgIC8vICAgICAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgICAgIHdlcHkubG9naW4oKS50aGVuKChyZXMpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICB3ZXB5LmdldFVzZXJJbmZvKCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnZXR1c2VyaW5mbyBzdWNjZXNzJyk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLnNldFVzZXJJbmZvKHJlcy51c2VySW5mbyk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzLnVzZXJJbmZvKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICB9KS5jYXRjaChyZWplY3QpO1xyXG4gICAgLy8gICAgICAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfSxcclxuICAgIHRnUG9zdCh1cmwsZGF0YSxjb29raWUpe1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICBtZXRob2Q6XCJQT1NUXCIsXHJcbiAgICAgICAgICBkYXRhOiBkYXRhIHx8IHt9LFxyXG4gICAgICAgICAgaGVhZGVyOiB7IFxyXG4gICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsIFxyXG4gICAgICAgICAgICAnQ29va2llJzogY29va2llIHx8ICcnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc3VjY2VzczooZCk9PntcclxuICAgICAgICAgICAgcmVzb2x2ZShkKVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZhaWw6KGVycm9yKT0+e1xyXG4gICAgICAgICAgICByZWplY3QoZXJyb3IpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHRnR2V0KHVybCxkYXRhLGNvb2tpZSl7XHJcbiAgICAgIGxldCByZXF1ZXN0VXJsID0gdXJsICsgdGhpcy51cmxFbmNvZGUoZGF0YSkucmVwbGFjZShcIiZcIixcIj9cIik7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6IHJlcXVlc3RVcmwsXHJcbiAgICAgICAgICBoZWFkZXI6IHsgXHJcbiAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsIFxyXG4gICAgICAgICAgICAnQ29va2llJzogY29va2llIHx8ICcnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc3VjY2VzczooZCk9PntcclxuICAgICAgICAgICAgcmVzb2x2ZShkKVxyXG4gICAgICAgICAgICAvLyBsZXQgZGF0YSA9IGQuZGF0YS5kYXRhO1xyXG4gICAgICAgICAgICAvLyBsZXQgbGVuZ3RoID0gZGF0YS5sZW5ndGgtMTtcclxuICAgICAgICAgICAgLy8gbGV0IG9iaiA9IHsgfTtcclxuICAgICAgICAgICAgLy8gaWYgKGRhdGFbbGVuZ3RoXS5rZXkgPT0gXCJsb2FkTW9yZVwiKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBsZXQgbW9yZVVybCA9IGRhdGFbbGVuZ3RoXS5kYXRhO1xyXG4gICAgICAgICAgICAvLyAgICAgZm9yICh2YXIgaSA9IGxlbmd0aDsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBpZiAodHlwZW9mKG9ialtkYXRhW2ldLmtleV0pID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxldCBhcnIgPSBbIF07XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIG9ialtkYXRhW2ldLmtleV0gPSBkYXRhW2ldO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhvYmopXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgLy8gICAgICAgICB9O1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHJlc29sdmUob2JqKTtcclxuICAgICAgICAgICAgLy8gICAgIH07XHJcbiAgICAgICAgICAgIC8vIH1lbHNle1xyXG4gICAgICAgICAgICAvLyAgIHJlc29sdmUoZGF0YSlcclxuICAgICAgICAgICAgLy8gfTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmYWlsOihlcnJvcik9PntcclxuICAgICAgICAgICAgcmVqZWN0KGVycm9yKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIHBhcmFtIOWwhuimgei9rOS4ulVSTOWPguaVsOWtl+espuS4sueahOWvueixoVxyXG4gICAgICoga2V5IFVSTOWPguaVsOWtl+espuS4sueahOWJjee8gFxyXG4gICAgICogZW5jb2RlIHRydWUvZmFsc2Ug5piv5ZCm6L+b6KGMVVJM57yW56CBLOm7mOiupOS4unRydWVcclxuICAgICAqIFxyXG4gICAgICogcmV0dXJuIFVSTOWPguaVsOWtl+espuS4slxyXG4gICAgICovXHJcbiAgICB1cmxFbmNvZGUocGFyYW0sIGtleSwgZW5jb2RlKSB7XHJcbiAgICAgIGlmKHBhcmFtPT1udWxsKSByZXR1cm4gJyc7XHJcbiAgICAgIHZhciBwYXJhbVN0ciA9ICcnO1xyXG4gICAgICB2YXIgdCA9IHR5cGVvZiAocGFyYW0pO1xyXG4gICAgICBpZiAodCA9PSAnc3RyaW5nJyB8fCB0ID09ICdudW1iZXInIHx8IHQgPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgcGFyYW1TdHIgKz0gJyYnICsga2V5ICsgJz0nICsgKChlbmNvZGU9PW51bGx8fGVuY29kZSkgPyBlbmNvZGVVUklDb21wb25lbnQocGFyYW0pIDogcGFyYW0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZvciAodmFyIGkgaW4gcGFyYW0pIHtcclxuICAgICAgICAgIHZhciBrID0ga2V5ID09IG51bGwgPyBpIDoga2V5ICsgKHBhcmFtIGluc3RhbmNlb2YgQXJyYXkgPyAnWycgKyBpICsgJ10nIDogJy4nICsgaSk7XHJcbiAgICAgICAgICBwYXJhbVN0ciArPSB0aGlzLnVybEVuY29kZShwYXJhbVtpXSwgaywgZW5jb2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHBhcmFtU3RyO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==