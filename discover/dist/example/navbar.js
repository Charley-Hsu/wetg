'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

var Toast = function (_wepy$page) {
    _inherits(Toast, _wepy$page);

    function Toast() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Toast);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Toast.__proto__ || Object.getPrototypeOf(Toast)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            tabs: ['选项一', '选项二', '选项三'],
            activeIndex: 1,
            sliderOffset: 0,
            sliderLeft: 0
        }, _this.methods = {
            tabClick: function tabClick(e) {
                this.sliderOffset = e.currentTarget.offsetLeft;
                this.activeIndex = e.currentTarget.id;
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Toast, [{
        key: 'onLoad',
        value: function () {
            var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                var res;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _wepy2.default.getSystemInfo();

                            case 2:
                                res = _context.sent;


                                this.sliderLeft = (res.windowWidth / this.tabs.length - sliderWidth) / 2;
                                this.sliderOffset = res.windowWidth / this.tabs.length * this.activeIndex;

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function onLoad() {
                return _ref2.apply(this, arguments);
            }

            return onLoad;
        }()
    }]);

    return Toast;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Toast , 'example/navbar'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5qcyJdLCJuYW1lcyI6WyJzbGlkZXJXaWR0aCIsIlRvYXN0IiwiZGF0YSIsInRhYnMiLCJhY3RpdmVJbmRleCIsInNsaWRlck9mZnNldCIsInNsaWRlckxlZnQiLCJtZXRob2RzIiwidGFiQ2xpY2siLCJlIiwiY3VycmVudFRhcmdldCIsIm9mZnNldExlZnQiLCJpZCIsImdldFN5c3RlbUluZm8iLCJyZXMiLCJ3aW5kb3dXaWR0aCIsImxlbmd0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGNBQWMsRUFBcEIsQyxDQUF3Qjs7SUFFSEMsSzs7Ozs7Ozs7Ozs7Ozs7d0xBRWpCQyxJLEdBQU87QUFDSEMsa0JBQU0sQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLEtBQWYsQ0FESDtBQUVIQyx5QkFBYSxDQUZWO0FBR0hDLDBCQUFjLENBSFg7QUFJSEMsd0JBQVk7QUFKVCxTLFFBT1BDLE8sR0FBVTtBQUNOQyxvQkFETSxvQkFDSUMsQ0FESixFQUNPO0FBQ1QscUJBQUtKLFlBQUwsR0FBb0JJLEVBQUVDLGFBQUYsQ0FBZ0JDLFVBQXBDO0FBQ0EscUJBQUtQLFdBQUwsR0FBbUJLLEVBQUVDLGFBQUYsQ0FBZ0JFLEVBQW5DO0FBQ0g7QUFKSyxTOzs7Ozs7Ozs7Ozs7O3VDQVFVLGVBQUtDLGFBQUwsRTs7O0FBQVpDLG1DOzs7QUFFSixxQ0FBS1IsVUFBTCxHQUFrQixDQUFDUSxJQUFJQyxXQUFKLEdBQWtCLEtBQUtaLElBQUwsQ0FBVWEsTUFBNUIsR0FBcUNoQixXQUF0QyxJQUFxRCxDQUF2RTtBQUNBLHFDQUFLSyxZQUFMLEdBQW9CUyxJQUFJQyxXQUFKLEdBQWtCLEtBQUtaLElBQUwsQ0FBVWEsTUFBNUIsR0FBcUMsS0FBS1osV0FBOUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFwQjJCLGVBQUthLEk7O2tCQUFuQmhCLEsiLCJmaWxlIjoibmF2YmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5cbiAgICBjb25zdCBzbGlkZXJXaWR0aCA9IDk2OyAvLyDpnIDopoHorr7nva5zbGlkZXLnmoTlrr3luqbvvIznlKjkuo7orqHnrpfkuK3pl7TkvY3nva5cblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvYXN0IGV4dGVuZHMgd2VweS5wYWdlIHtcblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgdGFiczogWyfpgInpobnkuIAnLCAn6YCJ6aG55LqMJywgJ+mAiemhueS4iSddLFxuICAgICAgICAgICAgYWN0aXZlSW5kZXg6IDEsXG4gICAgICAgICAgICBzbGlkZXJPZmZzZXQ6IDAsXG4gICAgICAgICAgICBzbGlkZXJMZWZ0OiAwXG4gICAgICAgIH07XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIHRhYkNsaWNrIChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zbGlkZXJPZmZzZXQgPSBlLmN1cnJlbnRUYXJnZXQub2Zmc2V0TGVmdDtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmlkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYXN5bmMgb25Mb2FkICgpIHtcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCB3ZXB5LmdldFN5c3RlbUluZm8oKTtcblxuICAgICAgICAgICAgdGhpcy5zbGlkZXJMZWZ0ID0gKHJlcy53aW5kb3dXaWR0aCAvIHRoaXMudGFicy5sZW5ndGggLSBzbGlkZXJXaWR0aCkgLyAyO1xuICAgICAgICAgICAgdGhpcy5zbGlkZXJPZmZzZXQgPSByZXMud2luZG93V2lkdGggLyB0aGlzLnRhYnMubGVuZ3RoICogdGhpcy5hY3RpdmVJbmRleDtcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==