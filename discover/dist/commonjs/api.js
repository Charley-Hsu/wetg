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
          resolve(d);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJ0Z1Bvc3QiLCJ1cmwiLCJkYXRhIiwiY29va2llIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ3eCIsInJlcXVlc3QiLCJtZXRob2QiLCJoZWFkZXIiLCJzdWNjZXNzIiwiZCIsImZhaWwiLCJlcnJvciIsInRnR2V0IiwicmVxdWVzdFVybCIsInVybEVuY29kZSIsInJlcGxhY2UiLCJwYXJhbSIsImtleSIsImVuY29kZSIsInBhcmFtU3RyIiwidCIsImVuY29kZVVSSUNvbXBvbmVudCIsImkiLCJrIiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7OztrQkFFZTtBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUEsUUFsQlcsa0JBa0JKQyxHQWxCSSxFQWtCQUMsSUFsQkEsRUFrQktDLE1BbEJMLEVBa0JZO0FBQ3JCLFdBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q0MsU0FBR0MsT0FBSCxDQUFXO0FBQ1RQLGFBQUtBLEdBREk7QUFFVFEsZ0JBQU8sTUFGRTtBQUdUUCxjQUFNQSxRQUFRLEVBSEw7QUFJVFEsZ0JBQVE7QUFDTiwwQkFBZ0IsbUNBRFY7QUFFTixvQkFBVVAsVUFBVTtBQUZkLFNBSkM7QUFRVFEsaUJBQVEsaUJBQUNDLENBQUQsRUFBSztBQUNYUCxrQkFBUU8sQ0FBUjtBQUNELFNBVlE7QUFXVEMsY0FBSyxjQUFDQyxLQUFELEVBQVM7QUFDWlIsaUJBQU9RLEtBQVA7QUFDRDtBQWJRLE9BQVg7QUFlRCxLQWhCTSxDQUFQO0FBaUJELEdBcENVO0FBcUNYQyxPQXJDVyxpQkFxQ0xkLEdBckNLLEVBcUNEQyxJQXJDQyxFQXFDSUMsTUFyQ0osRUFxQ1c7QUFDcEIsUUFBSWEsYUFBYWYsTUFBTSxLQUFLZ0IsU0FBTCxDQUFlZixJQUFmLEVBQXFCZ0IsT0FBckIsQ0FBNkIsR0FBN0IsRUFBaUMsR0FBakMsQ0FBdkI7QUFDQSxXQUFPLElBQUlkLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENDLFNBQUdDLE9BQUgsQ0FBVztBQUNUUCxhQUFLZSxVQURJO0FBRVROLGdCQUFRO0FBQ04sMEJBQWdCLGtCQURWO0FBRU4sb0JBQVVQLFVBQVU7QUFGZCxTQUZDO0FBTVRRLGlCQUFRLGlCQUFDQyxDQUFELEVBQUs7QUFDWFAsa0JBQVFPLENBQVI7QUFDRCxTQVJRO0FBU1RDLGNBQUssY0FBQ0MsS0FBRCxFQUFTO0FBQ1pSLGlCQUFPUSxLQUFQO0FBQ0Q7QUFYUSxPQUFYO0FBYUQsS0FkTSxDQUFQO0FBZUQsR0F0RFU7O0FBdURYOzs7Ozs7O0FBT0FHLFdBOURXLHFCQThEREUsS0E5REMsRUE4RE1DLEdBOUROLEVBOERXQyxNQTlEWCxFQThEbUI7QUFDNUIsUUFBR0YsU0FBTyxJQUFWLEVBQWdCLE9BQU8sRUFBUDtBQUNoQixRQUFJRyxXQUFXLEVBQWY7QUFDQSxRQUFJQyxXQUFZSixLQUFaLHlDQUFZQSxLQUFaLENBQUo7QUFDQSxRQUFJSSxLQUFLLFFBQUwsSUFBaUJBLEtBQUssUUFBdEIsSUFBa0NBLEtBQUssU0FBM0MsRUFBc0Q7QUFDcERELGtCQUFZLE1BQU1GLEdBQU4sR0FBWSxHQUFaLElBQW9CQyxVQUFRLElBQVIsSUFBY0EsTUFBZixHQUF5QkcsbUJBQW1CTCxLQUFuQixDQUF6QixHQUFxREEsS0FBeEUsQ0FBWjtBQUNELEtBRkQsTUFFTztBQUNMLFdBQUssSUFBSU0sQ0FBVCxJQUFjTixLQUFkLEVBQXFCO0FBQ25CLFlBQUlPLElBQUlOLE9BQU8sSUFBUCxHQUFjSyxDQUFkLEdBQWtCTCxPQUFPRCxpQkFBaUJRLEtBQWpCLEdBQXlCLE1BQU1GLENBQU4sR0FBVSxHQUFuQyxHQUF5QyxNQUFNQSxDQUF0RCxDQUExQjtBQUNBSCxvQkFBWSxLQUFLTCxTQUFMLENBQWVFLE1BQU1NLENBQU4sQ0FBZixFQUF5QkMsQ0FBekIsRUFBNEJMLE1BQTVCLENBQVo7QUFDRDtBQUNGO0FBQ0QsV0FBT0MsUUFBUDtBQUNEO0FBM0VVLEMiLCJmaWxlIjoiYXBpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICAvLyBnZXRVc2VySW5mbyAoKSB7XHJcbiAgICAvLyAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIC8vICAgICAgICAgbGV0IGNhY2hlID0gZ2xvYmFsLmdldFVzZXJJbmZvKCk7XHJcbiAgICAvLyAgICAgICAgIGlmIChjYWNoZSkge1xyXG4gICAgLy8gICAgICAgICAgICAgcmVzb2x2ZShjYWNoZSk7XHJcbiAgICAvLyAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgICAgICAgICB3ZXB5LmxvZ2luKCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgd2VweS5nZXRVc2VySW5mbygpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZ2V0dXNlcmluZm8gc3VjY2VzcycpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGdsb2JhbC5zZXRVc2VySW5mbyhyZXMudXNlckluZm8pO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcy51c2VySW5mbyk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcclxuICAgIC8vICAgICAgICAgICAgIH0pLmNhdGNoKHJlamVjdCk7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH0sXHJcbiAgICB0Z1Bvc3QodXJsLGRhdGEsY29va2llKXtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgbWV0aG9kOlwiUE9TVFwiLFxyXG4gICAgICAgICAgZGF0YTogZGF0YSB8fCB7fSxcclxuICAgICAgICAgIGhlYWRlcjogeyBcclxuICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLCBcclxuICAgICAgICAgICAgJ0Nvb2tpZSc6IGNvb2tpZSB8fCAnJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHN1Y2Nlc3M6KGQpPT57XHJcbiAgICAgICAgICAgIHJlc29sdmUoZClcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmYWlsOihlcnJvcik9PntcclxuICAgICAgICAgICAgcmVqZWN0KGVycm9yKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICB0Z0dldCh1cmwsZGF0YSxjb29raWUpe1xyXG4gICAgICBsZXQgcmVxdWVzdFVybCA9IHVybCArIHRoaXMudXJsRW5jb2RlKGRhdGEpLnJlcGxhY2UoXCImXCIsXCI/XCIpO1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiByZXF1ZXN0VXJsLFxyXG4gICAgICAgICAgaGVhZGVyOiB7IFxyXG4gICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLCBcclxuICAgICAgICAgICAgJ0Nvb2tpZSc6IGNvb2tpZSB8fCAnJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHN1Y2Nlc3M6KGQpPT57XHJcbiAgICAgICAgICAgIHJlc29sdmUoZClcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmYWlsOihlcnJvcik9PntcclxuICAgICAgICAgICAgcmVqZWN0KGVycm9yKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIHBhcmFtIOWwhuimgei9rOS4ulVSTOWPguaVsOWtl+espuS4sueahOWvueixoVxyXG4gICAgICoga2V5IFVSTOWPguaVsOWtl+espuS4sueahOWJjee8gFxyXG4gICAgICogZW5jb2RlIHRydWUvZmFsc2Ug5piv5ZCm6L+b6KGMVVJM57yW56CBLOm7mOiupOS4unRydWVcclxuICAgICAqIFxyXG4gICAgICogcmV0dXJuIFVSTOWPguaVsOWtl+espuS4slxyXG4gICAgICovXHJcbiAgICB1cmxFbmNvZGUocGFyYW0sIGtleSwgZW5jb2RlKSB7XHJcbiAgICAgIGlmKHBhcmFtPT1udWxsKSByZXR1cm4gJyc7XHJcbiAgICAgIHZhciBwYXJhbVN0ciA9ICcnO1xyXG4gICAgICB2YXIgdCA9IHR5cGVvZiAocGFyYW0pO1xyXG4gICAgICBpZiAodCA9PSAnc3RyaW5nJyB8fCB0ID09ICdudW1iZXInIHx8IHQgPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgcGFyYW1TdHIgKz0gJyYnICsga2V5ICsgJz0nICsgKChlbmNvZGU9PW51bGx8fGVuY29kZSkgPyBlbmNvZGVVUklDb21wb25lbnQocGFyYW0pIDogcGFyYW0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZvciAodmFyIGkgaW4gcGFyYW0pIHtcclxuICAgICAgICAgIHZhciBrID0ga2V5ID09IG51bGwgPyBpIDoga2V5ICsgKHBhcmFtIGluc3RhbmNlb2YgQXJyYXkgPyAnWycgKyBpICsgJ10nIDogJy4nICsgaSk7XHJcbiAgICAgICAgICBwYXJhbVN0ciArPSB0aGlzLnVybEVuY29kZShwYXJhbVtpXSwgaywgZW5jb2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHBhcmFtU3RyO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==