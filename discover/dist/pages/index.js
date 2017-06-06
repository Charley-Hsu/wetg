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
        console.log(userInfo);
        if (userInfo) {
          self.userInfo = userInfo;
        };
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4Iiwic2VsZiIsIiRwYXJlbnQiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwiY29uc29sZSIsImxvZyIsIm5vcm1hbFRpdGxlIiwic2V0VGltZW91dFRpdGxlIiwic2V0VGltZW91dCIsIiRhcHBseSIsInBhZ2UiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJwYW5lbCIsImNvdW50ZXIxIiwiY291bnRlcjIiLCJsaXN0IiwiZ3JvdXAiLCJ0b2FzdCIsIm1peGlucyIsImRhdGEiLCJteW51bSIsIm5pY2tOYW1lIiwiY291bnQiLCJuZXRyc3QiLCJncm91cExpc3QiLCJpZCIsIm5hbWUiLCJjaGlsZGlkIiwiY2hpbGRuYW1lIiwiY29tcHV0ZWQiLCJub3ciLCJEYXRlIiwibWV0aG9kcyIsInBsdXMiLCJwcm9taXNlIiwiJGludm9rZSIsInRpdGxlIiwiaW1nIiwidGhlbiIsImQiLCJ0YXAiLCIkbmFtZSIsImNvbW11bmljYXRlIiwiJGJyb2FkY2FzdCIsInJlcXVlc3QiLCJpIiwibWFwIiwidXJsIiwic3VjY2VzcyIsImNvdW50ZXJFbWl0IiwiJGV2ZW50IiwibGVuZ3RoIiwic291cmNlIiwiZXZlbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBeUhWO0FBQ1AsVUFBSUMsT0FBTyxJQUFYO0FBQ0EsV0FBS0MsT0FBTCxDQUFhQyxXQUFiLENBQXlCLFVBQVVDLFFBQVYsRUFBb0I7QUFDM0NDLGdCQUFRQyxHQUFSLENBQVlGLFFBQVo7QUFDQSxZQUFJQSxRQUFKLEVBQWM7QUFDWkgsZUFBS0csUUFBTCxHQUFnQkEsUUFBaEI7QUFDRDtBQUNESCxhQUFLTSxXQUFMLEdB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QU9FLE1BQVAsQ0FBY1gsS0FBdkU7QUFDRDtBQUpNLEc7O2tCQW5IVTlDLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbmltcG9ydCBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbGlzdCc7XHJcbmltcG9ydCBQYW5lbCBmcm9tICcuLi9jb21wb25lbnRzL3BhbmVsJztcclxuaW1wb3J0IENvdW50ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9jb3VudGVyJztcclxuaW1wb3J0IEdyb3VwIGZyb20gJy4uL2NvbXBvbmVudHMvZ3JvdXAnO1xyXG5pbXBvcnQgVG9hc3QgZnJvbSAnd2VweS1jb20tdG9hc3QnO1xyXG5pbXBvcnQgdGVzdE1peGluIGZyb20gJy4uL21peGlucy90ZXN0JztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICd0ZXN0J1xyXG4gIH07XHJcbiAkcHJvcHMgPSB7XCJncm91cFwiOntcInYtYmluZDpncm91cGxpc3Qub25jZVwiOntcImZvclwiOlwiZ3JvdXBMaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwia2V5XCIsXCJ2YWx1ZVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6aW5kZXhhLm9uY2VcIjp7XCJmb3JcIjpcImdyb3VwTGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImtleVwiLFwidmFsdWVcIjpcImluZGV4XCJ9fSxcImNvdW50ZXIxXCI6e1wiYmluZGluZGV4LWVtaXRcIjpcImNvdW50ZXJFbWl0XCJ9LFwiY291bnRlcjJcIjp7XCJ2LWJpbmQ6bnVtLnN5bmNcIjpcIm15bnVtXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgIHBhbmVsOiBQYW5lbCxcclxuICAgIGNvdW50ZXIxOiBDb3VudGVyLFxyXG4gICAgY291bnRlcjI6IENvdW50ZXIsXHJcbiAgICBsaXN0OiBMaXN0LFxyXG4gICAgZ3JvdXA6IEdyb3VwLFxyXG4gICAgdG9hc3Q6IFRvYXN0XHJcbiAgfTtcclxuICBtaXhpbnMgPSBbdGVzdE1peGluXTtcclxuICBkYXRhID0ge1xyXG4gICAgbXludW06IDIwLFxyXG4gICAgdXNlckluZm86IHtcclxuICAgICAgbmlja05hbWU6ICfliqDovb3kuK0uLi4nXHJcbiAgICB9LFxyXG4gICAgbm9ybWFsVGl0bGU6ICfljp/lp4vmoIfpopgnLFxyXG4gICAgc2V0VGltZW91dFRpdGxlOiAn5qCH6aKY5LiJ56eS5ZCO5Lya6KKr5L+u5pS5JyxcclxuICAgIGNvdW50OiAwLFxyXG4gICAgbmV0cnN0OiAnJyxcclxuICAgIGdyb3VwTGlzdDogW1xyXG4gICAge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgbmFtZTogJ+eCueWHu+aUueWPmCcsXHJcbiAgICAgIGxpc3Q6IFtcclxuICAgICAge1xyXG4gICAgICAgIGNoaWxkaWQ6ICcxLjEnLFxyXG4gICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcclxuICAgICAgfSwge1xyXG4gICAgICAgIGNoaWxkaWQ6ICcxLjInLFxyXG4gICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcclxuICAgICAgfSwge1xyXG4gICAgICAgIGNoaWxkaWQ6ICcxLjMnLFxyXG4gICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcclxuICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMixcclxuICAgICAgbmFtZTogJ+eCueWHu+aUueWPmCcsXHJcbiAgICAgIGxpc3Q6IFtcclxuICAgICAge1xyXG4gICAgICAgIGNoaWxkaWQ6ICcyLjEnLFxyXG4gICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcclxuICAgICAgfSwge1xyXG4gICAgICAgIGNoaWxkaWQ6ICcyLjInLFxyXG4gICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcclxuICAgICAgfSwge1xyXG4gICAgICAgIGNoaWxkaWQ6ICcyLjMnLFxyXG4gICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcclxuICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMyxcclxuICAgICAgbmFtZTogJ+eCueWHu+aUueWPmCcsXHJcbiAgICAgIGxpc3Q6IFtcclxuICAgICAge1xyXG4gICAgICAgIGNoaWxkaWQ6ICczLjEnLFxyXG4gICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcclxuICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgICBdXHJcbiAgfTtcclxuICBjb21wdXRlZCA9IHtcclxuICAgIG5vdyAoKSB7XHJcbiAgICAgIHJldHVybiArbmV3IERhdGUoKTtcclxuICAgIH1cclxuICB9O1xyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBwbHVzICgpIHtcclxuICAgICAgdGhpcy5teW51bSsrO1xyXG4gICAgfSxcclxuICAgIHRvYXN0ICgpIHtcclxuICAgICAgbGV0IHByb21pc2UgPSB0aGlzLiRpbnZva2UoJ3RvYXN0JywgJ3Nob3cnLCB7XHJcbiAgICAgICAgdGl0bGU6ICfoh6rlrprkuYnmoIfpopgnLFxyXG4gICAgICAgIGltZzogJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9raWlubGFtL3dldG9hc3QvbWFzdGVyL2ltYWdlcy9zdGFyLnBuZydcclxuICAgICAgfSk7XHJcbiAgICAgIHByb21pc2UudGhlbigoZCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0b2FzdCBkb25lJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHRhcCAoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdkbyBub3RpbmcgZnJvbSAnICsgdGhpcy4kbmFtZSk7XHJcbiAgICB9LFxyXG4gICAgY29tbXVuaWNhdGUgKCkge1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLiRuYW1lICsgJyB0YXAnKTtcclxuICAgICAgdGhpcy4kaW52b2tlKCdjb3VudGVyMicsICdtaW51cycsIDQ1LCA2KTtcclxuICAgICAgdGhpcy4kaW52b2tlKCdjb3VudGVyMScsICdwbHVzJywgNDUsIDYpO1xyXG4gICAgICB0aGlzLiRicm9hZGNhc3QoJ2luZGV4LWJyb2FkY2FzdCcsIDEsIDMsIDQpO1xyXG4gICAgfSxcclxuICAgIHJlcXVlc3QgKCkge1xyXG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgIGxldCBpID0gMTA7XHJcbiAgICAgIGxldCBtYXAgPSBbJ01BPT0nLCAnTVFvPScsICdNZz09JywgJ013PT0nLCAnTkE9PScsICdOUT09JywgJ05nPT0nLCAnTnc9PScsICdPQT09JywgJ09RPT0nXTtcclxuICAgICAgd2hpbGUgKGktLSkge1xyXG4gICAgICAgIHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5tYWRjb2Rlci5jbi90ZXN0cy9zbGVlcC5waHA/dGltZT0xJnQ9Y3NzJmM9JyArIG1hcFtpXSArICcmaT0nICsgaSxcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkKSB7XHJcbiAgICAgICAgICAgIHNlbGYubmV0cnN0ICs9IGQuZGF0YSArICcuJztcclxuICAgICAgICAgICAgc2VsZi4kYXBwbHkoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBjb3VudGVyRW1pdCAoLi4uYXJncykge1xyXG4gICAgICBsZXQgJGV2ZW50ID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdO1xyXG4gICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLiRuYW1lfSByZWNlaXZlICR7JGV2ZW50Lm5hbWV9IGZyb20gJHskZXZlbnQuc291cmNlLiRuYW1lfWApO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgZXZlbnRzID0ge1xyXG4gICAgJ2luZGV4LWVtaXQnOiAoLi4uYXJncykgPT4ge1xyXG4gICAgICBsZXQgJGV2ZW50ID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdO1xyXG4gICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLiRuYW1lfSByZWNlaXZlICR7JGV2ZW50Lm5hbWV9IGZyb20gJHskZXZlbnQuc291cmNlLiRuYW1lfWApO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgb25Mb2FkKCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgdGhpcy4kcGFyZW50LmdldFVzZXJJbmZvKGZ1bmN0aW9uICh1c2VySW5mbykge1xyXG4gICAgICBjb25zb2xlLmxvZyh1c2VySW5mbyk7XHJcbiAgICAgIGlmICh1c2VySW5mbykge1xyXG4gICAgICAgIHNlbGYudXNlckluZm8gPSB1c2VySW5mbztcclxuICAgICAgfTtcclxuICAgICAgc2VsZi5ub3JtYWxUaXRsZSA9ICfmoIfpopjlt7Looqvkv67mlLknO1xyXG4gICAgICBzZWxmLnNldFRpbWVvdXRUaXRsZSA9ICfmoIfpopjkuInnp5LlkI7kvJrooqvkv67mlLknO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBzZWxmLnNldFRpbWVvdXRUaXRsZSA9ICfliLDkuInnp5LkuoYnO1xyXG4gICAgICAgIHNlbGYuJGFwcGx5KClcclxuICAgICAgfSwgMzAwMCk7XHJcbiAgICAgIHNlbGYuJGFwcGx5KCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG59XHJcbiJdfQ==