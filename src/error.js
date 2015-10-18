// is obj an error value?

import {toString} from "./utils";

export default function isitError(obj) {
    return toString.call(obj) === "[object Error]";
}