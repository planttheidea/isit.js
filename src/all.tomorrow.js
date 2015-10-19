// all version of tomorrow.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitTomorrow from "./tomorrow";

export default function isitAllTomorrow() {
    return all(isitTomorrow).apply(null, arraySlice.call(arguments));
}