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

var Index = function (_wepy$page) {
    _inherits(Index, _wepy$page);

    function Index() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Index);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            list: [{
                id: 'form',
                name: '表单',
                open: false,
                pages: ['button', 'list', 'input', 'slider', 'uploader']
            }, {
                id: 'widget',
                name: '基础组件',
                open: false,
                pages: ['article', 'badge', 'flex', 'footer', 'gallery', 'grid', 'icons', 'loadmore', 'panel', 'preview', 'progress']
            }, {
                id: 'feedback',
                name: '操作反馈',
                open: false,
                pages: ['actionsheet', 'dialog', 'msg', 'picker', 'toast']
            }, {
                id: 'nav',
                name: '导航相关',
                open: false,
                pages: ['navbar', 'tabbar']
            }, {
                id: 'search',
                name: '搜索相关',
                open: false,
                pages: ['searchbar']
            }]
        }, _this.methods = {
            toggle: function toggle(id) {
                this.list.forEach(function (v) {
                    return v.open = v.id === id ? !v.open : false;
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'example/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiZGF0YSIsImxpc3QiLCJpZCIsIm5hbWUiLCJvcGVuIiwicGFnZXMiLCJtZXRob2RzIiwidG9nZ2xlIiwiZm9yRWFjaCIsInYiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0k7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBRWpCQyxJLEdBQU87QUFDSEMsa0JBQU0sQ0FDRjtBQUNJQyxvQkFBSSxNQURSO0FBRUlDLHNCQUFNLElBRlY7QUFHSUMsc0JBQU0sS0FIVjtBQUlJQyx1QkFBTyxDQUFDLFFBQUQsRUFBVyxNQUFYLEVBQW1CLE9BQW5CLEVBQTRCLFFBQTVCLEVBQXNDLFVBQXRDO0FBSlgsYUFERSxFQU9GO0FBQ0lILG9CQUFJLFFBRFI7QUFFSUMsc0JBQU0sTUFGVjtBQUdJQyxzQkFBTSxLQUhWO0FBSUlDLHVCQUFPLENBQUMsU0FBRCxFQUFZLE9BQVosRUFBcUIsTUFBckIsRUFBNkIsUUFBN0IsRUFBdUMsU0FBdkMsRUFBa0QsTUFBbEQsRUFBMEQsT0FBMUQsRUFBbUUsVUFBbkUsRUFBK0UsT0FBL0UsRUFBd0YsU0FBeEYsRUFBbUcsVUFBbkc7QUFKWCxhQVBFLEVBYUY7QUFDSUgsb0JBQUksVUFEUjtBQUVJQyxzQkFBTSxNQUZWO0FBR0lDLHNCQUFNLEtBSFY7QUFJSUMsdUJBQU8sQ0FBQyxhQUFELEVBQWdCLFFBQWhCLEVBQTBCLEtBQTFCLEVBQWlDLFFBQWpDLEVBQTJDLE9BQTNDO0FBSlgsYUFiRSxFQW1CRjtBQUNJSCxvQkFBSSxLQURSO0FBRUlDLHNCQUFNLE1BRlY7QUFHSUMsc0JBQU0sS0FIVjtBQUlJQyx1QkFBTyxDQUFDLFFBQUQsRUFBVyxRQUFYO0FBSlgsYUFuQkUsRUF5QkY7QUFDSUgsb0JBQUksUUFEUjtBQUVJQyxzQkFBTSxNQUZWO0FBR0lDLHNCQUFNLEtBSFY7QUFJSUMsdUJBQU8sQ0FBQyxXQUFEO0FBSlgsYUF6QkU7QUFESCxTLFFBbUNQQyxPLEdBQVU7QUFDTkMsa0JBRE0sa0JBQ0VMLEVBREYsRUFDTTtBQUNSLHFCQUFLRCxJQUFMLENBQVVPLE9BQVYsQ0FBa0I7QUFBQSwyQkFBS0MsRUFBRUwsSUFBRixHQUFVSyxFQUFFUCxFQUFGLEtBQVNBLEVBQVYsR0FBZ0IsQ0FBQ08sRUFBRUwsSUFBbkIsR0FBMEIsS0FBeEM7QUFBQSxpQkFBbEI7QUFDSDtBQUhLLFM7Ozs7RUFyQ3FCLGVBQUtNLEk7O2tCQUFuQlgsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBsaXN0OiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogJ2Zvcm0nLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAn6KGo5Y2VJyxcbiAgICAgICAgICAgICAgICAgICAgb3BlbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VzOiBbJ2J1dHRvbicsICdsaXN0JywgJ2lucHV0JywgJ3NsaWRlcicsICd1cGxvYWRlciddXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAnd2lkZ2V0JyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ+WfuuehgOe7hOS7ticsXG4gICAgICAgICAgICAgICAgICAgIG9wZW46IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBwYWdlczogWydhcnRpY2xlJywgJ2JhZGdlJywgJ2ZsZXgnLCAnZm9vdGVyJywgJ2dhbGxlcnknLCAnZ3JpZCcsICdpY29ucycsICdsb2FkbW9yZScsICdwYW5lbCcsICdwcmV2aWV3JywgJ3Byb2dyZXNzJ11cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdmZWVkYmFjaycsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICfmk43kvZzlj43ppognLFxuICAgICAgICAgICAgICAgICAgICBvcGVuOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgcGFnZXM6IFsnYWN0aW9uc2hlZXQnLCAnZGlhbG9nJywgJ21zZycsICdwaWNrZXInLCAndG9hc3QnXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogJ25hdicsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICflr7zoiKrnm7jlhbMnLFxuICAgICAgICAgICAgICAgICAgICBvcGVuOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgcGFnZXM6IFsnbmF2YmFyJywgJ3RhYmJhciddXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAnc2VhcmNoJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ+aQnOe0ouebuOWFsycsXG4gICAgICAgICAgICAgICAgICAgIG9wZW46IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBwYWdlczogWydzZWFyY2hiYXInXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgdG9nZ2xlIChpZCkge1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdC5mb3JFYWNoKHYgPT4gdi5vcGVuID0gKHYuaWQgPT09IGlkKSA/ICF2Lm9wZW4gOiBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuIl19