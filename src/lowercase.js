// is obj a string and all lowercase?

import isitString from "./string";

export default function isitLowercase(obj) {
    return isitString(obj) && obj === obj.toLowerCase();
}