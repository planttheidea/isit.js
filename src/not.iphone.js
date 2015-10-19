// not version of iPhone.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitIphone from "./iphone";

export default function isitNotIphone() {
    return not(isitIphone).apply(null, arraySlice.call(arguments));
}