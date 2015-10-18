

import {toString} from "./utils";

export default function _isFunction(obj) {
    return toString.call(obj) === "[object Function]" || typeof obj === "function";
}