// is obj a date value?

import {toString} from "./utils";

export default function isitDate(obj) {
    return toString.call(obj) === "[object Date]";
}