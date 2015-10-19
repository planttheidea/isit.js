// any version of domNode.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitDOMNode from "./domNode";

export default function isitAnyDOMNode() {
    return any(isitDOMNode).apply(null, arraySlice.call(arguments));
}