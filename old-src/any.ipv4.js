// any version of ipv4.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitIpv4 from "./ipv4";

export default function isitAnyIpv4() {
    return any(isitIpv4).apply(null, arraySlice.call(arguments));
}