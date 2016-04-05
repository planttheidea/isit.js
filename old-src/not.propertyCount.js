// not version of propertyCount.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitPropertyCount from "./propertyCount";

export default function isitNotPropertyCount() {
    return not(isitPropertyCount).apply(null, arraySlice.call(arguments));
}