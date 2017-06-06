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

var Dialog = function (_wepy$page) {
    _inherits(Dialog, _wepy$page);

    function Dialog() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Dialog);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call.apply(_ref, [this].concat(args))), _this), _this.methods = {
            openConfirm: function openConfirm() {
                var _this2 = this;

                return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                    var res;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.next = 2;
                                    return _wepy2.default.showModal({
                                        title: '弹窗标题',
                                        content: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
                                        confirmText: '主操作',
                                        cancelText: '辅助操作'
                                    });

                                case 2:
                                    res = _context.sent;


                                    console.log(res);
                                    if (res.confirm) {
                                        console.log('用户点击主操作');
                                    } else {
                                        console.log('用户点击辅助操作');
                                    }

                                case 5:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, _this2);
                }))();
            },
            openAlert: function openAlert() {
                var _this3 = this;

                return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
                    var res;
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    _context2.next = 2;
                                    return _wepy2.default.showModal({
                                        content: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
                                        showCancel: false
                                    });

                                case 2:
                                    res = _context2.sent;


                                    if (res.confirm) {
                                        console.log('用户点击确定');
                                    }

                                case 4:
                                case 'end':
                                    return _context2.stop();
                            }
                        }
                    }, _callee2, _this3);
                }))();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Dialog;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Dialog , 'example/dialog'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYWxvZy5qcyJdLCJuYW1lcyI6WyJEaWFsb2ciLCJtZXRob2RzIiwib3BlbkNvbmZpcm0iLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJjb25maXJtVGV4dCIsImNhbmNlbFRleHQiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiY29uZmlybSIsIm9wZW5BbGVydCIsInNob3dDYW5jZWwiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0k7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7OzswTEFFakJDLE8sR0FBVTtBQUNBQyx1QkFEQSx5QkFDZTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkNBQ0QsZUFBS0MsU0FBTCxDQUFlO0FBQzNCQywrQ0FBTyxNQURvQjtBQUUzQkMsaURBQVMsa0NBRmtCO0FBRzNCQyxxREFBYSxLQUhjO0FBSTNCQyxvREFBWTtBQUplLHFDQUFmLENBREM7O0FBQUE7QUFDYkMsdUNBRGE7OztBQVFqQkMsNENBQVFDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBLHdDQUFJQSxJQUFJRyxPQUFSLEVBQWlCO0FBQ2JGLGdEQUFRQyxHQUFSLENBQVksU0FBWjtBQUNILHFDQUZELE1BRU87QUFDSEQsZ0RBQVFDLEdBQVIsQ0FBWSxVQUFaO0FBQ0g7O0FBYmdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBY3BCLGFBZks7QUFnQkFFLHFCQWhCQSx1QkFnQmE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJDQUVDLGVBQUtULFNBQUwsQ0FBZTtBQUMzQkUsaURBQVMsa0NBRGtCO0FBRTNCUSxvREFBWTtBQUZlLHFDQUFmLENBRkQ7O0FBQUE7QUFFWEwsdUNBRlc7OztBQU9mLHdDQUFJQSxJQUFJRyxPQUFSLEVBQWlCO0FBQ2JGLGdEQUFRQyxHQUFSLENBQVksUUFBWjtBQUNIOztBQVRjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVWxCO0FBMUJLLFM7Ozs7RUFGc0IsZUFBS0ksSTs7a0JBQXBCZCxNIiwiZmlsZSI6ImRpYWxvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlhbG9nIGV4dGVuZHMgd2VweS5wYWdlIHtcblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgYXN5bmMgb3BlbkNvbmZpcm0gKCkge1xuICAgICAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5by556qX5qCH6aKYJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+W8ueeql+WGheWuue+8jOWRiuefpeW9k+WJjeeKtuaAgeOAgeS/oeaBr+WSjOino+WGs+aWueazle+8jOaPj+i/sOaWh+Wtl+WwvemHj+aOp+WItuWcqOS4ieihjOWGhScsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1UZXh0OiAn5Li75pON5L2cJyxcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsVGV4dDogJ+i+heWKqeaTjeS9nCdcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vkuLvmk43kvZwnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn55So5oi354K55Ye76L6F5Yqp5pON5L2cJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFzeW5jIG9wZW5BbGVydCAoKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAn5by556qX5YaF5a6577yM5ZGK55+l5b2T5YmN54q25oCB44CB5L+h5oGv5ZKM6Kej5Yaz5pa55rOV77yM5o+P6L+w5paH5a2X5bC96YeP5o6n5Yi25Zyo5LiJ6KGM5YaFJyxcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn55So5oi354K55Ye756Gu5a6aJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuIl19