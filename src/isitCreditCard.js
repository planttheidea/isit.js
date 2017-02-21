// constants
import {
  CREDIT_CARD_REGEXP
} from './_internal/regexpConstants';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod,
  createRegExpTest
} from './_internal/functionUtils';

const isitCreditCard = createRegExpTest(CREDIT_CARD_REGEXP);

export const isitAllCreditCard = createIsAllMethod(isitCreditCard);
export const isitAnyCreditCard = createIsAnyMethod(isitCreditCard);
export const isitNotCreditCard = createIsNotMethod(isitCreditCard);

export default isitCreditCard;
