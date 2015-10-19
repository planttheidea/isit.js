// all version of html.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitHtml from "./html";

export default function isitAllHtml() {
    return all(isitHtml).apply(null, arraySlice.call(arguments));
}