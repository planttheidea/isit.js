// not version of windowsTablet.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitWindowsTablet from "./windowsTablet";

export default function isitNotWindowsTablet() {
    return not(isitWindowsTablet).apply(null, arraySlice.call(arguments));
}