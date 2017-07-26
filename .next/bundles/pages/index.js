
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(546);


/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(11);
var components_1 = __webpack_require__(547);
exports.default = function () {
    return React.createElement(components_1.Layout, null, React.createElement("div", null, "Hello World."));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/matias/Projects/fcc/fcclaplata/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/matias/Projects/fcc/fcclaplata/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(70)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Layout_1 = __webpack_require__(548);
exports.Layout = Layout_1.Layout;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/matias/Projects/fcc/fcclaplata/components/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/matias/Projects/fcc/fcclaplata/components/index.js"); } } })();

/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(11);
var Link = __webpack_require__(549);
var Head = __webpack_require__(226);
exports.default = function (_ref) {
    var children = _ref.children,
        _ref$title = _ref.title,
        title = _ref$title === undefined ? 'This is the default title' : _ref$title;
    return React.createElement("div", null, React.createElement(Head, null, React.createElement("title", null, title), React.createElement("meta", { charSet: 'utf-8' }), React.createElement("meta", { name: 'viewport', content: 'initial-scale=1.0, width=device-width' })), React.createElement("header", null, React.createElement("nav", null, React.createElement(Link, { href: '/' }, React.createElement("a", null, "Home")), "|", React.createElement(Link, { href: '/about' }, React.createElement("a", null, "About")), "|", React.createElement(Link, { href: '/contact' }, React.createElement("a", null, "Contact")))), children, React.createElement("footer", null, "I`m here to stay"));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/matias/Projects/fcc/fcclaplata/components/Layout/Layout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/matias/Projects/fcc/fcclaplata/components/Layout/Layout.js"); } } })();

/***/ })

},[545]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzPzQ2OWM1MDUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbmRleC5qcz80NjljNTA1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC5qcz80NjljNTA1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5jb25zdCBjb21wb25lbnRzXzEgPSByZXF1aXJlKFwiLi4vY29tcG9uZW50c1wiKTtcbmV4cG9ydHMuZGVmYXVsdCA9ICgpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KGNvbXBvbmVudHNfMS5MYXlvdXQsIG51bGwsXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCBcIkhlbGxvIFdvcmxkLlwiKSkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBMYXlvdXRfMSA9IHJlcXVpcmUoXCIuL0xheW91dC9MYXlvdXRcIik7XG5leHBvcnRzLkxheW91dCA9IExheW91dF8xLkxheW91dDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvaW5kZXguanMiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuY29uc3QgTGluayA9IHJlcXVpcmUoXCJuZXh0L2xpbmtcIik7XG5jb25zdCBIZWFkID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTtcbmV4cG9ydHMuZGVmYXVsdCA9ICh7IGNoaWxkcmVuLCB0aXRsZSA9ICdUaGlzIGlzIHRoZSBkZWZhdWx0IHRpdGxlJyB9KSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZCwgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRpdGxlXCIsIG51bGwsIHRpdGxlKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwgeyBjaGFyU2V0OiAndXRmLTgnIH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7IG5hbWU6ICd2aWV3cG9ydCcsIGNvbnRlbnQ6ICdpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoJyB9KSksXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImhlYWRlclwiLCBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibmF2XCIsIG51bGwsXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHsgaHJlZjogJy8nIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgbnVsbCwgXCJIb21lXCIpKSxcbiAgICAgICAgICAgIFwifFwiLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7IGhyZWY6ICcvYWJvdXQnIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgbnVsbCwgXCJBYm91dFwiKSksXG4gICAgICAgICAgICBcInxcIixcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywgeyBocmVmOiAnL2NvbnRhY3QnIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgbnVsbCwgXCJDb250YWN0XCIpKSkpLFxuICAgIGNoaWxkcmVuLFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIiwgbnVsbCwgXCJJYG0gaGVyZSB0byBzdGF5XCIpKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0xheW91dC9MYXlvdXQuanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        