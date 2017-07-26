"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Link = require("next/dist/lib/link.js");
var Head = require("next/dist/lib/head.js");
exports.default = function (_ref) {
    var children = _ref.children,
        _ref$title = _ref.title,
        title = _ref$title === undefined ? 'This is the default title' : _ref$title;
    return React.createElement("div", null, React.createElement(Head, null, React.createElement("title", null, title), React.createElement("meta", { charSet: 'utf-8' }), React.createElement("meta", { name: 'viewport', content: 'initial-scale=1.0, width=device-width' })), React.createElement("header", null, React.createElement("nav", null, React.createElement(Link, { href: '/' }, React.createElement("a", null, "Home")), "|", React.createElement(Link, { href: '/about' }, React.createElement("a", null, "About")), "|", React.createElement(Link, { href: '/contact' }, React.createElement("a", null, "Contact")))), children, React.createElement("footer", null, "I`m here to stay"));
};