

import {hasOwnProperty} from "helpers";

import _isNumber from "number";
import _isObject from "object";

export default function _isPropertyCount(obj, count) {
    if (!_isObject(obj) || !_isNumber(count)) {
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