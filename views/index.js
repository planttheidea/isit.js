import isit from '../src';
import $ from 'jquery';

const $div = $('<div/>');

console.log(isit.jquery($));
console.log($div, isit.jquery($div));