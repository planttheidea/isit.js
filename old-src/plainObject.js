// is obj a plain object?

import {not} from "./_interfaces";
import isitFunction from "./function";
import isitNull from "./null";
import isitObject from "./object";

export default function isitPlainObject(obj) {
    if (isitNull(obj) || not(isitObject)(obj)) {
        return false;
    }

    if (isitFunction(Object.getPrototypeOf)) {
        let proto = Object.getPrototypeOf(obj);

        return proto === Object.prototype || isitNull(proto);
    }

    return not(isitFunction)(obj);
}