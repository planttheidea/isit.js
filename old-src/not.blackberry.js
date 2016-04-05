// not version of blackberry.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitBlackberry from "./blackberry";

export default function isitNotBlackberry() {
    return not(isitBlackberry).apply(null, arraySlice.call(blackberry));
}