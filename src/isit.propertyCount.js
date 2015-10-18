

import {hasOwnProperty} from "helpers";

import isNumber from "isit.number";
import isObject from "isit.object";

export default function isPropertyCount(obj, count) {
    if (!isObject(obj) || !isNumber(count)) {
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