// not version of node.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitNode from "./node";

export default function isitNotNode() {
    return not(isitNode).apply(null, arraySlice.call(arguments));
}