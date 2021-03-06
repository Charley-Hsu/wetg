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

var Picker = function (_wepy$page) {
    _inherits(Picker, _wepy$page);

    function Picker() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Picker);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Picker.__proto__ || Object.getPrototypeOf(Picker)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            array: ['美国', '中国', '巴西', '日本'],
            index: 0,
            date: '2016-09-01',
            time: '12:01'
        }, _this.methods = {
            bindPickerChange: function bindPickerChange(e) {
                console.log('picker发送选择改变，携带值为', e.detail.value);
                this.index = e.detail.value;
            },
            bindDateChange: function bindDateChange(e) {
                this.date = e.detail.value;
            },
            bindTimeChange: function bindTimeChange(e) {
                this.time = e.detail.value;
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Picker;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Picker , 'example/picker'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpY2tlci5qcyJdLCJuYW1lcyI6WyJQaWNrZXIiLCJkYXRhIiwiYXJyYXkiLCJpbmRleCIsImRhdGUiLCJ0aW1lIiwibWV0aG9kcyIsImJpbmRQaWNrZXJDaGFuZ2UiLCJlIiwiY29uc29sZSIsImxvZyIsImRldGFpbCIsInZhbHVlIiwiYmluZERhdGVDaGFuZ2UiLCJiaW5kVGltZUNoYW5nZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSTs7Ozs7Ozs7Ozs7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7OzswTEFFakJDLEksR0FBTztBQUNIQyxtQkFBTyxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixJQUFuQixDQURKO0FBRUhDLG1CQUFPLENBRko7QUFHSEMsa0JBQU0sWUFISDtBQUlIQyxrQkFBTTtBQUpILFMsUUFPUEMsTyxHQUFVO0FBQ05DLDRCQURNLDRCQUNZQyxDQURaLEVBQ2U7QUFDakJDLHdCQUFRQyxHQUFSLENBQVksbUJBQVosRUFBaUNGLEVBQUVHLE1BQUYsQ0FBU0MsS0FBMUM7QUFDQSxxQkFBS1QsS0FBTCxHQUFhSyxFQUFFRyxNQUFGLENBQVNDLEtBQXRCO0FBQ0gsYUFKSztBQUtOQywwQkFMTSwwQkFLVUwsQ0FMVixFQUthO0FBQ2YscUJBQUtKLElBQUwsR0FBWUksRUFBRUcsTUFBRixDQUFTQyxLQUFyQjtBQUNILGFBUEs7QUFRTkUsMEJBUk0sMEJBUVVOLENBUlYsRUFRYTtBQUNmLHFCQUFLSCxJQUFMLEdBQVlHLEVBQUVHLE1BQUYsQ0FBU0MsS0FBckI7QUFDSDtBQVZLLFM7Ozs7RUFUc0IsZUFBS0csSTs7a0JBQXBCZixNIiwiZmlsZSI6InBpY2tlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGlja2VyIGV4dGVuZHMgd2VweS5wYWdlIHtcblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgYXJyYXk6IFsn576O5Zu9JywgJ+S4reWbvScsICflt7Topb8nLCAn5pel5pysJ10sXG4gICAgICAgICAgICBpbmRleDogMCxcbiAgICAgICAgICAgIGRhdGU6ICcyMDE2LTA5LTAxJyxcbiAgICAgICAgICAgIHRpbWU6ICcxMjowMSdcbiAgICAgICAgfTtcblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgYmluZFBpY2tlckNoYW5nZSAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwaWNrZXLlj5HpgIHpgInmi6nmlLnlj5jvvIzmkLrluKblgLzkuLonLCBlLmRldGFpbC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmREYXRlQ2hhbmdlIChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZFRpbWVDaGFuZ2UgKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiJdfQ==