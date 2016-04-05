// any version of ip.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitIp from "./ip";

export default function isitAnyIp() {
    return any(isitIp).apply(null, arraySlice.call(arguments));
}