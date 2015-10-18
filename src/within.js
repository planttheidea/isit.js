

import {all} from "helpers";
import isitNumber from "number";

export default function isitWithin(obj, min, max) {
    return all(isitNumber)(obj, min, max) && obj > min && obj < max;
}