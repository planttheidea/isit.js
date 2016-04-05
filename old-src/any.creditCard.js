// any version of creditcard.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitCreditCard from "./creditCard";

export default function isitAnyCreditCard() {
    return any(isitCreditCard).apply(null, arraySlice.call(arguments));
}