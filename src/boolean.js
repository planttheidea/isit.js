// is obj a boolean value?

import {toString} from "./_utils";

export default function isitBoolean(obj) {
    return obj === true || obj === false || toString.call(obj) === "[object Boolean]";
}