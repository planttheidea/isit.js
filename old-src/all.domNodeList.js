// all version of domNodeList.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitDOMNodeList from "./domNodeList";

export default function isitAllDOMNodeList() {
    return all(isitDOMNodeList).apply(null, arraySlice.call(arguments));
}