// is obj a JSON value?

import {toString} from "./_utils";

export default function isitJSON(obj) {
    return toString.call(obj) === "[object Object]";
}