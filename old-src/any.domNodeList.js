// any version of domNodeList.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitDOMNodeList from "./domNodeList";

export default function isitAnyDOMNodeList() {
    return any(isitDOMNodeList).apply(null, arraySlice.call(arguments));
}