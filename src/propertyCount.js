

import {hasOwnProperty} from "helpers";

import isitNumber from "number";
import isitObject from "object";

export default function isitPropertyCount(obj, count) {
    if (!isitObject(obj) || !isitNumber(count)) {
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