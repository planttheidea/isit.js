// is number obj greater than the number min?

import {all} from "./_interfaces";
import isitNumber from "./number";

export default function isitAbove(obj, min) {
    return all(isitNumber)(obj, min) && obj > min;
}