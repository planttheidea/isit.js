// all version of domNode.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitDOMNode from "./domNode";

export default function isitAllDOMNode() {
    return all(isitDOMNode).apply(null, arraySlice.call(arguments));
}