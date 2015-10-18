

import {toString} from "./utils";

export default function isFunction(obj) {
    return toString.call(obj) === "[object Function]" || typeof obj === "function";
}