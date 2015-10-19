// is obj a jQuery object or jQuery itself?

"use strict";

exports.__esModule = true;
exports["default"] = isitJquery;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _function = require("./function");

var _function2 = _interopRequireDefault(_function);

var _object = require("./object");

var _object2 = _interopRequireDefault(_object);

function isitJquery(obj) {
    if (_interfaces.not(_object2["default"])(obj)) {
        return false;
    }

    if (_function2["default"](obj)) {
        var $obj = obj();

        return _object2["default"]($obj) && !!$obj.jquery;
    }

    /* eslint-disable */
    return obj instanceof jQuery;
    /* eslint-enable */
}

module.exports = exports["default"];