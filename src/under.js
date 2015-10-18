// are obj and max numbers, and is obj less than max?

import {all} from "./helpers";
import isitNumber from "./number";

export default function isitUnder(obj, max) {
    return all(isitNumber)(obj, max) && obj < max;
}