// not version of tablet.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitTablet from "./tablet";

export default function isitNotTablet() {
    return not(isitTablet).apply(null, arraySlice.call(arguments));
}