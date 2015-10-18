// is obj a JSON value?

import {toString} from "././utils";

export default function isitJSON(obj) {
    return toString.call(obj) === "[object Object]";
}