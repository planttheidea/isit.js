

import {not} from "helpers";
import isitTruthy from "truthy";

export default function isitFalsy(obj) {
    return not(isitTruthy)(obj);
};