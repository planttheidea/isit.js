// not version of email.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitEmail from "./email";

export default function isitNotEmail() {
    return not(isitEmail).apply(null, arraySlice.call(arguments));
}