// types
import isitSortedAsc from './isitSortedAsc';
import isitSortedDesc from './isitSortedDesc';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod
} from './_internal/functionUtils';

const isitSorted = (object) => {
  return isitSortedAsc(object) || isitSortedDesc(object);
};

export const isitAllSorted = createIsAllMethod(isitSorted);
export const isitAnySorted = createIsAnyMethod(isitSorted);
export const isitNotSorted = createIsNotMethod(isitSorted);

export default isitSorted;
