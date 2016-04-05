// not version of hexColor.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitHexColor from "./hexColor";

export default function isitNotHexColor() {
    return not(isitHexColor).apply(null, arraySlice.call(arguments));
}