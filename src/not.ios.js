// not version of ios.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitIOS from "./ios";

export default function isitNotIOS() {
    return not(isitIOS).apply(null, arraySlice.call(arguments));
}