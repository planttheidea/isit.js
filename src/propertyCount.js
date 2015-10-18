// is obj an object value, and do the number of properties in that object match count

import {
    hasOwnProperty,
    not
} from "helpers";
import isitNumber from "number";
import isitObject from "object";

export default function isitPropertyCount(obj, count) {
    if (not(isitObject)(obj) || not(isitNumber)(count)) {
        return false;
    }

    if (Object.keys) {
        return Object.keys(obj).length === count;
    }

    let props = [],
        prop;

    for(prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
            props[props.length] = prop;
        }
    }

    return props.length === count;
}