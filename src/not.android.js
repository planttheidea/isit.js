// not version of android.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitAndroid from "./android";

export default function isitNotAndroid() {
    return not(isitAndroid).apply(null, arraySlice.call(arguments));
}