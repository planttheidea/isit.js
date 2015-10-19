// is the environment not a browser (meaning its likely server-side, or NodeJS)?

"use strict";

exports.__esModule = true;
exports["default"] = isitNode;

function isitNode() {
    return typeof window === "undefined";
}

module.exports = exports["default"];