

import {toString} from "./utils";

export default function _isJSON(obj) {
    return toString.call(obj) === "[object Object]";
}