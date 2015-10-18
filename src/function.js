// is obj a function?

import {toString} from "././utils";

export default function isitFunction(obj) {
    return toString.call(obj) === "[object Function]" || typeof obj === "function";
}