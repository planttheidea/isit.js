import isit from '../src';
import $ from 'jquery';

const $div = $('<div/>');

console.log(isit.jquery($));
console.log(isit.jquery($div));

console.log(isit.sorted([3, 2, 1]));

console.log(isit.all.number(2, 1));
console.log(isit.all.number([2, 1]));