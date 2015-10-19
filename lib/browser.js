// is the environment a browser?

"use strict";

exports.__esModule = true;
exports["default"] = isitBrowser;

function isitBrowser() {
    return typeof window !== "undefined";
}

module.exports = exports["default"];