// is obj a finite value?

import {not} from "./_interfaces";
import isitNaN from "./nan.js";

export default function isitFinite(obj) {
    return obj !== Infinity && obj !== -Infinity && not(isitNaN)(obj);
};;