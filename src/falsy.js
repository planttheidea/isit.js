// is obj a falsy value?
// NOTE: matches language, returns true for undefined, null, 0, and ""

import {not} from "./_interfaces";
import isitTruthy from "./truthy";

export default function isitFalsy(obj) {
    return not(isitTruthy)(obj);
};