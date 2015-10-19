// any version of snakeCase.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitSnakeCase from "./snakeCase";

export default function isitAnySnakeCase() {
    return any(isitSnakeCase).apply(null, arraySlice.call(arguments));
}