

import {all} from "helpers";
import isNumber from "isit.number";

export default function isAbove(obj, min) {
    return all(isNumber(obj, min)) && obj > min;
}