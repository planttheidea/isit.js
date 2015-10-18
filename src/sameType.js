

import {all} from "helpers";
import {toString} from "utils";
import isitNaN from "nan.js";

export default function isitSameType(obj1, obj2) {
    if (all(isitNaN)(obj1, obj2)) {
        return isitNaN(obj1) === isitNaN(obj2);
    }

    return toString.call(obj1) === toString.call(obj2);
}