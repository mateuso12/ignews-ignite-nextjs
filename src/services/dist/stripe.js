"use strict";
exports.__esModule = true;
exports.stripe = void 0;
var stripe_1 = require("stripe");
exports.stripe = new stripe_1["default"](process.env.STRIPE_API_KEY, {
    apiVersion: '2020-08-27',
    appInfo: {
        name: 'Ignews',
        version: '0.1.0'
    }
});
