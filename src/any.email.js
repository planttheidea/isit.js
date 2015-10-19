// any version of email.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitEmail from "./email";

export default function isitAnyEmail() {
    return any(isitEmail).apply(null, arraySlice.call(arguments));
}