// is obj a string and is camelCase?

import {not} from "./helpers";
import isitString from "./string";

export default function isitStartCase(obj) {
    if (not(isitString)(obj)) {
        return false;
    }

    return obj === obj.replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}