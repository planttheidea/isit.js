

import isitString from "string";

export default function isitPalindrome(obj) {
    return isitString(obj) && obj === obj.split("").reverse().join("");
}