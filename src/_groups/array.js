// array
import * as sorted from '../sorted';
import * as sortedAsc from '../sortedAsc';
import * as sortedDesc from '../sortedDesc';

/**
 * @module array
 */

export const all = {
  sorted: sorted.isAllSorted,
  sortedAsc: sortedAsc.isAllSortedAsc,
  sortedDesc: sortedDesc.isAllSortedDesc
};

export const any = {
  sorted: sorted.isAnySorted,
  sortedAsc: sortedAsc.isAnySortedAsc,
  sortedDesc: sortedDesc.isAnySortedDesc
};

export const not = {
  sorted: sorted.isNotSorted,
  sortedAsc: sortedAsc.isNotSortedAsc,
  sortedDesc: sortedDesc.isNotSortedDesc
};

export default {
  sorted: sorted.default,
  sortedAsc: sortedAsc.default,
  sortedDesc: sortedDesc.default
};
