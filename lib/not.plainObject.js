// not version of plainObject.js

"use strict";

exports.__esModule = true;
exports["default"] = isitNotPlainObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _plainObject = require("./plainObject");

var _plainObject2 = _interopRequireDefault(_plainObject);

function isitNotPlainObject() {
    return _interfaces.not(_plainObject2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];