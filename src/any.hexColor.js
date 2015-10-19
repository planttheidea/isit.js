// any version of hexColor.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitHexColor from "./hexColor";

export default function isitAnyHexColor() {
    return any(isitHexColor).apply(null, arraySlice.call(arguments));
}