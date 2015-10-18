

import {toString} from "utils";

export default function isitRegExp(obj) {
    return toString.call(obj) === "[object RegExp]";
}