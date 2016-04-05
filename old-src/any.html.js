// any version of html.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitHtml from "./html";

export default function isitAnyHtml() {
    return any(isitHtml).apply(null, arraySlice.call(arguments));
}