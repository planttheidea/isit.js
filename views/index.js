import isit from '../src';

console.log(isit);

console.log(isit.equal([1, 2], [1, 3]));

console.log('All string: ', isit.all.string('test', 'me'));
console.log('All string: ', isit.all.string(123, 'me'));
console.log('Any string: ', isit.any.string(123, 'me'));
console.log('Any string: ', isit.any.string(123, 456));
console.log('Not string: ', isit.not.string(123));
console.log('Not string: ', isit.not.string('test'));

const test = {
    foo: 'bar'
};
const testClone = {
    foo: 'bar'
};

console.log(isit.equal(test, testClone));
console.log(isit.not.equal(test, testClone));