'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Msg = function (_wepy$page) {
    _inherits(Msg, _wepy$page);

    function Msg() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Msg);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Msg.__proto__ || Object.getPrototypeOf(Msg)).call.apply(_ref, [this].concat(args))), _this), _this.methods = {
            openSuccess: function openSuccess() {
                this.$navigate('./msg_success');
            },
            openFail: function openFail() {
                this.$navigate('./msg_fail');
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Msg;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Msg , 'example/msg'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1zZy5qcyJdLCJuYW1lcyI6WyJNc2ciLCJtZXRob2RzIiwib3BlblN1Y2Nlc3MiLCIkbmF2aWdhdGUiLCJvcGVuRmFpbCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSTs7Ozs7Ozs7Ozs7O0lBRXFCQSxHOzs7Ozs7Ozs7Ozs7OztvTEFDakJDLE8sR0FBVTtBQUNOQyx1QkFETSx5QkFDUztBQUNYLHFCQUFLQyxTQUFMLENBQWUsZUFBZjtBQUNILGFBSEs7QUFJTkMsb0JBSk0sc0JBSU07QUFDUixxQkFBS0QsU0FBTCxDQUFlLFlBQWY7QUFDSDtBQU5LLFM7Ozs7RUFEbUIsZUFBS0UsSTs7a0JBQWpCTCxHIiwiZmlsZSI6Im1zZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXNnIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIG9wZW5TdWNjZXNzICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZSgnLi9tc2dfc3VjY2VzcycpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9wZW5GYWlsICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZSgnLi9tc2dfZmFpbCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuIl19