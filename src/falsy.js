// is obj a falsy value?
// NOTE: matches language, returns true for undefined, null, 0, and ""

import {not} from "helpers";
import isitTruthy from "truthy";

export default function isitFalsy(obj) {
    return not(isitTruthy)(obj);
};