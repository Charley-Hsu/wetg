'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    // this.use('promisify');
    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      'pages': ['pages/demo', 'pages/index', 'example/index', 'example/button', 'example/list', 'example/input', 'example/slider', 'example/uploader', 'example/article', 'example/badge', 'example/flex', 'example/footer', 'example/gallery', 'example/grid', 'example/icons', 'example/loadmore', 'example/panel', 'example/preview', 'example/progress', 'example/actionsheet', 'example/dialog', 'example/msg', 'example/msg_fail', 'example/msg_success', 'example/picker', 'example/toast', 'example/navbar', 'example/tabbar', 'example/searchbar'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
      }
    };
    _this.globalData = {
      userInfo: null
    };
    _this.use('requestfix');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {
      // this.testAsync()
    }
  }, {
    key: 'getUserInfo',

    // sleep (s) {
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve('promise resolved')
    //     }, s * 1000)
    //   })
    // };
    // async testAsync () {
    //   const data = await this.sleep(3)
    //   console.log(data)
    // };
    value: function getUserInfo(cb) {
      var that = this;
      if (this.globalData.userInfo) {
        return this.globalData.userInfo;
      }
      _wepy2.default.getUserInfo({
        success: function success(res) {
          that.globalData.userInfo = res.userInfo;
          cb && cb(res.userInfo);
        }
      });
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJ3aW5kb3ciLCJiYWNrZ3JvdW5kVGV4dFN0eWxlIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlIiwiZ2xvYmFsRGF0YSIsInVzZXJJbmZvIiwidXNlIiwiY2IiLCJ0aGF0IiwiZ2V0VXNlckluZm8iLCJzdWNjZXNzIiwicmVzIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7O0FBNkNFLHNCQUFlO0FBQUE7O0FBRWY7QUFGZTs7QUFBQSxVQTFDZkEsTUEwQ2UsR0ExQ047QUFDUCxlQUFTLENBQ1QsWUFEUyxFQUVULGFBRlMsRUFHVCxlQUhTLEVBSVQsZ0JBSlMsRUFLVCxjQUxTLEVBTVQsZUFOUyxFQU9ULGdCQVBTLEVBUVQsa0JBUlMsRUFTVCxpQkFUUyxFQVVULGVBVlMsRUFXVCxjQVhTLEVBWVQsZ0JBWlMsRUFhVCxpQkFiUyxFQWNULGNBZFMsRUFlVCxlQWZTLEVBZ0JULGtCQWhCUyxFQWlCVCxlQWpCUyxFQWtCVCxpQkFsQlMsRUFtQlQsa0JBbkJTLEVBb0JULHFCQXBCUyxFQXFCVCxnQkFyQlMsRUFzQlQsYUF0QlMsRUF1QlQsa0JBdkJTLEVBd0JULHFCQXhCUyxFQXlCVCxnQkF6QlMsRUEwQlQsZUExQlMsRUEyQlQsZ0JBM0JTLEVBNEJULGdCQTVCUyxFQTZCVCxtQkE3QlMsQ0FERjtBQWdDUEMsY0FBUTtBQUNOQyw2QkFBcUIsT0FEZjtBQUVOQyxzQ0FBOEIsTUFGeEI7QUFHTkMsZ0NBQXdCLFFBSGxCO0FBSU5DLGdDQUF3QjtBQUpsQjtBQWhDRCxLQTBDTTtBQUFBLFVBSGZDLFVBR2UsR0FIRjtBQUNYQyxnQkFBVTtBQURDLEtBR0U7QUFHZixVQUFLQyxHQUFMLENBQVMsWUFBVDtBQUhlO0FBSWhCOzs7OytCQUNVO0FBQ1Q7QUFDRDs7OztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Z0NBQ1lDLEUsRUFBSTtBQUNkLFVBQU1DLE9BQU8sSUFBYjtBQUNBLFVBQUksS0FBS0osVUFBTCxDQUFnQkMsUUFBcEIsRUFBOEI7QUFDNUIsZUFBTyxLQUFLRCxVQUFMLENBQWdCQyxRQUF2QjtBQUNEO0FBQ0QscUJBQUtJLFdBQUwsQ0FBaUI7QUFDZkMsZUFEZSxtQkFDTkMsR0FETSxFQUNEO0FBQ1pILGVBQUtKLFVBQUwsQ0FBZ0JDLFFBQWhCLEdBQTJCTSxJQUFJTixRQUEvQjtBQUNBRSxnQkFBTUEsR0FBR0ksSUFBSU4sUUFBUCxDQUFOO0FBQ0Q7QUFKYyxPQUFqQjtBQU1EOzs7O0VBekU0QixlQUFLTyxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgJ3BhZ2VzJzogW1xyXG4gICAgICAncGFnZXMvZGVtbycsXHJcbiAgICAgICdwYWdlcy9pbmRleCcsXHJcbiAgICAgICdleGFtcGxlL2luZGV4JyxcclxuICAgICAgJ2V4YW1wbGUvYnV0dG9uJyxcclxuICAgICAgJ2V4YW1wbGUvbGlzdCcsXHJcbiAgICAgICdleGFtcGxlL2lucHV0JyxcclxuICAgICAgJ2V4YW1wbGUvc2xpZGVyJyxcclxuICAgICAgJ2V4YW1wbGUvdXBsb2FkZXInLFxyXG4gICAgICAnZXhhbXBsZS9hcnRpY2xlJyxcclxuICAgICAgJ2V4YW1wbGUvYmFkZ2UnLFxyXG4gICAgICAnZXhhbXBsZS9mbGV4JyxcclxuICAgICAgJ2V4YW1wbGUvZm9vdGVyJyxcclxuICAgICAgJ2V4YW1wbGUvZ2FsbGVyeScsXHJcbiAgICAgICdleGFtcGxlL2dyaWQnLFxyXG4gICAgICAnZXhhbXBsZS9pY29ucycsXHJcbiAgICAgICdleGFtcGxlL2xvYWRtb3JlJyxcclxuICAgICAgJ2V4YW1wbGUvcGFuZWwnLFxyXG4gICAgICAnZXhhbXBsZS9wcmV2aWV3JyxcclxuICAgICAgJ2V4YW1wbGUvcHJvZ3Jlc3MnLFxyXG4gICAgICAnZXhhbXBsZS9hY3Rpb25zaGVldCcsXHJcbiAgICAgICdleGFtcGxlL2RpYWxvZycsXHJcbiAgICAgICdleGFtcGxlL21zZycsXHJcbiAgICAgICdleGFtcGxlL21zZ19mYWlsJyxcclxuICAgICAgJ2V4YW1wbGUvbXNnX3N1Y2Nlc3MnLFxyXG4gICAgICAnZXhhbXBsZS9waWNrZXInLFxyXG4gICAgICAnZXhhbXBsZS90b2FzdCcsXHJcbiAgICAgICdleGFtcGxlL25hdmJhcicsXHJcbiAgICAgICdleGFtcGxlL3RhYmJhcicsXHJcbiAgICAgICdleGFtcGxlL3NlYXJjaGJhcidcclxuICAgICAgXSxcclxuICAgICAgd2luZG93OiB7XHJcbiAgICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2xpZ2h0JyxcclxuICAgICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ1dlQ2hhdCcsXHJcbiAgICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJ1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgZ2xvYmFsRGF0YSA9IHtcclxuICAgICAgdXNlckluZm86IG51bGxcclxuICAgIH07XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgIHN1cGVyKCk7XHJcbiAgICAvLyB0aGlzLnVzZSgncHJvbWlzaWZ5Jyk7XHJcbiAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpO1xyXG4gIH07XHJcbiAgb25MYXVuY2goKSB7XHJcbiAgICAvLyB0aGlzLnRlc3RBc3luYygpXHJcbiAgfTtcclxuICAvLyBzbGVlcCAocykge1xyXG4gIC8vICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAvLyAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgLy8gICAgICAgcmVzb2x2ZSgncHJvbWlzZSByZXNvbHZlZCcpXHJcbiAgLy8gICAgIH0sIHMgKiAxMDAwKVxyXG4gIC8vICAgfSlcclxuICAvLyB9O1xyXG4gIC8vIGFzeW5jIHRlc3RBc3luYyAoKSB7XHJcbiAgLy8gICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5zbGVlcCgzKVxyXG4gIC8vICAgY29uc29sZS5sb2coZGF0YSlcclxuICAvLyB9O1xyXG4gIGdldFVzZXJJbmZvKGNiKSB7XHJcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcclxuICAgIGlmICh0aGlzLmdsb2JhbERhdGEudXNlckluZm8pIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mb1xyXG4gICAgfVxyXG4gICAgd2VweS5nZXRVc2VySW5mbyh7XHJcbiAgICAgIHN1Y2Nlc3MgKHJlcykge1xyXG4gICAgICAgIHRoYXQuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mbztcclxuICAgICAgICBjYiAmJiBjYihyZXMudXNlckluZm8pO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG4iXX0=