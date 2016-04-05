// all version of snakeCase.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitSnakeCase from "./snakeCase";

export default function isitAllSnakeCase() {
    return all(isitSnakeCase).apply(null, arraySlice.call(arguments));
}