// all version of palindrome.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitPalindrome from "./palindrome";

export default function isitAllPalindrome() {
    return all(isitPalindrome).apply(null, arraySlice.call(arguments));
}