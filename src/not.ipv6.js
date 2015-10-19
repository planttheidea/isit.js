// not version of ipv6.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitIpv6 from "./ipv6";

export default function isitNotIpv6() {
    return not(isitIpv6).apply(null, arraySlice.call(arguments));
}