

import {all} from "helpers";
import isNumber from "isit.number";

export default function isWithin(obj, min, max) {
    return all(isNumber(obj, min, max)) && obj > min && obj < max;
}