

import {toString} from "./utils";

export default function _isDate(obj) {
    return toString.call(obj) === "[object Date]";
}