// is obj a string and is it all uppercase?

import isitString from "string";

export default function isitUppercase(obj) {
    return isitString(obj) && obj === obj.toUpperCase();
}