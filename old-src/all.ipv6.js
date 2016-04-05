// all version of ipv6.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitIpv6 from "./ipv6";

export default function isitAllIpv6() {
    return all(isitIpv6).apply(null, arraySlice.call(arguments));
}