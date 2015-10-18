

import {
    all,
    not
} from "helpers";
import isString from "isit.string";
import isTruthy from "isit.truthy";

export default function isCapitalized(obj) {
    if (not(isString(obj))) {
        return false;
    }

    let words = obj.split(" "),
        capitalized = [];

    for (let i = 0, len = words.length; i < len; i++) {
        capitalized[i] = words[i][0] === words[i][0].toUpperCase();
    }

    return all(isTruthy.apply(null, capitalized));
}