'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Demo = function (_wepy$component) {
    _inherits(Demo, _wepy$component);

    function Demo() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Demo);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Demo.__proto__ || Object.getPrototypeOf(Demo)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            icon60: '../images/vcode.png'
        }, _this.props = {
            url: {
                type: String,
                default: ''
            },
            title: {
                type: String,
                default: ''
            },
            desc: {
                type: String,
                default: ''
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Demo, [{
        key: 'onLoad',
        value: function onLoad() {}
    }]);

    return Demo;
}(_wepy2.default.component);

exports.default = Demo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8uanMiXSwibmFtZXMiOlsiRGVtbyIsImRhdGEiLCJpY29uNjAiLCJwcm9wcyIsInVybCIsInR5cGUiLCJTdHJpbmciLCJkZWZhdWx0IiwidGl0bGUiLCJkZXNjIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLEksR0FBTztBQUNIQyxvQkFBUTtBQURMLFMsUUFHUEMsSyxHQUFRO0FBQ0pDLGlCQUFLO0FBQ0RDLHNCQUFNQyxNQURMO0FBRURDLHlCQUFTO0FBRlIsYUFERDtBQUtKQyxtQkFBTztBQUNISCxzQkFBTUMsTUFESDtBQUVIQyx5QkFBUztBQUZOLGFBTEg7QUFTSkUsa0JBQU07QUFDRkosc0JBQU1DLE1BREo7QUFFRkMseUJBQVM7QUFGUDtBQVRGLFM7Ozs7O2lDQWNFLENBQ1Q7Ozs7RUFuQitCLGVBQUtHLFM7O2tCQUFsQlYsSSIsImZpbGUiOiJkZW1vLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVtbyBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgIGRhdGEgPSB7XHJcbiAgICAgICAgaWNvbjYwOiAnLi4vaW1hZ2VzL3Zjb2RlLnBuZydcclxuICAgIH07XHJcbiAgICBwcm9wcyA9IHtcclxuICAgICAgICB1cmw6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGVzYzoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcnXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=