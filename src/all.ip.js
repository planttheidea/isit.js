// all version of ip.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitIp from "./ip";

export default function isitAllIp() {
    return all(isitIp).apply(null, arraySlice.call(arguments));
}