"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var Index_1 = require("../components/Header/Index");
var client_1 = require("next-auth/client");
require("../styles/global.scss");
function MyApp(_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    return (React.createElement(client_1.Provider, { session: pageProps.session },
        React.createElement(Index_1.Header, null),
        React.createElement(Component, __assign({}, pageProps))));
}
exports["default"] = MyApp;
