

import {toString} from "utils";
import isitNaN from "nan";

export default function isitSameType(obj1, obj2) {
    if (isitNaN(obj1) || isitNaN(obj2)) {
        return isitNaN(obj1) === isitNaN(obj2);
    }

    return toString.call(obj1) === toString.call(obj2);
}