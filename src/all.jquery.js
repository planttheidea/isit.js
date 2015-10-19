// all version of jquery.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitJquery from "./jquery";

export default function isitAllJquery() {
    return all(isitJquery).apply(null, arraySlice.call(arguments));
}