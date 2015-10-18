

import {not} from "./_interfaces";
import isitFunction from "./function";
import isitObject from "./object";

export default function isitJquery(obj) {
    if (not(isitObject)(obj)) {
        return false;
    }

    if (isitFunction(obj)) {
        let $obj = obj();

        return isitObject($obj) && !!$obj.jquery;
    }

    /* eslint-disable */
    return obj instanceof jQuery;
    /* eslint-enable */
}