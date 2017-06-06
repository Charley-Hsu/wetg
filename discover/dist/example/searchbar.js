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

var Searchbar = function (_wepy$page) {
    _inherits(Searchbar, _wepy$page);

    function Searchbar() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Searchbar);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Searchbar.__proto__ || Object.getPrototypeOf(Searchbar)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            inputShowed: false,
            inputVal: ''
        }, _this.methods = {
            showInput: function showInput() {
                this.inputShowed = true;
            },
            hideInput: function hideInput() {
                this.inputVal = '';
                this.inputShowed = false;
            },
            clearInput: function clearInput() {
                this.inputVal = '';
            },
            inputTyping: function inputTyping(e) {
                this.inputVal = e.detail.value;
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Searchbar;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Searchbar , 'example/searchbar'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaGJhci5qcyJdLCJuYW1lcyI6WyJTZWFyY2hiYXIiLCJkYXRhIiwiaW5wdXRTaG93ZWQiLCJpbnB1dFZhbCIsIm1ldGhvZHMiLCJzaG93SW5wdXQiLCJoaWRlSW5wdXQiLCJjbGVhcklucHV0IiwiaW5wdXRUeXBpbmciLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0k7Ozs7Ozs7Ozs7OztJQUVxQkEsUzs7Ozs7Ozs7Ozs7Ozs7Z01BRWpCQyxJLEdBQU87QUFDSEMseUJBQWEsS0FEVjtBQUVIQyxzQkFBVTtBQUZQLFMsUUFLUEMsTyxHQUFVO0FBQ05DLHFCQURNLHVCQUNPO0FBQ1QscUJBQUtILFdBQUwsR0FBbUIsSUFBbkI7QUFDSCxhQUhLO0FBSU5JLHFCQUpNLHVCQUlPO0FBQ1QscUJBQUtILFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxxQkFBS0QsV0FBTCxHQUFtQixLQUFuQjtBQUNILGFBUEs7QUFRTkssc0JBUk0sd0JBUVE7QUFDVixxQkFBS0osUUFBTCxHQUFnQixFQUFoQjtBQUNILGFBVks7QUFXTkssdUJBWE0sdUJBV09DLENBWFAsRUFXVTtBQUNaLHFCQUFLTixRQUFMLEdBQWdCTSxFQUFFQyxNQUFGLENBQVNDLEtBQXpCO0FBQ0g7QUFiSyxTOzs7O0VBUHlCLGVBQUtDLEk7O2tCQUF2QlosUyIsImZpbGUiOiJzZWFyY2hiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaGJhciBleHRlbmRzIHdlcHkucGFnZSB7XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGlucHV0U2hvd2VkOiBmYWxzZSxcbiAgICAgICAgICAgIGlucHV0VmFsOiAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBzaG93SW5wdXQgKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRTaG93ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhpZGVJbnB1dCAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dFZhbCA9ICcnO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRTaG93ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGVhcklucHV0ICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0VmFsID0gJyc7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW5wdXRUeXBpbmcgKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0VmFsID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4iXX0=