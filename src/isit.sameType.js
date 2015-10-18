

import {toString} from "utils";
import isNaN from "isit.nan";

export default function isSameType(obj1, obj2) {
    if (isNaN(obj1) || isNaN(obj2)) {
        return isNaN(obj1) === isNaN(obj2);
    }

    return toString.call(obj1) === toString.call(obj2);
}