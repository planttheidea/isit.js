// is obj a date value?

import {toString} from "./_utils";

export default function isitDate(obj) {
    return toString.call(obj) === "[object Date]";
}