'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Actionsheet = function (_wepy$page) {
    _inherits(Actionsheet, _wepy$page);

    function Actionsheet() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Actionsheet);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Actionsheet.__proto__ || Object.getPrototypeOf(Actionsheet)).call.apply(_ref, [this].concat(args))), _this), _this.methods = {
            open: function open() {
                var _this2 = this;

                return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                    var res;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.next = 2;
                                    return _wepy2.default.showActionSheet({
                                        itemList: ['A', 'B', 'C']
                                    });

                                case 2:
                                    res = _context.sent;


                                    if (!res.cancel) {
                                        console.log(res.tapIndex);
                                    }

                                case 4:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, _this2);
                }))();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Actionsheet;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Actionsheet , 'example/actionsheet'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnNoZWV0LmpzIl0sIm5hbWVzIjpbIkFjdGlvbnNoZWV0IiwibWV0aG9kcyIsIm9wZW4iLCJzaG93QWN0aW9uU2hlZXQiLCJpdGVtTGlzdCIsInJlcyIsImNhbmNlbCIsImNvbnNvbGUiLCJsb2ciLCJ0YXBJbmRleCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFc7Ozs7Ozs7Ozs7Ozs7O29NQUVqQkMsTyxHQUFVO0FBQ0FDLGdCQURBLGtCQUNRO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQ0FDTSxlQUFLQyxlQUFMLENBQXFCO0FBQ2pDQyxrREFBVSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWDtBQUR1QixxQ0FBckIsQ0FETjs7QUFBQTtBQUNOQyx1Q0FETTs7O0FBS1Ysd0NBQUksQ0FBQ0EsSUFBSUMsTUFBVCxFQUFpQjtBQUNiQyxnREFBUUMsR0FBUixDQUFZSCxJQUFJSSxRQUFoQjtBQUNIOztBQVBTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUWI7QUFUSyxTOzs7O0VBRjJCLGVBQUtDLEk7O2tCQUF6QlYsVyIsImZpbGUiOiJhY3Rpb25zaGVldC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aW9uc2hlZXQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBhc3luYyBvcGVuICgpIHtcbiAgICAgICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgd2VweS5zaG93QWN0aW9uU2hlZXQoe1xuICAgICAgICAgICAgICAgICAgICBpdGVtTGlzdDogWydBJywgJ0InLCAnQyddXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXJlcy5jYW5jZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLnRhcEluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4iXX0=