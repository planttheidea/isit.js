// navigator info from browser, captured once

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _browser = require("./browser");

var _browser2 = _interopRequireDefault(_browser);

var navigatorInfo = {};

if ((0, _browser2["default"])()) {
    navigatorInfo = {
        appVersion: "navigator" in window && "appVersion" in navigator && navigator.appVersion.toLowerCase() || "",
        userAgent: "navigator" in window && "userAgent" in navigator && navigator.userAgent.toLowerCase() || "",
        vendor: "navigator" in window && "vendor" in navigator && navigator.vendor.toLowerCase() || ""
    };
}

exports["default"] = navigatorInfo;
module.exports = exports["default"];