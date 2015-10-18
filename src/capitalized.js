

import {
    all,
    not
} from "helpers";
import _isString from "string";
import _isTruthy from "truthy";

export default function _isCapitalized(obj) {
    if (not(_isString(obj))) {
        return false;
    }

    let words = obj.split(" "),
        capitalized = [];

    for (let i = 0, len = words.length; i < len; i++) {
        capitalized[i] = words[i][0] === words[i][0].toUpperCase();
    }

    return all(_isTruthy.apply(null, capitalized));
}