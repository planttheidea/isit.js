// is obj1 and obj2 the same type?

import {all} from "./_interfaces";
import {toString} from "./_utils";
import isitNaN from "./nan.js";

export default function isitSameType(obj1, obj2) {
    if (all(isitNaN)(obj1, obj2)) {
        return isitNaN(obj1) === isitNaN(obj2);
    }

    return toString.call(obj1) === toString.call(obj2);
}