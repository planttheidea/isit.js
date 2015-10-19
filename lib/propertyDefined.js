// is obj an object and does prop exist as a key in it?

"use strict";

exports.__esModule = true;
exports["default"] = isitPropertyDefined;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _object = require("./object");

var _object2 = _interopRequireDefault(_object);

var _string = require("./string");

var _string2 = _interopRequireDefault(_string);

function isitPropertyDefined(obj, prop) {
    return _object2["default"](obj) && _string2["default"](prop) && prop in obj;
}

module.exports = exports["default"];