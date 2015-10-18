// is the environment a browser?

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitBrowser;

function isitBrowser() {
    return typeof window !== "undefined";
}

module.exports = exports["default"];