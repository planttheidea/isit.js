// is obj a string value?

import {toString} from "./_utils";

export default function isitString(obj) {
    return toString.call(obj) === "[object String]";
}