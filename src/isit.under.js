

import {all} from "helpers";
import isNumber from "isit.number";

export default function isUnder(obj, max) {
    return all(isNumber(obj, max)) && obj < max;
}