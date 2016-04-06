import test from 'tape';
import $ from 'jquery';
import isit from '../src';

import {
    testTypeOf
} from './_utils';

test('isitDomNode', (t) => {
    t.plan(11);

    testTypeOf(t, 'domNode');

    const div = document.createElement('div');

    div.innerHTML = '<div id="child">I\'m a child!</div>';

    const otherDiv = div.firstChild;

    t.equal(isit.domNode(div), true);
    t.equal(isit.domNode(otherDiv), true);
    t.equal(isit.domNode('div'), false);
    t.equal(isit.domNode('<div id="child">I\'m a child!</div>'), false);

    t.equal(isit.all.domNode(div, otherDiv), true);
    t.equal(isit.all.domNode(div, 'div'), false);
    t.equal(isit.any.domNode(div, 'div'), true);
    t.equal(isit.any.domNode('<div id="child">I\'m a child!</div>', 'div'), false);
    t.equal(isit.not.domNode('div'), true);
    t.equal(isit.not.domNode(div), false);
});

test('isitDomNodeList', (t) => {
    t.plan(10);

    testTypeOf(t, 'domNodeList');

    const fragment = document.createDocumentFragment();
    const div = document.createElement('div');
    const otherDiv = div.cloneNode();
    const thirdDiv = div.cloneNode();

    fragment.appendChild(div);
    fragment.appendChild(otherDiv);

    thirdDiv.innerHTML = '<div>One</div><div>Two</div>';

    const thirdDivNodeList = thirdDiv.querySelectorAll('div');

    t.equal(isit.domNodeList(fragment.childNodes), true);
    t.equal(isit.domNodeList([]), false);
    t.equal(isit.domNodeList([div, otherDiv]), false);

    t.equal(isit.all.domNodeList(fragment.childNodes, thirdDivNodeList), true);
    t.equal(isit.all.domNodeList(fragment.childNodes, []), false);
    t.equal(isit.any.domNodeList(fragment.childNodes, []), true);
    t.equal(isit.any.domNodeList('NodeList', []), false);
    t.equal(isit.not.domNodeList([]), true);
    t.equal(isit.not.domNodeList(fragment.childNodes), false);
});

test('isitJquery', (t) => {
    t.plan(11);

    testTypeOf(t, 'jquery');

    const $div = $('<div/>');
    const div = document.createElement('div');

    t.equal(isit.jquery($), true);
    t.equal(isit.jquery($div), true);
    t.equal(isit.jquery(div), false);
    t.equal(isit.jquery('jquery'), false);

    t.equal(isit.all.jquery($, $div), true);
    t.equal(isit.all.jquery($, div), false);
    t.equal(isit.any.jquery($, div), true);
    t.equal(isit.any.jquery('jquery', div), false);
    t.equal(isit.not.jquery(div), true);
    t.equal(isit.not.jquery($div), false);
});

test('isPropertyCount', (t) => {
    t.plan(7);

    testTypeOf(t, 'propertyCount');

    const object = {
        foo: 'bar',
        hello: 'goodbye'
    };

    t.equal(isit.propertyCount(object, 2), true);
    t.equal(isit.propertyCount(object, 3), false);
    t.equal(isit.propertyCount(object), false);
    t.equal(isit.propertyCount(JSON.stringify(object), 2), false);

    t.equal(isit.not.propertyCount(object, 3), true);
    t.equal(isit.not.propertyCount(object, 2), false);
});

test('isitPropertyDefined', (t) => {
    t.plan(7);

    testTypeOf(t, 'propertyDefined');

    const object = {
        foo: 'bar'
    };

    t.equal(isit.propertyDefined(object, 'foo'), true);
    t.equal(isit.propertyDefined(object, 'bar'), false);
    t.equal(isit.propertyDefined(object), false);
    t.equal(isit.propertyDefined(JSON.stringify(object), 'foo'), false);

    t.equal(isit.not.propertyDefined(object, 'bar'), true);
    t.equal(isit.not.propertyDefined(object, 'foo'), false);
});

test('isitWindowObject', (t) => {
    t.plan(1);

    testTypeOf(t, 'windowObject');
});