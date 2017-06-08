'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _demo = require('./../components/demo.js');

var _demo2 = _interopRequireDefault(_demo);

var _api = require('./../commonjs/api.js');

var _api2 = _interopRequireDefault(_api);

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
			list: [{ url: './index', til: 'wepy', desc: "这是wepy框架介绍,点击查看详情" }, { url: '../example/index', til: 'weui', desc: "这是weui框架介绍,点击查看详情" }],
			url: "https://midway.51tiangou.com/discovery/index/init.node?",
			param: {
				"cityId": 2554,
				"storeId": 20,
				"tabIndex": "_=1496930415499"
			}
		}, _this.methods = {
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
									return _api2.default.tgGet(_this2.url, _this2.param);

								case 3:
									data = _context.sent;

									console.log(data);
									// this.text = data.data.data[0].key;
									// this.$apply();//函数运行周期之外需手动调用$apply()
									_context.next = 10;
									break;

								case 7:
									_context.prev = 7;
									_context.t0 = _context['catch'](0);

									console.log(_context.t0);

								case 10:
								case 'end':
									return _context.stop();
							}
						}
					}, _callee, _this2, [[0, 7]]);
				}))();
			}
		}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Index, [{
		key: 'onLoad',
		value: function onLoad() {
			// this.methods.req.bind(this)()
			// onLoad内调用methonds方法需绑定this
		}
	}]);

	return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/demo'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8uanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJwYW5lbCIsImRhdGEiLCJ0ZXh0IiwibmFtZSIsImxpc3QiLCJ1cmwiLCJ0aWwiLCJkZXNjIiwicGFyYW0iLCJtZXRob2RzIiwicmVxIiwidGdHZXQiLCJjb25zb2xlIiwibG9nIiwiZXZlbnRzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0M7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7a0xBQ3BCQyxNLEdBQVM7QUFDUkMsMkJBQXdCO0FBRGhCLEcsUUFHVkMsTSxHQUFTLEVBQUMsU0FBUSxFQUFDLG1CQUFrQixFQUFDLE9BQU0sTUFBUCxFQUFjLFFBQU8sTUFBckIsRUFBNEIsU0FBUSxPQUFwQyxFQUE0QyxPQUFNLE9BQWxELEVBQTBELFNBQVEsV0FBbEUsRUFBbkIsRUFBa0cscUJBQW9CLEVBQUMsT0FBTSxNQUFQLEVBQWMsUUFBTyxNQUFyQixFQUE0QixTQUFRLE9BQXBDLEVBQTRDLE9BQU0sT0FBbEQsRUFBMEQsU0FBUSxXQUFsRSxFQUF0SCxFQUFxTSxvQkFBbUIsRUFBQyxPQUFNLE1BQVAsRUFBYyxRQUFPLE1BQXJCLEVBQTRCLFNBQVEsT0FBcEMsRUFBNEMsT0FBTSxPQUFsRCxFQUEwRCxTQUFRLFdBQWxFLEVBQXhOLEVBQVQsRSxRQUNWQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDWEM7QUFEVyxHLFFBR1pDLEksR0FBTztBQUNOQyxTQUFLLE1BREM7QUFFTkMsU0FBSyxVQUZDO0FBR05DLFNBQUssQ0FBQyxFQUFDQyxLQUFJLFNBQUwsRUFBZ0JDLEtBQUssTUFBckIsRUFBNEJDLE1BQUssbUJBQWpDLEVBQUQsRUFBd0QsRUFBQ0YsS0FBSSxrQkFBTCxFQUF5QkMsS0FBSyxNQUE5QixFQUFxQ0MsTUFBSyxtQkFBMUMsRUFBeEQsQ0FIQztBQUlORixRQUFJLHlEQUpFO0FBS05HLFVBQU07QUFDTCxjQUFTLElBREo7QUFFTCxlQUFVLEVBRkw7QUFHTCxnQkFBVztBQUhOO0FBTEEsRyxRQVdQQyxPLEdBQVU7QUFDSEMsTUFERyxpQkFDRztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFFTyxjQUFJQyxLQUFKLENBQVUsT0FBS04sR0FBZixFQUFtQixPQUFLRyxLQUF4QixDQUZQOztBQUFBO0FBRU5QLGFBRk07O0FBR1ZXLGlCQUFRQyxHQUFSLENBQVlaLElBQVo7QUFDQTtBQUNBO0FBTFU7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBT1ZXLGlCQUFRQyxHQUFSOztBQVBVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU1g7QUFWUSxHLFFBWVZDLE0sR0FBUyxFOzs7OzsyQkFHQTtBQUNSO0FBQ0E7QUFDQTs7OztFQXRDaUMsZUFBS0MsSTs7a0JBQW5CckIsSyIsImZpbGUiOiJkZW1vLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblx0aW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcblx0aW1wb3J0IERlbW8gZnJvbSAnLi4vY29tcG9uZW50cy9kZW1vJztcclxuXHRpbXBvcnQgYXBpIGZyb20gJy4uL2NvbW1vbmpzL2FwaSc7XHJcblx0ZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG5cdFx0Y29uZmlnID0ge1xyXG5cdFx0XHRuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnZGVtb+mhtemdoidcclxuXHRcdH07XHJcblx0JHByb3BzID0ge1wicGFuZWxcIjp7XCJ2LWJpbmQ6dXJsLm9uY2VcIjp7XCJmb3JcIjpcImxpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwiLFwidmFsdWVcIjpcIml0ZW0uZGVzY1wifSxcInYtYmluZDp0aXRsZS5vbmNlXCI6e1wiZm9yXCI6XCJsaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIixcInZhbHVlXCI6XCJpdGVtLmRlc2NcIn0sXCJ2LWJpbmQ6ZGVzYy5vbmNlXCI6e1wiZm9yXCI6XCJsaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIixcInZhbHVlXCI6XCJpdGVtLmRlc2NcIn19fTtcclxuJGV2ZW50cyA9IHt9O1xyXG5cdGNvbXBvbmVudHMgPSB7XHJcblx0XHRcdHBhbmVsOiBEZW1vXHJcblx0XHR9O1xyXG5cdFx0ZGF0YSA9IHtcclxuXHRcdFx0dGV4dDon5Y+R6YCB6K+35rGCJyxcclxuXHRcdFx0bmFtZTonZGVtb+WbvuaWh+e7hOS7ticsXHJcblx0XHRcdGxpc3Q6W3t1cmw6Jy4vaW5kZXgnLCB0aWw6ICd3ZXB5JyxkZXNjOlwi6L+Z5pivd2VweeahhuaetuS7i+e7jSzngrnlh7vmn6XnnIvor6bmg4VcIn0sIHt1cmw6Jy4uL2V4YW1wbGUvaW5kZXgnLCB0aWw6ICd3ZXVpJyxkZXNjOlwi6L+Z5pivd2V1aeahhuaetuS7i+e7jSzngrnlh7vmn6XnnIvor6bmg4VcIn1dLFxyXG5cdFx0XHR1cmw6XCJodHRwczovL21pZHdheS41MXRpYW5nb3UuY29tL2Rpc2NvdmVyeS9pbmRleC9pbml0Lm5vZGU/XCIsXHJcblx0XHRcdHBhcmFtOntcclxuXHRcdFx0XHRcImNpdHlJZFwiOjI1NTQsXHJcblx0XHRcdFx0XCJzdG9yZUlkXCI6MjAsXHJcblx0XHRcdFx0XCJ0YWJJbmRleFwiOlwiXz0xNDk2OTMwNDE1NDk5XCJcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHRcdG1ldGhvZHMgPSB7XHJcblx0XHRcdGFzeW5jIHJlcSgpIHtcclxuXHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0bGV0IGRhdGEgPSBhd2FpdCBhcGkudGdHZXQodGhpcy51cmwsdGhpcy5wYXJhbSlcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cdFx0XHRcdFx0Ly8gdGhpcy50ZXh0ID0gZGF0YS5kYXRhLmRhdGFbMF0ua2V5O1xyXG5cdFx0XHRcdFx0Ly8gdGhpcy4kYXBwbHkoKTsvL+WHveaVsOi/kOihjOWRqOacn+S5i+WklumcgOaJi+WKqOiwg+eUqCRhcHBseSgpXHJcblx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhlcnIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHRcdGV2ZW50cyA9IHtcclxuXHJcblx0XHR9O1xyXG5cdFx0b25Mb2FkKCkge1xyXG5cdFx0XHQvLyB0aGlzLm1ldGhvZHMucmVxLmJpbmQodGhpcykoKVxyXG5cdFx0XHQvLyBvbkxvYWTlhoXosIPnlKhtZXRob25kc+aWueazlemcgOe7keWumnRoaXNcclxuXHRcdH07XHJcbn1cclxuIl19