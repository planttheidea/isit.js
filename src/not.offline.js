// not version of offline.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitOffline from "./offline";

export default function isitNotOffline() {
    return not(isitOffline).apply(null, arraySlice.call(arguments));
}