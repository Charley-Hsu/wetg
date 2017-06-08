'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Panel = function (_wepy$page) {
    _inherits(Panel, _wepy$page);

    function Panel() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Panel);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Panel.__proto__ || Object.getPrototypeOf(Panel)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            icon20: '',
            icon60: ''
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Panel, [{
        key: 'onLoad',
        value: function onLoad() {
            var base64 = require('./../images/base64.js');

            this.icon20 = base64.icon20;
            this.icon60 = base64.icon60;
        }
    }]);

    return Panel;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Panel , 'example/panel'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhbmVsLmpzIl0sIm5hbWVzIjpbIlBhbmVsIiwiZGF0YSIsImljb24yMCIsImljb242MCIsImJhc2U2NCIsInJlcXVpcmUiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFFakJDLEksR0FBTztBQUNIQyxvQkFBUSxFQURMO0FBRUhDLG9CQUFRO0FBRkwsUzs7Ozs7aUNBS0c7QUFDTixnQkFBSUMsU0FBU0MsUUFBUSxrQkFBUixDQUFiOztBQUVBLGlCQUFLSCxNQUFMLEdBQWNFLE9BQU9GLE1BQXJCO0FBQ0EsaUJBQUtDLE1BQUwsR0FBY0MsT0FBT0QsTUFBckI7QUFDSDs7OztFQVo4QixlQUFLRyxJOztrQkFBbkJOLEsiLCJmaWxlIjoicGFuZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhbmVsIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuXHJcbiAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICAgaWNvbjIwOiAnJyxcclxuICAgICAgICAgICAgaWNvbjYwOiAnJ1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgICAgIGxldCBiYXNlNjQgPSByZXF1aXJlKCcuLi9pbWFnZXMvYmFzZTY0Jyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmljb24yMCA9IGJhc2U2NC5pY29uMjA7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbjYwID0gYmFzZTY0Lmljb242MDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiJdfQ==