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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LmpzIl0sIm5hbWVzIjpbIklucHV0IiwiZGF0YSIsInRpcHNGbGFnIiwicmFkaW9JdGVtcyIsIm5hbWUiLCJ2YWx1ZSIsImNoZWNrZWQiLCJjaGVja2JveEl0ZW1zIiwiZGF0ZSIsInRpbWUiLCJjb3VudHJ5Q29kZXMiLCJjb3VudHJ5Q29kZUluZGV4IiwiY291bnRyaWVzIiwiY291bnRyeUluZGV4IiwiYWNjb3VudHMiLCJhY2NvdW50SW5kZXgiLCJpc0FncmVlIiwibWV0aG9kcyIsInJhZGlvQ2hhbmdlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJkZXRhaWwiLCJmb3JFYWNoIiwidiIsImNoZWNrYm94Q2hhbmdlIiwidmFsdWVzIiwiaSIsImxlbkkiLCJsZW5ndGgiLCJqIiwibGVuSiIsImJpbmREYXRlQ2hhbmdlIiwiYmluZFRpbWVDaGFuZ2UiLCJiaW5kQ291bnRyeUNvZGVDaGFuZ2UiLCJiaW5kQWNjb3VudENoYW5nZSIsImJpbmRDb3VudHJ5Q2hhbmdlIiwiYmluZEFncmVlQ2hhbmdlIiwic2hvd1RvcFRpcHMiLCJzZXRUaW1lb3V0IiwiJGFwcGx5IiwiaWNvbiIsInJlcXVpcmUiLCJpY29uMjAiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFFakJDLEksR0FBTztBQUNIQyxzQkFBVSxLQURQOztBQUdIQyx3QkFBWSxDQUNSLEVBQUNDLE1BQU0sZUFBUCxFQUF3QkMsT0FBTyxHQUEvQixFQUFvQ0MsU0FBUyxLQUE3QyxFQURRLEVBRVIsRUFBQ0YsTUFBTSxlQUFQLEVBQXdCQyxPQUFPLEdBQS9CLEVBQW9DQyxTQUFTLElBQTdDLEVBRlEsQ0FIVDtBQU9IQywyQkFBZSxDQUNYLEVBQUNILE1BQU0sMEJBQVAsRUFBbUNDLE9BQU8sR0FBMUMsRUFBK0NDLFNBQVMsSUFBeEQsRUFEVyxFQUVYLEVBQUNGLE1BQU0sK0JBQVAsRUFBd0NDLE9BQU8sR0FBL0MsRUFBb0RD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RixDQUFTakIsS0FBVCxDQUFld0IsTUFBaEM7QUFDSCxhQTdDSztBQThDTlMsdUJBOUNNLHlCQThDUztBQUFBOztBQUNYLHFCQUFLcEMsUUFBTCxHQUFnQixJQUFoQjtBQUNBcUMsMkJBQVcsWUFBTTtBQUNiLDJCQUFLckMsUUFBTCxHQUFnQixLQUFoQjtBQUNBLDJCQUFLc0MsTUFBTDtBQUNILGlCQUhELEVBR0csSUFISDtBQUlIO0FBcERLLFM7Ozs7O2lDQXdEQTtBQUNOLGlCQUFLQyxJQUFMLEdBQVlDLFFBQVEscUJBQVIsRUFBK0JDLE1BQTNDO0FBQ0g7Ozs7RUF2RjhCLGVBQUtDLEk7O2tCQUFuQjVDLEsiLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuXHJcbiAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICAgdGlwc0ZsYWc6IGZhbHNlLFxyXG5cclxuICAgICAgICAgICAgcmFkaW9JdGVtczogW1xyXG4gICAgICAgICAgICAgICAge25hbWU6ICdjZWxsIHN0YW5kYXJkJywgdmFsdWU6ICcwJywgY2hlY2tlZDogZmFsc2V9LFxyXG4gICAgICAgICAgICAgICAge25hbWU6ICdjZWxsIHN0YW5kYXJkJywgdmFsdWU6ICcxJywgY2hlY2tlZDogdHJ1ZX1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgY2hlY2tib3hJdGVtczogW1xyXG4gICAgICAgICAgICAgICAge25hbWU6ICdzdGFuZGFyZCBpcyBkZWFsdCBmb3IgdS4nLCB2YWx1ZTogJzAnLCBjaGVja2VkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgIHtuYW1lOiAnc3RhbmRhcmQgaXMgZGVhbGljaWVudCBmb3IgdS4nLCB2YWx1ZTogJzEnLCBjaGVja2VkOiBmYWxzZX1cclxuICAgICAgICAgICAgXSxcclxuXHJcbiAgICAgICAgICAgIGRhdGU6ICcyMDE2LTA5LTAxJyxcclxuICAgICAgICAgICAgdGltZTogJzEyOjAxJyxcclxuXHJcbiAgICAgICAgICAgIGNvdW50cnlDb2RlczogWycrODYnLCAnKzgwJywgJys4NCcsICcrODcnXSxcclxuICAgICAgICAgICAgY291bnRyeUNvZGVJbmRleDogMCxcclxuXHJcbiAgICAgICAgICAgIGNvdW50cmllczogWyfkuK3lm70nLCAn576O5Zu9JywgJ+iLseWbvSddLFxyXG4gICAgICAgICAgICBjb3VudHJ5SW5kZXg6IDAsXHJcblxyXG4gICAgICAgICAgICBhY2NvdW50czogWyflvq7kv6Hlj7cnLCAnUVEnLCAnRW1haWwnXSxcclxuICAgICAgICAgICAgYWNjb3VudEluZGV4OiAwLFxyXG5cclxuICAgICAgICAgICAgaXNBZ3JlZTogZmFsc2VcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBtZXRob2RzID0ge1xyXG4gICAgICAgICAgICByYWRpb0NoYW5nZSAoZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JhZGlv5Y+R55SfY2hhbmdl5LqL5Lu277yM5pC65bimdmFsdWXlgLzkuLrvvJonLCBlLmRldGFpbC52YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5yYWRpb0l0ZW1zLmZvckVhY2godiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdi5jaGVja2VkID0gdi52YWx1ZSA9PT0gZS5kZXRhaWwudmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2hlY2tib3hDaGFuZ2UgKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGVja2JveOWPkeeUn2NoYW5nZeS6i+S7tu+8jOaQuuW4pnZhbHVl5YC85Li677yaJywgZS5kZXRhaWwudmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBjaGVja2JveEl0ZW1zID0gdGhpcy5jaGVja2JveEl0ZW1zLCB2YWx1ZXMgPSBlLmRldGFpbC52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW5JID0gY2hlY2tib3hJdGVtcy5sZW5ndGg7IGkgPCBsZW5JOyArK2kpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2JveEl0ZW1zW2ldLmNoZWNrZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDAsIGxlbkogPSB2YWx1ZXMubGVuZ3RoOyBqIDwgbGVuSjsgKytqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGVja2JveEl0ZW1zW2ldLnZhbHVlID09PSB2YWx1ZXNbal0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrYm94SXRlbXNbaV0uY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrYm94SXRlbXMgPSBjaGVja2JveEl0ZW1zO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBiaW5kRGF0ZUNoYW5nZSAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gZS5kZXRhaWwudmFsdWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJpbmRUaW1lQ2hhbmdlIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWUgPSBlLmRldGFpbC52YWx1ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYmluZENvdW50cnlDb2RlQ2hhbmdlIChlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncGlja2VyIGNvdW50cnkgY29kZSDlj5HnlJ/pgInmi6nmlLnlj5jvvIzmkLrluKblgLzkuLonLCBlLmRldGFpbC52YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudHJ5Q29kZUluZGV4ID0gZS5kZXRhaWwudmFsdWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJpbmRBY2NvdW50Q2hhbmdlIChlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncGlja2VyIGNvdW50cnkg5Y+R55Sf6YCJ5oup5pS55Y+Y77yM5pC65bim5YC85Li6JywgZS5kZXRhaWwudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NvdW50SW5kZXggPSBlLmRldGFpbC52YWx1ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYmluZENvdW50cnlDaGFuZ2UgKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY291bnRyeUluZGV4ID0gZS5kZXRhaWwudmFsdWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJpbmRBZ3JlZUNoYW5nZSAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0FncmVlID0gISFlLmRldGFpbC52YWx1ZS5sZW5ndGg7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNob3dUb3BUaXBzICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGlwc0ZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aXBzRmxhZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICB9LCAzMDAwKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgICAgICB0aGlzLmljb24gPSByZXF1aXJlKCcuLi9pbWFnZXMvYmFzZTY0LmpzJykuaWNvbjIwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuIl19