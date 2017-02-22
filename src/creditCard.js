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

const isCreditCard = createRegExpTest(CREDIT_CARD_REGEXP);

export const isAllCreditCard = createIsAllMethod(isCreditCard);
export const isAnyCreditCard = createIsAnyMethod(isCreditCard);
export const isNotCreditCard = createIsNotMethod(isCreditCard);

export default isCreditCard;
