// not version of ipod.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitIpod from "./ipod";

export default function isitNotIpod() {
    return not(isitIpod).apply(null, arraySlice.call(arguments));
}