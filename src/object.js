// object
import * as definedProperty from './isitDefinedProperty';
import * as domNode from './isitDomNode';
import * as domNodeList from './isitDomNodeList';
import * as element from './isitElement';
import * as jquery from './isitJquery';
import * as propertyCount from './isitPropertyCount';
import * as windowObject from './isitWindowObject';

export const all = {
  domNode: domNode.isitAllDomNode,
  domNodeList: domNodeList.isitAllDomNodeList,
  element: element.isitAllElement,
  jquery: jquery.isitAllJquery,
  windowObject: windowObject.isitAllWindowObject
};

export const any = {
  domNode: domNode.isitAnyDomNode,
  domNodeList: domNodeList.isitAnyDomNodeList,
  element: element.isitAnyElement,
  jquery: jquery.isitAllJquery,
  windowObject: windowObject.isitAnyWindowObject
};

export const not = {
  definedProperty: definedProperty.isitNotDefinedProperty,
  domNode: domNode.isitNotDomNode,
  domNodeList: domNodeList.isitNotDomNodeList,
  element: element.isitNotElement,
  jquery: jquery.isitNotJquery,
  propertyCount: propertyCount.isitNotPropertyCount,
  windowObject: windowObject.isitNotWindowObject
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
