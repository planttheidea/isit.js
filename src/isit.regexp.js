

import {toString} from "utils";

export default function isRegExp(obj) {
    return toString.call(obj) === "[object RegExp]";
}