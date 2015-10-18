

import {toString} from "./utils";

export default function isDate(obj) {
    return toString.call(obj) === "[object Date]";
}