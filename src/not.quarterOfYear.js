// not version of quarterOfYear.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitQuarterOfYear from "./quarterOfYear";

export default function isitNotQuarterOfYear() {
    return not(isitQuarterOfYear).apply(null, arraySlice.call(arguments));
}