'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
    key: 'sleep',
    value: function sleep(s) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve('promise resolved');
        }, s * 1000);
      });
    }
  }, {
    key: 'testAsync',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.sleep(3);

              case 2:
                data = _context.sent;

                console.log(data);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function testAsync() {
        return _ref.apply(this, arguments);
      }

      return testAsync;
    }()
  }, {
    key: 'getUserInfo',
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJ3aW5kb3ciLCJiYWNrZ3JvdW5kVGV4dFN0eWxlIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlIiwiZ2xvYmFsRGF0YSIsInVzZXJJbmZvIiwidXNlIiwicyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsInNsZWVwIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjYiIsInRoYXQiLCJnZXRVc2VySW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQTZDRSxzQkFBZTtBQUFBOztBQUViO0FBRmE7O0FBQUEsVUExQ2ZBLE1BMENlLEdBMUNOO0FBQ1AsZUFBUyxDQUNQLFlBRE8sRUFFUCxhQUZPLEVBR1AsZUFITyxFQUlQLGdCQUpPLEVBS1AsY0FMTyxFQU1QLGVBTk8sRUFPUCxnQkFQTyxFQVFQLGtCQVJPLEVBU1AsaUJBVE8sRUFVUCxlQVZPLEVBV1AsY0FYTyxFQVlQLGdCQVpPLEVBYVAsaUJBYk8sRUFjUCxjQWRPLEVBZVAsZUFmTyxFQWdCUCxrQkFoQk8sRUFpQlAsZUFqQk8sRUFrQlAsaUJBbEJPLEVBbUJQLGtCQW5CTyxFQW9CUCxxQkFwQk8sRUFxQlAsZ0JBckJPLEVBc0JQLGFBdEJPLEVBdUJQLGtCQXZCTyxFQXdCUCxxQkF4Qk8sRUF5QlAsZ0JBekJPLEVBMEJQLGVBMUJPLEVBMkJQLGdCQTNCTyxFQTRCUCxnQkE1Qk8sRUE2QlAsbUJBN0JPLENBREY7QUFnQ1BDLGNBQVE7QUFDTkMsNkJBQXFCLE9BRGY7QUFFTkMsc0NBQThCLE1BRnhCO0FBR05DLGdDQUF3QixRQUhsQjtBQUlOQyxnQ0FBd0I7QUFKbEI7QUFoQ0QsS0EwQ007QUFBQSxVQUhmQyxVQUdlLEdBSEY7QUFDWEMsZ0JBQVU7QUFEQyxLQUdFO0FBR2IsVUFBS0MsR0FBTCxDQUFTLFlBQVQ7QUFIYTtBQUlkOzs7OytCQUNVO0FBQ1Q7QUFDRDs7OzBCQUNNQyxDLEVBQUc7QUFDUixhQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENDLG1CQUFXLFlBQU07QUFDZkYsa0JBQVEsa0JBQVI7QUFDRCxTQUZELEVBRUdGLElBQUksSUFGUDtBQUdELE9BSk0sQ0FBUDtBQUtEOzs7Ozs7Ozs7Ozt1QkFFb0IsS0FBS0ssS0FBTCxDQUFXLENBQVgsQzs7O0FBQWJDLG9COztBQUNOQyx3QkFBUUMsR0FBUixDQUFZRixJQUFaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0NBRVVHLEUsRUFBSTtBQUNkLFVBQU1DLE9BQU8sSUFBYjtBQUNBLFVBQUksS0FBS2IsVUFBTCxDQUFnQkMsUUFBcEIsRUFBOEI7QUFDNUIsZUFBTyxLQUFLRCxVQUFMLENBQWdCQyxRQUF2QjtBQUNEO0FBQ0QscUJBQUthLFdBQUwsQ0FBaUI7QUFDZkMsZUFEZSxtQkFDTkMsR0FETSxFQUNEO0FBQ1pILGVBQUtiLFVBQUwsQ0FBZ0JDLFFBQWhCLEdBQTJCZSxJQUFJZixRQUEvQjtBQUNBVyxnQkFBTUEsR0FBR0ksSUFBSWYsUUFBUCxDQUFOO0FBQ0Q7QUFKYyxPQUFqQjtBQU1EOzs7O0VBekUwQixlQUFLZ0IsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgJ3BhZ2VzJzogW1xyXG4gICAgICAncGFnZXMvZGVtbycsXHJcbiAgICAgICdwYWdlcy9pbmRleCcsXHJcbiAgICAgICdleGFtcGxlL2luZGV4JyxcclxuICAgICAgJ2V4YW1wbGUvYnV0dG9uJyxcclxuICAgICAgJ2V4YW1wbGUvbGlzdCcsXHJcbiAgICAgICdleGFtcGxlL2lucHV0JyxcclxuICAgICAgJ2V4YW1wbGUvc2xpZGVyJyxcclxuICAgICAgJ2V4YW1wbGUvdXBsb2FkZXInLFxyXG4gICAgICAnZXhhbXBsZS9hcnRpY2xlJyxcclxuICAgICAgJ2V4YW1wbGUvYmFkZ2UnLFxyXG4gICAgICAnZXhhbXBsZS9mbGV4JyxcclxuICAgICAgJ2V4YW1wbGUvZm9vdGVyJyxcclxuICAgICAgJ2V4YW1wbGUvZ2FsbGVyeScsXHJcbiAgICAgICdleGFtcGxlL2dyaWQnLFxyXG4gICAgICAnZXhhbXBsZS9pY29ucycsXHJcbiAgICAgICdleGFtcGxlL2xvYWRtb3JlJyxcclxuICAgICAgJ2V4YW1wbGUvcGFuZWwnLFxyXG4gICAgICAnZXhhbXBsZS9wcmV2aWV3JyxcclxuICAgICAgJ2V4YW1wbGUvcHJvZ3Jlc3MnLFxyXG4gICAgICAnZXhhbXBsZS9hY3Rpb25zaGVldCcsXHJcbiAgICAgICdleGFtcGxlL2RpYWxvZycsXHJcbiAgICAgICdleGFtcGxlL21zZycsXHJcbiAgICAgICdleGFtcGxlL21zZ19mYWlsJyxcclxuICAgICAgJ2V4YW1wbGUvbXNnX3N1Y2Nlc3MnLFxyXG4gICAgICAnZXhhbXBsZS9waWNrZXInLFxyXG4gICAgICAnZXhhbXBsZS90b2FzdCcsXHJcbiAgICAgICdleGFtcGxlL25hdmJhcicsXHJcbiAgICAgICdleGFtcGxlL3RhYmJhcicsXHJcbiAgICAgICdleGFtcGxlL3NlYXJjaGJhcidcclxuICAgIF0sXHJcbiAgICB3aW5kb3c6IHtcclxuICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2xpZ2h0JyxcclxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnV2VDaGF0JyxcclxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJ1xyXG4gICAgfVxyXG4gIH07XHJcbiAgZ2xvYmFsRGF0YSA9IHtcclxuICAgIHVzZXJJbmZvOiBudWxsXHJcbiAgfTtcclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgLy8gdGhpcy51c2UoJ3Byb21pc2lmeScpO1xyXG4gICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKTtcclxuICB9O1xyXG4gIG9uTGF1bmNoKCkge1xyXG4gICAgLy8gdGhpcy50ZXN0QXN5bmMoKVxyXG4gIH07XHJcbiAgc2xlZXAgKHMpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHJlc29sdmUoJ3Byb21pc2UgcmVzb2x2ZWQnKVxyXG4gICAgICB9LCBzICogMTAwMClcclxuICAgIH0pXHJcbiAgfTtcclxuICBhc3luYyB0ZXN0QXN5bmMgKCkge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuc2xlZXAoMylcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgfTtcclxuICBnZXRVc2VySW5mbyhjYikge1xyXG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XHJcbiAgICBpZiAodGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmdsb2JhbERhdGEudXNlckluZm9cclxuICAgIH1cclxuICAgIHdlcHkuZ2V0VXNlckluZm8oe1xyXG4gICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICB0aGF0Lmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm87XHJcbiAgICAgICAgY2IgJiYgY2IocmVzLnVzZXJJbmZvKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIl19