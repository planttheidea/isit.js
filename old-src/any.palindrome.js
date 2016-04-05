// any version of palindrome.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitPalindrome from "./palindrome";

export default function isitAnyPalindrome() {
    return any(isitPalindrome).apply(null, arraySlice.call(arguments));
}