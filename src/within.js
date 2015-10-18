// are obj, min, and max all numbers and is obj greater than min and less than max?

import {all} from "./_interfaces";
import isitNumber from "./number";

export default function isitWithin(obj, min, max) {
    return all(isitNumber)(obj, min, max) && obj > min && obj < max;
}