// not version of ip.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitIp from "./ip";

export default function isitNotIp() {
    return not(isitIp).apply(null, arraySlice.call(arguments));
}