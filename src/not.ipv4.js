// not version of ipv4.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitIpv4 from "./ipv4";

export default function isitNotIpv4() {
    return not(isitIpv4).apply(null, arraySlice.call(arguments));
}