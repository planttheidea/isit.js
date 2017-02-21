// array
import * as sorted from './isitSorted';
import * as sortedAsc from './isitSortedAsc';
import * as sortedDesc from './isitSortedDesc';

/**
 * @module array
 */

export const all = {
  sorted: sorted.isitAllSorted,
  sortedAsc: sortedAsc.isitAllSortedAsc,
  sortedDesc: sortedDesc.isitAllSortedDesc
};

export const any = {
  sorted: sorted.isitAnySorted,
  sortedAsc: sortedAsc.isitAnySortedAsc,
  sortedDesc: sortedDesc.isitAnySortedDesc
};

export const not = {
  sorted: sorted.isitNotSorted,
  sortedAsc: sortedAsc.isitNotSortedAsc,
  sortedDesc: sortedDesc.isitNotSortedDesc
};

export default {
  sorted: sorted.default,
  sortedAsc: sortedAsc.default,
  sortedDesc: sortedDesc.default
};
