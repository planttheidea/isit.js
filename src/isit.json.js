

import {toString} from "./utils";

export default function isJson(obj) {
    return toString.call(obj) === "[object Object]";
}