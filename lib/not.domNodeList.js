// not version of domNodeList.js

"use strict";

exports.__esModule = true;
exports["default"] = isitNotDOMNodeList;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _domNodeList = require("./domNodeList");

var _domNodeList2 = _interopRequireDefault(_domNodeList);

function isitNotDOMNodeList() {
    return _interfaces.not(_domNodeList2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];