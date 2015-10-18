

import {toString} from "utils";

export default function _isString(obj) {
    return toString.call(obj) === "[object String]";
}