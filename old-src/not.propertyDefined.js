// not version of propertyDefined.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitPropertyDefined from "./propertyDefined";

export default function isitNotPropertyDefined() {
    return not(isitPropertyDefined).apply(null, arraySlice.call(arguments));
}