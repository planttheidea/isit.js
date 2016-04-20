import isit from '../src';
import $ from 'jquery';

const toString = (object) => {
  return Object.prototype.toString.call(object);
};

const $div = $('<div/>');

const int8Array = new Int8Array();
const uint8Array = new Uint8Array();
const uint8ClampedArray = new Uint8ClampedArray();
const int16Array = new Int16Array();
const uint16Array = new Uint16Array();
const int32Array = new Int32Array();
const uint32Array = new Uint32Array();
const float32Array = new Float32Array();
const float64Array = new Float64Array();

console.log($div, isit.jquery($div));

console.log(toString(int8Array));
console.log(toString(uint8Array));
console.log(toString(uint8ClampedArray));
console.log(toString(int16Array));
console.log(toString(uint16Array));
console.log(toString(int32Array));
console.log(toString(uint32Array));
console.log(toString(float32Array));
console.log(toString(float64Array));