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

var Slider = function (_wepy$page) {
    _inherits(Slider, _wepy$page);

    function Slider() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Slider);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Slider.__proto__ || Object.getPrototypeOf(Slider)).call.apply(_ref, [this].concat(args))), _this), _this.methods = {
            mychange: function mychange(e) {
                console.log('value is ' + e.detail.value);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Slider;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Slider , 'example/slider'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNsaWRlci5qcyJdLCJuYW1lcyI6WyJTbGlkZXIiLCJtZXRob2RzIiwibXljaGFuZ2UiLCJlIiwiY29uc29sZSIsImxvZyIsImRldGFpbCIsInZhbHVlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7SUFFcUJBLE07Ozs7Ozs7Ozs7Ozs7OzBMQUVqQkMsTyxHQUFVO0FBQ05DLG9CQURNLG9CQUNJQyxDQURKLEVBQ087QUFDVEMsd0JBQVFDLEdBQVIsZUFBd0JGLEVBQUVHLE1BQUYsQ0FBU0MsS0FBakM7QUFDSDtBQUhLLFM7Ozs7RUFGc0IsZUFBS0MsSTs7a0JBQXBCUixNIiwiZmlsZSI6InNsaWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xpZGVyIGV4dGVuZHMgd2VweS5wYWdlIHtcblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgbXljaGFuZ2UgKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgdmFsdWUgaXMgJHtlLmRldGFpbC52YWx1ZX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiJdfQ==