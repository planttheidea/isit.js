

import _isString from "string";

export default function _isPalindrome(obj) {
    return _isString(obj) && obj === obj.split("").reverse().join("");
}