// test
import test from 'ava';
import $ from 'jquery';
import {
  isAllAnyNot,
  isNotOnly
} from './_utils/functionPermutations';

// src
import src, {
  all,
  any,
  not
} from 'src/object';

test('if definedProperty returns false when the item passed is not an object', (t) => {
  t.false(src.definedProperty('foo'));
});

test('if definedProperty returns false when the item passed is null', (t) => {
  t.false(src.definedProperty(null));
});

test('if definedProperty correctly identifies when the object has defined a property', (t) => {
  const property = 'foo';
  const object = {
    [property]: 'bar'
  };

  t.true(src.definedProperty(object, property));
  t.false(src.definedProperty(object, 'bar'));
});

isNotOnly(all, any, not, 'definedProperty');

test('if domNode returns false when object is not existy', (t) => {
  t.false(src.domNode(undefined));
  t.false(src.domNode(null));
});

test('if domNode returns true if nodeType is greater than 0', (t) => {
  t.false(src.domNode({
    nodeType: 0
  }));

  t.true(src.domNode({
    nodeType: 1
  }));

  t.true(src.domNode({
    nodeType: 10
  }));

  t.true(src.domNode(document.createElement('div')));
});

isAllAnyNot(all, any, not, 'domNode');

test('if domNodeList returns false when object is not existy', (t) => {
  t.false(src.domNodeList(undefined));
  t.false(src.domNodeList(null));
});

test('if domNodeList returns false for a standard DOM node', (t) => {
  t.false(src.domNodeList({
    nodeType: 0
  }));

  t.false(src.domNodeList({
    nodeType: 1
  }));

  t.false(src.domNodeList({
    nodeType: 10
  }));

  t.false(src.domNodeList(document.createElement('div')));
});

test('if domNodeList returns true for a DOM node list', (t) => {
  const div = document.createElement('div');
  const childSpan = document.createElement('span');
  const childDiv = document.createElement('div');

  div.appendChild(childSpan);
  div.appendChild(childDiv);

  document.body.appendChild(div);

  const children = document.body.querySelector('div').children;

  t.true(src.domNodeList(children));
});

isAllAnyNot(all, any, not, 'domNodeList');

test('if element returns false when object is not existy', (t) => {
  t.false(src.element(undefined));
  t.false(src.element(null));
});

test('if element returns true if nodeType is 1 and the nodeName is a strng', (t) => {
  t.false(src.element({
    nodeType: 0
  }));

  t.false(src.element({
    nodeType: 1
  }));

  t.true(src.element({
    nodeName: 'DIV',
    nodeType: 1
  }));

  t.false(src.element({
    nodeName: 'DIV',
    nodeType: 10
  }));

  t.true(src.element(document.createElement('div')));
});

isAllAnyNot(all, any, not, 'element');

test('if jquery returns false when the item passed is not an object', (t) => {
  t.false(src.jquery('foo'));
});

test('if jquery returns false when the items passed is null', (t) => {
  t.false(src.jquery(null));
});

test('if jquery returns true when the jquery object itself is passed', (t) => {
  t.true(src.jquery($));
});

test('if jquery returns true when a result from a jquery selector is passed', (t) => {
  t.true(src.jquery($(window)));
});

test('if jquery returns false when a regular DOM element is passed', (t) => {
  t.false(src.jquery(window));
});

isAllAnyNot(all, any, not, 'jquery');

test('if propertyCount returns false when the item passed is not an object', (t) => {
  t.false(src.propertyCount('foo'));
});

test('if propertyCount returns false when the item passed is null', (t) => {
  t.false(src.propertyCount(null));
});

test('if propertyCount correctly identifies when the object has defined a property', (t) => {
  const object = {
    foo: 'bar',
    bar: 'baz'
  };
  const count = Object.keys(object).length;

  t.true(src.propertyCount(object, count));
  t.false(src.propertyCount(object, count * 2));
  t.false(src.propertyCount(object, 'bar'));
});

isNotOnly(all, any, not, 'propertyCount');

test('if windowObject will return false for non-window objects', (t) => {
  t.false(src.windowObject(undefined));
  t.false(src.windowObject(null));
  t.false(src.windowObject({}));
});

test('if windowObject will return true for the window', (t) => {
  t.true(src.windowObject(window));
});

isAllAnyNot(all, any, not, 'windowObject');
