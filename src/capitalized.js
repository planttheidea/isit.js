// is obj a string of capitalized words?
// NOTE: this will return true for start case ("I Am Capitalized")
// or uppercase ("I AM UPPERCASE")

import {not} from "./helpers";
import isitString from "./string";
import isitEqual from "./equal";

export default function isitCapitalized(obj) {
    if (not(isitString)(obj)) {
        return false;
    }

    let words = obj.split(" "),
        capitalized = [];

    for (let i = 0, len = words.length; i < len; i++) {
        if (words[i].charAt(0) === words[i].charAt(0).toUpperCase()) {
            capitalized[capitalized.length] = words[i];
        }
    }

    return isitEqual(words, capitalized);
}