// not version of linux.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitLinux from "./linux";

export default function isitNotLinux() {
    return not(isitLinux).apply(null, arraySlice.call(arguments));
}