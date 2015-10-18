

import {toString} from "utils";

export default function _isRegExp(obj) {
    return toString.call(obj) === "[object RegExp]";
}