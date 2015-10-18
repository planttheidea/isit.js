// is obj1 and obj2 equal?
// NOTE: for arrays and objects, will check deeply via recursive calls

import {
    all,
    not
} from "./helpers";

import isitArray from "./array";
import isitBoolean from "./boolean";
import isitNumber from "./number";
import isitObject from "./object";
import isitRegExp from "./regexp";
import isitSameType from "./sameType";
import isitString from "./string";

export default function isitEqual(obj1, obj2) {
    if (not(isitSameType)(obj1, obj2)) {
        return false;
    }

    if (all(isitNumber)(obj1, obj2)) {
        return obj1 === obj2 && 1 / obj1 === 1 / obj2;
    }

    if (all(isitString)(obj1, obj2) || all(isitRegExp)(obj1, obj2)) {
        return "" + obj1 === "" + obj2;
    }

    if (all(isitBoolean)(obj1, obj2)) {
        return obj1 === obj2;
    }

    if (all(isitArray)(obj1, obj2)) {
        if (obj1.length !== obj2.length) {
            return false;
        }

        for (let i = 0, len = obj1.length; i < len; i++) {
            if (not(isitSameType)(obj1, obj2)) {
                return false;
            }

            if (all(isitArray)(obj1[i], obj2[i]) || all(isitObject)(obj1[i], obj2[i])) {
                return isitEqual(obj1[i], obj2[i]);
            } else if(obj1[i] !== obj2[i]) {
                return false;
            }
        }

        return true;
    }

    if (all(isitObject)(obj1, obj2)) {
        let obj1Keys = Object.keys(obj1),
            obj2Keys = Object.keys(obj2);

        if (!isitEqual(obj1Keys, obj2Keys)) {
            return false;
        }

        for (let i = 0, len = obj1Keys.length; i < len; i++) {
            let key = obj1Keys[i],
                index = obj2Keys.indexOf(key);

            if (index === -1) {
                return false;
            }

            if (all(isitArray)(obj1[key], obj2[key]) || all(isitObject)(obj1[key], obj2[key])) {
                return isitEqual(obj1[key], obj2[key]);
            } else if(obj1[key] !== obj2[key]) {
                return false;
            }

            obj2Keys.splice(index, 1);
        }

        return obj2Keys.length === 0;
    }

    return false;
}