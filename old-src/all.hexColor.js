// all version of hexColor.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitHexColor from "./hexColor";

export default function isitAllHexColor() {
    return all(isitHexColor).apply(null, arraySlice.call(arguments));
}