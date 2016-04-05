// is obj an error value?

import {toString} from "./_utils";

export default function isitError(obj) {
    return toString.call(obj) === "[object Error]";
}