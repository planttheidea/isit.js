// is obj an array value?

import {toString} from "./_utils";

export default function isitArray(obj) {
    return toString.call(obj) === "[object Array]";
};