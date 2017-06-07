'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _demo = require('./../components/demo.js');

var _demo2 = _interopRequireDefault(_demo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
	_inherits(Index, _wepy$page);

	function Index() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Index);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
			navigationBarTitleText: 'demo页面'
		}, _this.$props = { "panel": { "v-bind:url.once": { "for": "list", "item": "item", "index": "index", "key": "index", "value": "item.desc" }, "v-bind:title.once": { "for": "list", "item": "item", "index": "index", "key": "index", "value": "item.desc" }, "v-bind:desc.once": { "for": "list", "item": "item", "index": "index", "key": "index", "value": "item.desc" } } }, _this.$events = {}, _this.components = {
			panel: _demo2.default
		}, _this.data = {
			text: '发送请求',
			name: 'demo图文组件',
			list: [{ url: './index', til: 'wepy', desc: "这是wepy框架介绍,点击查看详情" }, { url: '../example/index', til: 'weui', desc: "这是weui框架介绍,点击查看详情" }]
		}, _this.methods = {
			click: function click() {
				return new Promise(function (resolve, reject) {
					_wepy2.default.request({
						url: 'https://midway.test.66buy.com.cn/discovery/index/init.node?cityId=2554&storeId=1491&tabIndex=0&_=1496803262272',
						success: function success(d) {
							resolve(d);
						},
						fail: function fail(err) {
							reject(err);
						}
					});
				});
			},
			req: function req() {
				var _this2 = this;

				return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
					var data;
					return regeneratorRuntime.wrap(function _callee$(_context) {
						while (1) {
							switch (_context.prev = _context.next) {
								case 0:
									_context.prev = 0;
									_context.next = 3;
									return _this2.methods.click();

								case 3:
									data = _context.sent;

									console.log(data.data);
									_this2.text = data.data.data[0].key;
									_this2.$apply(); //函数运行周期之外需手动调用$apply()
									_context.next = 12;
									break;

								case 9:
									_context.prev = 9;
									_context.t0 = _context['catch'](0);

									console.log(_context.t0);

								case 12:
								case 'end':
									return _context.stop();
							}
						}
					}, _callee, _this2, [[0, 9]]);
				}))();
			}
		}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Index, [{
		key: 'onLoad',
		value: function onLoad() {
			// this.methods.pro1.bind(this)()
			// onLoad内调用methonds方法需绑定this
		}
	}]);

	return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/demo'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8uanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJwYW5lbCIsImRhdGEiLCJ0ZXh0IiwibmFtZSIsImxpc3QiLCJ1cmwiLCJ0aWwiLCJkZXNjIiwibWV0aG9kcyIsImNsaWNrIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0Iiwic3VjY2VzcyIsImQiLCJmYWlsIiwiZXJyIiwicmVxIiwiY29uc29sZSIsImxvZyIsImtleSIsIiRhcHBseSIsImV2ZW50cyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNDOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztrTEFDcEJDLE0sR0FBUztBQUNSQywyQkFBd0I7QUFEaEIsRyxRQUdWQyxNLEdBQVMsRUFBQyxTQUFRLEVBQUMsbUJBQWtCLEVBQUMsT0FBTSxNQUFQLEVBQWMsUUFBTyxNQUFyQixFQUE0QixTQUFRLE9BQXBDLEVBQTRDLE9BQU0sT0FBbEQsRUFBMEQsU0FBUSxXQUFsRSxFQUFuQixFQUFrRyxxQkFBb0IsRUFBQyxPQUFNLE1BQVAsRUFBYyxRQUFPLE1BQXJCLEVBQTRCLFNBQVEsT0FBcEMsRUFBNEMsT0FBTSxPQUFsRCxFQUEwRCxTQUFRLFdBQWxFLEVBQXRILEVBQXFNLG9CQUFtQixFQUFDLE9BQU0sTUFBUCxFQUFjLFFBQU8sTUFBckIsRUFBNEIsU0FBUSxPQUFwQyxFQUE0QyxPQUFNLE9BQWxELEVBQTBELFNBQVEsV0FBbEUsRUFBeE4sRUFBVCxFLFFBQ1ZDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNYQztBQURXLEcsUUFHWkMsSSxHQUFPO0FBQ05DLFNBQUssTUFEQztBQUVOQyxTQUFLLFVBRkM7QUFHTkMsU0FBSyxDQUFDLEVBQUNDLEtBQUksU0FBTCxFQUFnQkMsS0FBSyxNQUFyQixFQUE0QkMsTUFBSyxtQkFBakMsRUFBRCxFQUF3RCxFQUFDRixLQUFJLGtCQUFMLEVBQXlCQyxLQUFLLE1BQTlCLEVBQXFDQyxNQUFLLG1CQUExQyxFQUF4RDtBQUhDLEcsUUFLUEMsTyxHQUFVO0FBQ1RDLFFBRFMsbUJBQ0Q7QUFDUCxXQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdkMsb0JBQUtDLE9BQUwsQ0FBYTtBQUNaUixXQUFLLGdIQURPO0FBRVpTLGVBQVMsaUJBQVVDLENBQVYsRUFBYTtBQUNyQkosZUFBUUksQ0FBUjtBQUNBLE9BSlc7QUFLWkMsWUFBSyxjQUFVQyxHQUFWLEVBQWM7QUFDbEJMLGNBQU9LLEdBQVA7QUFDQTtBQVBXLE1BQWI7QUFTQSxLQVZNLENBQVA7QUFXQSxJQWJRO0FBY0hDLE1BZEcsaUJBY0c7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRU8sT0FBS1YsT0FBTCxDQUFhQyxLQUFiLEVBRlA7O0FBQUE7QUFFTlIsYUFGTTs7QUFHVmtCLGlCQUFRQyxHQUFSLENBQVluQixLQUFLQSxJQUFqQjtBQUNBLGdCQUFLQyxJQUFMLEdBQVlELEtBQUtBLElBQUwsQ0FBVUEsSUFBVixDQUFlLENBQWYsRUFBa0JvQixHQUE5QjtBQUNBLGdCQUFLQyxNQUFMLEdBTFUsQ0FLSTtBQUxKO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQU9WSCxpQkFBUUMsR0FBUjs7QUFQVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNYO0FBdkJRLEcsUUF5QlZHLE0sR0FBUyxFOzs7OzsyQkFHQTtBQUNSO0FBQ0E7QUFDQTs7OztFQTdDaUMsZUFBS0MsSTs7a0JBQW5COUIsSyIsImZpbGUiOiJkZW1vLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblx0aW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcblx0aW1wb3J0IERlbW8gZnJvbSAnLi4vY29tcG9uZW50cy9kZW1vJztcclxuXHRleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XHJcblx0XHRjb25maWcgPSB7XHJcblx0XHRcdG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdkZW1v6aG16Z2iJ1xyXG5cdFx0fTtcclxuXHQkcHJvcHMgPSB7XCJwYW5lbFwiOntcInYtYmluZDp1cmwub25jZVwiOntcImZvclwiOlwibGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCIsXCJ2YWx1ZVwiOlwiaXRlbS5kZXNjXCJ9LFwidi1iaW5kOnRpdGxlLm9uY2VcIjp7XCJmb3JcIjpcImxpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwiLFwidmFsdWVcIjpcIml0ZW0uZGVzY1wifSxcInYtYmluZDpkZXNjLm9uY2VcIjp7XCJmb3JcIjpcImxpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwiLFwidmFsdWVcIjpcIml0ZW0uZGVzY1wifX19O1xyXG4kZXZlbnRzID0ge307XHJcblx0Y29tcG9uZW50cyA9IHtcclxuXHRcdFx0cGFuZWw6IERlbW9cclxuXHRcdH07XHJcblx0XHRkYXRhID0ge1xyXG5cdFx0XHR0ZXh0Oiflj5HpgIHor7fmsYInLFxyXG5cdFx0XHRuYW1lOidkZW1v5Zu+5paH57uE5Lu2JyxcclxuXHRcdFx0bGlzdDpbe3VybDonLi9pbmRleCcsIHRpbDogJ3dlcHknLGRlc2M6XCLov5nmmK93ZXB55qGG5p625LuL57uNLOeCueWHu+afpeeci+ivpuaDhVwifSwge3VybDonLi4vZXhhbXBsZS9pbmRleCcsIHRpbDogJ3dldWknLGRlc2M6XCLov5nmmK93ZXVp5qGG5p625LuL57uNLOeCueWHu+afpeeci+ivpuaDhVwifV1cclxuXHRcdH07XHJcblx0XHRtZXRob2RzID0ge1xyXG5cdFx0XHRjbGljaygpIHtcclxuXHRcdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRcdFx0d2VweS5yZXF1ZXN0KHtcclxuXHRcdFx0XHRcdFx0dXJsOiAnaHR0cHM6Ly9taWR3YXkudGVzdC42NmJ1eS5jb20uY24vZGlzY292ZXJ5L2luZGV4L2luaXQubm9kZT9jaXR5SWQ9MjU1NCZzdG9yZUlkPTE0OTEmdGFiSW5kZXg9MCZfPTE0OTY4MDMyNjIyNzInLFxyXG5cdFx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbiAoZCkge1xyXG5cdFx0XHRcdFx0XHRcdHJlc29sdmUoZCk7XHJcblx0XHRcdFx0XHRcdH0sIFxyXG5cdFx0XHRcdFx0XHRmYWlsOmZ1bmN0aW9uIChlcnIpe1xyXG5cdFx0XHRcdFx0XHRcdHJlamVjdChlcnIpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0YXN5bmMgcmVxKCkge1xyXG5cdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRsZXQgZGF0YSA9IGF3YWl0IHRoaXMubWV0aG9kcy5jbGljaygpO1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZGF0YS5kYXRhKTtcclxuXHRcdFx0XHRcdHRoaXMudGV4dCA9IGRhdGEuZGF0YS5kYXRhWzBdLmtleTtcclxuXHRcdFx0XHRcdHRoaXMuJGFwcGx5KCk7Ly/lh73mlbDov5DooYzlkajmnJ/kuYvlpJbpnIDmiYvliqjosIPnlKgkYXBwbHkoKVxyXG5cdFx0XHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0XHRldmVudHMgPSB7XHJcblxyXG5cdFx0fTtcclxuXHRcdG9uTG9hZCgpIHtcclxuXHRcdFx0Ly8gdGhpcy5tZXRob2RzLnBybzEuYmluZCh0aGlzKSgpXHJcblx0XHRcdC8vIG9uTG9hZOWGheiwg+eUqG1ldGhvbmRz5pa55rOV6ZyA57uR5a6adGhpc1xyXG5cdFx0fTtcclxufVxyXG4iXX0=