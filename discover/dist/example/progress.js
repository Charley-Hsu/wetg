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

var Progress = function (_wepy$page) {
    _inherits(Progress, _wepy$page);

    function Progress() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Progress);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Progress.__proto__ || Object.getPrototypeOf(Progress)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            progress: 0,
            disabled: false
        }, _this.methods = {
            upload: function upload() {
                if (this.disabled) {
                    return;
                }

                this.progress = 0;
                this.disabled = true;

                this.next();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Progress, [{
        key: 'next',
        value: function next() {
            var _this2 = this;

            if (this.progress >= 100) {
                this.disabled = false;
                return true;
            }
            this.progress++;

            setTimeout(function () {
                _this2.$apply(function () {
                    _this2.next();
                });
            }, 20);
        }
    }]);

    return Progress;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Progress , 'example/progress'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2dyZXNzLmpzIl0sIm5hbWVzIjpbIlByb2dyZXNzIiwiZGF0YSIsInByb2dyZXNzIiwiZGlzYWJsZWQiLCJtZXRob2RzIiwidXBsb2FkIiwibmV4dCIsInNldFRpbWVvdXQiLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7Ozs7Ozs7Ozs7O0lBRXFCQSxROzs7Ozs7Ozs7Ozs7Ozs4TEFFakJDLEksR0FBTztBQUNIQyxzQkFBVSxDQURQO0FBRUhDLHNCQUFVO0FBRlAsUyxRQUtQQyxPLEdBQVU7QUFDTkMsa0JBRE0sb0JBQ0k7QUFDTixvQkFBSSxLQUFLRixRQUFULEVBQW1CO0FBQ2Y7QUFDSDs7QUFFRCxxQkFBS0QsUUFBTCxHQUFnQixDQUFoQjtBQUNBLHFCQUFLQyxRQUFMLEdBQWdCLElBQWhCOztBQUVBLHFCQUFLRyxJQUFMO0FBQ0g7QUFWSyxTOzs7OzsrQkFhRjtBQUFBOztBQUNKLGdCQUFJLEtBQUtKLFFBQUwsSUFBaUIsR0FBckIsRUFBMEI7QUFDdEIscUJBQUtDLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQSx1QkFBTyxJQUFQO0FBQ0g7QUFDRCxpQkFBS0QsUUFBTDs7QUFFQUssdUJBQVcsWUFBTTtBQUNiLHVCQUFLQyxNQUFMLENBQVksWUFBTTtBQUNkLDJCQUFLRixJQUFMO0FBQ0gsaUJBRkQ7QUFHSCxhQUpELEVBSUcsRUFKSDtBQUtIOzs7O0VBaENpQyxlQUFLRyxJOztrQkFBdEJULFEiLCJmaWxlIjoicHJvZ3Jlc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2dyZXNzIGV4dGVuZHMgd2VweS5wYWdlIHtcblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgcHJvZ3Jlc3M6IDAsXG4gICAgICAgICAgICBkaXNhYmxlZDogZmFsc2VcbiAgICAgICAgfTtcblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgdXBsb2FkICgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG5leHQgKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvZ3Jlc3MgPj0gMTAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzcysrO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgMjApO1xuICAgICAgICB9XG4gICAgfVxuIl19