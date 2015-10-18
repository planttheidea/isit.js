// is obj a string and is camelCase?

import {not} from "./helpers";
import {toCamelCase} from "./utils";
import isitString from "./string";

export default function isitKebabCase(obj) {
    if (not(isitString)(obj)) {
        return false;
    }

    return obj === toCamelCase(obj).replace(/([A-Z])/g, ($1) => {
        return "-" + $1.toLowerCase();
    }).replace(/--/g, "-");
}