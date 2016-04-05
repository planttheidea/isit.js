// is obj a RegExp value?

import {toString} from "./_utils";

export default function isitRegExp(obj) {
    return toString.call(obj) === "[object RegExp]";
}