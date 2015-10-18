

import {toString} from "utils";

export default function isString(obj) {
    return toString.call(obj) === "[object String]";
}