// not version of html.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitHtml from "./html";

export default function isitNotHtml() {
    return not(isitHtml).apply(null, arraySlice.call(arguments));
}