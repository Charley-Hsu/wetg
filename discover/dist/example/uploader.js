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

var Uploader = function (_wepy$page) {
    _inherits(Uploader, _wepy$page);

    function Uploader() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Uploader);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Uploader.__proto__ || Object.getPrototypeOf(Uploader)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            files: []
        }, _this.methods = {
            chooseImage: function chooseImage(e) {
                var _this2 = this;

                return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                    var res;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.next = 2;
                                    return _wepy2.default.chooseImage({
                                        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                                        sourceType: ['album', 'camera'] // 可以指定来源是相册还是相机，默认二者都有
                                    });

                                case 2:
                                    res = _context.sent;

                                    _this2.files = _this2.files.concat(res.tempFilePaths);
                                    _this2.$apply();

                                case 5:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, _this2);
                }))();
            },
            previewImage: function previewImage(e) {
                _wepy2.default.previewImage({
                    current: e.currentTarget.id, // 当前显示图片的http链接
                    urls: this.data.files // 需要预览的图片http链接列表
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Uploader;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Uploader , 'example/uploader'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwbG9hZGVyLmpzIl0sIm5hbWVzIjpbIlVwbG9hZGVyIiwiZGF0YSIsImZpbGVzIiwibWV0aG9kcyIsImNob29zZUltYWdlIiwiZSIsInNpemVUeXBlIiwic291cmNlVHlwZSIsInJlcyIsImNvbmNhdCIsInRlbXBGaWxlUGF0aHMiLCIkYXBwbHkiLCJwcmV2aWV3SW1hZ2UiLCJjdXJyZW50IiwiY3VycmVudFRhcmdldCIsImlkIiwidXJscyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFE7Ozs7Ozs7Ozs7Ozs7OzhMQUVqQkMsSSxHQUFPO0FBQ0hDLG1CQUFPO0FBREosUyxRQUlQQyxPLEdBQVU7QUFDQUMsdUJBREEsdUJBQ2FDLENBRGIsRUFDZ0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJDQUNGLGVBQUtELFdBQUwsQ0FBaUI7QUFDN0JFLGtEQUFVLENBQUMsVUFBRCxFQUFhLFlBQWIsQ0FEbUIsRUFDUztBQUN0Q0Msb0RBQVksQ0FBQyxPQUFELEVBQVUsUUFBVixDQUZpQixDQUVHO0FBRkgscUNBQWpCLENBREU7O0FBQUE7QUFDZEMsdUNBRGM7O0FBS2xCLDJDQUFLTixLQUFMLEdBQWEsT0FBS0EsS0FBTCxDQUFXTyxNQUFYLENBQWtCRCxJQUFJRSxhQUF0QixDQUFiO0FBQ0EsMkNBQUtDLE1BQUw7O0FBTmtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT3JCLGFBUks7QUFTTkMsd0JBVE0sd0JBU1FQLENBVFIsRUFTVztBQUNiLCtCQUFLTyxZQUFMLENBQWtCO0FBQ2RDLDZCQUFTUixFQUFFUyxhQUFGLENBQWdCQyxFQURYLEVBQ2U7QUFDN0JDLDBCQUFNLEtBQUtmLElBQUwsQ0FBVUMsS0FGRixDQUVRO0FBRlIsaUJBQWxCO0FBSUg7QUFkSyxTOzs7O0VBTndCLGVBQUtlLEk7O2tCQUF0QmpCLFEiLCJmaWxlIjoidXBsb2FkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFVwbG9hZGVyIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuXHJcbiAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICAgZmlsZXM6IFtdXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbWV0aG9kcyA9IHtcclxuICAgICAgICAgICAgYXN5bmMgY2hvb3NlSW1hZ2UgKGUpIHtcclxuICAgICAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCB3ZXB5LmNob29zZUltYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICBzaXplVHlwZTogWydvcmlnaW5hbCcsICdjb21wcmVzc2VkJ10sIC8vIOWPr+S7peaMh+WumuaYr+WOn+Wbvui/mOaYr+WOi+e8qeWbvu+8jOm7mOiupOS6jOiAhemDveaciVxyXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10gLy8g5Y+v5Lul5oyH5a6a5p2l5rqQ5piv55u45YaM6L+Y5piv55u45py677yM6buY6K6k5LqM6ICF6YO95pyJXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsZXMgPSB0aGlzLmZpbGVzLmNvbmNhdChyZXMudGVtcEZpbGVQYXRocyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcmV2aWV3SW1hZ2UgKGUpIHtcclxuICAgICAgICAgICAgICAgIHdlcHkucHJldmlld0ltYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50OiBlLmN1cnJlbnRUYXJnZXQuaWQsIC8vIOW9k+WJjeaYvuekuuWbvueJh+eahGh0dHDpk77mjqVcclxuICAgICAgICAgICAgICAgICAgICB1cmxzOiB0aGlzLmRhdGEuZmlsZXMgLy8g6ZyA6KaB6aKE6KeI55qE5Zu+54mHaHR0cOmTvuaOpeWIl+ihqFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiJdfQ==