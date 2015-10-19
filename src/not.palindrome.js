// not version of palindrome.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitPalindrome from "./palindrome";

export default function isitNotPalindrome() {
    return not(isitPalindrome).apply(null, arraySlice.call(arguments));
}