// object
import * as definedProperty from '../definedProperty';
import * as domNode from '../domNode';
import * as domNodeList from '../domNodeList';
import * as element from '../element';
import * as jquery from '../jquery';
import * as propertyCount from '../propertyCount';
import * as windowObject from '../windowObject';

export const all = {
  domNode: domNode.isAllDomNode,
  domNodeList: domNodeList.isAllDomNodeList,
  element: element.isAllElement,
  jquery: jquery.isAllJquery,
  windowObject: windowObject.isAllWindowObject
};

export const any = {
  domNode: domNode.isAnyDomNode,
  domNodeList: domNodeList.isAnyDomNodeList,
  element: element.isAnyElement,
  jquery: jquery.isAllJquery,
  windowObject: windowObject.isAnyWindowObject
};

export const not = {
  definedProperty: definedProperty.isNotDefinedProperty,
  domNode: domNode.isNotDomNode,
  domNodeList: domNodeList.isNotDomNodeList,
  element: element.isNotElement,
  jquery: jquery.isNotJquery,
  propertyCount: propertyCount.isNotPropertyCount,
  windowObject: windowObject.isNotWindowObject
};

export default {
  definedProperty: definedProperty.default,
  domNode: domNode.default,
  domNodeList: domNodeList.default,
  element: element.default,
  jquery: jquery.default,
  propertyCount: propertyCount.default,
  windowObject: windowObject.default
};
