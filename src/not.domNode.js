// not version of domNode.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitDOMNode from "./domNode";

export default function isitNotDOMNode() {
    return not(isitDOMNode).apply(null, arraySlice.call(arguments));
}