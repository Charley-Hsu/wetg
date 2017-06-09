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

var Input = function (_wepy$page) {
    _inherits(Input, _wepy$page);

    function Input() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Input);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Input.__proto__ || Object.getPrototypeOf(Input)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            tipsFlag: false,

            radioItems: [{ name: 'cell standard', value: '0', checked: false }, { name: 'cell standard', value: '1', checked: true }],
            checkboxItems: [{ name: 'standard is dealt for u.', value: '0', checked: true }, { name: 'standard is dealicient for u.', value: '1', checked: false }],

            date: '2016-09-01',
            time: '12:01',

            countryCodes: ['+86', '+80', '+84', '+87'],
            countryCodeIndex: 0,

            countries: ['中国', '美国', '英国'],
            countryIndex: 0,

            accounts: ['微信号', 'QQ', 'Email'],
            accountIndex: 0,

            isAgree: false
        }, _this.methods = {
            radioChange: function radioChange(e) {
                console.log('radio发生change事件，携带value值为：', e.detail.value);

                this.radioItems.forEach(function (v) {
                    v.checked = v.value === e.detail.value;
                });
            },
            checkboxChange: function checkboxChange(e) {
                console.log('checkbox发生change事件，携带value值为：', e.detail.value);

                var checkboxItems = this.checkboxItems,
                    values = e.detail.value;
                for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
                    checkboxItems[i].checked = false;

                    for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
                        if (checkboxItems[i].value === values[j]) {
                            checkboxItems[i].checked = true;
                            break;
                        }
                    }
                }

                this.checkboxItems = checkboxItems;
            },
            bindDateChange: function bindDateChange(e) {
                this.data = e.detail.value;
            },
            bindTimeChange: function bindTimeChange(e) {
                this.time = e.detail.value;
            },
            bindCountryCodeChange: function bindCountryCodeChange(e) {
                console.log('picker country code 发生选择改变，携带值为', e.detail.value);

                this.countryCodeIndex = e.detail.value;
            },
            bindAccountChange: function bindAccountChange(e) {
                console.log('picker country 发生选择改变，携带值为', e.detail.value);
                this.accountIndex = e.detail.value;
            },
            bindCountryChange: function bindCountryChange(e) {
                this.countryIndex = e.detail.value;
            },
            bindAgreeChange: function bindAgreeChange(e) {
                this.isAgree = !!e.detail.value.length;
            },
            showTopTips: function showTopTips() {
                var _this2 = this;

                this.tipsFlag = true;
                setTimeout(function () {
                    _this2.tipsFlag = false;
                    _this2.$apply();
                }, 3000);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Input, [{
        key: 'onLoad',
        value: function onLoad() {
            this.icon = require('./../images/base64.js').icon20;
        }
    }]);

    return Input;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Input , 'example/input'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LmpzIl0sIm5hbWVzIjpbIklucHV0IiwiZGF0YSIsInRpcHNGbGFnIiwicmFkaW9JdGVtcyIsIm5hbWUiLCJ2YWx1ZSIsImNoZWNrZWQiLCJjaGVja2JveEl0ZW1zIiwiZGF0ZSIsInRpbWUiLCJjb3VudHJ5Q29kZXMiLCJjb3VudHJ5Q29kZUluZGV4IiwiY291bnRyaWVzIiwiY291bnRyeUluZGV4IiwiYWNjb3VudHMiLCJhY2NvdW50SW5kZXgiLCJpc0FncmVlIiwibWV0aG9kcyIsInJhZGlvQ2hhbmdlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJkZXRhaWwiLCJmb3JFYWNoIiwidiIsImNoZWNrYm94Q2hhbmdlIiwidmFsdWVzIiwiaSIsImxlbkkiLCJsZW5ndGgiLCJqIiwibGVuSiIsImJpbmREYXRlQ2hhbmdlIiwiYmluZFRpbWVDaGFuZ2UiLCJiaW5kQ291bnRyeUNvZGVDaGFuZ2UiLCJiaW5kQWNjb3VudENoYW5nZSIsImJpbmRDb3VudHJ5Q2hhbmdlIiwiYmluZEFncmVlQ2hhbmdlIiwic2hvd1RvcFRpcHMiLCJzZXRUaW1lb3V0IiwiJGFwcGx5IiwiaWNvbiIsInJlcXVpcmUiLCJpY29uMjAiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFFakJDLEksR0FBTztBQUNIQyxzQkFBVSxLQURQOztBQUdIQyx3QkFBWSxDQUNSLEVBQUNDLE1BQU0sZUFBUCxFQUF3QkMsT0FBTyxHQUEvQixFQUFvQ0MsU0FBUyxLQUE3QyxFQURRLEVBRVIsRUFBQ0YsTUFBTSxlQUFQLEVBQXdCQyxPQUFPLEdBQS9CLEVBQW9DQyxTQUFTLElBQTdDLEVBRlEsQ0FIVDtBQU9IQywyQkFBZSxDQUNYLEVBQUNILE1BQU0sMEJBQVAsRUFBbUNDLE9BQU8sR0FBMUMsRUFBK0NDLFNBQVMsSUFBeEQsRUFEVyxFQUVYLEVBQUNGLE1BQU0sK0JBQVAsRUFBd0NDLE9BQU8sR0FBL0MsRUFBb0RD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RixDQUFTakIsS0FBVCxDQUFld0IsTUFBaEM7QUFDSCxhQTdDSztBQThDTlMsdUJBOUNNLHlCQThDUztBQUFBOztBQUNYLHFCQUFLcEMsUUFBTCxHQUFnQixJQUFoQjtBQUNBcUMsMkJBQVcsWUFBTTtBQUNiLDJCQUFLckMsUUFBTCxHQUFnQixLQUFoQjtBQUNBLDJCQUFLc0MsTUFBTDtBQUNILGlCQUhELEVBR0csSUFISDtBQUlIO0FBcERLLFM7Ozs7O2lDQXdEQTtBQUNOLGlCQUFLQyxJQUFMLEdBQVlDLFFBQVEscUJBQVIsRUFBK0JDLE1BQTNDO0FBQ0g7Ozs7RUF2RjhCLGVBQUtDLEk7O2tCQUFuQjVDLEsiLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IGV4dGVuZHMgd2VweS5wYWdlIHtcblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgdGlwc0ZsYWc6IGZhbHNlLFxuXG4gICAgICAgICAgICByYWRpb0l0ZW1zOiBbXG4gICAgICAgICAgICAgICAge25hbWU6ICdjZWxsIHN0YW5kYXJkJywgdmFsdWU6ICcwJywgY2hlY2tlZDogZmFsc2V9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnY2VsbCBzdGFuZGFyZCcsIHZhbHVlOiAnMScsIGNoZWNrZWQ6IHRydWV9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgY2hlY2tib3hJdGVtczogW1xuICAgICAgICAgICAgICAgIHtuYW1lOiAnc3RhbmRhcmQgaXMgZGVhbHQgZm9yIHUuJywgdmFsdWU6ICcwJywgY2hlY2tlZDogdHJ1ZX0sXG4gICAgICAgICAgICAgICAge25hbWU6ICdzdGFuZGFyZCBpcyBkZWFsaWNpZW50IGZvciB1LicsIHZhbHVlOiAnMScsIGNoZWNrZWQ6IGZhbHNlfVxuICAgICAgICAgICAgXSxcblxuICAgICAgICAgICAgZGF0ZTogJzIwMTYtMDktMDEnLFxuICAgICAgICAgICAgdGltZTogJzEyOjAxJyxcblxuICAgICAgICAgICAgY291bnRyeUNvZGVzOiBbJys4NicsICcrODAnLCAnKzg0JywgJys4NyddLFxuICAgICAgICAgICAgY291bnRyeUNvZGVJbmRleDogMCxcblxuICAgICAgICAgICAgY291bnRyaWVzOiBbJ+S4reWbvScsICfnvo7lm70nLCAn6Iux5Zu9J10sXG4gICAgICAgICAgICBjb3VudHJ5SW5kZXg6IDAsXG5cbiAgICAgICAgICAgIGFjY291bnRzOiBbJ+W+ruS/oeWPtycsICdRUScsICdFbWFpbCddLFxuICAgICAgICAgICAgYWNjb3VudEluZGV4OiAwLFxuXG4gICAgICAgICAgICBpc0FncmVlOiBmYWxzZVxuICAgICAgICB9O1xuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICByYWRpb0NoYW5nZSAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyYWRpb+WPkeeUn2NoYW5nZeS6i+S7tu+8jOaQuuW4pnZhbHVl5YC85Li677yaJywgZS5kZXRhaWwudmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5yYWRpb0l0ZW1zLmZvckVhY2godiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHYuY2hlY2tlZCA9IHYudmFsdWUgPT09IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoZWNrYm94Q2hhbmdlIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NoZWNrYm945Y+R55SfY2hhbmdl5LqL5Lu277yM5pC65bimdmFsdWXlgLzkuLrvvJonLCBlLmRldGFpbC52YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgY2hlY2tib3hJdGVtcyA9IHRoaXMuY2hlY2tib3hJdGVtcywgdmFsdWVzID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbkkgPSBjaGVja2JveEl0ZW1zLmxlbmd0aDsgaSA8IGxlbkk7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICBjaGVja2JveEl0ZW1zW2ldLmNoZWNrZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMCwgbGVuSiA9IHZhbHVlcy5sZW5ndGg7IGogPCBsZW5KOyArK2opIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGVja2JveEl0ZW1zW2ldLnZhbHVlID09PSB2YWx1ZXNbal0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2JveEl0ZW1zW2ldLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja2JveEl0ZW1zID0gY2hlY2tib3hJdGVtcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kRGF0ZUNoYW5nZSAoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRUaW1lQ2hhbmdlIChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZENvdW50cnlDb2RlQ2hhbmdlIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3BpY2tlciBjb3VudHJ5IGNvZGUg5Y+R55Sf6YCJ5oup5pS55Y+Y77yM5pC65bim5YC85Li6JywgZS5kZXRhaWwudmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudHJ5Q29kZUluZGV4ID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZEFjY291bnRDaGFuZ2UgKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncGlja2VyIGNvdW50cnkg5Y+R55Sf6YCJ5oup5pS55Y+Y77yM5pC65bim5YC85Li6JywgZS5kZXRhaWwudmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWNjb3VudEluZGV4ID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZENvdW50cnlDaGFuZ2UgKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50cnlJbmRleCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRBZ3JlZUNoYW5nZSAoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNBZ3JlZSA9ICEhZS5kZXRhaWwudmFsdWUubGVuZ3RoO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob3dUb3BUaXBzICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpcHNGbGFnID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aXBzRmxhZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH0sIDMwMDApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cbiAgICAgICAgb25Mb2FkICgpIHtcbiAgICAgICAgICAgIHRoaXMuaWNvbiA9IHJlcXVpcmUoJy4uL2ltYWdlcy9iYXNlNjQuanMnKS5pY29uMjA7XG4gICAgICAgIH1cbiAgICB9XG4iXX0=