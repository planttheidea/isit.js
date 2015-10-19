// not version of windowsPhone.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitWindowsPhone from "./windowsPhone";

export default function isitNotWindowsPhone() {
    return not(isitWindowsPhone).apply(null, arraySlice.call(arguments));
}