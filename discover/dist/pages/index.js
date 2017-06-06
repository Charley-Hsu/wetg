'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2, _initialiseProps;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _list = require('./../components/list.js');

var _list2 = _interopRequireDefault(_list);

var _panel = require('./../components/panel.js');

var _panel2 = _interopRequireDefault(_panel);

var _counter = require('./../components/counter.js');

var _counter2 = _interopRequireDefault(_counter);

var _group = require('./../components/group.js');

var _group2 = _interopRequireDefault(_group);

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

var _test = require('./../mixins/test.js');

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_temp2 = _class = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      this.$parent.getUserInfo(function (userInfo) {
        if (userInfo) {
          self.userInfo = userInfo;
        }
        self.normalTitle = '标题已被修改';
        self.setTimeoutTitle = '标题三秒后会被修改';
        setTimeout(function () {
          self.setTimeoutTitle = '到三秒了';
          self.$apply();
        }, 3000);
        self.$apply();
      });
    }
  }]);

  return Index;
}(_wepy2.default.page), _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.config = {
    navigationBarTitleText: 'test'
  };
  this.$props = { "group": { "v-bind:grouplist.once": { "for": "groupList", "item": "item", "index": "index", "key": "key", "value": "index" }, "v-bind:indexa.once": { "for": "groupList", "item": "item", "index": "index", "key": "key", "value": "index" } }, "counter1": { "bindindex-emit": "counterEmit" }, "counter2": { "v-bind:num.sync": "mynum" } };
  this.$events = {};
  this.components = {
    panel: _panel2.default,
    counter1: _counter2.default,
    counter2: _counter2.default,
    list: _list2.default,
    group: _group2.default,
    toast: _wepyComToast2.default
  };
  this.mixins = [_test2.default];
  this.data = {
    mynum: 20,
    userInfo: {
      nickName: '加载中...'
    },
    normalTitle: '原始标题',
    setTimeoutTitle: '标题三秒后会被修改',
    count: 0,
    netrst: '',
    groupList: [{
      id: 1,
      name: '点击改变',
      list: [{
        childid: '1.1',
        childname: '子项，点我改变'
      }, {
        childid: '1.2',
        childname: '子项，点我改变'
      }, {
        childid: '1.3',
        childname: '子项，点我改变'
      }]
    }, {
      id: 2,
      name: '点击改变',
      list: [{
        childid: '2.1',
        childname: '子项，点我改变'
      }, {
        childid: '2.2',
        childname: '子项，点我改变'
      }, {
        childid: '2.3',
        childname: '子项，点我改变'
      }]
    }, {
      id: 3,
      name: '点击改变',
      list: [{
        childid: '3.1',
        childname: '子项，点我改变'
      }]
    }]
  };
  this.computed = {
    now: function now() {
      return +new Date();
    }
  };
  this.methods = {
    plus: function plus() {
      this.mynum++;
    },
    toast: function toast() {
      var promise = this.$invoke('toast', 'show', {
        title: '自定义标题',
        img: 'https://raw.githubusercontent.com/kiinlam/wetoast/master/images/star.png'
      });
      promise.then(function (d) {
        console.log('toast done');
      });
    },
    tap: function tap() {
      console.log('do noting from ' + this.$name);
    },
    communicate: function communicate() {
      console.log(this.$name + ' tap');
      this.$invoke('counter2', 'minus', 45, 6);
      this.$invoke('counter1', 'plus', 45, 6);
      this.$broadcast('index-broadcast', 1, 3, 4);
    },
    request: function request() {
      var self = this;
      var i = 10;
      var map = ['MA==', 'MQo=', 'Mg==', 'Mw==', 'NA==', 'NQ==', 'Ng==', 'Nw==', 'OA==', 'OQ=='];
      while (i--) {
        _wepy2.default.request({
          url: 'https://www.madcoder.cn/tests/sleep.php?time=1&t=css&c=' + map[i] + '&i=' + i,
          success: function success(d) {
            self.netrst += d.data + '.';
            self.$apply();
          }
        });
      };
    },
    counterEmit: function counterEmit() {
      var _ref2;

      var $event = (_ref2 = arguments.length - 1, arguments.length <= _ref2 ? undefined : arguments[_ref2]);
      console.log(this.$name + ' receive ' + $event.name + ' from ' + $event.source.$name);
    }
  };
  this.events = {
    'index-emit': function indexEmit() {
      var _ref3;

      var $event = (_ref3 = arguments.length - 1, arguments.length <= _ref3 ? undefined : arguments[_ref3]);
      console.log(_this2.$name + ' receive ' + $event.name + ' from ' + $event.source.$name);
    }
  };
}, _temp2);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4Iiwic2VsZiIsIiRwYXJlbnQiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwibm9ybWFsVGl0bGUiLCJzZXRUaW1lb3V0VGl0bGUiLCJzZXRUaW1lb3V0IiwiJGFwcGx5IiwicGFnZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInBhbmVsIiwiY291bnRlcjEiLCJjb3VudGVyMiIsImxpc3QiLCJncm91cCIsInRvYXN0IiwibWl4aW5zIiwiZGF0YSIsIm15bnVtIiwibmlja05hbWUiLCJjb3VudCIsIm5ldHJzdCIsImdyb3VwTGlzdCIsImlkIiwibmFtZSIsImNoaWxkaWQiLCJjaGlsZG5hbWUiLCJjb21wdXRlZCIsIm5vdyIsIkRhdGUiLCJtZXRob2RzIiwicGx1cyIsInByb21pc2UiLCIkaW52b2tlIiwidGl0bGUiLCJpbWciLCJ0aGVuIiwiZCIsImNvbnNvbGUiLCJsb2ciLCJ0YXAiLCIkbmFtZSIsImNvbW11bmljYXRlIiwiJGJyb2FkY2FzdCIsInJlcXVlc3QiLCJpIiwibWFwIiwidXJsIiwic3VjY2VzcyIsImNvdW50ZXJFbWl0IiwiJGV2ZW50IiwibGVuZ3RoIiwic291cmNlIiwiZXZlbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBOEhWO0FBQ1AsVUFBSUMsT0FBTyxJQUFYO0FBQ0EsV0FBS0MsT0FBTCxDQUFhQyxXQUFiLENBQXlCLFVBQVVDLFFBQVYsRUFBb0I7QUFDM0MsWUFBSUEsUUFBSixFQUFjO0FBQ1pILGVBQUtHLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0Q7QUFDREgsYUFBS0ksV0FBTCxHQUFtQixRQUFuQjtBQUNBSixhQUFLSyxlQUFMLEdB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VTlDLEs7QUE2SXBCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG5pbXBvcnQgTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2xpc3QnO1xyXG5pbXBvcnQgUGFuZWwgZnJvbSAnLi4vY29tcG9uZW50cy9wYW5lbCc7XHJcbmltcG9ydCBDb3VudGVyIGZyb20gJy4uL2NvbXBvbmVudHMvY291bnRlcic7XHJcbmltcG9ydCBHcm91cCBmcm9tICcuLi9jb21wb25lbnRzL2dyb3VwJztcclxuaW1wb3J0IFRvYXN0IGZyb20gJ3dlcHktY29tLXRvYXN0JztcclxuaW1wb3J0IHRlc3RNaXhpbiBmcm9tICcuLi9taXhpbnMvdGVzdCc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAndGVzdCdcclxuICB9XHJcbiAkcHJvcHMgPSB7XCJncm91cFwiOntcInYtYmluZDpncm91cGxpc3Qub25jZVwiOntcImZvclwiOlwiZ3JvdXBMaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwia2V5XCIsXCJ2YWx1ZVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6aW5kZXhhLm9uY2VcIjp7XCJmb3JcIjpcImdyb3VwTGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImtleVwiLFwidmFsdWVcIjpcImluZGV4XCJ9fSxcImNvdW50ZXIxXCI6e1wiYmluZGluZGV4LWVtaXRcIjpcImNvdW50ZXJFbWl0XCJ9LFwiY291bnRlcjJcIjp7XCJ2LWJpbmQ6bnVtLnN5bmNcIjpcIm15bnVtXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgIHBhbmVsOiBQYW5lbCxcclxuICAgIGNvdW50ZXIxOiBDb3VudGVyLFxyXG4gICAgY291bnRlcjI6IENvdW50ZXIsXHJcbiAgICBsaXN0OiBMaXN0LFxyXG4gICAgZ3JvdXA6IEdyb3VwLFxyXG4gICAgdG9hc3Q6IFRvYXN0XHJcbiAgfVxyXG5cclxuICBtaXhpbnMgPSBbdGVzdE1peGluXVxyXG5cclxuICBkYXRhID0ge1xyXG4gICAgbXludW06IDIwLFxyXG4gICAgdXNlckluZm86IHtcclxuICAgICAgbmlja05hbWU6ICfliqDovb3kuK0uLi4nXHJcbiAgICB9LFxyXG4gICAgbm9ybWFsVGl0bGU6ICfljp/lp4vmoIfpopgnLFxyXG4gICAgc2V0VGltZW91dFRpdGxlOiAn5qCH6aKY5LiJ56eS5ZCO5Lya6KKr5L+u5pS5JyxcclxuICAgIGNvdW50OiAwLFxyXG4gICAgbmV0cnN0OiAnJyxcclxuICAgIGdyb3VwTGlzdDogW1xyXG4gICAge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgbmFtZTogJ+eCueWHu+aUueWPmCcsXHJcbiAgICAgIGxpc3Q6IFtcclxuICAgICAge1xyXG4gICAgICAgIGNoaWxkaWQ6ICcxLjEnLFxyXG4gICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcclxuICAgICAgfSwge1xyXG4gICAgICAgIGNoaWxkaWQ6ICcxLjInLFxyXG4gICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcclxuICAgICAgfSwge1xyXG4gICAgICAgIGNoaWxkaWQ6ICcxLjMnLFxyXG4gICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcclxuICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMixcclxuICAgICAgbmFtZTogJ+eCueWHu+aUueWPmCcsXHJcbiAgICAgIGxpc3Q6IFtcclxuICAgICAge1xyXG4gICAgICAgIGNoaWxkaWQ6ICcyLjEnLFxyXG4gICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcclxuICAgICAgfSwge1xyXG4gICAgICAgIGNoaWxkaWQ6ICcyLjInLFxyXG4gICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcclxuICAgICAgfSwge1xyXG4gICAgICAgIGNoaWxkaWQ6ICcyLjMnLFxyXG4gICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcclxuICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMyxcclxuICAgICAgbmFtZTogJ+eCueWHu+aUueWPmCcsXHJcbiAgICAgIGxpc3Q6IFtcclxuICAgICAge1xyXG4gICAgICAgIGNoaWxkaWQ6ICczLjEnLFxyXG4gICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcclxuICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgICBdXHJcbiAgfVxyXG5cclxuICBjb21wdXRlZCA9IHtcclxuICAgIG5vdyAoKSB7XHJcbiAgICAgIHJldHVybiArbmV3IERhdGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBwbHVzICgpIHtcclxuICAgICAgdGhpcy5teW51bSsrO1xyXG4gICAgfSxcclxuICAgIHRvYXN0ICgpIHtcclxuICAgICAgbGV0IHByb21pc2UgPSB0aGlzLiRpbnZva2UoJ3RvYXN0JywgJ3Nob3cnLCB7XHJcbiAgICAgICAgdGl0bGU6ICfoh6rlrprkuYnmoIfpopgnLFxyXG4gICAgICAgIGltZzogJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9raWlubGFtL3dldG9hc3QvbWFzdGVyL2ltYWdlcy9zdGFyLnBuZydcclxuICAgICAgfSk7XHJcbiAgICAgIHByb21pc2UudGhlbigoZCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0b2FzdCBkb25lJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHRhcCAoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdkbyBub3RpbmcgZnJvbSAnICsgdGhpcy4kbmFtZSk7XHJcbiAgICB9LFxyXG4gICAgY29tbXVuaWNhdGUgKCkge1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLiRuYW1lICsgJyB0YXAnKTtcclxuICAgICAgdGhpcy4kaW52b2tlKCdjb3VudGVyMicsICdtaW51cycsIDQ1LCA2KTtcclxuICAgICAgdGhpcy4kaW52b2tlKCdjb3VudGVyMScsICdwbHVzJywgNDUsIDYpO1xyXG4gICAgICB0aGlzLiRicm9hZGNhc3QoJ2luZGV4LWJyb2FkY2FzdCcsIDEsIDMsIDQpO1xyXG4gICAgfSxcclxuICAgIHJlcXVlc3QgKCkge1xyXG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgIGxldCBpID0gMTA7XHJcbiAgICAgIGxldCBtYXAgPSBbJ01BPT0nLCAnTVFvPScsICdNZz09JywgJ013PT0nLCAnTkE9PScsICdOUT09JywgJ05nPT0nLCAnTnc9PScsICdPQT09JywgJ09RPT0nXTtcclxuICAgICAgd2hpbGUgKGktLSkge1xyXG4gICAgICAgIHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5tYWRjb2Rlci5jbi90ZXN0cy9zbGVlcC5waHA/dGltZT0xJnQ9Y3NzJmM9JyArIG1hcFtpXSArICcmaT0nICsgaSxcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkKSB7XHJcbiAgICAgICAgICAgIHNlbGYubmV0cnN0ICs9IGQuZGF0YSArICcuJztcclxuICAgICAgICAgICAgc2VsZi4kYXBwbHkoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBjb3VudGVyRW1pdCAoLi4uYXJncykge1xyXG4gICAgICBsZXQgJGV2ZW50ID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdO1xyXG4gICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLiRuYW1lfSByZWNlaXZlICR7JGV2ZW50Lm5hbWV9IGZyb20gJHskZXZlbnQuc291cmNlLiRuYW1lfWApO1xyXG4gICAgfVxyXG4gIH1cclxuICBldmVudHMgPSB7XHJcbiAgICAnaW5kZXgtZW1pdCc6ICguLi5hcmdzKSA9PiB7XHJcbiAgICAgIGxldCAkZXZlbnQgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XHJcbiAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuJG5hbWV9IHJlY2VpdmUgJHskZXZlbnQubmFtZX0gZnJvbSAkeyRldmVudC5zb3VyY2UuJG5hbWV9YCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkxvYWQoKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICB0aGlzLiRwYXJlbnQuZ2V0VXNlckluZm8oZnVuY3Rpb24gKHVzZXJJbmZvKSB7XHJcbiAgICAgIGlmICh1c2VySW5mbykge1xyXG4gICAgICAgIHNlbGYudXNlckluZm8gPSB1c2VySW5mbztcclxuICAgICAgfVxyXG4gICAgICBzZWxmLm5vcm1hbFRpdGxlID0gJ+agh+mimOW3suiiq+S/ruaUuSc7XHJcbiAgICAgIHNlbGYuc2V0VGltZW91dFRpdGxlID0gJ+agh+mimOS4ieenkuWQjuS8muiiq+S/ruaUuSc7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHNlbGYuc2V0VGltZW91dFRpdGxlID0gJ+WIsOS4ieenkuS6hic7XHJcbiAgICAgICAgc2VsZi4kYXBwbHkoKTtcclxuICAgICAgfSwgMzAwMCk7XHJcbiAgICAgIHNlbGYuJGFwcGx5KCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG59O1xyXG4iXX0=