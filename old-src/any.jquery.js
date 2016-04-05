// any version of jquery.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitJquery from "./jquery";

export default function isitAnyJquery() {
    return any(isitJquery).apply(null, arraySlice.call(arguments));
}