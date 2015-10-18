

import {
    all,
    not
} from "helpers";
import isitString from "string";
import isitTruthy from "truthy";

export default function isitCapitalized(obj) {
    if (not(isitString(obj))) {
        return false;
    }

    let words = obj.split(" "),
        capitalized = [];

    for (let i = 0, len = words.length; i < len; i++) {
        capitalized[i] = words[i][0] === words[i][0].toUpperCase();
    }

    return all(isitTruthy.apply(null, capitalized));
}