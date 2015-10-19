// any version of ipv6.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitIpv6 from "./ipv6";

export default function isitAnyIpv6() {
    return any(isitIpv6).apply(null, arraySlice.call(arguments));
}