// any version of tomorrow.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitTomorrow from "./tomorrow";

export default function isitAnyTomorrow() {
    return any(isitTomorrow).apply(null, arraySlice.call(arguments));
}