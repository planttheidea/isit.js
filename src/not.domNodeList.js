// not version of domNodeList.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitDOMNodeList from "./domNodeList";

export default function isitNotDOMNodeList() {
    return not(isitDOMNodeList).apply(null, arraySlice.call(arguments));
}