// not version of jquery.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitJquery from "./jquery";

export default function isitNotJquery() {
    return not(isitJquery).apply(null, arraySlice.call(arguments));
}