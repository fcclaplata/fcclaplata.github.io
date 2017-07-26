"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Link = require("next/link");
const Head = require("next/head");
exports.default = ({ children, title = 'This is the default title' }) => (React.createElement("div", null,
    React.createElement(Head, null,
        React.createElement("title", null, title),
        React.createElement("meta", { charSet: 'utf-8' }),
        React.createElement("meta", { name: 'viewport', content: 'initial-scale=1.0, width=device-width' })),
    React.createElement("header", null,
        React.createElement("nav", null,
            React.createElement(Link, { href: '/' },
                React.createElement("a", null, "Home")),
            "|",
            React.createElement(Link, { href: '/about' },
                React.createElement("a", null, "About")),
            "|",
            React.createElement(Link, { href: '/contact' },
                React.createElement("a", null, "Contact")))),
    children,
    React.createElement("footer", null, "I`m here to stay")));
