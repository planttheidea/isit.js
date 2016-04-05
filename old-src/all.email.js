// all version of email.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitEmail from "./email";

export default function isitAllEmail() {
    return all(isitEmail).apply(null, arraySlice.call(arguments));
}