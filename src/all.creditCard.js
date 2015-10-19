// all version of creditcard.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitCreditCard from "./creditCard";

export default function isitAllCreditCard() {
    return all(isitCreditCard).apply(null, arraySlice.call(arguments));
}