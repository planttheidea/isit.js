

import {not} from "helpers";
import isitNaN from "nan.js";

export default function isitFinite(obj) {
    return obj !== Infinity && obj !== -Infinity && not(isitNaN)(obj);
};;