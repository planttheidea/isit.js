// navigator info from browser, captured once

"use strict";

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _browser = require("./browser");

var _browser2 = _interopRequireDefault(_browser);

var navigatorInfo = {};

if (_browser2["default"]()) {
    navigatorInfo = {
        appVersion: "navigator" in window && "appVersion" in navigator && navigator.appVersion.toLowerCase() || "",
        userAgent: "navigator" in window && "userAgent" in navigator && navigator.userAgent.toLowerCase() || "",
        vendor: "navigator" in window && "vendor" in navigator && navigator.vendor.toLowerCase() || ""
    };
}

exports["default"] = navigatorInfo;
module.exports = exports["default"];