

import {not} from "helpers";
import isExisty from "isit.existy";
import isNaN from "isit.nan";

export default function isTruthy(obj) {
    return isExisty(obj) && obj !== false && not(isNaN(obj)) && value !== "" && value !== 0;
};